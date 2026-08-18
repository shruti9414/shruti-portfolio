import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Code2,
  Users,
  TrendingUp,
  Zap,
  ShoppingCart,
  Truck,
  Package,
  Bot,
} from 'lucide-react';

const PROJECT_ICONS = { ShoppingCart, Truck, Package, Bot };

const ProjectImage = ({ image, title, icon, accent }) => {
  const [errored, setErrored] = useState(false);
  const Icon = PROJECT_ICONS[icon] || Code2;

  if (!image || errored) {
    return (
      <div
        className={`w-full h-44 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${
          accent || 'from-cyan-500/10 to-blue-500/10'
        } border-b border-slate-700`}
      >
        <div className="w-14 h-14 rounded-2xl bg-black/20 border border-cyan-400/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-cyan-400" />
        </div>
        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} project screenshot`}
      loading="lazy"
      onError={() => setErrored(true)}
      className="w-full h-44 object-cover border-b border-slate-700"
    />
  );
};

const ProjectCard = ({ project, index }) => {
  const hasLiveLink = project.link && project.link !== '#';
  const hasGithubLink = project.github && project.github !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-600/0 to-cyan-600/0 group-hover:from-cyan-600/20 group-hover:via-cyan-600/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <ProjectImage image={project.image} title={project.title} icon={project.icon} accent={project.accent} />

      {/* 3D Transform on Hover */}
      <div className="relative p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-cyan-400 font-medium">{project.role}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-700">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <p className="text-cyan-400 font-bold text-lg">{metric.value}</p>
              <p className="text-slate-400 text-xs">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs bg-slate-700/50 text-cyan-300 rounded-full border border-slate-600">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full border border-slate-600">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-2 mb-4">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Zap size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        {(hasLiveLink || hasGithubLink) && (
          <div className="mt-auto pt-4 border-t border-slate-700 flex gap-3">
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {hasGithubLink && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/40 border border-slate-600 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">FEATURED WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Drive Impact</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Large-scale platforms built from ground up, handling 50K-200K+ users with robust backend architecture and seamless frontend experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-800"
        >
          {[
            { label: 'Total Users Served', value: '250K+' },
            { label: 'Revenue Generated', value: '$50K+/MRR' },
            { label: 'APIs Built', value: '40+' },
            { label: 'Database Models', value: '40+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
