
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOLS } from '../constants/tools';
import { Layout, AdSlot } from '../components/Layout';
import { Copy, Check, Info, Lightbulb, HelpCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToolPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = TOOLS.find(t => t.slug === slug);
  const [formValues, setFormValues] = React.useState<Record<string, string>>({});
  const [results, setResults] = React.useState<string[]>([]);
  const [isCopied, setIsCopied] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (tool) {
        // Init default values
        const defaults: Record<string, string> = {};
        tool.inputs.forEach(input => {
            if (input.defaultValue) defaults[input.id] = input.defaultValue;
        });
        setFormValues(defaults);
        setResults([]);
        document.title = `${tool.seoContent.title} | ToolMarket`;
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-gray-600 mb-8">The generator you are looking for doesn't exist.</p>
        <Link to="/" className="rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold">Go Home</Link>
      </div>
    );
  }

  const handleGenerate = () => {
    const output = tool.generator(formValues);
    setResults(output);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setIsCopied(index);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-12 pb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
        <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft size={12}/> Back</Link>
        <span>/</span>
        <span className="text-zinc-400">{tool.category}</span>
      </nav>

      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">{tool.name}</h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          {tool.description}
        </p>
      </section>

      {/* Input Section */}
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-8">
            <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-8 shadow-2xl">
                <div className="space-y-6">
                    {tool.inputs.map((input) => (
                        <div key={input.id} className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">{input.label}</label>
                            {input.type === 'textarea' ? (
                                <textarea
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-700 text-sm text-zinc-100 min-h-[120px]"
                                    placeholder={input.placeholder}
                                    value={formValues[input.id] || ''}
                                    onChange={(e) => setFormValues(prev => ({...prev, [input.id]: e.target.value}))}
                                />
                            ) : input.type === 'select' ? (
                                <select 
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all text-sm text-zinc-100"
                                    value={formValues[input.id] || ''}
                                    onChange={(e) => setFormValues(prev => ({...prev, [input.id]: e.target.value}))}
                                >
                                    {input.options?.map(opt => (
                                        <option key={opt} value={opt} className="bg-zinc-900">{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={input.type}
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-700 text-sm text-zinc-100"
                                    placeholder={input.placeholder}
                                    value={formValues[input.id] || ''}
                                    onChange={(e) => setFormValues(prev => ({...prev, [input.id]: e.target.value}))}
                                />
                            )}
                        </div>
                    ))}

                    <button
                        onClick={handleGenerate}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 active:scale-95"
                    >
                        {results.length > 0 ? <RefreshCw size={16} className="animate-spin-slow" /> : null}
                        Generate Results
                    </button>
                </div>
            </div>

            {/* Results Section */}
            <AnimatePresence>
                {results.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                             Generated Magic ✨
                        </h2>
                        <div className="space-y-4">
                            {results.map((res, i) => (
                                <div key={i} className="group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                                    <pre className="whitespace-pre-wrap font-sans text-lg text-white pr-12 leading-relaxed">
                                        {res}
                                    </pre>
                                    <button
                                        onClick={() => handleCopy(res, i)}
                                        className="absolute top-4 right-4 rounded-lg bg-white/5 p-2 text-zinc-500 transition-all hover:text-white hover:bg-white/10 active:scale-90"
                                    >
                                        {isCopied === i ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>

      <AdSlot label="In-Tool Ad" />

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
        <section className="space-y-4">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <Lightbulb className="text-blue-500" size={16} /> How It Works
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {tool.seoContent.explanation}
          </p>
          <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 mt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4">Pro Tips for {tool.name}</h4>
            <ul className="text-xs text-zinc-500 space-y-3">
              <li className="flex items-start gap-2"><span className="text-blue-500">•</span> Be specific with your keywords for better context.</li>
              <li className="flex items-start gap-2"><span className="text-blue-500">•</span> Try different moods to get varied perspectives.</li>
              <li className="flex items-start gap-2"><span className="text-blue-500">•</span> Mix and match generated results for uniqueness.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <HelpCircle className="text-blue-500" size={16} /> FAQ
          </h3>
          <div className="space-y-6">
            {tool.seoContent.faqs.map((faq, i) => (
              <div key={i} className="space-y-2">
                <p className="text-sm font-bold text-zinc-200">{faq.question}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AdSlot label="Footer Tool Ad" />
    </div>
  );
};
