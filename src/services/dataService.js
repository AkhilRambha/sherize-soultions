const DEFAULT_STATS = [
  { id: "1", v: 24, s: "/7", label: "Support Available" },
  { id: "2", v: 120, s: "+", label: "Remote Women" },
  { id: "3", v: 40, s: "+", label: "Global Clients" },
  { id: "4", v: 98, s: "%", label: "Satisfaction" },
];

const DEFAULT_ROLES = [
  {
    id: "1",
    title: "Work From Home Roles",
    desc: "Flexible remote work from anywhere - on your schedule. We provide the tools, you provide the talent.",
    span: "lg:col-span-2",
  },
  {
    id: "2",
    title: "Client Success",
    desc: "Customer communication, lead follow-up, and support roles. Ideal for excellent communicators.",
    span: "lg:col-span-1",
  },
  {
    id: "3",
    title: "Creative & Digital",
    desc: "Marketing, content, design, operations, and digital support roles.",
    span: "lg:col-span-2",
  },
  {
    id: "4",
    title: "Growth Roles",
    desc: "Build skills, gain experience, and transition into leadership.",
    span: "lg:col-span-2",
  },
];

const DEFAULT_SERVICES = [
  {
    id: "1",
    title: "Website Development",
    desc: "Custom business websites designed for performance, user experience, and brand growth. We build fast, scalable, and secure digital storefronts.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Web Applications",
    desc: "Scalable web applications built with modern technology and seamless functionality. Custom dashboards, SaaS platforms, and internal tools.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Mobile App Dev",
    desc: "End-to-end iOS & Android mobile app development tailored exactly to your business needs, focusing on native-like performance.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "UI/UX Design",
    desc: "User-focused UI/UX design for intuitive and engaging digital experiences that convert visitors into loyal customers.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Digital Marketing",
    desc: "Comprehensive branding, content strategy, social media marketing, and data-driven growth campaigns that scale your reach.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "BPO / Call Center",
    desc: "Reliable inbound/outbound telecalling, lead generation, and customer support solutions handled by trained professionals.",
    img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Virtual Assistance",
    desc: "Dedicated administrative support, data entry, email management, and operational assistance for your day-to-day business needs.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  },
];

const DEFAULT_GALLERY = [
  {
    id: "1",
    img: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
    caption: "Our team hard at work in the remote office! 💻✨",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop",
    caption: "Annual Women in Tech retreat.",
  },
  {
    id: "3",
    img: "https://videos.pexels.com/video-files/7551410/7551410-uhd_2160_4096_25fps.mp4",
    caption: "Focusing on customer success. Every call matters! 📞",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    caption: "Our latest planning session.",
  },
  {
    id: "5",
    img: "https://videos.pexels.com/video-files/4011409/4011409-uhd_2560_1440_25fps.mp4",
    caption: "Celebrating a massive milestone this quarter! 🎉",
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    caption: "Empowering women globally.",
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    id: "1",
    quote: "Sherize didn't just give me a remote job; they gave me a supportive community of women who understand the unique challenges of balancing career and life.",
    author: "Sarah J.",
    role: "Customer Success Lead",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "2",
    quote: "The flexibility is unmatched. I can travel the world, manage my schedule, and still lead a high-performing digital marketing team. It's truly empowering.",
    author: "Elena R.",
    role: "Marketing Director",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: "3",
    quote: "Being surrounded by ambitious, driven women every single day pushes me to be my best self. The culture here is nothing short of incredible.",
    author: "Priya M.",
    role: "Operations Manager",
    img: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];

const DEFAULT_WHY_CHOOSE = [
  { id: "1", title: "Cost-Effective Services", desc: "Premium delivery at startup-friendly pricing — no compromise on quality." },
  { id: "2", title: "Expert Remote Professionals", desc: "Vetted specialists across design, development, operations, and growth." },
  { id: "3", title: "Quick & Reliable Execution", desc: "Ship in days, not quarters. Async sprints with clear milestones and deliverables." },
  { id: "4", title: "Modern Technology Approach", desc: "AI-assisted workflows, modern stacks, and future-proof systems." },
  { id: "5", title: "Client-Focused Support", desc: "Dedicated success leads. Real humans, real fast. We are an extension of your team." },
  { id: "6", title: "Scalable Workflow", desc: "Seamless operations designed to grow alongside your business without breaking." }
];

const DEFAULT_EMPOWERMENT = [
  { id: "1", title: "Work From Home", desc: "Build a meaningful career from the comfort and safety of your home, without the daily commute." },
  { id: "2", title: "Flexible Hours", desc: "Choose hours that fit your life. Family first, work in flow." },
  { id: "3", title: "Learning & Skills", desc: "Curated training, dedicated mentors, and premium toolkits to level up your skills every month." },
  { id: "4", title: "Career & Earnings", desc: "Transparent growth ladders with bonuses tied directly to your impact and success." },
  { id: "5", title: "Supportive Culture", desc: "A safe, women-only environment where we lift each other up." },
  { id: "6", title: "Global Impact", desc: "Work with top international brands and make a difference from day one." }
];

const DEFAULT_CONTACT = {
  email: "info@sherize.in",
  phone: "+91-7672073746",
  address: "India",
  instagram: "https://instagram.com/sherize.solutions",
  whatsapp: "https://wa.me/917672073746",
  facebook: "https://facebook.com/",
  linkedin: "https://linkedin.com/company/sherize-solutions"
};

const DEFAULT_ABOUT_SPECIALTIES = [
  { id: "1", label: "IT Services" },
  { id: "2", label: "Website Development" },
  { id: "3", label: "Web Applications" },
  { id: "4", label: "Mobile App Development" },
  { id: "5", label: "UI/UX Design" },
  { id: "6", label: "Digital Marketing" },
  { id: "7", label: "Telecalling Services" },
  { id: "8", label: "BPO Support" }
];

const DEFAULT_CAREER_PERKS = [
  { id: "1", title: "Work from home", desc: "No commute. Complete flexibility." },
  { id: "2", title: "Flexible timings", desc: "Choose hours that respect your life." },
  { id: "3", title: "Earn independently", desc: "Transparent, performance-based pay." },
  { id: "4", title: "Training support", desc: "Upskill through our programs." },
  { id: "5", title: "Showcase your skills", desc: "Work with top-tier clients." },
  { id: "6", title: "Partner with us", desc: "Join our core network." },
  { id: "7", title: "Women-led community", desc: "A supportive, safe environment." },
  { id: "8", title: "Real career growth", desc: "Clear pathways to leadership." }
];

export const dataService = {
  getStats: () => {
    const data = localStorage.getItem("sherize_stats");
    return data ? JSON.parse(data) : DEFAULT_STATS;
  },
  setStats: (stats) => {
    localStorage.setItem("sherize_stats", JSON.stringify(stats));
  },

  getRoles: () => {
    const data = localStorage.getItem("sherize_roles");
    return data ? JSON.parse(data) : DEFAULT_ROLES;
  },
  setRoles: (roles) => {
    localStorage.setItem("sherize_roles", JSON.stringify(roles));
  },

  getServices: () => {
    const data = localStorage.getItem("sherize_services");
    return data ? JSON.parse(data) : DEFAULT_SERVICES;
  },
  setServices: (services) => {
    localStorage.setItem("sherize_services", JSON.stringify(services));
  },

  getGallery: () => {
    const data = localStorage.getItem("sherize_gallery");
    return data ? JSON.parse(data) : DEFAULT_GALLERY;
  },
  setGallery: (gallery) => {
    localStorage.setItem("sherize_gallery", JSON.stringify(gallery));
  },

  getTestimonials: () => {
    const data = localStorage.getItem("sherize_testimonials");
    return data ? JSON.parse(data) : DEFAULT_TESTIMONIALS;
  },
  setTestimonials: (t) => {
    localStorage.setItem("sherize_testimonials", JSON.stringify(t));
  },

  getWhyChoose: () => {
    const data = localStorage.getItem("sherize_whychoose");
    return data ? JSON.parse(data) : DEFAULT_WHY_CHOOSE;
  },
  setWhyChoose: (w) => {
    localStorage.setItem("sherize_whychoose", JSON.stringify(w));
  },

  getEmpowerment: () => {
    const data = localStorage.getItem("sherize_empowerment");
    return data ? JSON.parse(data) : DEFAULT_EMPOWERMENT;
  },
  setEmpowerment: (e) => {
    localStorage.setItem("sherize_empowerment", JSON.stringify(e));
  },

  getContact: () => {
    const data = localStorage.getItem("sherize_contact");
    return data ? JSON.parse(data) : DEFAULT_CONTACT;
  },
  setContact: (c) => {
    localStorage.setItem("sherize_contact", JSON.stringify(c));
  },

  getAboutSpecialties: () => {
    const data = localStorage.getItem("sherize_about_specialties");
    return data ? JSON.parse(data) : DEFAULT_ABOUT_SPECIALTIES;
  },
  setAboutSpecialties: (s) => {
    localStorage.setItem("sherize_about_specialties", JSON.stringify(s));
  },

  getCareerPerks: () => {
    const data = localStorage.getItem("sherize_career_perks");
    return data ? JSON.parse(data) : DEFAULT_CAREER_PERKS;
  },
  setCareerPerks: (p) => {
    localStorage.setItem("sherize_career_perks", JSON.stringify(p));
  },
  
  // Helper to trigger events across tabs
  notifyChange: () => {
    window.dispatchEvent(new Event("sherize_data_updated"));
  }
};
