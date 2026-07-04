import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Users, TrendingUp, Zap } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-600/0 to-cyan-600/0 group-hover:from-cyan-600/20 group-hover:via-cyan-600/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 3D Transform on Hover */}
      <div className="relative p-6 transform group-hover:scale-105 transition-transform duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-cyan-400 font-medium">{project.role}</p>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
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
        <div className="space-y-2">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Zap size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300">{highlight}</p>
            </div>
          ))}
        </div>
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
