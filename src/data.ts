import { Service, PortfolioProject, Testimonial, HostingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design & CRO',
    description: 'Bespoke high-performance websites engineered to grab attention and convert South African users into paying customers.',
    benefits: [
      'Conversion Rate Optimized (CRO) architecture',
      'Ultra-responsive mobile-first layout (4G/5G ready)',
      'Subtle motion flow & high typography contrast',
      'Premium Custom user experiences (no bloated templates)'
    ],
    iconName: 'LayoutTemplate',
    path: '#quote-calculator'
  },
  {
    id: 'seo-optimization',
    title: 'Technical & Local SEO',
    description: 'Dominate Google South Africa search results in Gauteng, Cape Town, and Durban. Built-in rankings architecture from day one.',
    benefits: [
      'Google Maps local 3-pack optimization',
      'South African local schema markup',
      'Technical site audits (100% Core Web Vitals pass)',
      'Competitive search landscape indexing'
    ],
    iconName: 'Search',
    path: '#seo-section'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Engineering',
    description: 'Scale your retail business. Beautiful digital stores designed for rapid loading and integrated with Payfast, Yoco, and Peach Payments.',
    benefits: [
      'Seamless checkout flow with 1-click buy',
      'ZAR currency & payment gateways integration',
      'Stock control & real-time inventory sync',
      'High-speed cart and multi-device responsive design'
    ],
    iconName: 'ShoppingBag',
    path: '#quote-calculator'
  },
  {
    id: 'wordpress-headless',
    title: 'WordPress & Modern CMS',
    description: 'Empower your marketing team with flexible, secure administration. High-performance custom theme developments and Headless React options.',
    benefits: [
      'Gutenberg and custom block integration',
      'Aesthetic block architectures with clean code',
      'Extreme WP speed optimization (no heavy builders)',
      'Ultra-secure WP hardening services'
    ],
    iconName: 'Cpu',
    path: '#quote-calculator'
  },
  {
    id: 'hosting',
    title: 'Managed SSD Hosting',
    description: 'Lightning-fast cloud servers hosted locally in the Johannesburg Teraco datacenter for sub-10ms response times.',
    benefits: [
      'High-speed SSD containers',
      'Free Let’s Encrypt SSL certificates',
      '99.99% Uptime with JHB local low-latency routing',
      'Daily persistent backups'
    ],
    iconName: 'Server',
    path: '#hosting-section'
  },
  {
    id: 'branding-logo',
    title: 'Branding & Digital Identity',
    description: 'Aesthetic logo systems, design guidelines, and social assets that position your South African business as an industry authority.',
    benefits: [
      'High-resolution scalable vector logo packages',
      'Aesthetic, cohesive brand guidelines & typographies',
      'Ready-to-use social media style guides',
      'High brand recall & authority layouts'
    ],
    iconName: 'Palette',
    path: '#quote-calculator'
  },
  {
    id: 'maintenance',
    title: 'Priority Growth & Security',
    description: 'Continuous optimization, security patches, backups, and proactive updates to guarantee your site keeps converting 24/7.',
    benefits: [
      '24/7 Monitoring & uptime guarantee',
      'Content updates & monthly site audits',
      'Continuous conversion rate optimizations',
      'Malware prevention and regular backups'
    ],
    iconName: 'ShieldCheck',
    path: '#quote-calculator'
  },
  {
    id: 'performance',
    title: 'Performance Engineering',
    description: 'We turn slow, bloated websites into speed-demons. High-performance optimizations achieving 95+ score on Google Lighthouse.',
    benefits: [
      'Image optimization & next-gen formats',
      'Code delivery optimization (minification, tree shaking)',
      'Legacy builder cleanups (Elementor/Divi bloat removals)',
      'Sub-second First Contentful Paint'
    ],
    iconName: 'Zap',
    path: '#quote-calculator'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'cape-safaris',
    title: 'Cape Luxury Safaris & Tours',
    category: 'Travel & E-commerce',
    client: 'Cape Luxury Safaris Pty Ltd',
    description: 'Rebuild of an outdated booking site into a high-end visual booking engine. Integrated with live local payment channels and beautiful immersive experiences.',
    metrics: {
      label: 'Booking Conversion',
      value: '+215%',
      before: '1.2%'
    },
    tags: ['Next.js React', 'Tailwind CSS', 'Yoco Payment Direct', 'Technical SEO'],
    beforeImage: 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800', // style configurations for simulated preview
    afterImage: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-white',
    location: 'Cape Town, Western Cape'
  },
  {
    id: 'joburg-solar',
    title: 'Gauteng Solar Solutions Hub',
    category: 'Lead Generation',
    client: 'Gauteng Solar Hub',
    description: 'Lead generation landing page optimized for high conversions during load shedding waves. Features interactive savings quote estimators.',
    metrics: {
      label: 'Monthly Qualified Leads',
      value: '420+ leads',
      before: '45 leads'
    },
    tags: ['Tailwind CSS', 'Interactive Estimator', 'Local SEO Gauteng', 'Fast Load'],
    beforeImage: 'bg-gradient-to-br from-amber-100 to-yellow-200 text-gray-800',
    afterImage: 'bg-gradient-to-br from-zinc-950 via-gray-900 to-zinc-900 text-emerald-400',
    location: 'Sandton, Johannesburg'
  },
  {
    id: 'pta-law',
    title: 'Schoeman & Partners Attorneys',
    category: 'Corporate Experience',
    client: 'Schoeman & Partners Inc.',
    description: 'Corporate redesign prioritizing prestigious aesthetics and seamless consultation scheduling system.',
    metrics: {
      label: 'Lighthouse Performance',
      value: '98/100',
      before: '35/100'
    },
    tags: ['WordPress Custom Block', 'SEO Architecture', 'Consultation Form', 'Fast Host'],
    beforeImage: 'bg-gradient-to-br from-blue-100 to-indigo-100 text-gray-800',
    afterImage: 'bg-gradient-to-br from-neutral-900 via-emerald-950 to-neutral-950 text-emerald-100',
    location: 'Brooklyn, Pretoria'
  },
  {
    id: 'durbs-logistics',
    title: 'Port-To-Rail Cargo Logistics',
    category: 'Industrial Systems',
    client: 'Durban Cargo Alliance',
    description: 'Bespoke custom tracking web portal and customer onboarding site for modern logistics management.',
    metrics: {
      label: 'Mobile Bounce Rate',
      value: '18%',
      before: '74%'
    },
    tags: ['React UI', 'API Proxy Routing', 'Responsive Design', 'SSD Hosted'],
    beforeImage: 'bg-gradient-to-br from-red-100 to-coral-100 text-gray-800',
    afterImage: 'bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-teal-300',
    location: 'Durban Port, KwaZulu-Natal'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Francois van der Merwe',
    role: 'Director of Marketing',
    company: 'Gauteng Solar Hub',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    feedback: 'NextG completely revolutionized our lead acquisition. We used to struggle with outdated static forms that failed on cellphones. Our new interactive savings calculator loads in milliseconds on any mobile network, and we are booking solar assessments non-stop!',
    rating: 5,
    location: 'Pretoria, South Africa'
  },
  {
    id: 't2',
    name: 'Naledi Dlamini',
    role: 'Founder & CEO',
    company: 'Safari Haven Escapes',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80',
    feedback: 'Our website load times used to take up to 6 seconds, costing us international bookings. NextG rebuilt our site on a modern framework and migrated us to local SSD hosting. It load instantly now, and our conversion rate skyrocketed by 215% within the first month.',
    rating: 5,
    location: 'Johannesburg, South Africa'
  },
  {
    id: 't3',
    name: 'Devon Smith',
    role: 'Operations Head',
    company: 'Biltong Gold Retailers',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
    feedback: 'Incredible work on our online shop! NextG integrated Yoco and Payfast payments seamlessly. Customers frequently compliment the simplicity of checkout, which has directly doubled our overall revenue. South African design at its very best.',
    rating: 5,
    location: 'Stellenbosch, Western Cape'
  }
];

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'biz-fast',
    name: 'SSD Launch Spec',
    priceMonthly: 149,
    priceAnnually: 1490,
    features: [
      '10 GB Blazing SSD Storage',
      'Uncapped local bandwidth (Teraco direct)',
      '1 Click WordPress deployment',
      '5 Professional @yourdomain emails',
      'Free SSL Certificate (Let’s Encrypt)',
      '24/7 Security firewall monitoring',
      'Daily regular backups'
    ],
    isPopular: false,
    targetAudience: 'Local SMEs and starter business profiles',
    ssdStorage: '10 GB SSD',
    bandwidth: 'Uncapped (Gauteng High Density)'
  },
  {
    id: 'biz-pro',
    name: 'NextG Professional Growth',
    priceMonthly: 299,
    priceAnnually: 2990,
    features: [
      '30 GB Ultra-Fast NVMe SSD Storage',
      'Uncapped bandwidth with priority speed tiers',
      'Staging environments (1-click test)',
      '20 Corporate email accounts',
      'Global CDN + Pretoria/JHB low-latency Edge cache',
      'Daily automated backups (30 days retention)',
      'Priority WhatsApp agent support',
      'Free domain registration (.co.za)'
    ],
    isPopular: true,
    targetAudience: 'Established businesses demanding performance',
    ssdStorage: '30 GB NVMe',
    bandwidth: 'Priority Uncapped'
  },
  {
    id: 'biz-enterprise',
    name: 'Headless / Enterprise Cloud',
    priceMonthly: 899,
    priceAnnually: 8990,
    features: [
      '100 GB Powered NVMe Storage',
      'Dedicated application server resources',
      'High capacity transactional email routing',
      'Unlimited corporate email profiles',
      'Comprehensive DDoS mitigation & advanced WAF',
      'Real-time automated hourly backups',
      'Dedicated slack/consultation support channel',
      'Free .co.za or .com domains'
    ],
    isPopular: false,
    targetAudience: 'High-volume e-commerce and scaling brands',
    ssdStorage: '100 GB NVMe',
    bandwidth: 'Dedicated Uncapped'
  }
];

export const FAQS = [
  {
    question: 'Why did you move away from the "Web 2.0 philosophic" service line?',
    answer: 'The term "Web 2.0" reflects technologies from the early 2010s like AJAX, RSS, and basic forums. Today, digital success is driven by extreme performance, headless speed, custom Conversion Rate Optimization (CRO), and SEO integrations. We modernized our agency to focus purely on high-velocity outcomes (sub-second mobile loads, high conversions, and real South African Business growth) rather than legacy buzzwords.'
  },
  {
    question: 'Where are your Web Hosting servers located?',
    answer: 'Our state-of-the-art managed SSD servers are located directly in the Johannesburg Teraco Datacenter. This guarantees low latency (under 12 milliseconds) for South African users across Gauteng, Pretoria, Durban, and Cape Town, leading to faster loading times that directly boost SEO and Conversion.'
  },
  {
    question: 'How does your local South African SEO optimization work?',
    answer: 'We optimize website source code to match local Search triggers (such as local schema markup for South Africa, Google Business profile linkages, and localized target landing pages). This helps businesses stand out in specific geographic queries (e.g. "Lawyer in Sandton" or "Solar installation Pretoria") and rank in the coveted local Map 3-Pack.'
  },
  {
    question: 'Which South African payment channels do you support for E-commerce?',
    answer: 'We integrate with all leading local payment processors including Payfast, Yoco, Peach Payments, SnapScan, and Ozow. We help you choose the best payment channel matching your business model, setup timeline, and fee structure.'
  },
  {
    question: 'Will my website look beautiful and work flawlessly on budget mobile phones?',
    answer: 'Absolutely. Over 70% of South African web traffic is mobile, with many visitors using budget devices with unstable 3G/4G network signals. We audit and engineer our layouts to pack lightweight assets, lazy-load heavy media files, and display beautiful responsive grid elements regardless of mobile screen density.'
  },
  {
    question: 'What is your turnaround time for a complete modern redesign?',
    answer: 'A standard custom CRO web profile typically takes 2 to 4 weeks from initiation to launch. Complex e-commerce systems with massive inventories or custom dynamic application backends may take 4 to 6 weeks. We work with high efficiency to get your business ranking fast.'
  }
];

export const SOUTH_AFRICA_REGIONS_SEO = [
  'Gauteng (Johannesburg, Sandton, Midrand, Pretoria, Centurion)',
  'Western Cape (Cape Town, Stellenbosch, Bellville, Somerset West)',
  'KwaZulu-Natal (Durban, Umhlanga, Pietermaritzburg)',
  'Eastern Cape (Gqeberha, East London)',
  'Free State (Bloemfontein)',
  'Mpumalanga (Mbombela)',
  'Limpopo (Polokwane)',
  'North West (Rustenburg)',
  'Northern Cape (Kimberley)'
];
