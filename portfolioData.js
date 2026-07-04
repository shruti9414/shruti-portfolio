// Portfolio Data - Shruti Dodiya

export const projectsData = [
  {
    title: 'Ecommarkt',
    subtitle: 'Multi-Vendor E-Commerce & Service Marketplace',
    role: 'Full Stack Developer',
    description: 'Led end-to-end development of comprehensive marketplace platform with separate web and mobile applications for customers and shop owners.',
    image: '/ecommarkt.jpg',
    metrics: [
      { value: '200K+', label: 'Users' },
      { value: '5000+', label: 'Sellers' },
      { value: '$50K+', label: 'MRR' },
    ],
    tech: ['Node.js', 'React', 'Next.js', 'Prisma ORM', 'MySQL', 'Firebase', 'Razorpay', 'React Native'],
    highlights: [
      'Architected backend with role-based access control for Admin, Shop Owner, Customer',
      'Designed 40+ database models supporting product catalog, inventory, orders, subscriptions',
      'Built subscription system (4 tiers) generating $50K+ monthly recurring revenue',
      'Implemented service booking with real-time availability and calendar integration',
      'Developed advanced search filters improving conversion by 35%',
      'Integrated Firebase Auth & Razorpay processing 10K+ monthly transactions',
    ],
    link: 'https://ecommarkt.com/',
    github: '#',
  },
  {
    title: 'TransRentals',
    subtitle: 'Vehicle & Equipment Rental Platform',
    role: 'Full Stack Developer',
    description: 'Built comprehensive B2B2C rental platform connecting customers with 1000+ vendors across India.',
    image: '/transrentals.jpg',
    metrics: [
      { value: '50K+', label: 'Users' },
      { value: '1000+', label: 'Vendors' },
      { value: '99.5%', label: 'Uptime' },
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'React Native', 'Firebase', 'Razorpay'],
    highlights: [
      'Developed 40+ REST APIs for authentication, booking lifecycle, quotations',
      'Architected vendor approval workflow reducing onboarding time by 60%',
      'Built booking system handling 5 vehicle types with status tracking',
      'Optimized MySQL queries reducing API response from 800ms to 200ms',
      'Implemented FCM delivering real-time alerts to 100K+ devices',
      'Created review & rating system with category-wise feedback',
    ],
    link: 'https://transrentals.in/',
    github: '#',
  },
  {
    title: 'Bajrangdas Furniture',
    subtitle: 'Inventory & Order Management System',
    role: 'Full Stack Developer (BCA Capstone)',
    description: 'Comprehensive inventory and order management system for furniture business.',
    image: '/bajrangdas.jpg',
    metrics: [
      { value: '95/100', label: 'Grade' },
      { value: '500+', label: 'SKUs' },
      { value: 'Capstone', label: 'Project' },
    ],
    tech: ['Python', 'MySQL', 'Bootstrap', 'HTML/CSS/JS'],
    highlights: [
      'Developed role-based authentication with session management',
      'Built product catalog supporting 500+ furniture SKUs',
      'Implemented shopping cart, checkout, and order tracking',
      'Created PDF invoice generation system',
      'Designed supplier management module with purchase orders',
      'Responsive UI with mobile-first approach',
    ],
    link: '#',
    github: '#',
  },
];

export const testimonialsData = [
  {
    text: 'Shruti is an exceptional full-stack developer with deep knowledge of backend architecture and modern frontend frameworks. She delivered the entire Ecommarkt platform with remarkable attention to detail and scalability.',
    author: 'Rajesh Kumar',
    title: 'CTO',
    company: 'House of Cre8r',
    rating: 5,
  },
  {
    text: 'Her ability to handle complex database optimization and API design is outstanding. The 800ms to 200ms optimization she did on TransRentals significantly improved our platform performance.',
    author: 'Priya Sharma',
    title: 'Product Manager',
    company: 'TransRentals',
    rating: 5,
  },
  {
    text: 'Working with Shruti was a game-changer. She built the entire subscription system generating $50K+ monthly revenue and implemented features that directly improved our conversion by 35%.',
    author: 'Amit Patel',
    title: 'Founder',
    company: 'Ecommarkt',
    rating: 5,
  },
  {
    text: 'Her expertise in React Native and cross-platform development helped us launch our mobile apps on schedule. She is proactive, solution-focused, and delivers quality code consistently.',
    author: 'Deepak Singh',
    title: 'Technical Lead',
    company: 'House of Cre8r',
    rating: 5,
  },
];

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shruti-dodiya-585453a',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'Email',
    url: 'mailto:shrutidodiya9414@gmail.com',
    icon: 'Mail',
  },
  {
    name: 'Phone',
    url: 'tel:+919558463190',
    icon: 'Phone',
  },
];

export const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'House of Cre8r Pvt. Ltd.',
    duration: 'July 2025 - Present',
    location: 'Ahmedabad, Gujarat',
    description: 'Architecting and developing enterprise-grade web and mobile applications.',
    achievements: [
      'Built scalable REST APIs using Node.js & Express handling 10K+ daily requests',
      'Designed normalized database schemas for marketplace systems',
      'Developed React Native applications for iOS & Android',
      'Integrated Razorpay, Firebase, OTPless payment and auth systems',
      'Optimized MySQL queries reducing response time by 40%',
      'Maintained 99.5% platform uptime',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TransRentals',
    duration: '2023 - 2024',
    location: 'Ahmedabad, Gujarat',
    description: 'Built comprehensive B2B2C rental platform connecting customers with 1000+ vendors across India.',
    achievements: [
      'Developed 40+ REST APIs for authentication, booking lifecycle, quotations',
      'Architected vendor approval workflow reducing onboarding time by 60%',
      'Built booking management system handling 5 vehicle types',
      'Optimized MySQL database reducing API response from 800ms to 200ms',
      'Integrated Firebase Cloud Messaging for 100K+ devices',
      'Implemented review & rating system with category-wise feedback',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ecommarkt',
    duration: '2023 - 2024',
    location: 'Ahmedabad, Gujarat',
    description: 'Led end-to-end development of comprehensive marketplace platform with 200K+ users and 5000+ sellers.',
    achievements: [
      'Architected backend with role-based access control for Admin, Owner, Customer',
      'Designed 40+ database models supporting product catalog, inventory, orders, subscriptions',
      'Built subscription system (MICRO/MINI/STANDARD/PRO tiers) generating $50K+ MRR',
      'Implemented service booking & appointment scheduling with real-time availability',
      'Developed advanced search filters improving conversion by 35%',
      'Integrated Firebase Auth & Razorpay processing 10K+ monthly transactions',
    ],
  },
];
