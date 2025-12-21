import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Shield, Code, ChevronRight, Sun, Moon, Menu, X, Linkedin, Github, Twitter, Facebook, Globe, Laptop, Briefcase, Palette, Image as ImageIcon, Sparkles, ChevronLeft } from 'lucide-react';
import { translations } from './translations';
import { useTheme } from './context/ThemeContext';
import useScrollAnimation from './hooks/useScrollAnimation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CTASection from './components/CTASection';

const TeamPage = () => {
    const { isDark, toggleTheme } = useTheme();
    const [lang, setLang] = useState('en');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const t = translations[lang];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');

    const teamMembers = [
        { image: '/team/ceo-member.jpg', name: 'Chief Executive Officer', role: 'CEO & Co-Founder' },
        { image: '/team/dev-member.jpg', name: 'Lead Fullstack Developer', role: 'Senior Fullstack Engineer' },
        { image: '/team/web-designer.jpg', name: 'Lead Web Designer', role: 'Web Design Specialist' },
        { image: '/team/cto-redteamer.jpg', name: 'Chief Technology Officer', role: 'CTO & Security Expert' },
        { image: '/team/communications-manager.jpg', name: 'Analyst Python', role: 'Strategic Planning' },
        { image: '/team/figma-canva-designer.jpg', name: 'UI/UX Designer', role: 'Design Specialist' },
        { image: '/team/adobe-designer.jpeg', name: 'Creative Designer', role: 'Adobe Suite Expert' },
        { image: '/team/frontend-designer.jpg', name: 'Frontend Developer', role: 'Web Designer' },
        { image: '/team/cybersecurity-chief.jpg', name: 'Chief of Cybersecurity', role: 'Security Educator' }
    ];

    const detailedTeam = [
        {
            image: '/team/ceo-member.jpg',
            name: 'Chief Executive Officer',
            role: 'CEO & Co-Founder',
            icon: <Briefcase className="w-6 h-6" />,
            description: 'Visionary leader driving XyberClan\'s mission to deliver world-class digital solutions across Cameroon. Expert in strategic planning and business development.',
            expertise: ['Strategic Leadership', 'Business Development', 'Vision & Planning'],
            socials: [{ name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' }, { name: 'GitHub', icon: <Github size={20} />, url: '#' }]
        },
        {
            image: '/team/cto-redteamer.jpg',
            name: 'Chief Technology Officer',
            role: 'CTO & Security Expert',
            icon: <Shield className="w-6 h-6" />,
            description: 'Strategic technology leader and cybersecurity specialist ensuring robust security through penetration testing and threat protection.',
            expertise: ['Penetration Testing', 'Security Audits', 'Infrastructure Architecture'],
            socials: [{ name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' }, { name: 'GitHub', icon: <Github size={20} />, url: '#' }]
        },
        {
            image: '/team/dev-member.jpg',
            name: 'Lead Fullstack Developer',
            role: 'Senior Fullstack Engineer',
            icon: <Laptop className="w-6 h-6" />,
            description: 'Expert in modern web technologies and creating seamless user experiences. Passionate about clean code and innovative solutions.',
            expertise: ['React & Next.js', 'Node.js & APIs', 'Database Design'],
            socials: [{ name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' }, { name: 'GitHub', icon: <Github size={20} />, url: '#' }]
        },
        {
            image: '/team/web-designer.jpg',
            name: 'Lead Web Designer',
            role: 'Web Design Specialist',
            icon: <Palette className="w-6 h-6" />,
            description: 'Expert in creating stunning, user-friendly web interfaces. Specializes in modern design principles and responsive layouts.',
            expertise: ['Responsive Design', 'UI/UX Best Practices', 'Modern CSS'],
            socials: [{ name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' }, { name: 'GitHub', icon: <Github size={20} />, url: '#' }]
        },
        {
            image: '/team/cybersecurity-chief.jpg',
            name: 'Chief of Cybersecurity',
            role: 'Security Educator & Pentester',
            icon: <Shield className="w-6 h-6" />,
            description: 'Leads cybersecurity with expertise in penetration testing and security education. Protects and educates with passion.',
            expertise: ['Penetration Testing', 'Security Education', 'Backend Dev'],
            socials: [{ name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' }, { name: 'GitHub', icon: <Github size={20} />, url: '#' }]
        }
    ];

    const nextMember = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    const prevMember = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

    useEffect(() => {
        const interval = setInterval(nextMember, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>

            {/* Navigation */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className={`pointer-events-auto max-w-5xl w-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center transition-all duration-500 rounded-2xl ${isScrolled
                    ? (isDark ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-900/10' : 'bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl shadow-gray-200/50')
                    : 'bg-transparent'
                    }`}>
                    <a href="/" className="flex items-center gap-3 group cursor-pointer">
                        <img src="/team/logo.jpg" alt="XyberClan" className="w-14 h-14 object-contain rounded-xl" />
                        <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>XyberClan</span>
                    </a>

                    <div className="hidden lg:flex items-center space-x-1">
                        {['home', 'about', 'services', 'team', 'contact'].map((item) => (
                            <a key={item} href={item === 'team' ? '/team' : `/#${item}`} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-black hover:bg-black/5'}`}>
                                {t.nav[item]}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <button onClick={toggleTheme} className={`p-2.5 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-black hover:bg-black/5'}`}>
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={toggleLang} className={`p-2.5 rounded-lg font-bold text-xs transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-black hover:bg-black/5'}`}>
                            {lang.toUpperCase()}
                        </button>
                        <a href="/start-project" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-black/10 bg-black text-white hover:bg-gray-800">
                            {t.nav.getStarted}
                        </a>
                    </div>

                    <button className="lg:hidden p-2 rounded-lg text-inherit" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Team Hero Arc - Lowered and Carousel Animation */}
            <section className={`relative pt-56 pb-80 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 mb-8 animate-fade-in-up">
                        <Sparkles size={16} />
                        <span className="text-xs font-black uppercase tracking-widest">Global Talent</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 animate-fade-in-up delay-100">
                        Meet our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Team</span>
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-32 opacity-60 animate-fade-in-up delay-200 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Innovative minds working together to engineer Cameroon's digital future.
                    </p>

                    {/* Carousel Controls */}
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-10 flex justify-between z-20 pointer-events-none">
                        <button onClick={prevMember} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto">
                            <ChevronLeft size={32} />
                        </button>
                        <button onClick={nextMember} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto">
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* The Arc Visual - Larger Radius and Lowered */}
                    <div className="relative w-full max-w-6xl mx-auto h-[450px]">
                        <div className="absolute top-0 left-0 right-0 flex justify-center items-end">
                            {teamMembers.map((member, idx) => {
                                const total = teamMembers.length;
                                // Calculate distance from active index for the carousel effect
                                let diff = idx - activeIndex;
                                if (diff > total / 2) diff -= total;
                                if (diff < -total / 2) diff += total;

                                const angle = diff * 18; // Spread items
                                const radius = 650; // Larger radius for more curve
                                const x = Math.sin(angle * (Math.PI / 180)) * radius;
                                const y = (1 - Math.cos(angle * (Math.PI / 180))) * radius + 50; // Increased base 'y' offset

                                const isCenter = Math.abs(diff) < 0.1;
                                const isNear = Math.abs(diff) < 2;

                                return (
                                    <div
                                        key={idx}
                                        className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isCenter ? 'z-50' : 'z-10'} pointer-events-auto cursor-pointer`}
                                        onClick={() => setActiveIndex(idx)}
                                        style={{
                                            transform: `translate(${x}px, ${y}px) rotate(${angle}deg) scale(${isCenter ? 1.2 : 0.8})`,
                                            width: '240px',
                                            opacity: isNear ? 1 : 0.3,
                                            filter: isCenter ? 'none' : 'grayscale(50%) blur(1px)'
                                        }}
                                    >
                                        <div className={`relative p-3 rounded-[2.5rem] bg-neutral-900 border-4 ${isCenter ? 'border-cyan-500' : 'border-white/10'} shadow-2xl transition-all duration-500`}>
                                            <div className="aspect-[3.5/5] rounded-[2rem] overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {isCenter && (
                                                <div className="absolute -bottom-16 left-0 right-0 animate-fade-in text-center">
                                                    <h3 className="text-xl font-black text-white">{member.name}</h3>
                                                    <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">{member.role}</p>
                                                </div>
                                            )}

                                            <div className={`absolute inset-0 -z-10 bg-cyan-500/20 blur-3xl transition-opacity duration-700 ${isCenter ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Team Sections */}
            <div className="py-32 space-y-48">
                {detailedTeam.map((member, idx) => (
                    <section key={idx} className="px-4">
                        <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} relative group`}>
                                <div className="relative rounded-[4rem] overflow-hidden border border-white/10">
                                    <img src={member.image} alt={member.name} className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-12 left-12 p-8 bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10">
                                        <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-black mb-4 shadow-xl shadow-cyan-500/20">
                                            {member.icon}
                                        </div>
                                        <div className="text-white font-black text-3xl tracking-tighter uppercase">{member.role}</div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} space-y-10`}>
                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">{member.name}</h2>
                                <p className={`text-2xl leading-relaxed opacity-60 font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {member.description}
                                </p>

                                <div className="space-y-6">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] opacity-40">Core Expertise</p>
                                    <div className="flex flex-wrap gap-4">
                                        {member.expertise.map((skill, i) => (
                                            <span key={i} className={`px-6 py-3 rounded-2xl text-base font-bold border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/5 text-black'}`}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    {member.socials.map((social, i) => (
                                        <a key={i} href={social.url} className={`w-16 h-16 rounded-3xl flex items-center justify-center border transition-all hover:scale-110 ${isDark ? 'bg-neutral-900 border-neutral-800 text-white hover:border-cyan-500 hover:text-cyan-400' : 'bg-white border-gray-200 text-black hover:border-cyan-500 hover:text-cyan-600'}`}>
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <CTASection />
            <Footer translations={t} />
            <WhatsAppButton />

            <style>{`
                .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default TeamPage;
