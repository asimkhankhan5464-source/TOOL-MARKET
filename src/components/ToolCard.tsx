
import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

interface ToolCardProps {
  name: string;
  description: string;
  slug: string;
  icon: string;
  category: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, description, slug, icon, category }) => {
  // @ts-ignore
  const Icon = LucideIcons[icon] || LucideIcons.PenTool;

  const categoryColors: Record<string, string> = {
    'Social Media': 'text-pink-500 bg-pink-500/10',
    'AI Writing': 'text-orange-500 bg-orange-500/10',
    'Utility': 'text-yellow-500 bg-yellow-500/10',
    'Content': 'text-blue-500 bg-blue-500/10',
    'Fun': 'text-purple-500 bg-purple-500/10'
  };

  const colorStyle = categoryColors[category] || 'text-blue-500 bg-blue-500/10';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/${slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all hover:border-blue-500/50 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`rounded-xl p-3 transition-colors group-hover:bg-blue-600 group-hover:text-white ${colorStyle}`}>
            <Icon size={24} />
          </div>
          <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-400">
          {name}
        </h3>
        <p className="text-xs leading-relaxed text-zinc-500 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-500 opacity-0 transition-all group-hover:opacity-100">
          Open Tool <LucideIcons.ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
};
