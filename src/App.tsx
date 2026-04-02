import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X, Code, Database, Server } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software engineer with 2 years of experience building and operating production services in Python, Java, and Go. Designed and optimized high-throughput APIs, data pipelines, and caching layers, with a focus on low latency, fault tolerance, and clean, maintainable code.";

  const experience = [
    {
      company: "Kreeda Labs",
      role: "Software Engineer",
      location: "Remote",
      dates: "Dec. 2023 – Aug. 2024",
      highlights: [
        "Built and deployed backend services across 5 client projects using Python, Node.js, and Java; designed REST APIs load-tested to 10K+ req/sec with p95 latency <100ms through connection pooling, query optimization, and Redis caching.",
        "Developed frontend features for logistics and e-commerce platforms using React, Next.js, React Native for client platforms (~10K registered users); built order tracking dashboards with real-time WebSocket updates achieving sub-200ms UI latency, implemented Redux state management for cart and checkout flows, and shipped mobile app features reducing order completion time by 15%.",
        "Reduced API response time by 25% and improved throughput by 15% by profiling slow endpoints, adding database indexes, implementing query result caching, and optimizing JSON serialization for large payloads.",
        "Launched structured logging with request tracing IDs, error rate alerting via Prometheus, and Grafana dashboards tracking API latency, database query time, and cache hit ratios; reduced mean time to detect production issues by 40%."
      ]
    },
    {
      company: "Ontap Direct",
      role: "Full Stack Developer",
      location: "Remote",
      dates: "Jun. 2023 – Oct. 2023",
      highlights: [
        "Built frontend and backend for beverage delivery platform serving 5K+ concurrent users; developed React and TypeScript web dashboards with reusable component library and React Native mobile app with offline data caching enabling order placement without network connectivity, real-time GPS tracking via WebSocket updates every 5 seconds, and QR code scanning reducing delivery confirmation time by 20%.",
        "Designed and implemented backend APIs in Node.js for platform with 100K+ monthly active users; built relational schemas in PostgreSQL optimized for high-read workloads reducing query time by 20%.",
        "Built real-time delivery tracking system processing GPS updates every 5 seconds from 500+ active drivers; implemented WebSocket server with Redis pub/sub for low-latency location broadcast to web and mobile clients.",
        "Optimized database queries by analyzing slow query logs, adding composite indexes, and refactoring N+1 queries; reduced p99 endpoint latency from 800ms to 160ms under production traffic.",
        "Maintained 99.9% uptime across all backend services through automated health checks, circuit breakers for external dependencies, and graceful degradation strategies during peak traffic periods."
      ]
    },
    {
      company: "University of Arizona",
      role: "Research Assistant",
      location: "Tucson, AZ",
      dates: "Sep. 2025 – Present",
      highlights: [
        "Built data processing pipelines in Python automating image preprocessing, file organization, and quality validation; reduced manual work by 20% and improved dataset consistency across 5,000+ medical imaging samples.",
        "Built image preprocessing workflow with CLAHE enhancement, mask generation, and case-level splits enabling TransUNet training; maintained experiment logs and debugged pipeline failures."
      ]
    }
  ];

  const projects = [
    {
      title: "EventBridge: High-Throughput Event Streaming Platform",
      subtitle: "Distributed Event Streaming with Apache Kafka",
      category: "Distributed Systems",
      introduction: "Designed and deployed a high-throughput event streaming platform using Node.js, Apache Kafka, PostgreSQL, Docker, Kubernetes, Avro, and Prometheus for reliable message processing and observability.",
      problem: "Modern distributed systems require reliable event streaming infrastructure that can handle high throughput while ensuring zero data loss, fault tolerance, and operational visibility.",
      objective: "Build a production-grade event streaming platform capable of handling high message volumes with guaranteed delivery, dead letter queue handling, and comprehensive monitoring.",
      methodology: [
        "Designed dead letter queue handling for poison messages with automatic retry, alerting, and manual replay functionality.",
        "Implemented idempotent consumers achieving zero data loss during local testing and simulated failure scenarios.",
        "Deployed on local Kubernetes cluster with StatefulSets for Kafka brokers.",
        "Configured topic replication factor 3, min.insync.replicas 2 for durability.",
        "Exposed Prometheus metrics tracking throughput, consumer lag, and broker health."
      ],
      results: [
        "Achieved zero data loss during local testing and simulated failure scenarios.",
        "Implemented robust dead letter queue with automatic retry and manual replay.",
        "Established comprehensive monitoring with Prometheus metrics.",
        "Ensured high durability through proper Kafka replication configuration."
      ],
      conclusion: "Successfully delivered a production-ready event streaming platform demonstrating expertise in distributed systems, Kafka architecture, and cloud-native deployment patterns.",
      technologies: "Node.js, Apache Kafka, PostgreSQL, Docker, Kubernetes, Avro, Prometheus"
    },
    {
      title: "RateLimiter: Distributed API Rate Limiting Service",
      subtitle: "Multi-Tier Rate Limiting with Redis",
      category: "Backend Infrastructure",
      introduction: "Designed and built a distributed API rate limiting service supporting multi-tier limits with configurable quotas, dynamic policy updates, and graceful degradation capabilities.",
      problem: "API services need robust rate limiting to prevent abuse, ensure fair usage, and maintain service availability across distributed deployments while allowing dynamic policy adjustments.",
      objective: "Create a distributed rate limiting service supporting multiple limit tiers with accurate enforcement across instances and graceful fallback during infrastructure failures.",
      methodology: [
        "Designed multi-tier rate limits (per user, per IP, per API key, global) with configurable quotas and time windows.",
        "Built admin API for dynamic limit updates allowing policy changes without service restarts.",
        "Implemented distributed synchronization using Redis Lua scripts ensuring accurate rate limit enforcement across multiple service instances.",
        "Added graceful degradation with local in-memory fallback when Redis is unavailable."
      ],
      results: [
        "Supported flexible multi-tier rate limiting (user, IP, API key, global).",
        "Enabled dynamic policy updates without service restarts.",
        "Achieved accurate distributed rate limit enforcement using Redis Lua scripts.",
        "Maintained service availability through graceful degradation strategies."
      ],
      conclusion: "Delivered a robust, production-ready rate limiting service demonstrating expertise in distributed systems design, Redis optimization, and fault-tolerant architecture.",
      technologies: "Go, Redis, Docker, Kubernetes, Prometheus, gRPC, PostgreSQL"
    },
    {
      title: "QueryCache: SQL Query Result Caching Layer",
      subtitle: "Intelligent Query Caching with AST Parsing",
      category: "Database Optimization",
      introduction: "Designed and implemented an intelligent SQL query result caching layer using query normalization, fingerprinting, and AST parsing to maximize cache hits and reduce database load.",
      problem: "Database systems face performance challenges from repeated identical queries, and simple caching approaches miss semantically equivalent queries due to formatting differences.",
      objective: "Build a query caching layer that intelligently identifies equivalent queries regardless of formatting variations, with minimal overhead and comprehensive observability.",
      methodology: [
        "Designed SQL query normalization removing whitespace, formatting, and parameter variations to maximize cache hits.",
        "Implemented query fingerprinting using AST parsing to detect semantically identical queries with different formatting.",
        "Deployed as FastAPI middleware layer with measured sub-15ms overhead per request.",
        "Exposed Prometheus metrics tracking cache hit/miss ratio, query response time improvement, database query reduction percentage, and Redis memory utilization."
      ],
      results: [
        "Maximized cache hits through intelligent query normalization and fingerprinting.",
        "Achieved sub-15ms middleware overhead per request.",
        "Provided comprehensive observability through Prometheus metrics.",
        "Reduced database load through effective query result caching."
      ],
      conclusion: "Successfully delivered a sophisticated query caching solution demonstrating deep understanding of database optimization, AST parsing, and performance engineering.",
      technologies: "Python, Redis, PostgreSQL, Docker, FastAPI, Prometheus, SQL Parser"
    },
    {
      title: "FeatureFlags: Feature Flag Management Platform",
      subtitle: "Dynamic Feature Management with WebSocket Updates",
      category: "Developer Tools",
      introduction: "Developed a comprehensive feature flag management platform supporting user targeting, percentage-based rollouts, kill switches, and real-time updates with sub-5ms evaluation latency.",
      problem: "Software teams need safe deployment practices, gradual rollouts, and emergency rollback capabilities without code deployments, requiring low-latency flag evaluation and reliable distribution.",
      objective: "Build a feature flag platform supporting sophisticated targeting rules, instant rollbacks, and high-performance evaluation for production-scale traffic.",
      methodology: [
        "Developed Node.js backend API with flag evaluation latency under 5ms using Redis caching and sticky bucketing.",
        "Implemented user targeting rules based on geographic location, device type, and custom attributes.",
        "Built percentage-based rollout controls supporting 0-100% traffic splitting tested with 10K+ simulated requests.",
        "Designed kill switch functionality enabling instant feature disable across all environments.",
        "Tested emergency rollback scenarios completing flag deactivation and cache invalidation across distributed instances in under 2 seconds."
      ],
      results: [
        "Achieved sub-5ms flag evaluation latency using Redis caching.",
        "Supported sophisticated user targeting with geographic and device-based rules.",
        "Enabled instant emergency rollbacks in under 2 seconds.",
        "Validated platform with 10K+ simulated requests."
      ],
      conclusion: "Successfully delivered a production-grade feature flag platform demonstrating expertise in high-performance backend systems, real-time updates, and developer tooling.",
      technologies: "React, Node.js, PostgreSQL, Redis, WebSocket, Docker, REST API"
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      skills: ['Python', 'Java', 'Go', 'JavaScript', 'SQL', 'C++', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'Flask', 'React', 'React Native', 'Next.js']
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      skills: ['REST APIs', 'gRPC', 'GraphQL', 'Microservices', 'Rate Limiting', 'Caching', 'Authentication', 'API Design', 'WebSocket', 'Real-time Systems']
    },
    {
      icon: Database,
      title: 'Data & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Query Optimization', 'Indexing', 'Schema Design', 'Transactions', 'Redis', 'Kafka', 'RabbitMQ', 'etcd']
    },
    {
      icon: Target,
      title: 'Infrastructure & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS (EC2, S3, Lambda)', 'Linux', 'Nginx', 'Load Balancing', 'Autoscaling', 'Prometheus', 'Grafana', 'Structured Logging', 'Alerting', 'Git', 'GitHub Actions', 'CI/CD']
    }
  ];

  const education = [
    {
      school: "University of Arizona",
      degree: "Master of Science, Information Science",
      location: "Tucson, AZ, USA",
      dates: "Aug. 2024 – May. 2026",
      details: "Relevant Coursework: Data Structures and Algorithms, Database Systems, Distributed Systems, Computer Networking, Cloud Computing, Operating Systems"
    },
    {
      school: "University of Pune",
      degree: "Bachelor of Engineering, Information Technology",
      location: "Pune, India",
      dates: "Sep. 2018 – May. 2022",
      details: "Foundation in software engineering, computer science fundamentals, and information technology systems."
    }
  ];

  const papers: any[] = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications: any[] = [
    // Add certifications here
    // { title: "Certification Name", platform: "Platform", description: "Description", link: "https://..." }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              VAISHNAV MANDLIK
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificates' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificates' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Vaishnav Mandlik"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              VAISHNAV MANDLIK
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Engineer · Backend & Full Stack · Distributed Systems
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              TUCSON, AZ, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'API THROUGHPUT', value: '10K+', detail: 'Requests/sec at p95 <100ms' },
              { label: 'LATENCY REDUCTION', value: '80%', detail: 'p99: 800ms → 160ms' },
              { label: 'SERVICE UPTIME', value: '99.9%', detail: 'Production Availability' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineer specializing in building high-throughput, low-latency backend services and distributed systems. Experienced in API optimization, caching strategies, real-time systems, and cloud-native infrastructure with a focus on fault tolerance and maintainable code.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Code,
                title: 'Full Stack Development',
                detail: 'Built and deployed backend services across 5+ client projects using Python, Node.js, Java, and Go. Developed frontend features with React, Next.js, and React Native for platforms serving 10K+ users with real-time WebSocket updates and sub-200ms UI latency.'
              },
              {
                icon: Server,
                title: 'Performance Optimization',
                detail: 'Reduced API response time by 25% and improved throughput by 15% through profiling, indexing, and caching. Optimized database queries reducing p99 latency from 800ms to 160ms. Load-tested APIs to 10K+ req/sec with p95 latency under 100ms.'
              },
              {
                icon: Database,
                title: 'Distributed Systems',
                detail: 'Designed event streaming platforms with Apache Kafka, built distributed rate limiting services with Redis, and implemented real-time tracking systems processing GPS updates from 500+ active drivers. Maintained 99.9% uptime through circuit breakers and graceful degradation.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineering experience across startups and research environments, building production services, full-stack applications, and data processing pipelines.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Distributed systems, backend infrastructure, and developer tools projects focusing on performance, reliability, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed architecture or implementation details?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>

              {projects[selectedProject].technologies && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">TECHNOLOGIES</h3>
                  <p className="text-brown leading-relaxed font-light">
                    {projects[selectedProject].technologies}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Full-stack development, distributed systems, and cloud-native infrastructure expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in distributed systems and software engineering.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss backend engineering, distributed systems, API design, or full-stack development opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+16289469595"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (628) 946-9595
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:vaishnavmandlik39@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                vaishnavmandlik39@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Vaishnav Mandlik · Software Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;