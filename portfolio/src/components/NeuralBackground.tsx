import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseRadius: number;
    layer: number;
    activation: number;
}

interface Pulse {
    sourceIdx: number;
    targetIdx: number;
    progress: number;
    speed: number;
    color: string;
}

export const NeuralBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initNodes();
        };

        window.addEventListener('resize', handleResize);

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 180,
            active: false
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        let nodes: Node[] = [];
        let pulses: Pulse[] = [];
        const maxConnectionDistance = 160;

        const initNodes = () => {
            nodes = [];
            pulses = [];
            const currentCount = Math.min(Math.floor((width * height) / 14000), 85);
            for (let i = 0; i < currentCount; i++) {
                const baseRadius = Math.random() * 2 + 1.5;
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.45,
                    vy: (Math.random() - 0.5) * 0.45,
                    radius: baseRadius,
                    baseRadius,
                    layer: Math.floor(Math.random() * 4),
                    activation: 0
                });
            }
        };

        initNodes();

        let lastPulseTime = 0;
        const colors = [
            'rgba(0, 240, 255, ',
            'rgba(16, 185, 129, ',
            'rgba(139, 92, 246, ',
            'rgba(59, 130, 246, '
        ];

        const render = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            if (time - lastPulseTime > 250 && nodes.length > 2) {
                lastPulseTime = time;
                const sourceIdx = Math.floor(Math.random() * nodes.length);
                const candidates: number[] = [];
                for (let j = 0; j < nodes.length; j++) {
                    if (sourceIdx !== j) {
                        const dx = nodes[sourceIdx].x - nodes[j].x;
                        const dy = nodes[sourceIdx].y - nodes[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < maxConnectionDistance) {
                            candidates.push(j);
                        }
                    }
                }
                if (candidates.length > 0) {
                    const targetIdx = candidates[Math.floor(Math.random() * candidates.length)];
                    pulses.push({
                        sourceIdx,
                        targetIdx,
                        progress: 0,
                        speed: Math.random() * 0.02 + 0.015,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });
                }
            }

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                if (mouse.active) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const influence = (1 - dist / mouse.radius);
                        node.activation = Math.min(1, node.activation + influence * 0.15);
                        node.radius = node.baseRadius + influence * 3.5;
                    } else {
                        node.activation *= 0.94;
                        node.radius = Math.max(node.baseRadius, node.radius * 0.96);
                    }
                } else {
                    node.activation *= 0.94;
                    node.radius = Math.max(node.baseRadius, node.radius * 0.96);
                }

                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxConnectionDistance) {
                        const alpha = (1 - dist / maxConnectionDistance) * 0.22;
                        const isActivated = node.activation > 0.2 || other.activation > 0.2;
                        const extraGlow = (node.activation + other.activation) * 0.35;

                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = isActivated
                            ? `rgba(0, 240, 255, ${Math.min(1, alpha + extraGlow)})`
                            : `rgba(59, 130, 246, ${alpha})`;
                        ctx.lineWidth = isActivated ? 1.5 : 0.7;
                        ctx.stroke();
                    }
                }
            }

            for (let p = pulses.length - 1; p >= 0; p--) {
                const pulse = pulses[p];
                pulse.progress += pulse.speed;

                if (pulse.progress >= 1) {
                    nodes[pulse.targetIdx].activation = 0.8;
                    pulses.splice(p, 1);
                    continue;
                }

                const src = nodes[pulse.sourceIdx];
                const tgt = nodes[pulse.targetIdx];
                const px = src.x + (tgt.x - src.x) * pulse.progress;
                const py = src.y + (tgt.y - src.y) * pulse.progress;

                ctx.beginPath();
                ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `${pulse.color}0.95)`;
                ctx.fill();
            }

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

                if (node.activation > 0.1) {
                    ctx.fillStyle = `rgba(0, 240, 255, ${0.4 + node.activation * 0.6})`;
                    ctx.shadowColor = '#00F0FF';
                    ctx.shadowBlur = 12 * node.activation;
                } else {
                    ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-75"
        />
    );
};