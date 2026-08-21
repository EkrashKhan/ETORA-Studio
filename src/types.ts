export type LogoType = 'primary' | 'vertical' | 'monogram' | 'wordmark';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  example: string;
}

export interface CaseStudyData {
  overview?: string;
  challenge?: string;
  solution?: string;
  problemSolved?: string;
  whatWeBuilt?: string;
  deliverables?: string[];
  screenshots?: {
    mobileScreenshot?: string;
    additionalScreenshot?: string;
    [key: string]: string | undefined;
  } | string[];
}

export interface ProjectItem {
  id: string;
  projectName: string;
  industry: string;
  location?: string;
  whatWeBuilt?: string;
  category?: string;
  description?: string;
  technologies?: string[];
  liveUrl?: string;
  projectUrl?: string; // alias for backwards compatibility
  heroImage?: string;
  image?: string; // alias for backwards compatibility
  secondaryImages?: {
    mobileScreenshot?: string;
    additionalScreenshot?: string;
  };
  clientLogo?: string;
  featured?: boolean;
  overview?: string;
  problemSolved?: string;
  caseStudy?: CaseStudyData;
  clientName?: string;
  accentColor?: string;
  mockupType?: 'browser' | 'mobile' | 'dual';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  ctaText?: string;
}

export interface ContactFormData {
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  industry?: string;
  websiteUrl?: string;
  serviceType: string;
  budget?: string;
  message: string;
  consent: boolean;
}

export interface AuditFormData {
  websiteUrl: string;
  email: string;
  businessName: string;
  mainChallenge: string;
}
