
export type ToolCategory = 'Social Media' | 'AI Writing' | 'Content' | 'Fun' | 'Utility';

export interface ToolInput {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number';
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolExample {
  input: Record<string, string>;
  output: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  icon: string; // Lucide icon name
  inputs: ToolInput[];
  generator: (inputs: Record<string, any>) => string[];
  seoContent: {
    title: string;
    description: string;
    explanation: string;
    examples: ToolExample[];
    faqs: FAQ[];
  };
}
