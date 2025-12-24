import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Briefcase, 
  Award, 
  FlaskConical, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  CheckCircle2, 
  Users, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  FileText,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-teal-700 text-xl tracking-tight">
            <FlaskConical className="w-6 h-6" />
            <span>SUMIT PANDEY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  activeSection === section.id ? 'text-teal-600' : 'text-slate-600'
                }`}
              >
                {section.label}
              </button>
            ))}
            <a 
              href="mailto:sumitpandey.dctr@gmail.com"
              className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left py-2 text-slate-600 font-medium"
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Future Pharmaceutical Innovator
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Bridging Pharmacy <br /> 
              <span className="text-teal-600">& Quality Systems.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Motivated B. Pharmacy student at Apeejay Stya University with a strong academic grounding and hands-on experience in research, quality systems, and pharmacovigilance.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button 
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3 bg-teal-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200/50"
              >
                View Experience <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex gap-4 items-center">
                <a href="https://youtube.com/@lostmunda" target="_blank" className="p-3 bg-white text-slate-600 rounded-xl hover:text-red-600 transition-colors shadow-sm border border-slate-100"><Youtube className="w-5 h-5" /></a>
                <a href="mailto:sumitpandey.dctr@gmail.com" className="p-3 bg-white text-slate-600 rounded-xl hover:text-teal-600 transition-colors shadow-sm border border-slate-100"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-3xl rotate-3 shadow-2xl relative overflow-hidden flex items-center justify-center">
               <span className="text-white text-9xl font-bold opacity-20 select-none">SP</span>
               <div className="absolute inset-0 flex items-center justify-center">
                 <FlaskConical className="w-32 h-32 text-white opacity-80" />
               </div>
            </div>
            {/* Stats Decoration */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Award className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Achievements</p>
                  <p className="text-sm font-bold">Poster Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Exposure</h2>
            <div className="h-1.5 w-16 bg-teal-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IPC */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-2xl group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">One Month</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Indian Pharmacopoeia Commission</h3>
              <p className="text-teal-600 font-medium mb-4">Intern - PvPI Department</p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Gained exposure to pharmacovigilance systems and ADR monitoring.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Understood reporting mechanisms under PvPI.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Learned regulatory documentation and signal detection.
                </li>
              </ul>
            </div>

            {/* Koshbio */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-2xl group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">One Month</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Koshbio Private Limited</h3>
              <p className="text-teal-600 font-medium mb-4">QA/QC & Manufacturing Intern</p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Worked in Quality Assurance and Quality Control departments.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Gained hands-on exposure to manufacturing processes of rapid diagnostic kits.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                  Observed quality checks and in-process controls.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Innovation & Research</h2>
            <p className="text-slate-500 text-center max-w-xl">A glimpse into academic projects and conceptual formulations I've pioneered.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* cGMP Poster */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-teal-50 flex items-center justify-center p-8">
                 <Award className="w-20 h-20 text-teal-200" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-600 mb-2">
                  <span className="px-2 py-0.5 bg-teal-50 rounded uppercase">Winner</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Poster: cGMP Regulatory Compliance</h3>
                <p className="text-sm text-slate-500 mb-4">Focused on current Good Manufacturing Practices and manufacturing controls.</p>
              </div>
            </div>

            {/* Pharm Analysis */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-slate-50 flex items-center justify-center p-8">
                 <FlaskConical className="w-20 h-20 text-slate-200" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                  <span className="px-2 py-0.5 bg-slate-100 rounded uppercase">Laboratory</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Experimental Study: Paracetamol</h3>
                <p className="text-sm text-slate-500 mb-4">Analysis of crystallization behavior and UV–Visible spectrophotometry data.</p>
              </div>
            </div>

            {/* Vehicle Polish */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-emerald-50 flex items-center justify-center p-8">
                 <FileText className="w-20 h-20 text-emerald-200" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-50 rounded uppercase">Research Concept</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Innovative Vehicle Polish Liquid</h3>
                <p className="text-sm text-slate-500 mb-4">Formulation providing enhanced shine and dust repellence with market differentiation.</p>
              </div>
            </div>

            {/* Oral Hygiene */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-8">
                 <span className="text-6xl">🦷</span>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                  <span className="px-2 py-0.5 bg-blue-50 rounded uppercase">Sustainability</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Biodegradable Oral Chewing Gum</h3>
                <p className="text-sm text-slate-500 mb-4">Eco-friendly alternative to toothpaste focused on cleaning and convenience.</p>
              </div>
            </div>

            {/* Book Chapter */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-amber-50 flex items-center justify-center p-8">
                 <BookOpen className="w-20 h-20 text-amber-200" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-2">
                  <span className="px-2 py-0.5 bg-amber-50 rounded uppercase">Publication</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Enigma Volume 3</h3>
                <p className="text-sm text-slate-500 mb-4">Author of a chapter published by The Quill Publication (Nov 2022).</p>
              </div>
            </div>

            {/* Lost Munda */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-red-50 flex items-center justify-center p-8">
                 <Youtube className="w-20 h-20 text-red-200" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 mb-2">
                  <span className="px-2 py-0.5 bg-red-50 rounded uppercase">Creative</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">Founder: Lost Munda</h3>
                <p className="text-sm text-slate-500 mb-4">Travel content brand focused on digital presentation and community engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 italic text-teal-400">Core Competencies</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                My education and internships have equipped me with a robust toolkit spanning regulatory compliance, analytical instrumentation, and research documentation.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Pharmaceutical Analysis (UV-Vis)", level: 85 },
                  { label: "cGMP & QA Fundamentals", level: 90 },
                  { label: "Pharmacovigilance (ADR Reporting)", level: 80 },
                  { label: "Scientific Writing", level: 85 },
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.label}</span>
                      <span className="text-teal-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl mb-4 w-fit">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-1">Regulatory</h4>
                <p className="text-xs text-slate-400">PvPI, signal detection, and signal ADR monitoring.</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl mb-4 w-fit">
                   <FlaskConical className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-1">Analytical</h4>
                <p className="text-xs text-slate-400">Instrumentation and basic laboratory techniques.</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl mb-4 w-fit">
                   <Award className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-1">Quality</h4>
                <p className="text-xs text-slate-400">QA/QC documentation and in-process controls.</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl mb-4 w-fit">
                   <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-1">Creative</h4>
                <p className="text-xs text-slate-400">Content planning, branding, and digital portfolio dev.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Leadership & Social Engagement</h2>
            <p className="text-slate-500 max-w-xl italic">"Active member of Rotaract Club - Organizing and coordinating community-focused initiatives."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm mb-2">Team Building</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Organized 'Maitri Mahotsav' Picnic & Team Event.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🐾</span>
              </div>
              <h4 className="font-bold text-sm mb-2">Animal Welfare</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Feeding drives for stray dogs, cats, and birds.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🕉️</span>
              </div>
              <h4 className="font-bold text-sm mb-2">Social Causes</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Janmashtami celebrations at local orphanages.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm mb-2">Advocacy</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Pharmacy Week gratitude campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Let's Connect for <br />
                  <span className="text-teal-600">Future Collaborations.</span>
                </h2>
                <p className="text-slate-500 mb-8 max-w-sm">
                  Always open to internship opportunities, academic discussions, and research projects in Pharmacy & Healthcare.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Me</p>
                      <p className="font-medium text-slate-700">sumitpandey.dctr@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                      <p className="font-medium text-slate-700">Haryana, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-4">Education Background</h4>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-teal-600 italic">ASU</div>
                    <div>
                      <p className="font-bold text-slate-800 leading-tight">Bachelor of Pharmacy (B. Pharm)</p>
                      <p className="text-sm text-slate-500">School of Pharmaceutical Sciences, Apeejay Stya University</p>
                      <p className="text-xs font-bold text-teal-600 mt-1 uppercase">Final Year (2022-2026)</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-lg">
                    <FileText className="w-4 h-4" /> Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-50"></div>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 text-slate-400 text-sm">
            <p>© 2024 Sumit Pandey Portfolio. Designed for excellence in Pharmacy.</p>
            <div className="flex items-center gap-6">
              <a href="https://youtube.com/@lostmunda" className="hover:text-teal-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://instagram.com/lost_munda" className="hover:text-teal-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top helper style */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;