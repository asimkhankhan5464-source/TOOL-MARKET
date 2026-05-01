
import React from 'react';
import { Search } from 'lucide-react';
import { TOOLS } from '../constants/tools';
import { ToolCard } from '../components/ToolCard';
import { AdSlot } from '../components/Layout';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const [search, setSearch] = React.useState('');
  
  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(search.toLowerCase()) || 
    tool.description.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(TOOLS.map(t => t.category)));

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left py-12 md:py-16 relative overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            ToolMarket – Free AI <br/>
            <span className="text-blue-500">Text Generators</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
            Create high-engagement captions, bios, and ideas instantly. No account required. 
            Built for creators who need speed and quality.
          </p>

          <div className="mx-auto max-w-xl relative group ml-0">
            <div className="relative flex items-center rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50">
              <div className="pl-5 text-zinc-600">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Find a generator (e.g. Instagram, Password)..."
                className="w-full bg-transparent px-4 py-4 outline-none text-sm text-white placeholder:text-zinc-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories / Grid */}
      {search ? (
        <section>
          <h2 className="mb-8 text-xl font-bold text-white uppercase tracking-widest text-zinc-500 text-xs">Search Results</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          {filteredTools.length === 0 && (
            <div className="text-center py-20 opacity-30">
              <p className="text-lg font-medium">No tools found matching your search.</p>
            </div>
          )}
        </section>
      ) : (
        <div className="space-y-20" id="categories">
          {categories.map((cat, idx) => {
            const catTools = TOOLS.filter(t => t.category === cat);
            return (
              <section key={cat} className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">{cat} Generators</h2>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{catTools.length} tools</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {catTools.map(tool => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
                </div>
                {idx === 0 && <AdSlot label="Category Break Ad" className="mt-8" />}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};
