export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'cleaning' | 'facility' | 'specialist' | 'support';
  features: string[];
  deliverables: string[];
  recommendedFrequency: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface ScheduleModel {
  type: 'ONE-OFF' | 'PERIODIC' | 'REGULAR';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  bestFor: string;
  badge: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  keySolutions: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Commercial Cleaning' | 'Specialist Cleaning' | 'High-Level Cleaning' | 'Hospitality' | 'Facility Management' | 'Professional Teams';
  imageUrl: string;
  aspect: 'square' | 'wide' | 'tall';
  description: string;
  tag: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  facilityType: string;
  requiredService: string;
  preferredFrequency: 'One-Off' | 'Periodic' | 'Regular' | 'Not Sure';
  message: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}
