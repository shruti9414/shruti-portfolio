import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Zap } from 'lucide-react';

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
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                </div>
                {/* Animated Skill Bar */}
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>
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
        { name: 'Node.js & Express', level: 95 },
        { name: 'Laravel 11', level: 90 },
        { name: 'REST API Design', level: 95 },
        { name: 'Database Architecture', level: 92 },
        { name: 'Authentication Systems', level: 90 },
        { name: 'Payment Integration', level: 88 },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Zap,
      skills: [
        { name: 'React 18', level: 95 },
        { name: 'Next.js 14', level: 93 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 88 },
        { name: 'UI/UX Implementation', level: 89 },
      ],
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 92 },
        { name: 'iOS & Android', level: 88 },
        { name: 'Firebase Integration', level: 90 },
        { name: 'Real-time Notifications', level: 89 },
        { name: 'Native Modules', level: 85 },
        { name: 'Cross-platform Development', level: 91 },
      ],
    },
    {
      category: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 94 },
        { name: 'Prisma ORM', level: 92 },
        { name: 'Query Optimization', level: 93 },
        { name: 'Database Design', level: 94 },
        { name: 'Firebase', level: 88 },
        { name: 'Git & Version Control', level: 91 },
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
              'Razorpay',
              'Firebase',
              'OTPless',
              'Claude AI',
              'Git',
              'Docker',
              'AWS',
              'Vercel',
              'Stripe',
              'GraphQL',
              'Redis',
              'WebSockets',
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
