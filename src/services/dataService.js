import avatar1 from "@/assets/images/CEO.jpeg";
import avatar2 from "@/assets/images/COFOUNDER.jpeg";
import avatar3 from "@/assets/images/HR.jpeg";
import avatar4 from "@/assets/images/OperationManager.jpeg";

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
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    caption: "Our team hard at work in the remote office! \u200D",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop",
    caption: "Annual Women in Tech retreat.",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    caption: "Focusing on customer success. Every call matters! \u200D",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    caption: "Our latest planning session.",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80",
    caption: "Celebrating a massive milestone this quarter! \u200D",
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
    quote: "Leading Sherize means building a future where every woman can thrive and lead without limits.",
    author: "Vijayalakshmi M ",
    role: "CEO & FOUNDER",
    img: avatar1
  },
  {
    id: "2",
    quote: "We built Sherize on the foundation of trust and excellence, ensuring our clients receive nothing but the absolute best.",
    author: "Datti Madhuri",
    role: "COFOUNDER & DIRECTOR",
    img: avatar2
  },
  {
    id: "3",
    quote: "Our greatest asset is our people. I am dedicated to fostering a supportive culture where every voice is heard and valued.",
    author: "Veda Samhitha Telaganeni",
    role: "HR",
    img: avatar3
  },
  {
    id: "4",
    quote: "Efficiency and seamless execution are at the heart of what we do. We turn complex strategies into flawless daily operations.",
    author: "Indhu Katari",
    role: "OPERATIONS MANAGER",
    img: avatar4
  }
];

const DEFAULT_WHY_CHOOSE = [
  { id: "1", title: "Cost-Effective Services", desc: "Premium delivery at startup-friendly pricing - no compromise on quality." },
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
];

const DEFAULT_CONTACT = {
  email: "info@sherize.com",
  phone: "+7672073746",
  address: "Sahabhavana Township, Bandlaguda, Nagole , Hyderabad, 500068",
  whatsapp: "https://wa.me/7672073746",
};

const DEFAULT_SOCIAL = {
  instagram: "https://www.instagram.com/sherize.solutions",
  linkedin: "https://www.linkedin.com/company/sherize-solutions/",
  twitter: "https://twitter.com/sherize",
  facebook: "https://www.facebook.com/share/186JWLAoDw/?mibextid=wwXIfr"
};


const DEFAULT_ABOUT_SPECIALTIES = [
  { label: "Women Empowerment" },
  { label: "Global Opportunities" },
  { label: "Remote Flexibility" },
  { label: "Skill Development" },
];

const DEFAULT_CAREER_PERKS = [
  { label: "Work From Anywhere", desc: "No commutes, complete freedom." },
  { label: "Competitive Pay", desc: "Earn what you deserve, globally." },
  { label: "Mentorship Programs", desc: "Learn from the best in the industry." },
  { label: "Health & Wellness", desc: "Support for a balanced lifestyle." },
];

import { db } from "@/config/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

// IN-MEMORY CACHE (No more localStorage)
let CACHE = {
  stats: DEFAULT_STATS,
  roles: DEFAULT_ROLES,
  services: DEFAULT_SERVICES,
  gallery: DEFAULT_GALLERY,
  testimonials: DEFAULT_TESTIMONIALS,
  whyChoose: DEFAULT_WHY_CHOOSE,
  empowerment: DEFAULT_EMPOWERMENT,
  contact: DEFAULT_CONTACT,
  social: DEFAULT_SOCIAL,
  aboutSpecialties: DEFAULT_ABOUT_SPECIALTIES,
  careerPerks: DEFAULT_CAREER_PERKS,
};

// Start listening to Firebase
let isListening = false;
export const initFirebaseSync = () => {
  if (isListening || !db) return;
  isListening = true;
  
  try {
    const docRef = doc(db, "sherize_data", "main");
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data) {
          // Update cache completely with cloud data
          CACHE = { ...CACHE, ...data };
          // Tell all components to re-render using fresh cloud data
          window.dispatchEvent(new Event("sherize_data_updated"));
        }
      } else {
        // First time setup: push default data to firebase so the database isn't empty
        setDoc(docRef, CACHE).catch(console.error);
      }
    }, (error) => {
      console.error("Firebase sync error:", error.message);
    });
  } catch (err) {
    console.error("Firebase listening error:", err);
  }
};

// Initialize immediately
initFirebaseSync();

const saveToFirebase = async (key, data) => {
  // Update local in-memory cache instantly for snappy UI
  CACHE[key] = data; 
  window.dispatchEvent(new Event("sherize_data_updated")); 
  
  if (!db) {
    console.error("Firebase database is not configured. Data is only saved in-memory and will be lost on refresh.");
    return;
  }

  try {
    const docRef = doc(db, "sherize_data", "main");
    // Merge new data into Firestore
    await setDoc(docRef, { [key]: data }, { merge: true });
  } catch (error) {
    console.error("Failed to save to Firebase:", error);
  }
};

export const dataService = {
  getStats: () => CACHE.stats,
  setStats: (data) => saveToFirebase("stats", data),
  getRoles: () => CACHE.roles,
  setRoles: (data) => saveToFirebase("roles", data),
  getServices: () => CACHE.services,
  setServices: (data) => saveToFirebase("services", data),
  getGallery: () => CACHE.gallery,
  setGallery: (data) => saveToFirebase("gallery", data),
  getTestimonials: () => CACHE.testimonials,
  setTestimonials: (data) => saveToFirebase("testimonials", data),
  getWhyChoose: () => CACHE.whyChoose,
  setWhyChoose: (data) => saveToFirebase("whyChoose", data),
  getEmpowerment: () => CACHE.empowerment,
  setEmpowerment: (data) => saveToFirebase("empowerment", data),
  getContact: () => CACHE.contact,
  setContact: (data) => saveToFirebase("contact", data),
  getSocial: () => CACHE.social,
  setSocial: (data) => saveToFirebase("social", data),
  getAboutSpecialties: () => CACHE.aboutSpecialties,
  setAboutSpecialties: (data) => saveToFirebase("aboutSpecialties", data),
  getCareerPerks: () => CACHE.careerPerks,
  setCareerPerks: (data) => saveToFirebase("careerPerks", data),
};
