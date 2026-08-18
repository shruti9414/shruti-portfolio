import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Zap, Bot } from 'lucide-react';

const SkillCategory = ({ category, skills, icon: Icon, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="group"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:bg-slate-800/80">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{category}</h3>
          </div>

          <p className="text-sm text-slate-400 mb-4">
            {skills.length} technologies • Click to explore
          </p>

          {/* Mini Preview */}
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill, i) => (
              <span key={i} className="px-3 py-1 text-xs bg-slate-700/50 text-cyan-300 rounded-full border border-slate-600">
                {skill.name}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-3 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full border border-slate-600">
                +{skills.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Expanded View */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: expanded ? 1 : 0, height: expanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-2 p-6 rounded-xl bg-slate-900/50 border border-slate-700">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm bg-slate-800/70 text-white rounded-full border border-slate-600"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      icon: Code2,
      skills: [
        { name: 'Node.js & Express' },
        { name: 'Laravel 11' },
        { name: 'REST API Design' },
        { name: 'Database Architecture' },
        { name: 'Authentication Systems' },
        { name: 'Payment Integration' },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Zap,
      skills: [
        { name: 'React 18' },
        { name: 'Next.js 14' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' },
        { name: 'UI/UX Implementation' },
      ],
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native' },
        { name: 'iOS & Android' },
        { name: 'Firebase Integration' },
        { name: 'Real-time Notifications' },
        { name: 'Native Modules' },
        { name: 'Cross-platform Development' },
      ],
    },
    {
      category: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL' },
        { name: 'Prisma ORM' },
        { name: 'Query Optimization' },
        { name: 'Database Design' },
        { name: 'Firebase' },
        { name: 'Git & Version Control' },
      ],
    },
    {
      category: 'AI & API Integration',
      icon: Bot,
      skills: [
        { name: 'AI Chatbot Integration' },
        { name: 'Gemini / Grok API' },
        { name: 'Third-Party API Integration' },
        { name: 'Razorpay & Payment Gateways' },
        { name: 'Workflow Automation' },
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">TECHNICAL EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            1.5+ years of hands-on experience building enterprise-grade platforms with modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((skillGroup, index) => (
            <SkillCategory
              key={index}
              category={skillGroup.category}
              skills={skillGroup.skills}
              icon={skillGroup.icon}
              index={index}
            />
          ))}
        </div>

        {/* Additional Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        >
          <h3 className="text-xl font-bold text-white mb-6">Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Git',
              'GitHub',
              'VS Code',
              'Postman',
              'npm',
              'Composer',
              'Vercel',
              'Docker',
              'Firebase',
              'MySQL / phpMyAdmin',
              'Railway',
              'Razorpay',
              'Cursor',
              'Canva',
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-slate-900/50 border border-slate-600/50 hover:border-cyan-400/50 text-center text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
