export const projects = [
  {
    id: "ai-powered-weld-defect-detection",
    title: "AI-Powered Weld Defect Detection and Quality Monitoring",
    shortDescription: "Real-time computer vision and deep learning system for automated weld defect detection in industrial manufacturing environments.",
    longDescription: `This project, funded by American Engineering and Manufacturing (AEM), focuses on developing an intelligent computer vision system for automated weld quality monitoring in industrial settings.

We design and deploy deep learning pipelines to analyze welding videos in real time and detect structural defects such as porosity, irregular bead formation, and discontinuities. The system combines advanced segmentation and tracking methods (SAM-based pipelines), vision transformers, and custom preprocessing techniques to isolate weld regions and improve classification robustness under challenging lighting and noise conditions.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning", "Applied Machine Learning", "Industrial AI"],
    domains: ["Smart Manufacturing", "Welding and Materials Engineering", "Industrial Automation"],
    memberIds: [5],
    publicationIds: [],
    fundingSource: "American Engineering and Manufacturing (AEM)",
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "multi-tenant-rag-chatbot",
    title: "Multi-Tenant Retrieval-Augmented Generation (RAG) Chatbot System",
    shortDescription: "Scalable RAG-based chatbot for domain-specific knowledge ingestion and intelligent question answering.",
    longDescription: `This project focuses on designing and deploying a scalable, multi-user Retrieval-Augmented Generation (RAG) system for domain-specific question answering.

The system enables users to upload and query their own documents, leveraging LLaMA-based large language models, vector databases, and PostgreSQL for structured metadata management. It supports per-user document isolation, semantic search, and real-time grounded responses.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Large Language Models", "Retrieval-Augmented Generation", "Natural Language Processing", "Information Retrieval"],
    domains: ["Applied AI", "Knowledge Systems"],
    memberIds: [5],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "harvest-pipeline",
    title: "Harvest",
    shortDescription: "An end-to-end pipeline consisting of an eco-system of tools that collect, deliver, process, infer and transform the data to produce various visual and actionable results for agricultural use cases.",
    longDescription: `Currently working on the development of a data ingestion and step orchestration pipeline for precision spraying, which involves waypoint generation for drone missions, batch transfers to HPC systems, and step triggers for downstream ML tasks.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Applied Machine Learning", "Data Engineering", "Distributed Computation"],
    domains: ["Agriculture"],
    memberIds: [7],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "digital-agriculture",
    title: "Digital Agriculture",
    shortDescription: "AI-powered weed detection, classification, and geospatial prescription mapping for precision agriculture and targeted agrochemical application.",
    longDescription: `This project focuses on building a Digital Agriculture pipeline that leverages drone and ground-based imagery to automatically detect and classify weeds at high spatial resolution. The system processes aerial and field-level images using advanced deep learning–based object detection and classification techniques to accurately identify weed instances within crop fields.

Detected weeds are georeferenced and converted into structured geospatial outputs in the form of shapefiles. These shapefiles function as prescription maps for precision spot spraying systems, enabling selective application of herbicides and pesticides rather than uniform broadcast spraying.

By integrating visual intelligence with geospatial data engineering, the system reduces chemical usage, lowers operational costs, minimizes environmental impact, and supports sustainable farming practices while maintaining crop productivity.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Object Detection", "Image Classification", "Geospatial Data Processing", "Remote Sensing", "Precision Agriculture"],
    domains: ["Digital Agriculture", "Smart Farming", "Applied Artificial Intelligence"],
    memberIds: [8],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "zero-shot-annotation-pipeline",
    title: "Training free zero/few-shot Image Annotation Pipeline",
    shortDescription: "Accelerating dataset creation through a human-in-the-loop architecture that leverages foundation models (SAM3, OWLv2, DINOv3) for intelligent bounding box prediction and similarity matching.",
    longDescription: `One of the most significant bottlenecks in training modern computer vision models is the scarcity of high-quality, labeled data. Creating accurate bounding box annotations at scale is notoriously slow and expensive. To solve this, I architected an end-to-end object detection pipeline designed to rapidly bootstrap dataset creation using a combination of zero-shot proposal generation and few-shot similarity matching.

Rather than relying on manual labor for every image, the system utilizes an active learning, human-in-the-loop approach. The architecture is broken down into four core stages:

Few-Shot Initialization & Support Generation: The process begins with a manual annotation step to provide initial ground truth (GT) samples. Users can draw manual boxes or use SAM3 via single-click and text prompts for rapid box prediction. The system then generates support embeddings from these ground truths, utilizing patch size optimization to accurately compare the GTs with model-drawn boxes.
Object Proposal Generation: The pipeline scans new, unannotated images and generates generic object proposals (bounding boxes) using zero-shot capabilities from foundation models like SAM3 and OWLv2.
Embedding & Feature Extraction: Once proposals are generated, the system extracts rich feature embeddings (encodings) for each proposed region using advanced vision models such as DINOv3 or BioCLIP2.
Human-in-the-Loop Similarity Matching: The core decision engine performs similarity matching between the encoded proposals and the established ground truth "support" embeddings.
To ensure high accuracy, the matching system utilizes multiple gates and confidence thresholds. If the system is highly confident, the annotation is applied automatically. However, if the similarity score falls into an ambiguous threshold (e.g., struggling to differentiate between background vs. object, or between overlapping classes), the prediction is escalated to a human reviewer. The user confirms or corrects the anchor prototype, and this validated data is instantly fed back into the system to refine its accuracy for subsequent predictions.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Few-Shot/Zero-Shot Learning", "Active Learning", "Foundation Models"],
    domains: ["ML Infrastructure", "Data Annotation", "Full Stack Engineering"],
    memberIds: [6],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "geodiffcert-diffusiondepth",
    title: "GeoDiffCert: DiffusionDepth for Earth Observation",
    shortDescription: "Building trustworthy geospatial AI systems by unifying automated data collection, physics-aware diffusion adaptation, and uncertainty-calibrated learning for satellite and drone imagery.",
    longDescription: `This project builds trustworthy geospatial AI systems for satellite and drone imagery. While Earth observation data is abundant, reliable task-specific supervision is scarce and models often fail under region, sensor, or seasonal shifts.

We address this through a unified framework that:

Collects structured training data at scale from geographic infrastructure (e.g., OpenStreetMap),
Adapts diffusion foundation models to remote sensing with minimal target data, and
Trains models with calibrated uncertainty and verification gates so they generalize and know when they may be wrong.
The framework is validated on shallow-water bathymetry from Sentinel-2 and aerial monocular depth for digital agriculture, where physics and field measurements provide measurable ground truth.

The goal is end-to-end, reliable geospatial AI that bridges data collection, generative modeling, and expert-in-the-loop validation.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Geospatial AI", "Computer Vision", "Diffusion Models", "Monocular Depth Estimation", "Multi-modal Remote Sensing", "Domain Adaptation", "Uncertainty Quantification", "Semi-Supervised Learning"],
    domains: ["Satellite Imagery", "Aerial Imagery", "Bathymetry", "Digital Agriculture", "Environmental Monitoring", "Earth Observation", "GIS Systems"],
    memberIds: [2],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "corn-residue-segmentation",
    title: "Weakly Supervised Corn Residue Segmentation via Brightness-Guided Pseudo-Labeling",
    shortDescription: "Training residue segmentation models from simple brightness cues in tractor-mounted imagery to estimate residue cover and generate field-scale maps.",
    longDescription: `Corn residue remaining on the soil surface after tillage is a key indicator of soil conservation and management quality, influencing erosion risk, moisture retention, and long-term soil health. However, field-scale residue assessment is often constrained by labor-intensive manual protocols and sparse sampling. This project develops an automated, high-resolution residue mapping pipeline using geo-referenced imagery captured from a tractor-mounted camera during routine field operations.

A central challenge is the lack of dense pixel-level annotations needed to train supervised segmentation models at scale. To address this, we leverage an interpretable visual cue observed in our data: corn residue fragments often appear brighter than surrounding soil. We use brightness-guided pseudo-labels as weak supervision to train segmentation models that predict residue masks from RGB imagery. Model outputs are converted into per-image residue cover fractions and paired with GPS metadata to generate field-scale residue cover maps. The resulting residue estimates are validated against on-the-ground residue measurements collected in the same field, enabling field-relevant evaluation of segmentation-based residue cover estimation.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Semantic Segmentation", "Weakly Supervised Learning", "Precision Agriculture"],
    domains: ["Agronomy", "Soil Conservation", "Tillage/Residue Management", "Field Robotics & Sensing"],
    memberIds: [9],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "probfuse-dashboard",
    title: "ProbFuse Dashboard: Climate‑Aware Conservation Recommendations for Ohio Row Crops",
    shortDescription: "A probabilistic geospatial engine that fuses soil, climate, and policy data to generate uncertainty‑aware NRCS conservation practice recommendations for Maumee Basin farms.",
    longDescription: `ProbFuse is an interactive decision-support tool for conservation planners, educators, and farmers in the Maumee River Basin. It helps users quickly assess climate and soil risks and identify suitable NRCS conservation practices and programs (e.g., Cover Crop 340, Nutrient Management 590, EQIP funding pathways). Users select or click a field to generate a farm profile with soil series, hydrologic group, drainage class, texture, recent weather, and optional user-entered soil test/management data. Behind the scenes, a lightweight Bayesian fusion engine integrates SSURGO soil data, long-term climate records, and conservation adoption indicators to produce uncertainty-aware risk scores for runoff- and leaching-driven nutrient loss. These scores feed into transparent, NRCS-aligned rules that prioritize practices and funding opportunities.

Key contributions:

A reproducible middleware pipeline that aligns heterogeneous federal datasets (SSURGO, climate archives, program data) into a clean, analysis-ready layer for precision agriculture.
A probabilistic fusion model that outperforms county-average baselines in matching recommendations to real adoption and funding patterns.
By combining geospatial ML with uncertainty quantification and an accessible web interface, ProbFuse lowers information barriers and supports more targeted, climate-resilient conservation in northwest Ohio row-crop systems.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Geospatial Machine Learning", "Probabilistic Modeling", "Human‑Centered Decision Support", "Data Integration & Fusion"],
    domains: ["Agricultural Conservation", "Environmental Policy", "Water Quality & Nutrient Management", "Precision Agriculture"],
    memberIds: [10],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  },
  {
    id: "tree-detection-change-mapping",
    title: "A Deep Learning Framework for Individual Tree Detection and Change Mapping",
    shortDescription: "This work aims to an automated framework for detecting and monitoring individual trees over time using high-resolution satellite imagery and deep learning.",
    longDescription: `We aim to introduces an end-to-end computational framework for large-scale monitoring of individual trees using high-resolution satellite imagery and deep learning for Uganda. It combines automated image acquisition and preprocessing, neural network–based tree detection, temporal matching of tree instances across years, and a change analysis module to identify persistence or disappearance at the tree level. The framework will be designed to operate over extensive geographic areas and multi-year time horizons, producing spatially explicit outputs that quantify tree presence, density, and temporal dynamics. By enabling consistent, repeatable monitoring of scattered trees, it supports scalable environmental assessment, land management analysis, and long-term ecosystem monitoring applications, like Agroforestry.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Remote Sensing"],
    domains: ["Agroforestry", "Deep Learning", "Remote Sensing"],
    memberIds: [2],
    publicationIds: [],
    fundingSource: null,
    startDate: null,
    endDate: null,
    externalLinks: []
  }
];
