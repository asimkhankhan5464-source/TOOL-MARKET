
import { ToolDefinition, ToolCategory } from '../types';
import { generators } from '../lib/generators';

const createFAQ = (name: string) => [
  {
    question: `How does the ${name} work?`,
    answer: `Our ${name} uses advanced template-based logic to generate unique results based on your inputs. It processes your preferences instantly to give you the best options.`
  },
  {
    question: `Is the ${name} free to use?`,
    answer: `Yes! ToolMarket is committed to providing free AI-powered text generation tools for everyone.`
  },
  {
    question: `Can I use these results for commercial accounts?`,
    answer: `Absolutely. All generated text is yours to use across any platform, personal or professional.`
  }
];

export const TOOLS: ToolDefinition[] = [
  // SOCIAL MEDIA
  {
    id: 'ig-caption',
    slug: 'instagram-caption-generator',
    name: 'Instagram Caption Generator',
    category: 'Social Media',
    description: 'Generate catchy and engaging captions for your Instagram posts.',
    icon: 'Instagram',
    inputs: [
      { id: 'topic', label: 'What is your post about?', type: 'text', placeholder: 'e.g. Morning coffee, Beach vacation' },
      { id: 'mood', label: 'Select Mood', type: 'select', options: ['happy', 'cool', 'emotional'], defaultValue: 'happy' }
    ],
    generator: generators.instagramCaption,
    seoContent: {
      title: 'Free Instagram Caption Generator | Engagement Boost',
      description: 'Get unique and trending Instagram captions for your photos. Easy to use, free, and designed for maximum engagement.',
      explanation: 'Our tool analyzes your topic and mood to craft the perfect caption that resonates with your followers.',
      examples: [
        { input: { topic: 'Sunset', mood: 'happy' }, output: 'Everything about Sunset just feels right. Living my best life ✨' }
      ],
      faqs: createFAQ('Instagram Caption Generator')
    }
  },
  {
    id: 'ig-bio',
    slug: 'instagram-bio-generator',
    name: 'Instagram Bio Generator',
    category: 'Social Media',
    description: 'Create a professional and stylish bio for your Instagram profile.',
    icon: 'User',
    inputs: [
      { id: 'role', label: 'Your Role/Job', type: 'text', placeholder: 'e.g. Digital Artist' },
      { id: 'niche', label: 'Your Niche', type: 'text', placeholder: 'e.g. Minimalist Design' },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g. New York' },
      { id: 'personality', label: 'Personality Type', type: 'select', options: ['creative', 'pro', 'chill'], defaultValue: 'creative' }
    ],
    generator: generators.socialBio,
    seoContent: {
      title: 'Instagram Bio Generator 2026 | Professional & Creative',
      description: 'Create the best Instagram bios that attract followers. Choose from various styles and customize with ease.',
      explanation: 'Stand out from the crowd with a bio that clearly states who you are and what you do.',
      examples: [
        { input: { role: 'Blogger', niche: 'Travel', location: 'London' }, output: '📍 London\n✨ Blogger | Travel\n🚀 Just creativeing my way through life.' }
      ],
      faqs: createFAQ('Instagram Bio Generator')
    }
  },
  {
    id: 'hashtag-gen',
    slug: 'hashtag-generator',
    name: 'Hashtag Generator',
    category: 'Social Media',
    description: 'Find the best trending hashtags for any topic to boost your reach.',
    icon: 'Hash',
    inputs: [{ id: 'topic', label: 'Topic or Keywords', type: 'text', placeholder: 'e.g. Fitness Workout' }],
    generator: generators.hashtags,
    seoContent: {
      title: 'AI Hashtag Generator for Instagram & TikTok',
      description: 'Reach more people by using the right hashtags. Our AI explores your topic to find related trending tags.',
      explanation: 'Enter a keyword, and we will generate a mix of specific and trending hashtags for your post.',
      examples: [],
      faqs: createFAQ('Hashtag Generator')
    }
  },
  {
    id: 'yt-title',
    slug: 'youtube-title-generator',
    name: 'YouTube Title Generator',
    category: 'Social Media',
    description: 'Catchy and SEO-friendly titles for your YouTube videos.',
    icon: 'Youtube',
    inputs: [{ id: 'topic', label: 'Video Topic', type: 'text', placeholder: 'e.g. iPhone 17 Review' }],
    generator: generators.youtubeTitle,
    seoContent: {
      title: 'YouTube Title Generator | Free AI SEO Tool',
      description: 'Get more clicks with high-CTR YouTube titles. Free, fast, and optimized for searching.',
      explanation: 'Enter your topic and we generate several viral title options for your next video.',
      examples: [],
      faqs: createFAQ('YouTube Title Generator')
    }
  },
  {
    id: 'yt-desc',
    slug: 'youtube-description-generator',
    name: 'YouTube Description Generator',
    category: 'Social Media',
    description: 'Full, professional YouTube descriptions with SEO keywords and links.',
    icon: 'FileText',
    inputs: [
      { id: 'title', label: 'Video Title', type: 'text', placeholder: 'e.g. My Morning Routine' },
      { id: 'keywords', label: 'Keywords (comma separated)', type: 'text', placeholder: 'lifestyle, habits, productive' },
      { id: 'callToAction', label: 'Call to Action', type: 'select', options: ['subscribe', 'buy now', 'check link'], defaultValue: 'subscribe' }
    ],
    generator: generators.youtubeDescription,
    seoContent: {
      title: 'YouTube Description Generator | Free 2026 AI Tool',
      description: 'Create high-ranking YouTube descriptions in seconds. Includes hooks, timestamps, and hashtags.',
      explanation: 'Paste your title and keywords, and we will build a complete, SEO-friendly description block.',
      examples: [],
      faqs: createFAQ('YouTube Description Generator')
    }
  },
  // AI WRITING
  {
    id: 'blog-idea',
    slug: 'blog-idea-generator',
    name: 'Blog Idea Generator',
    category: 'AI Writing',
    description: 'Fresh and trending blog post ideas for any niche.',
    icon: 'Lightbulb',
    inputs: [{ id: 'niche', label: 'Your Niche', type: 'text', placeholder: 'e.g. Tech, Gardening, Finance' }],
    generator: generators.blogIdea,
    seoContent: {
      title: 'Free Blog Idea Generator | Never Run Out of Topics',
      description: 'Generate hundreds of blog ideas in seconds. Perfect for bloggers and content marketers.',
      explanation: 'Enter your niche and get a list of professional blog post titles and topics.',
      examples: [],
      faqs: createFAQ('Blog Idea Generator')
    }
  },
  {
    id: 'quote-gen',
    slug: 'quote-generator',
    name: 'Quote Generator',
    category: 'AI Writing',
    description: 'Generate meaningful quotes for inspiration or social media.',
    icon: 'Quote',
    inputs: [{ id: 'category', label: 'Category', type: 'select', options: ['life', 'success', 'motivation'] }],
    generator: generators.quote,
    seoContent: {
      title: 'Free AI Quote Generator | Instant Inspiration',
      description: 'Looking for a quote? Generate deep, motivational, or life quotes instantly with our free tool.',
      explanation: 'Pick a category and let our engine pull a powerful quote for your next post or project.',
      examples: [],
      faqs: createFAQ('Quote Generator')
    }
  },
  {
    id: 'pickup-line',
    slug: 'pickup-line-generator',
    name: 'Pickup Line Generator',
    category: 'AI Writing',
    description: 'Find the perfect cheesy, funny, or smooth pickup line.',
    icon: 'Heart',
    inputs: [{ id: 'style', label: 'Style', type: 'select', options: ['cheesy', 'funny', 'smooth'] }],
    generator: generators.pickupLine,
    seoContent: {
      title: 'AI Pickup Line Generator | Funny & Smooth',
      description: 'Never run out of icebreakers. Generate the best pickup lines for dating apps and social interactions.',
      explanation: 'Choose your style and get a conversation starter that actually works.',
      examples: [],
      faqs: createFAQ('Pickup Line Generator')
    }
  },
  // UTILITY
  {
    id: 'password-gen',
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'Utility',
    description: 'Create secure, random passwords to protect your digital life.',
    icon: 'Lock',
    inputs: [
      { id: 'length', label: 'Length', type: 'number', defaultValue: '12' },
      { id: 'includeSymbols', label: 'Include Symbols?', type: 'select', options: ['true', 'false'], defaultValue: 'true' }
    ],
    generator: generators.password,
    seoContent: {
      title: 'Secure Password Generator | Random & Strong',
      description: 'Generate hack-proof passwords instantly. Customize length and complexity for maximum security.',
      explanation: 'Uses cryptographically random patterns to ensure your accounts stay safe.',
      examples: [],
      faqs: createFAQ('Password Generator')
    }
  },
  {
    id: 'text-case',
    slug: 'text-case-converter',
    name: 'Text Case Converter',
    category: 'Utility',
    description: 'Easily convert text between UPPERCASE, lowercase, and Sentence case.',
    icon: 'Type',
    inputs: [
      { id: 'text', label: 'Your Text', type: 'textarea' },
      { id: 'mode', label: 'Convert To', type: 'select', options: ['uppercase', 'lowercase', 'sentence'] }
    ],
    generator: generators.textCase,
    seoContent: {
      title: 'Free Text Case Converter | Upper, Lower, Sentence',
      description: 'Quickly change font case for your documents or code. 100% free and client-side.',
      explanation: 'Paste your text, choose the format, and copy the result. It is that simple.',
      examples: [],
      faqs: createFAQ('Text Case Converter')
    }
  }
];

// Dynamically adding placeholders for the rest of the 35 tools
const categories: ToolCategory[] = ['Social Media', 'AI Writing', 'Content', 'Fun', 'Utility'];
const placeholderNames = [
  'Instagram Username Generator', 'TikTok Caption Generator', 'TikTok Hashtag Generator',
  'Facebook Bio Generator', 'Twitter/X Bio Generator', 'LinkedIn Headline Generator',
  'YouTube Title Generator', 'YouTube Description Generator', 'YouTube Tags Generator',
  'Motivational Message Generator', 'Story Idea Generator', 'Blog Title Generator',
  'Blog Idea Generator', 'Product Description Generator', 'Essay Title Generator',
  'Paraphrasing Tool', 'Sentence Rewriter', 'Paragraph Generator', 'Hook Generator',
  'Nickname Generator', 'Personality Description Generator', 'Love Message Generator',
  'Truth or Dare Generator', 'Future Prediction Generator', 'Meme Caption Generator',
  'Random Username Generator', 'Bio Line Generator', 'Quote of the Day Generator'
];

placeholderNames.forEach(name => {
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
  if (!TOOLS.find(t => t.slug === slug)) {
    let generatorFn = (inputs: Record<string, any>) => generators.generic(name, inputs);
    let inputs: any[] = [{ id: 'input1', label: 'Main Topic / Keywords', type: 'text' }];

    // Simple mapping for dynamic tools
    if (slug.includes('youtube')) {
       generatorFn = slug.includes('title') ? generators.youtubeTitle : generators.youtubeDescription;
       if (slug.includes('description')) {
          inputs = [
            { id: 'title', label: 'Video Title', type: 'text' },
            { id: 'keywords', label: 'Keywords', type: 'text' }
          ];
       }
    } else if (slug.includes('blog')) {
       generatorFn = generators.blogIdea;
    } else if (slug.includes('instagram')) {
       generatorFn = generators.instagramCaption;
    }

    TOOLS.push({
      id: slug,
      slug: slug,
      name: name,
      category: categories[Math.floor(Math.random() * categories.length)],
      description: `Create high-quality ${name} effortlessly with our specialized AI tool.`,
      icon: 'PenTool',
      inputs: inputs,
      generator: generatorFn,
      seoContent: {
        title: `${name} | Free AI ToolMarket 2026`,
        description: `Use our free ${name} to create content in seconds. High quality, free, and fast.`,
        explanation: `This ${name} uses advanced patterns to generate relevant content based on your inputs.`,
        examples: [],
        faqs: createFAQ(name)
      }
    });
  }
});
