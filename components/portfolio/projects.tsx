"use client";

import { useState } from "react";
import { ExternalLink, Github, Server, Database, Shield, Layers, ChevronDown, ChevronUp, Code, Globe } from "lucide-react";

const projects = [
  {
    title: "Scalable Professional Networking Backend",
    subtitle: "LinkedIn-Style Platform",
    description:
      "A comprehensive Spring Boot microservices backend for a professional networking platform featuring secure authentication, graph-based connections, and event-driven notifications.",
    highlights: [
      "Built microservices architecture with Spring Boot & Spring Security with JWT",
      "Implemented PostgreSQL for relational data and Neo4j for graph-based professional connections",
      "Developed event-driven notification service using Apache Kafka",
      "Enabled observability with Zipkin, Micrometer, Spring Boot Actuator, and ELK Stack",
      "Dockerized all services and orchestrated deployment using Docker Compose",
    ],
    technologies: [
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Docker",
      "PostgreSQL",
      "Neo4j",
      "JWT",
      "Zipkin",
      "ELK Stack",
    ],
    github: "https://github.com/Rohan-pokale/LinkedIn-Application",
    icon: Layers,
    featured: true,
    date: "Jan 2026",
  },
  {
    title: "Hotel Booking & Management System",
    subtitle: "Full-Stack Booking Platform",
    description:
      "A scalable hotel booking platform with comprehensive admin panel for hotel management and user-friendly booking interface with advanced search capabilities.",
    highlights: [
      "Developed scalable hotel booking platform with admin management capabilities",
      "Implemented secure RESTful APIs with role-based authentication (Admin/User)",
      "Built city-based and availability filters for room search",
      "Ensured reliability with JUnit test cases for service and controller layers",
      "Enhanced maintainability through Swagger API documentation and SLF4J logging",
    ],
    technologies: [
      "Spring Boot",
      "Spring Security",
      "JWT Auth",
      "REST API",
      "Hibernate",
      "PostgreSQL",
      "JUnit",
      "Swagger",
    ],
    github: "https://github.com/Rohan-pokale/Hotel-Booking-And-Management-Application",
    icon: Database,
    featured: true,
    date: "Dec 2025",
  },
  {
    title: "E-Commerce Microservices Platform",
    subtitle: "Distributed Shopping System",
    description:
      "A fully distributed e-commerce platform built with microservices architecture, featuring product catalog, inventory management, order processing, and payment integration.",
    highlights: [
      "Designed service mesh with Spring Cloud Gateway for API routing",
      "Implemented distributed caching with Redis for improved performance",
      "Built asynchronous order processing with RabbitMQ message queues",
      "Integrated Stripe payment gateway for secure transactions",
    ],
    technologies: [
      "Spring Boot",
      "Spring Cloud",
      "Redis",
      "RabbitMQ",
      "Stripe",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/Rohan-pokale",
    icon: Globe,
    featured: false,
    date: "Nov 2025",
  },
  {
    title: "Task Management API",
    subtitle: "RESTful Backend Service",
    description:
      "A robust task management REST API with user authentication, task CRUD operations, and team collaboration features.",
    highlights: [
      "Implemented JWT-based authentication with refresh tokens",
      "Built comprehensive API documentation with OpenAPI/Swagger",
      "Added real-time notifications using WebSocket",
      "Deployed on AWS EC2 with CI/CD pipeline",
    ],
    technologies: [
      "Spring Boot",
      "JWT",
      "WebSocket",
      "AWS",
      "PostgreSQL",
      "GitHub Actions",
    ],
    github: "https://github.com/Rohan-pokale",
    icon: Code,
    featured: false,
    date: "Oct 2025",
  },
];

const projectFeatures = [
  {
    icon: Server,
    title: "Microservices Architecture",
    description: "Distributed systems with independent deployable services",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "JWT authentication with role-based access control",
  },
  {
    icon: Database,
    title: "Multi-Database",
    description: "PostgreSQL, Neo4j, and Redis for different data patterns",
  },
  {
    icon: Layers,
    title: "Full Observability",
    description: "Distributed tracing, metrics, and centralized logging",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {projectFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-xl bg-card border border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-medium text-foreground text-sm">
                {feature.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-mono">
                        {project.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* See More Button */}
        {projects.length > 2 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-transparent border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 text-xs group"
            >
              <span className="font-medium">
                {showAll ? "Show Less" : `See More (${projects.length - 2})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/Rohan-pokale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
