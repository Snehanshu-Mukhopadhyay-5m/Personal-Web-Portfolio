import { Project, SkillGroup, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
    name: "Snehanshu Mukhopadhyay",
    title: "AI Engineer & Data Scientist",
    specialization: "Natural Language Processing • Neural Networks • Deep Learning",
    bio: "Engineering high-performance neural models, transformer architectures, and scalable data intelligence pipelines. Focused on attention mechanisms, sequence modeling, and low-latency inference.",
    status: "Active Research & Deployment",
    metricsSummary: [
        { label: "Loss Convergence", value: "0.0124" },
        { label: "Transformer Heads", value: "12 Heads" },
        { label: "Inference Latency", value: "<15ms" },
        { label: "Precision Score", value: "99.4%" }
    ],
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        kaggle: "https://kaggle.com",
        email: "contact@example.com"
    }
};

export const PROJECTS: Project[] = [
    {
        id: "transformer-attention-nlp",
        title: "Dynamic Self-Attention Neural Engine",
        tagline: "Custom Transformer Encoder-Decoder with multi-head attention visualizer",
        description: "Architected a sequence-to-sequence transformer model from scratch in PyTorch. Implemented custom scaled dot-product attention, sinusoidal positional embeddings, and residual layer normalization.",
        category: "NLP",
        tags: ["PyTorch", "Transformers", "Scaled Dot-Product", "NLP", "CUDA"],
        metrics: [
            { label: "BLEU Score", value: "41.8" },
            { label: "Perplexity", value: "14.2" },
            { label: "Params", value: "28M" }
        ],
        architecture: "Multi-Head Attention (12 heads) -> LayerNorm -> FeedForward (GELU) -> Cross-Attention Decoder",
        githubUrl: "https://github.com",
        demoUrl: "#attention-demo",
        featured: true
    },
    {
        id: "emotion-detector-ai",
        title: "Facial Emotion & Neural Feature Detector",
        tagline: "Real-time facial landmark extraction & emotion classification backend",
        description: "Engineered a custom deep neural network backend processing streaming video frames for micro-expression classification. Integrated spatial attention masks to prioritize key facial muscle activation zones.",
        category: "Computer Vision",
        tags: ["CNN", "ResNet-Backbone", "Spatial Attention", "FastAPI", "OpenCV"],
        metrics: [
            { label: "Accuracy", value: "96.4%" },
            { label: "FPS", value: "60 FPS" },
            { label: "Latency", value: "11ms" }
        ],
        architecture: "Modified ResNet-34 + Custom Spatial Attention Block + Multi-Class Softmax Classifier",
        githubUrl: "https://github.com",
        featured: true
    },
    {
        id: "wy-wellness-engine",
        title: "WY - Predictive Behavioral & Wellness Engine",
        tagline: "Context-aware temporal sequence modeling for wellness intervention",
        description: "Designed a temporal neural network combining Bi-LSTM and multi-head attention to model habit sequences, circadian metrics, and dynamic intervention triggers.",
        category: "Deep Learning",
        tags: ["Bi-LSTM", "Temporal Attention", "Time-Series", "Python", "GCP"],
        metrics: [
            { label: "ROC-AUC", value: "0.942" },
            { label: "F1-Score", value: "0.91" }
        ],
        architecture: "Input Embedding -> Bidirectional LSTM -> Temporal Self-Attention Layer -> Dense Head",
        githubUrl: "https://github.com",
        featured: true
    },
    {
        id: "kaggle-tabular-ensemble",
        title: "High-Dimension Feature Extraction & Ensemble",
        tagline: "Automated feature engineering and neural stacking pipeline",
        description: "Built an end-to-end data science pipeline for high-dimensional tabular datasets. Combines LightGBM, XGBoost, CatBoost, and Deep Tabular Neural Networks (TabNet) with out-of-fold blending.",
        category: "MLOps & Systems",
        tags: ["TabNet", "Ensemble Stacking", "Feature Engineering", "Scikit-Learn", "Kaggle"],
        metrics: [
            { label: "Leaderboard", value: "Top 2%" },
            { label: "Log Loss", value: "0.182" }
        ],
        architecture: "Target Encoding + K-Fold TabNet/Gradient-Boost Blending + Ridge Meta-Learner",
        githubUrl: "https://github.com",
        featured: false
    }
];

export const SKILL_GROUPS: SkillGroup[] = [
    {
        category: "Neural Networks & Deep Learning",
        description: "Architectures, optimization algorithms, and custom tensor computation graphs.",
        skills: [
            { name: "PyTorch & Tensor Workflows", level: 95, highlight: "Custom autograd & layers" },
            { name: "Transformer Architectures", level: 92, highlight: "Encoder-Decoder, Attention" },
            { name: "CNNs & Spatial Networks", level: 88, highlight: "Feature extraction & pooling" },
            { name: "RNN / LSTM / GRU", level: 85, highlight: "Sequence & temporal modeling" },
            { name: "Optimization (AdamW, Schedulers)", level: 90, highlight: "Loss tuning & regularization" }
        ]
    },
    {
        category: "Natural Language Processing (NLP)",
        description: "Tokenization, representation learning, semantic search, and language modeling.",
        skills: [
            { name: "Self-Attention & Multi-Head Attention", level: 94, highlight: "Scaled dot-product" },
            { name: "Hugging Face Ecosystem", level: 90, highlight: "Transformers, Tokenizers" },
            { name: "Vector Embeddings & Semantic Search", level: 92, highlight: "FAISS, Cosine distance" },
            { name: "Text Preprocessing & Byte-Pair Encoding", level: 88, highlight: "Subword tokenization" },
            { name: "Fine-Tuning & Quantization", level: 84, highlight: "LoRA, PEFT" }
        ]
    },
    {
        category: "Data Science & Core Engineering",
        description: "High-performance data manipulation, competitive algorithmic problem solving, and backend APIs.",
        skills: [
            { name: "Python (NumPy, Pandas, SciPy)", level: 95, highlight: "Vectorized operations" },
            { name: "Algorithms & Data Structures", level: 92, highlight: "Graph theory, DP, Trees" },
            { name: "C / C++ & High Performance Computing", level: 86, highlight: "Memory management" },
            { name: "FastAPI & Async Endpoints", level: 88, highlight: "Low latency REST APIs" }
        ]
    },
    {
        category: "Cloud, MLOps & Tooling",
        description: "Model deployment, cloud infrastructure, containerization, and automation.",
        skills: [
            { name: "Google Cloud Platform (GCP)", level: 85, highlight: "Cloud Run, Storage, Compute" },
            { name: "Azure CLI & Cloud Services", level: 82, highlight: "CLI workflows & resources" },
            { name: "Docker & Containerization", level: 86, highlight: "Isolated inference containers" },
            { name: "Git & CI/CD Pipelines", level: 90, highlight: "Automated test & deploy" }
        ]
    }
];

export const EXPERIENCES: ExperienceItem[] = [
    {
        role: "AI / Machine Learning Engineering & Research",
        organization: "B.Tech Computer Science Engineering (AI & ML)",
        location: "Rajasthan, India",
        period: "2024 — Present",
        description: [
            "Rigorous study of advanced neural network architectures, NLP transformer pipelines, and statistical learning theory.",
            "Engineered real-time computer vision classifiers and deep sequence modeling systems for streaming telemetry.",
            "Active participant in algorithmic problem solving and competitive data science competitions."
        ],
        tags: ["Neural Networks", "NLP", "PyTorch", "Calculus & Linear Algebra", "Distributed ML"]
    },
    {
        role: "Core Developer & Technical Contributor",
        organization: "Open Source AI & Research Projects",
        location: "Remote",
        period: "2025 — 2026",
        description: [
            "Implemented modular custom transformers and attention visualization matrices for educational clarity.",
            "Developed microservices with asynchronous endpoints for streaming model inference.",
            "Contributed clean and high-efficiency algorithmic implementations."
        ],
        tags: ["PyTorch", "FastAPI", "React", "Docker", "Algorithms"]
    }
];