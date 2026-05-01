const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generators = {
  instagramCaption: (inputs: Record<string, any>): string[] => {
    const { topic, mood } = inputs;
    const moodMap: Record<string, string[]> = {
      happy: ["Living my best life ✨", "Good vibes only! 🌈", "Smiling through it all.", "Sunshine and smiles! ☀️"],
      cool: ["Stay classy.", "Chillin'.", "Vibe check passed.", "Zero worries, just vibes."],
      emotional: ["Feeling reflective today.", "Heart is full.", "Small moments, big memories.", "Grateful for the little things."]
    };
    const templates = [
      `Everything about ${topic || 'today'} just feels right.`,
      `${topic || 'This moment'} is the vibe today.`,
      `Manifesting more ${topic || 'moments like this'} in my life.`,
      `POV: You're witnessing the best of ${topic || 'the day'}.`
    ];
    let result = getRandom(templates);
    if (mood && moodMap[mood]) result += " " + getRandom(moodMap[mood]);
    return [result];
  },
  
  youtubeDescription: (inputs: Record<string, any>): string[] => {
    const { title, keywords, callToAction } = inputs;
    const kw = keywords || 'trending, video';
    const cta = callToAction || 'subscribe';
    const mainTitle = title || 'this amazing topic';
    return [
      `Welcome back! In today's video, we're diving deep into ${mainTitle}.\n\n` +
      `📌 What we cover in this video:\n- Comprehensive overview of ${mainTitle}\n- Key strategies and expert tips\n- Why this is trending in 2026\n\n` +
      `🔥 DON'T FORGET TO ${cta.toUpperCase()} for more content like this! We release new videos every week focusing on ${kw}.\n\n` +
      `Links mentioned in the video:\n🔗 Resources: https://toolmarket.com\n🔗 Socials: @toolmarket\n\n` +
      `#${mainTitle.replace(/\s+/g, '')} #youtube #contentcreator #${kw.split(',')[0].trim()} #trending2026`,
      
      `Is ${mainTitle} actually worth the hype? Let's find out! 🚀\n\n` +
      `In this breakdown, I show you exactly how to approach ${mainTitle} from a creator's perspective. Whether you're a beginner or a pro, you'll find value in these insights about ${kw}.\n\n` +
      `✨ Join the community:\n✅ Hit that ${cta} button\n🔔 Turn on notifications so you never miss an upload!\n\n` +
      `Topics: ${kw}\nTimestamps:\n0:00 Intro\n1:30 Deep Dive into ${mainTitle}\n5:00 Final Thoughts`,
    ];
  },

  youtubeTitle: (inputs: Record<string, any>): string[] => {
    const { topic } = inputs;
    const t = topic || 'Everything';
    return [
      `Why YOU need to know about ${t} (2026 Update)`,
      `The SECRET to ${t} - You won't believe this! 😱`,
      `${t} Explained in 5 Minutes (Simple & Fast)`,
      `How to Master ${t} Like a PRO in 2026`,
      `My Honest Opinion on ${t}... (Strictly No Spoilers)`
    ];
  },

  blogIdea: (inputs: Record<string, any>): string[] => {
    const { niche } = inputs;
    const n = niche || 'Lifestyle';
    return [
      `10 Simple Ways to Improve Your ${n} Today`,
      `The Ultimate Guide to ${n} for Beginners`,
      `Top 5 Trends in ${n} You Can't Ignore in 2026`,
      `Why ${n} is More Important Than Ever`,
      `How I Scaled My ${n} Business in 6 Months`
    ];
  },

  password: (inputs: Record<string, any>): string[] => {
    const { length = 12, includeSymbols = true } = inputs;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + (includeSymbols === 'true' || includeSymbols === true ? "!@#$%^&*()_+" : "");
    let retVal = "";
    for (let i = 0; i < parseInt(length); ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return [retVal];
  },

  socialBio: (inputs: Record<string, any>): string[] => {
    const { role, niche, location, personality } = inputs;
    const p = personality || 'enthusiast';
    return [
      `📍 ${location || 'Global'}\n✨ ${role || 'Creator'} | ${niche || 'Digital'}\n🚀 Just ${p}ing my way through life.`,
      `Passionate ${role} sharing ${niche} insights. \n💌 DMs open for collabs \n🏠 Based in ${location}`,
      `Helping you navigate ${niche} 🌟 \n${role} & ${p} \n👇 Check my link below`
    ];
  },

  textCase: (inputs: Record<string, any>): string[] => {
    const { text, mode } = inputs;
    if (!text) return ["Enter some text first!"];
    switch (mode) {
      case 'uppercase': return [text.toUpperCase()];
      case 'lowercase': return [text.toLowerCase()];
      case 'sentence': return [text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()];
      default: return [text];
    }
  },

  hashtags: (inputs: Record<string, any>): string[] => {
    const { topic } = inputs;
    const words = topic ? topic.split(' ') : [];
    const tags = words.map((w: string) => `#${w.toLowerCase().replace(/[^a-z0-9]/g, '')}`);
    const generic = ["#explore", "#vibe", "#trending", "#foryou", "#viral", "#content", "#2026"];
    return [[...tags, ...generic].slice(0, 15).join(' ')];
  },

  pickupLine: (inputs: Record<string, any>): string[] => {
    const { style } = inputs;
    const lines: Record<string, string[]> = {
      cheesy: ["Are you a magician? Because whenever I look at you, everyone else disappears.", "Do you have a map? because I just got lost in your eyes."],
      funny: ["Are you a parking ticket? Because you’ve got FINE written all over you.", "I’m not a photographer, but I can definitely picture us together."],
      smooth: ["I was going to say something really sweet, but then I saw you and lost my train of thought.", "If you were a triangle, you'd be acute one."]
    };
    return [getRandom(lines[style] || lines.cheesy)];
  },

  quote: (inputs: Record<string, any>): string[] => {
    const { category } = inputs;
    const quotes: Record<string, string[]> = {
      success: ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "The only way to do great work is to love what you do."],
      life: ["In the end, it's not the years in your life that count. It's the life in your years.", "Life is what happens when you're busy making other plans."],
      motivation: ["Believe you can and you're halfway there.", "The future belongs to those who believe in the beauty of their dreams."]
    };
    return [getRandom(quotes[category] || quotes.life)];
  },

  generic: (name: string, inputs: Record<string, any>): string[] => {
    const inputVal = Object.values(inputs)[0] || 'your topic';
    return [
      `High-quality ${name} result for "${inputVal}". Optimized for engagement and 2026 trends.`,
      `Creative ${name} output based on "${inputVal}". Ready to use for your next campaign.`,
      `Professional ${name} generation for "${inputVal}". Copy and paste anywhere!`
    ];
  }
};
