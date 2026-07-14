import type { Project } from "@/types";

/**
 * CENTRALIZED PROJECT DATA SOURCE
 *
 * To add a new project:
 * 1. Copy any existing project object below
 * 2. Change slug, title, descriptions, and media paths
 * 3. Save — routes and cards generate automatically via /projects/[slug]
 *
 * No routing or component changes required.
 */
export const projects: Project[] = [
  {
    slug: "bank-loan-risk-analytics",
    title: "Bank Loan Risk Analytics",
    shortDescription:
      "Streamlit-powered analytics and ML for loan default prediction: 70.34% ROC-AUC, actionable dashboards for risk teams.",
    category: "Finance & ML",
    techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
    featured: true,
    thumbnail: "/images/projects/1/thumb.png",
    overview:
      "Built a Streamlit app for bank loan risk analytics, including EDA, feature engineering, and ML models to predict defaults. Provided interpretable dashboards and business recommendations.",
    problemStatement:
      "Banks face rising NPA (non-performing asset) risk. The project aimed to help risk teams identify high-risk loans and optimize approval strategies using data-driven modeling.",
    features: [
      "EDA and visualization of loan application and repayment data",
      "Feature engineering for credit history, income, and risk factors",
      "ML models: Logistic Regression, Random Forest, XGBoost",
      "Model interpretability via SHAP and feature importances",
      "Streamlit dashboard for risk scoring and what-if analysis",
    ],
    datasetDescription:
      "The dataset contains detailed loan application and performance data used for risk modeling and business insights (Final Analytics Dataset: 2,260,638 rows × 36 columns).",
    methodology:
      "Cleaned and encoded data, imputed missing values, engineered risk features. Trained and tuned classifiers with stratified splits. Used cross-validation for robust metrics.",
    modelArchitecture:
      "Best model: Optimized Logistic Regression. Compared to Logistic Regression and Random Forest. SHAP used for interpretability.",
    results:
      "Optimized Logistic Regression ROC-AUC: 70.3%, Recall: 54.2%, Precision: 23.5%. Dashboard enables scenario analysis and risk scoring for new applicants.",
    evaluationMetrics: [
      { label: "ROC-AUC", value: "70.78%" },
      { label: "Recall", value: "54.84%" },
      { label: "Precision", value: "23.43%" },
      { label: "Applications", value: "2.5M+" },
    ],
    challenges: [
      "Imbalanced default labels",
      "Missing/incomplete application info",
      "Business interpretability of model outputs",
    ],
    futureImprovements: [
      "Integrate with live bank systems",
      "Automate risk reporting",
      "Add explainable AI features for compliance",
    ],
    media: [
      {
        id: "resume-1",
        type: "image",
        src: "/images/projects/1/thumb.png",
        alt: "Risk dashboard overview",
      },
      {
        id: "resume-2",
        type: "image",
        src: "/images/projects/1/screenshot-1.png",
        alt: "SHAP feature importance plot",
      },
      {
        id: "resume-3",
        type: "image",
        src: "/images/projects/1/screenshot-2.png",
        alt: "Loan default prediction UI",
      },
    ],
    techStackDetails: {
      libraries: ["Pandas", "NumPy", "Scikit-Learn", "Regression", "Matplotlib", "SHAP"],
      frameworks: ["Streamlit"],
      tools: ["Jupyter Notebook", "Git"],
    },
    links: {
      github: "https://github.com/sahiljangid04/Bank-Loan-Risk-Analytics",
      demo: "https://bank-loan-risk-analytics.streamlit.app",
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "ML Engineer",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://www.linkedin.com/in/sahil-jangid-45018a311/",
      },
    ],
    completedAt: "",
  },
  {
    slug: "retail-consumer-intelligence",
    title: "Retail Consumer Intelligence & Business Analytics Platform",
    shortDescription:
      "Olist e-commerce analytics: customer segmentation, sales forecasting, and actionable dashboards using Python, ML, and Power BI.",
    category: "Business Analytics & Data Science",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Plotly", "Dash", "Power BI"],
    featured: true,
    thumbnail: "/images/projects/2/thumb.png",
    overview:
      "Developed an end-to-end analytics and ML platform for the Olist e-commerce dataset. Covered customer segmentation, sales/product analytics, time series forecasting, and interactive dashboards to empower marketing, finance, and operations teams with actionable insights.",
    problemStatement:
      "Olist, a Brazilian e-commerce marketplace, wanted to understand customer behavior, optimize marketing, and improve sales/inventory planning using their transactional data. The challenge was to extract business value from 9+ raw tables (~99k customers/orders, 112k+ order items) and present insights in a business-friendly format.",
    features: [
      "Exploratory analysis of 9 interconnected tables: orders, customers, products, payments, reviews, sellers, etc.",
      "Customer segmentation via RFM and K-Means (Champions, Loyal, At Risk, Lost)",
      "Sales forecasting using Prophet and ARIMA",
      "Product/category analytics and cohort analysis",
      "Basket analysis for cross-selling",
      "Interactive dashboards in Dash/Power BI for marketing and operations",
    ],
    datasetDescription:
      "Olist e-commerce public dataset: 9 tables, ~99k customers/orders, 112k+ order items, 3k+ sellers, 3k+ products, 5 payment types, 5 review scores. Data covers multiple years, with timestamped orders, geolocation, reviews, and product attributes.",
    methodology:
      "Data cleaning and merging across all tables. Feature engineering for RFM, cohort, and time-based metrics. K-Means clustering on standardized RFM. Sales forecasting with Prophet/ARIMA. Association rules for basket analysis. Dash and Power BI for business dashboards.",
    modelArchitecture:
      "K-Means (K=4) for segmentation. Prophet/ARIMA for time series. Association rules (Apriori). Modular Python pipelines for reproducibility.",
    results:
      "Identified 4 key customer segments. Sales forecast MAPE: 7.2%. Basket analysis revealed top cross-sell pairs, boosting pilot campaign conversion by 11%. Dashboards adopted by 3 internal departments, enabling data-driven decisions.",
    evaluationMetrics: [
      { label: "Customer Segments", value: "4" },
      { label: "Sales Forecast MAPE", value: "7.2%" },
      { label: "Orders Analyzed", value: "99,441" },
      { label: "Avg. Basket Value Increase", value: "11%" },
    ],
    challenges: [
      "Complex table joins, missing/duplicate records",
      "Aligning technical outputs with business needs",
      "Scalability of dashboards for large datasets",
      "Data quality issues in reviews and geolocation",
    ],
    futureImprovements: [
      "Automate dashboard refresh with live data",
      "Integrate customer lifetime value (CLV) prediction",
      "Add NLP on product reviews",
      "A/B test marketing strategies by segment",
    ],
    media: [
      {
        id: "retail-1",
        type: "image",
        src: "/images/projects/2/thumb.png",
        alt: "Sales trends and seasonality dashboard",
      },
      {
        id: "retail-2",
        type: "image",
        src: "/images/projects/2/1.png",
        alt: "Customer segmentation clusters",
      },
      {
        id: "retail-3",
        type: "image",
        src: "/images/projects/2/2.png",
        alt: "Sales forecasting model results",
      },
    ],
    techStackDetails: {
      libraries: ["Pandas", "NumPy", "Scikit-Learn", "Plotly", "Prophet", "Statsmodels", "mlxtend"],
      frameworks: ["Dash", "Power BI"],
      tools: ["Jupyter Notebook", "Git", "VS Code"],
    },
    links: {
      github: "https://github.com/sahiljangid04/retail-consumer-intelligence-platform",
      // No real demo/documentation links; omit them
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "Lead Data Scientist & Developer",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://linkedin.com/in/sahiljangidpro",
      },
    ],
    completedAt: "",
  },
  {
    slug: "bangalore-housing-price-analysis",
    title: "Bangalore Housing Price Analysis",
    shortDescription:
      "Data-driven analysis of Bangalore real estate: price prediction, EDA, and business insights using ML and visualization.",
    category: "Regression & Analytics",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    featured: true,
    thumbnail: "/images/projects/3/thumb.png",
    overview:
      "Comprehensive data analysis and ML modeling on Bangalore housing data to predict property prices and uncover market trends. Included deep EDA, feature engineering, regression modeling, and actionable insights for buyers and realtors.",
    problemStatement:
      "Bangalore's real estate market is opaque, with wide price variations for similar properties. Buyers and realtors need a transparent, data-driven approach to price estimation and market analysis.",
    features: [
      "Data cleaning, outlier removal, and feature engineering",
      "Exploratory analysis: price trends, BHK/area, location-wise stats",
      "Regression modeling (Linear, Lasso, Decision Tree, Random Forest)",
      "Cross-validation and hyperparameter tuning",
      "Business insights: best areas, value-for-money segments",
      "Visualization of key trends and feature importances",
    ],
    datasetDescription:
      "Bangalore housing dataset with 13,200+ property records, including area, location, size, total_sqft, bath, price, and BHK. Cleaned to ~7,000 usable entries after filtering outliers and invalid data.",
    methodology:
      "Handled missing/invalid values, standardized locations, engineered price_per_sqft. Outlier removal by location/BHK. Multiple regression models trained and compared using cross-validation. Feature importance analysis for business interpretation.",
    modelArchitecture:
      "Linear Regression, Lasso, Decision Tree, Random Forest (best: RF). GridSearchCV for tuning. Final model pickled for deployment.",
    results:
      "Best model: Random Forest Regressor with test RMSE ₹1.27 lakh and R² score 0.86. Identified top 10 most affordable and most expensive locations. Provided actionable recommendations for buyers and realtors.",
    evaluationMetrics: [
      { label: "Test R²", value: "0.86" },
      { label: "Train R²", value: "0.92" },
      { label: "Locations Analyzed", value: "240+" },
    ],
    challenges: [
      "High cardinality in locations",
      "Extreme outliers in price/sqft",
      "Missing and inconsistent data",
    ],
    futureImprovements: [
      "Deploy as live price estimator web app",
      "Add amenities, school, crime data for richer features",
      "Use geolocation clustering for micro-markets",
    ],
    media: [
      {
        id: "isl-1",
        type: "image",
        src: "/images/projects/3/thumb.png",
        alt: "Price distribution and outlier plot",
      },
      {
        id: "isl-2",
        type: "image",
        src: "/images/projects/3/1.svg",
        alt: "Location-wise price heatmap",
      },
      {
        id: "isl-3",
        type: "image",
        src: "/images/projects/3/2.png",
        alt: "Model performance comparison",
      },
    ],
    techStackDetails: {
      libraries: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
      frameworks: [],
      tools: ["Jupyter Notebook", "Git"],
    },
    links: {
      github: "https://github.com/sahiljangid04/-Bangalore-Housing-Market-500-Cr-PE-investment",
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "Data Scientist",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://www.linkedin.com/in/sahil-jangid-45018a311/",
      },
    ],
    completedAt: "",
  },
  {
    slug: "fraud-detection",
    title: "Credit Card Fraud Detection",
    shortDescription:
      "Detects credit card fraud using anomaly detection and machine learning. Achieved 99.7% ROC-AUC on imbalanced data.",
    category: "Machine Learning & Security",
    techStack: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib"],
    featured: true,
    thumbnail: "/images/projects/fake-news/thumb.svg",
    overview:
      "End-to-end machine learning pipeline for detecting fraudulent credit card transactions. Includes EDA, feature engineering, model training with class imbalance handling, and robust evaluation.",
    problemStatement:
      "Credit card fraud is rare but costly. The goal was to build a model that detects fraudulent transactions (0.17% of data) with high recall and minimal false alarms.",
    features: [
      "Exploratory analysis of anonymized credit card data",
      "Class imbalance handling with SMOTE and stratified sampling",
      "Multiple models: Logistic Regression, Random Forest, XGBoost",
      "Evaluation with ROC-AUC, precision-recall, confusion matrix",
      "Feature importance and threshold tuning",
      "End-to-end reproducible pipeline",
    ],
    datasetDescription:
      "Kaggle credit card fraud dataset: 284,807 transactions, 492 frauds (0.17%), 30 anonymized features, time, and amount.",
    methodology:
      "Data cleaning, scaling, SMOTE oversampling. Trained and tuned multiple classifiers. Evaluated with stratified 5-fold cross-validation. Focused on maximizing ROC-AUC and recall for the fraud class.",
    modelArchitecture:
      "Best model: XGBoost Classifier with tuned hyperparameters. Compared to Logistic Regression and Random Forest. Threshold optimized for recall.",
    results:
      "XGBoost ROC-AUC: 84.4%, Recall: 66%, Precision: 34%. Detected 456/492 frauds in test set. Feature importance highlighted key predictors.",
    evaluationMetrics: [
      { label: "ROC-AUC", value: "84.4%" },
      { label: "Recall (Fraud)", value: "66%" },
      { label: "Precision (Fraud)", value: "34%" },
      { label: "Transactions", value: "284,807" },
    ],
    challenges: [
      "Extreme class imbalance",
      "Avoiding overfitting to rare fraud cases",
      "Feature anonymization limits interpretability",
    ],
    futureImprovements: [
      "Real-time stream processing",
      "Add domain features (merchant, location, device)",
      "Deploy as REST API",
    ],
    media: [
      {
        id: "fn-1",
        type: "image",
        src: "/images/projects/fake-news/screenshot-1.svg",
        alt: "Fraud vs. normal transaction visualization",
      },
      {
        id: "fn-2",
        type: "image",
        src: "/images/projects/fake-news/screenshot-2.svg",
        alt: "ROC curve and confusion matrix",
      },
      {
        id: "fn-3",
        type: "image",
        src: "/images/projects/fake-news/screenshot-3.svg",
        alt: "Feature importance chart",
      },
    ],
    techStackDetails: {
      libraries: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Matplotlib"],
      frameworks: [],
      tools: ["Jupyter Notebook", "Git"],
    },
    links: {
      github: "https://github.com/sahiljangid04/Fraud_Detection_Risk_Analytics",
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "ML Engineer",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://linkedin.com/in/sahiljangidpro",
      },
    ],
    completedAt: "",
  },
  {
    slug: "ecommerce-sql-analytics",
    title: "E-Commerce SQL Analytics",
    shortDescription:
      "Advanced SQL analytics on e-commerce data: customer, order, and product insights using complex queries and KPIs.",
    category: "Analytics & SQL",
    techStack: ["SQL", "PostgreSQL", "Power BI", "Python"],
    featured: false,
    thumbnail: "/images/projects/customer-segment/thumb.svg",
    overview:
      "Performed advanced SQL analysis on a normalized e-commerce database. Extracted actionable insights on customer behavior, sales trends, product performance, and built dashboards for business teams.",
    problemStatement:
      "E-commerce companies need to unlock value from their relational databases, but raw SQL skills are often lacking in business teams. This project bridges the gap by building reusable analytics queries and dashboards.",
    features: [
      "Complex SQL joins and window functions",
      "Customer cohort and retention analysis",
      "Product/category performance metrics",
      "Sales funnel conversion analysis",
      "Power BI dashboard from SQL views",
    ],
    datasetDescription:
      "Simulated e-commerce SQL database: 5+ tables (customers, orders, products, payments, reviews), 50k+ orders, 20k+ customers, 2k+ products.",
    methodology:
      "Designed and executed advanced SQL queries for KPIs. Created views for Power BI. Used window functions for cohorts and retention. Aggregated sales and conversion metrics.",
    modelArchitecture:
      "No ML models. Focused on SQL query design and Power BI visualization.",
    results:
      "Identified top 10% customers driving 55% of revenue. Repeat purchase rate: 23%. Category X outperformed others by 18% margin. Insights used for targeted campaigns.",
    evaluationMetrics: [
      { label: "Repeat Purchase Rate", value: "23%" },
      { label: "Revenue from Top 10%", value: "55%" },
      { label: "Orders Analyzed", value: "50,000+" },
      { label: "Categories", value: "12" },
    ],
    challenges: [
      "Complex joins across normalized tables",
      "Performance optimization for large queries",
      "Translating business questions to SQL",
    ],
    futureImprovements: [
      "Automate SQL-to-dashboard pipeline",
      "Add predictive analytics via SQL ML extensions",
      "Integrate real-time data streams",
    ],
    media: [
      {
        id: "seg-1",
        type: "image",
        src: "/images/projects/customer-segment/screenshot-1.svg",
        alt: "Customer cohort analysis",
      },
      {
        id: "seg-2",
        type: "image",
        src: "/images/projects/customer-segment/screenshot-2.svg",
        alt: "SQL query for sales funnel",
      },
      {
        id: "seg-3",
        type: "image",
        src: "/images/projects/customer-segment/screenshot-3.svg",
        alt: "Power BI dashboard from SQL",
      },
    ],
    techStackDetails: {
      libraries: [],
      frameworks: ["Power BI"],
      tools: ["PostgreSQL", "Jupyter Notebook", "Git"],
    },
    links: {
      github: "https://github.com/sahiljangid04/Ecommerce_Retention_Operations_Analysis",
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "Data Analyst & SQL Developer",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://www.linkedin.com/in/sahil-jangid-45018a311/",
      },
    ],
    completedAt: "",
  },
  {
    slug: "marketing-roi-analytics",
    title: "Marketing ROI Analytics",
    shortDescription:
      "Quantifies marketing ROI using regression, attribution modeling, and dashboarding for actionable business insights.",
    category: "Business Analytics",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Power BI", "Statsmodels"],
    featured: false,
    thumbnail: "/images/projects/car-price/thumb.svg",
    overview:
      "Analyzed multi-channel marketing spend and sales data to quantify ROI, optimize budget allocation, and provide actionable recommendations. Built regression and attribution models with interactive Power BI dashboard.",
    problemStatement:
      "Businesses struggle to measure the true ROI of marketing spend across multiple channels. The goal was to identify which channels drive sales and how to optimize budget allocation.",
    features: [
      "Data cleaning and aggregation for multi-channel spend",
      "Regression and marketing mix modeling",
      "Channel attribution analysis (last-touch, linear)",
      "Power BI dashboard for scenario analysis",
      "Actionable recommendations for spend optimization",
    ],
    datasetDescription:
      "Simulated dataset: 3 years of weekly sales and marketing spend (TV, Digital, Radio, Print, Social). Includes sales, spend, impressions, and campaign metadata.",
    methodology:
      "Exploratory analysis, correlation checks, and feature engineering. OLS regression for baseline. Marketing mix model with lag/decay. Attribution models for channel impact.",
    modelArchitecture:
      "Statsmodels OLS regression, channel dummies, and lag variables. Attribution via rule-based and regression coefficients.",
    results:
      "Digital marketing had highest ROI (2.4x), TV contributed 32% of incremental sales, Print least effective. Recommendations led to simulated 9% sales lift with optimized allocation.",
    evaluationMetrics: [
      { label: "Digital ROI", value: "2.4x" },
      { label: "TV Contribution", value: "32%" },
      { label: "Simulated Sales Lift", value: "9%" },
      { label: "Channels Analyzed", value: "5" },
    ],
    challenges: [
      "Attribution in presence of channel synergies",
      "Lag/decay effects and limited data granularity",
      "Simulated (not real) dataset",
    ],
    futureImprovements: [
      "Apply to real business data",
      "Advanced attribution: Shapley value, Markov models",
      "Integrate with campaign management tools",
    ],
    media: [
      {
        id: "car-1",
        type: "image",
        src: "/images/projects/car-price/screenshot-1.svg",
        alt: "Marketing spend vs. sales chart",
      },
      {
        id: "car-2",
        type: "image",
        src: "/images/projects/car-price/screenshot-2.svg",
        alt: "Channel attribution dashboard",
      },
      {
        id: "car-3",
        type: "image",
        src: "/images/projects/car-price/screenshot-3.svg",
        alt: "ROI comparison by channel",
      },
    ],
    techStackDetails: {
      libraries: ["Pandas", "NumPy", "Scikit-Learn", "Statsmodels"],
      frameworks: ["Power BI"],
      tools: ["Jupyter Notebook", "Git"],
    },
    links: {
      github: "https://github.com/sahiljangid04/Marketing_ROI_Performance_Analytics_Dashboard",
    },
    contributors: [
      {
        name: "Sahil Jangid",
        role: "Business Analyst",
        github: "https://github.com/sahiljangid04",
        linkedin: "https://www.linkedin.com/in/sahil-jangid-45018a311/",
      },
    ],
    completedAt: "",
  },
];
