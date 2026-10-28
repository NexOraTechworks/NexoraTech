const projects = [
  {
    title: "Centralized Server Monitoring System",
    type: "DevOps / Infrastructure Monitoring",

    description:
      "Built a centralized monitoring solution using Prometheus and Grafana to monitor CPU, memory, disk, and network metrics across five Linux servers in real time.",

    tools: [
      "Prometheus",
      "Grafana",
      "Docker",
      "Linux",
      "Node Exporter",
    ],

    details: {
      overview:
        "Designed and deployed a centralized monitoring solution to collect, visualize, and analyze system metrics from multiple Linux servers through a unified monitoring dashboard.",

      problem:
        "Monitoring multiple servers independently makes it difficult to track resource utilization, identify performance bottlenecks, and maintain visibility into infrastructure health.",

      solution:
        "Deployed Prometheus and Grafana on a centralized Docker host and configured Node Exporter on five Linux servers. Prometheus collects system metrics, while Grafana provides dashboards to visualize and analyze server performance.",

      architecture: [
        {
          title: "Linux Servers",
          description:
            "Five Linux servers act as the monitored infrastructure and expose system-level metrics.",
        },
        {
          title: "Node Exporter",
          description:
            "Collects operating system metrics such as CPU, memory, disk, and network statistics and exposes them through its metrics endpoint.",
        },
        {
          title: "Prometheus",
          description:
            "Periodically scrapes metrics from the configured Node Exporter endpoints and stores the collected time-series data.",
        },
        {
          title: "Grafana",
          description:
            "Connects to Prometheus as a data source and displays infrastructure metrics through interactive dashboards.",
        },
      ],

      features: [
        "Centralized monitoring of five Linux servers.",
        "CPU utilization monitoring.",
        "Memory usage monitoring.",
        "Disk utilization monitoring.",
        "Network activity monitoring.",
        "Server-specific dashboards using instance and node filters.",
        "Containerized deployment of monitoring services.",
      ],

      implementation: [
        "Configured Node Exporter on the monitored Linux servers.",
        "Defined Prometheus scrape targets for the individual server instances.",
        "Deployed the central monitoring services using Docker.",
        "Configured Grafana to use Prometheus as its data source.",
        "Created dashboards to visualize system resource utilization.",
        "Added dashboard variables to filter metrics by server instance.",
      ],

      outcome:
        "Established a centralized view of infrastructure health across five Linux servers, simplifying resource utilization analysis and helping identify potential performance bottlenecks.",

      skills: [
        "Linux System Administration",
        "Prometheus Configuration",
        "Grafana Dashboard Development",
        "Docker Containerization",
        "Infrastructure Monitoring",
        "Metrics Collection",
      ],
    },
  },

  {
    title: "Cloud Cost Optimization with S3 & CDN",
    type: "Cloud Computing / Cost Optimization",

    description:
      "Optimized static asset delivery using Cloudflare CDN with AWS S3, reducing reported monthly infrastructure costs from approximately $2,000 to $400 — an estimated 80% reduction.",

    tools: [
      "AWS",
      "S3",
      "Cloudflare",
      "CDN",
    ],

    details: {
      overview:
        "Worked on a cloud cost optimization solution focused on reducing the cost of delivering static assets stored in Amazon S3 by introducing Cloudflare CDN into the delivery architecture.",

      problem:
        "The existing infrastructure had reported monthly costs of approximately $2,000. The objective was to reduce content delivery costs while maintaining efficient access to static assets.",

      solution:
        "Introduced Cloudflare CDN in front of AWS S3 to improve static asset delivery and reduce repeated requests to the origin. Caching eligible assets at edge locations can reduce unnecessary origin requests and improve content delivery efficiency.",

      architecture: [
        {
          title: "Amazon S3",
          description:
            "Stores the static assets that need to be delivered to users.",
        },
        {
          title: "Cloudflare CDN",
          description:
            "Acts as the content delivery layer for supported asset requests and serves eligible cached content from edge locations.",
        },
        {
          title: "Caching Layer",
          description:
            "Configured caching behavior determines which assets can be served from the CDN without repeatedly fetching them from the origin.",
        },
        {
          title: "Origin Requests",
          description:
            "Requests for uncached content or cache misses are forwarded to the origin as required.",
        },
      ],

      features: [
        "CDN-based static asset delivery.",
        "Caching of eligible static content.",
        "Reduced repeated origin requests for cacheable assets.",
        "Improved content delivery efficiency.",
        "Cloud infrastructure cost optimization.",
        "Before-and-after monthly cost comparison.",
      ],

      implementation: [
        "Reviewed the existing S3 and CDN delivery architecture.",
        "Introduced Cloudflare as the CDN layer for static content.",
        "Configured the asset delivery and caching approach.",
        "Considered cache behavior and origin requests during optimization.",
        "Compared reported monthly infrastructure costs before and after optimization.",
      ],

      metrics: {
        monthlyCostBefore: "$2,000",
        monthlyCostAfter: "$400",
        monthlySavings: "$1,600",
        costReduction: "80%",
      },

      outcome:
        "Reduced reported monthly infrastructure costs from approximately $2,000 to $400, representing estimated savings of $1,600 per month and an 80% reduction.",

      skills: [
        "Amazon S3",
        "Cloudflare CDN",
        "Cloud Infrastructure",
        "Caching Strategies",
        "Content Delivery Optimization",
        "Cloud Cost Optimization",
      ],
    },
  },
];

export default projects;
  
