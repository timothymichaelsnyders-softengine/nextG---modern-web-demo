export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string; // Used to select Lucide icons dynamically
  path: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    before: string;
  };
  oldUrl?: string;
  newUrl?: string;
  tags: string[];
  beforeImage: string; // Gradient description or mock layout style for the old version
  afterImage: string; // Gradient description or mock layout style for the new version
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  feedback: string;
  rating: number;
  location: string;
}

export interface HostingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  features: string[];
  isPopular: boolean;
  targetAudience: string;
  ssdStorage: string;
  bandwidth: string;
}

export interface LeadFormData {
  businessType: string;
  goals: string[];
  services: string[];
  budget: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}
