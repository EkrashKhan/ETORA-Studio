import { ServiceItem, IndustryItem, ProjectItem, ProcessStep, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'ETORA Studio',
  tagline: 'We Build Websites That Help Businesses Grow.',
  subTagline: 'Modern websites and digital solutions for growing businesses.',
  markets: ['USA', 'UK', 'UAE'],
  emailPlaceholder: 'hello@[DOMAIN PLACEHOLDER]',
  socials: {
    instagram: 'Instagram placeholder',
    linkedin: 'LinkedIn placeholder',
    whatsapp: 'WhatsApp placeholder',
    facebook: 'Facebook placeholder',
  },
  copyrightYear: 2026,
};

// Centralized contact configuration for activating real business channels when live
export const ETORA_CONTACT = {
  email: 'etora.studio2026@gmail.com',
  whatsapp: '+923363882626',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=923363882626',
  instagram: 'https://www.instagram.com/etora.studio?igsi=MWp4Y2s1eGtvNmZsMg==',
  linkedin: '', // e.g., 'https://linkedin.com/company/etorastudio'
  facebook: '', // e.g., 'https://facebook.com/etorastudio'
  twitter: '', // e.g., 'https://x.com/etorastudio'
};

export const TRUST_PILLARS = [
  {
    title: 'Modern Design',
    description: 'Clean aesthetics, strong typography & purposeful UI',
    iconName: 'Layout',
  },
  {
    title: 'Mobile-First',
    description: 'Flawless performance across phones, tablets & desktops',
    iconName: 'Smartphone',
  },
  {
    title: 'Performance-Focused',
    description: 'Fast load times, clean code & search-ready structure',
    iconName: 'Zap',
  },
  {
    title: 'Built for Business',
    description: 'Engineered to build credibility & generate customer enquiries',
    iconName: 'TrendingUp',
  },
];

export const PROBLEM_POINTS = [
  {
    title: 'Outdated Design',
    description: 'Your website no longer reflects the quality, credibility, or caliber of your business.',
    iconName: 'EyeOff',
  },
  {
    title: 'Poor Mobile Experience',
    description: 'Customers struggle to navigate, find vital information, or contact you on their phones.',
    iconName: 'SmartphoneNfc',
  },
  {
    title: 'Missed Enquiries',
    description: 'Visitors leave without converting because there is no clear path to take the next step.',
    iconName: 'ArrowRightCircle',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    tagline: 'Credibility & conversion for established companies',
    description: 'Modern, responsive websites designed to establish credibility and turn visitors into enquiries.',
    features: [
      'Responsive Design',
      'Modern UI',
      'Business-Focused Structure',
      'Contact & Conversion Elements',
    ],
    ctaText: 'Discuss Business Websites',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    tagline: 'High-impact pages tailored to specific campaigns',
    description: 'Focused landing pages designed for specific offers, campaigns, services and lead-generation goals.',
    features: [
      'Conversion-Focused Layout',
      'Clear CTA',
      'Mobile Optimization',
      'Fast Delivery',
    ],
    ctaText: 'Discuss Landing Pages',
  },
  {
    id: 'website-redesign',
    number: '03',
    title: 'Website Redesign',
    tagline: 'Modernize an outdated online presence',
    description: 'Transform an outdated online presence into a modern digital experience that better reflects your business.',
    features: [
      'UI/UX Refresh',
      'Content Structure',
      'Mobile Improvements',
      'Performance Improvements',
    ],
    ctaText: 'Discuss Website Redesign',
  },
  {
    id: 'custom-web-solutions',
    number: '04',
    title: 'Custom Web Solutions',
    tagline: 'Tailored functionality for unique business workflows',
    description: 'Custom digital experiences for businesses that need more than a standard website.',
    features: [
      'Forms & Lead Flows',
      'Booking Systems',
      'Integrations',
      'Custom Features',
    ],
    ctaText: 'Discuss Custom Web Solutions',
  },
  {
    id: 'mobile-app-development',
    number: '05',
    title: 'Mobile App Development',
    tagline: 'Custom mobile experiences for businesses ready to go beyond the website',
    description: 'Design and development of practical mobile applications for customer engagement, bookings, services, commerce and business workflows.',
    features: [
      'Cross-Platform Apps',
      'UI/UX Design',
      'Customer Features',
      'API & Backend Integration',
    ],
    ctaText: 'Discuss App Development',
  },
  {
    id: 'ecommerce-development',
    number: '06',
    title: 'E-Commerce Development',
    tagline: 'Build a better online store',
    description: 'Conversion-focused online stores designed to make products easier to discover, understand and purchase.',
    features: [
      'Shopify',
      'WooCommerce',
      'Product Pages',
      'Checkout Experience',
    ],
    ctaText: 'Build My Online Store',
  },
  {
    id: 'local-seo',
    number: '07',
    title: 'Local SEO',
    tagline: 'Get discovered when customers search for your business',
    description: 'Optimization focused on helping local businesses improve their visibility in Google Search, Maps and other local discovery experiences.',
    features: [
      'Local Keyword Strategy',
      'On-Page SEO',
      'Local Citations',
      'Local Search Optimization',
    ],
    ctaText: 'Discuss Local SEO',
  },
  {
    id: 'google-business-profile',
    number: '08',
    title: 'Google Business Profile',
    tagline: 'Turn your local listing into a stronger customer touchpoint',
    description: 'Setup, optimization and ongoing content support for Google Business Profiles to help businesses present accurate information and improve their local presence.',
    features: [
      'Profile Optimization',
      'Business Information',
      'Posts & Updates',
      'Review Response Support',
    ],
    ctaText: 'Improve My Local Presence',
  },
  {
    id: 'seo-ai-search-optimization',
    number: '09',
    title: 'SEO & AI Search Optimization',
    tagline: 'Prepare your business for modern search',
    description: 'Search-focused content and website optimization designed for traditional search engines and emerging AI-powered discovery experiences.',
    features: [
      'Technical SEO Basics',
      'Content Optimization',
      'Search Intent Strategy',
      'AI Search / AEO Readiness',
    ],
    ctaText: 'Improve My Visibility',
  },
  {
    id: 'social-media-management',
    number: '10',
    title: 'Social Media Management',
    tagline: 'Consistent content that keeps your brand visible',
    description: 'Strategy, content planning and creative production for businesses that want a stronger and more consistent social presence.',
    features: [
      'Content Strategy',
      'Content Calendars',
      'Captions & Copy',
      'Creative Content',
    ],
    ctaText: 'Discuss Social Media',
  },
  {
    id: 'short-form-content',
    number: '11',
    title: 'Short-Form Content',
    tagline: "Create content designed for today's attention economy",
    description: 'Short-form visual content for Instagram, Facebook, TikTok and other social channels, built around the brand and target audience.',
    features: [
      'Reels',
      'Short Videos',
      'Social Graphics',
      'Content Repurposing',
    ],
    ctaText: 'Create Content For My Brand',
  },
  {
    id: 'paid-advertising',
    number: '12',
    title: 'Paid Advertising',
    tagline: 'Put your offer in front of the right audience',
    description: 'Campaign strategy, creative assets, landing pages and optimization support for paid digital advertising.',
    features: [
      'Meta Ads',
      'Google Ads',
      'Ad Creative',
      'Campaign Optimization',
    ],
    ctaText: 'Discuss Advertising',
  },
  {
    id: 'conversion-optimization',
    number: '13',
    title: 'Conversion Optimization',
    tagline: 'Turn more website visitors into enquiries',
    description: 'Improve the structure, messaging and user experience of digital touchpoints so visitors have a clearer path to take action.',
    features: [
      'CTA Optimization',
      'Landing Page Improvements',
      'User Journey Review',
      'Form Optimization',
    ],
    ctaText: 'Improve My Conversions',
  },
  {
    id: 'marketing-automation',
    number: '14',
    title: 'Marketing Automation',
    tagline: 'Reduce repetitive work and respond faster',
    description: 'Automated workflows that help businesses manage enquiries, follow-ups, lead handling and repetitive marketing tasks more efficiently.',
    features: [
      'Lead Follow-Ups',
      'Email Workflows',
      'Form Automation',
      'Business Integrations',
    ],
    ctaText: 'Automate My Workflow',
  },
  {
    id: 'ai-chatbots-customer-support',
    number: '15',
    title: 'AI Chatbots & Customer Support',
    tagline: 'Give customers faster answers, around the clock',
    description: 'AI-assisted customer experiences that can answer common questions, guide visitors and help businesses handle repetitive enquiries.',
    features: [
      'Website Chatbots',
      'FAQ Systems',
      'Lead Capture',
      'Customer Guidance',
    ],
    ctaText: 'Add a Chatbot',
  },
  {
    id: 'content-copywriting',
    number: '16',
    title: 'Content & Copywriting',
    tagline: 'Clear messaging that helps customers understand your business',
    description: 'Website copy, service descriptions, landing-page messaging and supporting content designed around the target customer and business goal.',
    features: [
      'Website Copy',
      'Landing Page Copy',
      'Service Pages',
      'Marketing Content',
    ],
    ctaText: 'Improve My Messaging',
  },
  {
    id: 'brand-visual-design',
    number: '17',
    title: 'Brand & Visual Design',
    tagline: 'Create a stronger visual identity across every touchpoint',
    description: 'Practical brand and marketing design for businesses that need a more consistent and professional visual presence.',
    features: [
      'Brand Identity',
      'Social Graphics',
      'Marketing Assets',
      'Visual Guidelines',
    ],
    ctaText: 'Build My Brand',
  },
  {
    id: 'website-maintenance-support',
    number: '18',
    title: 'Website Maintenance & Support',
    tagline: 'Keep your website secure, updated and running smoothly',
    description: 'Ongoing maintenance, content updates, troubleshooting and improvement support for business websites.',
    features: [
      'Updates',
      'Content Changes',
      'Technical Support',
      'Performance Checks',
    ],
    ctaText: 'Get Ongoing Support',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'restaurants-cafes',
    title: 'Restaurants & Cafes',
    description: 'Interactive menus, reservation paths, and visual atmosphere that invite diners.',
    example: 'Table bookings, digital menus, location guides',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'High-end property presentations, agent credibility, and clear enquiry mechanisms.',
    example: 'Property showcases, neighborhood insights, lead funnels',
  },
  {
    id: 'local-services',
    title: 'Local Services',
    description: 'Clinics, home services, and studios looking to capture local search demand.',
    example: 'Service breakdown, direct calling, appointment requests',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Law firms, accounting practices, and advisors establishing institutional trust.',
    example: 'Practice areas, team profiles, consultation intakes',
  },
  {
    id: 'consultants',
    title: 'Consultants',
    description: 'Authority-building layouts, case-study proof, and high-converting discovery call funnels.',
    example: 'Framework showcases, client results, calendar booking',
  },
  {
    id: 'growing-businesses',
    title: 'Growing Businesses',
    description: 'SMEs scaling their reach across the USA, UK, and UAE with modern digital infrastructure.',
    example: 'Scalable pages, custom forms, brand repositioning',
  },
];

export { PROJECTS } from './projects';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We learn about your business, audience, goals and current online presence.',
    details: [
      'Understand target audience & customer intent',
      'Audit existing website strengths & friction points',
      'Clarify primary conversion & enquiry goals',
    ],
  },
  {
    step: '02',
    title: 'Design',
    description: 'We create a clear visual direction and user experience around your goals.',
    details: [
      'Information architecture & wireframes',
      'Modern, high-contrast visual system',
      'Mobile-first layout & typography pairing',
    ],
  },
  {
    step: '03',
    title: 'Build',
    description: 'We turn the approved design into a responsive, fast and functional website.',
    details: [
      'Clean, semantic TypeScript & Tailwind code',
      'Optimized performance & asset loading',
      'Contact forms & conversion element integration',
    ],
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We test everything, refine the final details and get your website ready to perform.',
    details: [
      'Cross-browser & cross-device QA testing',
      'Domain, DNS & SEO metadata verification',
      'Handoff & post-launch support guidance',
    ],
  },
];

export const WHY_ETORA_POINTS = [
  {
    title: 'Business-Focused',
    description: 'Every page, section, and button has a purpose: turning visitors into real enquiries.',
    iconName: 'Target',
  },
  {
    title: 'Modern & Responsive',
    description: 'Engineered to look polished and perform flawlessly across mobile, tablet, and desktop.',
    iconName: 'Layers',
  },
  {
    title: 'Clear Communication',
    description: 'Simple process and direct collaboration with the founders building your project.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Built to Grow',
    description: 'Clean modular code that can easily evolve as your business expands its services.',
    iconName: 'Sparkles',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you work with?',
    answer:
      'We work primarily with small businesses, local businesses and growing companies across the USA, UK and UAE. Our work includes websites, e-commerce, digital solutions and growth services for industries such as restaurants, real estate, local services, professional services, consultants and other growing businesses.',
  },
  {
    id: 'faq-2',
    question: 'Can you build a website from scratch?',
    answer:
      'Yes. We can design and develop a complete website from the ground up, including the structure, visual design, responsive development, content presentation, contact or enquiry functionality and launch setup.',
  },
  {
    id: 'faq-3',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. We can review your current website, identify areas that need improvement and redesign the experience around your brand, customers and business goals while preserving anything that is still working well.',
  },
  {
    id: 'faq-4',
    question: 'Can you build custom features or web applications?',
    answer:
      'Yes. Beyond standard business websites, we can build custom web features, booking systems, forms, integrations, dashboards and other web-based solutions. We also provide mobile app development for businesses that need a dedicated app experience.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide SEO and digital marketing services?',
    answer:
      'Yes. Our growth services include local SEO, Google Business Profile optimization, SEO and AI-search optimization, social media content, paid advertising, conversion optimization and marketing automation. These services can be provided alongside a new website or as standalone projects.',
  },
  {
    id: 'faq-6',
    question: 'How long does a website usually take?',
    answer:
      'The timeline depends on the size and complexity of the project. A focused landing page can usually be completed much faster than a large business website or custom web application. Once we understand your requirements, we can provide a realistic project timeline before development begins.',
  },
  {
    id: 'faq-7',
    question: 'Do you provide website maintenance after launch?',
    answer:
      'Yes. We can provide ongoing website support, updates, content changes, technical maintenance and improvement work after launch, depending on what your business needs.',
  },
  {
    id: 'faq-8',
    question: 'How do I get started with ETORA Studio?',
    answer:
      'Start by telling us about your business, your current website or digital presence and what you want to improve. We can review your needs and recommend the most practical next step, whether that’s a new website, redesign, custom solution or digital growth service.',
    ctaText: 'Get a Free Website Audit →',
  },
];
