import { useState, useEffect } from "react";
import { dataService } from "@/services/dataService";
import { toast } from "sonner";
import { LayoutDashboard, Users, Briefcase, BarChart3, LogOut, CheckCircle2, Lock, ArrowRight, Plus, Trash2, Image, Eye, EyeOff } from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("sherize_admin_auth") === "true"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState("stats");
  const [stats, setStats] = useState([]);
  const [roles, setRoles] = useState([]);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [whyChoose, setWhyChoose] = useState([]);
  const [empowerment, setEmpowerment] = useState([]);
  const [contact, setContact] = useState({});
  const [aboutSpecialties, setAboutSpecialties] = useState([]);
  const [careerPerks, setCareerPerks] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      setStats(dataService.getStats());
      setRoles(dataService.getRoles());
      setServices(dataService.getServices());
      setGallery(dataService.getGallery());
      setTestimonials(dataService.getTestimonials());
      setWhyChoose(dataService.getWhyChoose());
      setEmpowerment(dataService.getEmpowerment());
      setContact(dataService.getContact());
      setAboutSpecialties(dataService.getAboutSpecialties());
      setCareerPerks(dataService.getCareerPerks());
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin@sherize") {
      sessionStorage.setItem("sherize_admin_auth", "true");
      setIsAuthenticated(true);
      toast.success("Welcome back, Admin!");
    } else {
      toast.error("Invalid credentials. ! Try Again");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("sherize_admin_auth");
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
  };

  // --- STATS CRUD ---
  const updateStat = (i, field, val) => {
    const newStats = [...stats];
    newStats[i][field] = val;
    setStats(newStats);
  };
  const addStat = () => setStats([...stats, { id: Date.now().toString(), v: 0, s: "", label: "New Stat" }]);
  const deleteStat = (index) => setStats(stats.filter((_, i) => i !== index));
  const handleSaveStats = () => {
    dataService.setStats(stats);
    dataService.notifyChange();
    toast.success("Stats updated successfully!");
  };

  // --- ROLES CRUD ---
  const updateRole = (i, field, val) => {
    const newRoles = [...roles];
    newRoles[i][field] = val;
    setRoles(newRoles);
  };
  const addRole = () => setRoles([...roles, { id: Date.now().toString(), title: "New Role", desc: "", span: "lg:col-span-1" }]);
  const deleteRole = (index) => setRoles(roles.filter((_, i) => i !== index));
  const handleSaveRoles = () => {
    dataService.setRoles(roles);
    dataService.notifyChange();
    toast.success("Open Roles updated successfully!");
  };

  // --- SERVICES CRUD ---
  const updateService = (i, field, val) => {
    const newServices = [...services];
    newServices[i][field] = val;
    setServices(newServices);
  };
  const addService = () => setServices([...services, { id: Date.now().toString(), title: "New Service", desc: "", img: "" }]);
  const deleteService = (index) => setServices(services.filter((_, i) => i !== index));
  const handleSaveServices = () => {
    dataService.setServices(services);
    dataService.notifyChange();
    toast.success("Services updated successfully!");
  };

  // --- GALLERY CRUD ---
  const updateGallery = (i, field, val) => {
    const newGallery = [...gallery];
    newGallery[i][field] = val;
    setGallery(newGallery);
  };
  const addGallery = () => setGallery([...gallery, { id: Date.now().toString(), img: "", caption: "New photo" }]);
  const deleteGallery = (index) => setGallery(gallery.filter((_, i) => i !== index));
  const handleSaveGallery = () => {
    dataService.setGallery(gallery);
    dataService.notifyChange();
    toast.success("Gallery updated successfully!");
  };

  // --- TESTIMONIALS CRUD ---
  const updateTestimonial = (i, field, val) => {
    const newTestimonials = [...testimonials];
    newTestimonials[i][field] = val;
    setTestimonials(newTestimonials);
  };
  const addTestimonial = () => setTestimonials([...testimonials, { id: Date.now().toString(), quote: "New Quote", author: "Name", role: "Role", img: "" }]);
  const deleteTestimonial = (index) => setTestimonials(testimonials.filter((_, i) => i !== index));
  const handleSaveTestimonials = () => {
    dataService.setTestimonials(testimonials);
    dataService.notifyChange();
    toast.success("Testimonials updated successfully!");
  };

  // --- WHY CHOOSE US CRUD ---
  const updateWhyChoose = (i, field, val) => {
    const newWhyChoose = [...whyChoose];
    newWhyChoose[i][field] = val;
    setWhyChoose(newWhyChoose);
  };
  const addWhyChoose = () => setWhyChoose([...whyChoose, { id: Date.now().toString(), title: "New Reason", desc: "" }]);
  const deleteWhyChoose = (index) => setWhyChoose(whyChoose.filter((_, i) => i !== index));
  const handleSaveWhyChoose = () => {
    dataService.setWhyChoose(whyChoose);
    dataService.notifyChange();
    toast.success("Why Choose Us updated successfully!");
  };

  // --- EMPOWERMENT CRUD ---
  const updateEmpowerment = (i, field, val) => {
    const newEmpowerment = [...empowerment];
    newEmpowerment[i][field] = val;
    setEmpowerment(newEmpowerment);
  };
  const addEmpowerment = () => setEmpowerment([...empowerment, { id: Date.now().toString(), title: "New Feature", desc: "" }]);
  const deleteEmpowerment = (index) => setEmpowerment(empowerment.filter((_, i) => i !== index));
  const handleSaveEmpowerment = () => {
    dataService.setEmpowerment(empowerment);
    dataService.notifyChange();
    toast.success("Empowerment updated successfully!");
  };

  // --- CONTACT CRUD ---
  const updateContact = (field, val) => {
    setContact({ ...contact, [field]: val });
  };
  const handleSaveContact = () => {
    dataService.setContact(contact);
    dataService.notifyChange();
    toast.success("Contact info updated successfully!");
  };

  // --- ABOUT SPECIALTIES CRUD ---
  const updateAboutSpecialty = (i, field, val) => {
    const newSpecialties = [...aboutSpecialties];
    newSpecialties[i][field] = val;
    setAboutSpecialties(newSpecialties);
  };
  const addAboutSpecialty = () => setAboutSpecialties([...aboutSpecialties, { id: Date.now().toString(), label: "New Specialty" }]);
  const deleteAboutSpecialty = (index) => setAboutSpecialties(aboutSpecialties.filter((_, i) => i !== index));
  const handleSaveAboutSpecialties = () => {
    dataService.setAboutSpecialties(aboutSpecialties);
    dataService.notifyChange();
    toast.success("Specialties updated successfully!");
  };

  // --- CAREER PERKS CRUD ---
  const updateCareerPerk = (i, field, val) => {
    const newPerks = [...careerPerks];
    newPerks[i][field] = val;
    setCareerPerks(newPerks);
  };
  const addCareerPerk = () => setCareerPerks([...careerPerks, { id: Date.now().toString(), title: "New Perk", desc: "" }]);
  const deleteCareerPerk = (index) => setCareerPerks(careerPerks.filter((_, i) => i !== index));
  const handleSaveCareerPerks = () => {
    dataService.setCareerPerks(careerPerks);
    dataService.notifyChange();
    toast.success("Career Perks updated successfully!");
  };


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 font-sans">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl border border-gray-100">
          <div className="flex justify-center mb-8">
            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Lock className="text-blue-600 h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Admin Portal</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">Sign in to manage website content</p>

          <div className="space-y-4 mb-8">
            <div>
              <label className="text-xs uppercase text-gray-400 font-semibold mb-2 block">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="text-xs uppercase text-gray-400 font-semibold mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
            Sign In <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-bold text-gray-900 text-xl tracking-tight">Sherize Admin</h1>
        </div>
        <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-red-600 flex items-center gap-2 transition-colors">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto">

        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 p-6 border-r border-gray-200 bg-white lg:bg-transparent lg:border-r-0 lg:pr-0">
          <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
            <TabButton active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} icon={BarChart3} label="Statistics" />
            <TabButton active={activeTab === 'roles'} onClick={() => setActiveTab('roles')} icon={Users} label="Open Roles" />
            <TabButton active={activeTab === 'services'} onClick={() => setActiveTab('services')} icon={Briefcase} label="Services" />
            <TabButton active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={Image} label="Gallery" />
            <TabButton active={activeTab === 'testimonials'} onClick={() => setActiveTab('testimonials')} icon={Users} label="Testimonials" />
            <TabButton active={activeTab === 'whyChoose'} onClick={() => setActiveTab('whyChoose')} icon={CheckCircle2} label="Why Choose Us" />
            <TabButton active={activeTab === 'empowerment'} onClick={() => setActiveTab('empowerment')} icon={CheckCircle2} label="Empowerment" />
            <TabButton active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} icon={BarChart3} label="Contact Info" />
            <TabButton active={activeTab === 'aboutSpecialties'} onClick={() => setActiveTab('aboutSpecialties')} icon={Briefcase} label="Specialties" />
            <TabButton active={activeTab === 'careerPerks'} onClick={() => setActiveTab('careerPerks')} icon={CheckCircle2} label="Career Perks" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 lg:pl-12">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeTab === 'stats' && "Manage Statistics"}
              {activeTab === 'roles' && "Manage Open Roles"}
              {activeTab === 'services' && "Manage Services"}
              {activeTab === 'gallery' && "Manage Gallery"}
              {activeTab === 'testimonials' && "Manage Testimonials"}
              {activeTab === 'whyChoose' && "Manage Why Choose Us"}
              {activeTab === 'empowerment' && "Manage Empowerment Features"}
              {activeTab === 'contact' && "Manage Contact Info"}
              {activeTab === 'aboutSpecialties' && "Manage About Specialties"}
              {activeTab === 'careerPerks' && "Manage Career Perks"}
            </h2>
            <p className="text-gray-500 mt-1">Changes are saved to local storage instantly.</p>
          </div>

          {/* STATS */}
          {activeTab === 'stats' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                {stats.map((s, i) => (
                  <div key={s.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group">
                    <button onClick={() => deleteStat(i)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Stat">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Value</label>
                        <input type="number" value={s.v} onChange={e => updateStat(i, 'v', Number(e.target.value))} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-lg font-medium focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                      <div className="w-1/3">
                        <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Suffix</label>
                        <input type="text" value={s.s} onChange={e => updateStat(i, 's', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-lg font-medium focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Label</label>
                      <input type="text" value={s.label} onChange={e => updateStat(i, 'label', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                ))}

                {/* Add New Button Card */}
                <button onClick={addStat} className="bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors min-h-[200px]">
                  <Plus className="h-8 w-8 mb-2" />
                  <span className="font-medium">Add New Statistic</span>
                </button>
              </div>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveStats} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* ROLES */}
          {activeTab === 'roles' && (
            <div className="animate-in fade-in duration-300 space-y-6 pb-20">
              {roles.map((r, i) => (
                <div key={r.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group flex flex-col md:flex-row gap-6">
                  <div className="absolute top-4 right-4 md:static md:w-auto shrink-0 md:mt-6">
                    <button onClick={() => deleteRole(i)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Role">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full md:w-1/3">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Role Title</label>
                    <input type="text" value={r.title} onChange={e => updateRole(i, 'title', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 font-medium focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div className="w-full md:flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Description</label>
                    <textarea value={r.desc} onChange={e => updateRole(i, 'desc', e.target.value)} rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all" />
                  </div>
                </div>
              ))}

              <button onClick={addRole} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Role</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveRoles} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* SERVICES */}
          {activeTab === 'services' && (
            <div className="animate-in fade-in duration-300 space-y-6 pb-20">
              {services.map((s, i) => (
                <div key={s.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group flex flex-col md:flex-row gap-6">
                  <div className="absolute top-4 right-4 md:static md:w-auto shrink-0 md:mt-6">
                    <button onClick={() => deleteService(i)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Service">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full md:w-1/3">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Service Title</label>
                    <input type="text" value={s.title} onChange={e => updateService(i, 'title', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 font-medium focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all mb-4" />

                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Image URL</label>
                    <input type="text" value={s.img || ""} onChange={e => updateService(i, 'img', e.target.value)} placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div className="w-full md:flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Description</label>
                    <textarea value={s.desc} onChange={e => updateService(i, 'desc', e.target.value)} rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all" />
                  </div>
                </div>
              ))}

              <button onClick={addService} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Service</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveServices} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}
          {/* GALLERY */}
          {activeTab === 'gallery' && (
            <div className="animate-in fade-in duration-300 space-y-6 pb-20">
              {gallery.map((g, i) => (
                <div key={g.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group flex flex-col md:flex-row gap-6">
                  <div className="absolute top-4 right-4 md:static md:w-auto shrink-0 md:mt-6">
                    <button onClick={() => deleteGallery(i)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Image">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full md:w-1/3">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Image / Video URL</label>
                    <input type="text" value={g.img || ""} onChange={e => updateGallery(i, 'img', e.target.value)} placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all mb-4" />
                    {g.img && (
                      <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                        {g.img.match(/\.(mp4|webm|ogg)$/i) ? (
                          <video src={g.img} muted loop autoPlay playsInline className="w-full h-full object-cover" />
                        ) : (
                          <img src={g.img} alt="Preview" className="w-full h-full object-cover" />
                        )}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Caption</label>
                    <textarea value={g.caption} onChange={e => updateGallery(i, 'caption', e.target.value)} rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-900 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all" />
                  </div>
                </div>
              ))}

              <button onClick={addGallery} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Photo</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveGallery} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}
          {/* TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                  <div key={t.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group">
                    <button onClick={() => deleteTestimonial(i)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Testimonial">
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Author</label>
                        <input type="text" value={t.author} onChange={e => updateTestimonial(i, 'author', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Role</label>
                        <input type="text" value={t.role} onChange={e => updateTestimonial(i, 'role', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Image URL</label>
                        <input type="text" value={t.img} onChange={e => updateTestimonial(i, 'img', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Quote</label>
                        <textarea value={t.quote} onChange={e => updateTestimonial(i, 'quote', e.target.value)} rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={addTestimonial} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors mt-6">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Testimonial</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveTestimonials} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* WHY CHOOSE US */}
          {activeTab === 'whyChoose' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-2 gap-6">
                {whyChoose.map((w, i) => (
                  <div key={w.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group">
                    <button onClick={() => deleteWhyChoose(i)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Title</label>
                        <input type="text" value={w.title} onChange={e => updateWhyChoose(i, 'title', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Description</label>
                        <textarea value={w.desc} onChange={e => updateWhyChoose(i, 'desc', e.target.value)} rows="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={addWhyChoose} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors mt-6">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Reason</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveWhyChoose} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* EMPOWERMENT */}
          {activeTab === 'empowerment' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-2 gap-6">
                {empowerment.map((e, i) => (
                  <div key={e.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group">
                    <button onClick={() => deleteEmpowerment(i)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Title</label>
                        <input type="text" value={e.title} onChange={ev => updateEmpowerment(i, 'title', ev.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Description</label>
                        <textarea value={e.desc} onChange={ev => updateEmpowerment(i, 'desc', ev.target.value)} rows="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={addEmpowerment} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors mt-6">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Feature</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveEmpowerment} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* ABOUT SPECIALTIES */}
          {activeTab === 'aboutSpecialties' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutSpecialties.map((s, i) => (
                  <div key={s.id || i} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm relative flex items-center gap-4 group">
                    <input type="text" value={s.label} onChange={e => updateAboutSpecialty(i, 'label', e.target.value)} className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                    <button onClick={() => deleteAboutSpecialty(i)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button onClick={addAboutSpecialty} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-4 rounded-xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors mt-6">
                <Plus className="h-5 w-5 mb-1" />
                <span className="font-medium text-sm">Add New Specialty</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveAboutSpecialties} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* CAREER PERKS */}
          {activeTab === 'careerPerks' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-2 gap-6">
                {careerPerks.map((p, i) => (
                  <div key={p.id || i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm relative group">
                    <button onClick={() => deleteCareerPerk(i)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Title</label>
                        <input type="text" value={p.title} onChange={e => updateCareerPerk(i, 'title', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Description</label>
                        <input type="text" value={p.desc} onChange={e => updateCareerPerk(i, 'desc', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={addCareerPerk} className="w-full bg-blue-50/50 border-2 border-dashed border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors mt-6">
                <Plus className="h-6 w-6 mb-1" />
                <span className="font-medium">Add New Perk</span>
              </button>

              <div className="mt-8 flex justify-end sticky bottom-6 z-10">
                <button onClick={handleSaveCareerPerks} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* CONTACT INFO */}
          {activeTab === 'contact' && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm max-w-2xl">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Email</label>
                    <input type="text" value={contact.email} onChange={e => updateContact('email', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Phone</label>
                    <input type="text" value={contact.phone} onChange={e => updateContact('phone', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Address</label>
                    <input type="text" value={contact.address} onChange={e => updateContact('address', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Instagram URL</label>
                    <input type="text" value={contact.instagram} onChange={e => updateContact('instagram', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">WhatsApp URL</label>
                    <input type="text" value={contact.whatsapp} onChange={e => updateContact('whatsapp', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">Facebook URL</label>
                    <input type="text" value={contact.facebook} onChange={e => updateContact('facebook', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-gray-400 font-semibold mb-1 block">LinkedIn URL</label>
                    <input type="text" value={contact.linkedin} onChange={e => updateContact('linkedin', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-start sticky bottom-6 z-10">
                <button onClick={handleSaveContact} className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl shadow-gray-900/20 transition-all">
                  <CheckCircle2 className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all whitespace-nowrap shrink-0 text-left ${active
        ? "bg-blue-50 text-blue-700 font-semibold"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
        }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm">{label}</span>
    </button>
  );
}
