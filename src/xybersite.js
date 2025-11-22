import React, { useState, useEffect } from 'react';
import { Shield, Eye, Zap, Cloud, FileCheck, Headphones, Lock, Target, ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';

const XyberClanWebsite = () => {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className={isDark ? 'text-white' : 'text-gray-900'}>Xyber</span>
                <span className="text-cyan-400">Clan</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`${isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'} transition-colors`}>Home</a>
              <a href="#about" className={`${isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'} transition-colors`}>About</a>
              <a href="#services" className={`${isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'} transition-colors`}>Services</a>
              <a href="#contact" className={`${isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'} transition-colors`}>Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2">Home</a>
              <a href="#about" className="block py-2">About</a>
              <a href="#services" className="block py-2">Services</a>
              <a href="#contact" className="block py-2">Contact</a>
              <button onClick={toggleTheme} className="flex items-center space-x-2 py-2">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>Toggle Theme</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Defending Your <span className="text-cyan-400 bg-cyan-400/10 px-4 py-2">Digital Future</span>
          </h1>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            XyberClan provides next-gen cybersecurity solutions to protect businesses from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Protected
            </button>
            <button className={`${isDark ? 'border-gray-700 hover:border-cyan-400 text-white' : 'border-gray-300 hover:border-cyan-600 text-gray-900'} border-2 px-8 py-3 rounded-lg font-semibold transition-colors`}>
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-cyan-400">XyberClan</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We're a team of elite cybersecurity specialists dedicated to protecting your digital assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Mission',
                desc: 'Empower organizations with intelligent, adaptive, and proactive cybersecurity solutions.'
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: 'Vision',
                desc: 'A safer digital world where businesses can operate without fear of cyber threats.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Why XyberClan',
                desc: 'Innovation, 24/7 threat monitoring, and a team of elite cybersecurity specialists.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8 rounded-xl border hover:border-cyan-400 transition-colors`}>
                <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* The Clan */}
          <div className={`${isDark ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20' : 'bg-gradient-to-r from-cyan-100 to-blue-100'} rounded-xl p-8 md:p-12`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">The Clan</h3>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Our team consists of industry veterans, ethical hackers, security analysts, and AI-driven security engineers with decades of combined experience.
                </p>
                <ul className="space-y-3">
                  {['Certified Ethical Hackers', 'AI Security Specialists', 'Threat Intelligence Analysts', 'Security Architects & Engineers', 'Compliance & Risk Specialists'].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg h-64 flex items-center justify-center`}>
                <Lock className="w-24 h-24 text-cyan-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive cybersecurity solutions designed to protect your business at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Threat Intelligence & Monitoring',
                desc: 'Real-time detection powered by AI and machine learning to identify and neutralize threats before they impact your business.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Penetration Testing',
                desc: 'Simulated attacks to expose vulnerabilities before attackers can exploit them, with detailed remediation guidance.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Incident Response & Recovery',
                desc: 'Rapid containment, mitigation, and restoration after a breach to minimize damage and downtime.'
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: 'Cloud Security',
                desc: 'Ensuring secure migration and monitoring across AWS, Azure, GCP with specialized cloud security controls.'
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: 'Compliance & Risk Assessment',
                desc: 'Helping companies meet standards like ISO 27001, SOC 2, GDPR, HIPAA with comprehensive assessments.'
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: 'Managed Security Services',
                desc: 'Fully outsourced cybersecurity operations backed by a dedicated security team available 24/7/365.'
              }
            ].map((service, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} p-6 rounded-xl border hover:border-cyan-400 transition-all hover:shadow-lg`}>
                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">Technology</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Cutting-edge proprietary technology that keeps you ahead of cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'ClanGuard™ AI',
                desc: 'Our adaptive threat-detection engine uses advanced machine learning to identify patterns and anomalies that traditional systems miss.',
                features: ['Self-learning algorithms that improve over time', 'Behavioral analysis to detect zero-day threats', 'Real-time threat intelligence integration']
              },
              {
                name: 'ZeroShield™ Framework',
                desc: 'Our zero-trust architecture builder ensures that no user or system is trusted by default.',
                features: ['Micro-segmentation for granular access control', 'Continuous authentication and authorization', 'Least privilege access enforcement']
              },
              {
                name: 'XyberSOC',
                desc: 'Our cloud-based Security Operations Console provides a unified interface for monitoring, defending your entire digital ecosystem.',
                features: ['Comprehensive dashboard with real-time alerts', 'Automated incident response workflows', 'Integration with existing security tools']
              },
              {
                name: 'Quantum-Ready Encryption',
                desc: 'Future-proof your data with our quantum-resistant encryption modules.',
                features: ['Post-quantum cryptographic algorithms', 'Seamless integration with current systems', 'Forward-secure key management']
              }
            ].map((tech, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8 rounded-xl border`}>
                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start space-x-2">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Success <span className="text-cyan-400">Stories</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Real-world examples of how we've helped organizations strengthen their security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Financial Services',
                title: 'Ransomware Attack Prevention',
                desc: 'A mid-sized financial institution faced a sophisticated ransomware attack. Our team detected and neutralized the threat before any data was compromised.',
                result: 'Zero data exfiltration, 84.3M+ potential damages avoided'
              },
              {
                category: 'SaaS Provider',
                title: 'Vulnerability Reduction Program',
                desc: 'We implemented a comprehensive vulnerability management program for a cloud-based SaaS provider, including regular penetration testing and detailed remediation.',
                result: 'Reduced security vulnerabilities by 89% in 6 months'
              },
              {
                category: 'Healthcare Organization',
                title: 'Enterprise Compliance Framework',
                desc: 'Developed and deployed a comprehensive compliance framework for a large healthcare organization, ensuring HIPAA and GDPR compliance.',
                result: 'Achieved 100% compliance and passed all audits'
              }
            ].map((story, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl overflow-hidden hover:shadow-xl transition-shadow`}>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-200'} h-48 flex items-center justify-center`}>
                  <Shield className="w-16 h-16 text-cyan-400/30" />
                </div>
                <div className="p-6">
                  <span className="text-cyan-400 text-sm font-semibold">{story.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{story.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{story.desc}</p>
                  <div className={`${isDark ? 'bg-cyan-900/20' : 'bg-cyan-50'} p-3 rounded-lg`}>
                    <p className="text-sm font-semibold text-cyan-400">Result:</p>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center space-x-2">
              <span>View All Case Studies</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="text-cyan-400">Insights</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Stay informed with the latest cybersecurity news, trends, and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Threat Intelligence',
                date: 'Oct 15, 2024',
                title: 'The Rise of Ransomware-as-a-Service: What Businesses Need to Know',
                desc: 'Ransomware-as-a-Service has democratized cybercrime. Learn how this subscription-based model is changing the threat landscape.'
              },
              {
                category: 'Best Practices',
                date: 'Sep 28, 2024',
                title: 'Zero Trust Architecture: Beyond the Buzzword',
                desc: 'Zero Trust is more than just a trendy concept. Discover how to implement it effectively in your organization.'
              },
              {
                category: 'Technology',
                date: 'Sep 10, 2024',
                title: 'AI in Cybersecurity: Friend or Foe?',
                desc: 'Artificial intelligence is transforming both offensive and defensive cybersecurity. Here\'s what you need to know.'
              }
            ].map((article, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-xl overflow-hidden hover:shadow-xl transition-shadow`}>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-200'} h-48 flex items-center justify-center`}>
                  <Lock className="w-16 h-16 text-cyan-400/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 text-sm font-semibold">{article.category}</span>
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{article.desc}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center space-x-1">
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className={`${isDark ? 'border-gray-700 hover:border-cyan-400' : 'border-gray-300 hover:border-cyan-600'} border-2 px-6 py-3 rounded-lg font-semibold transition-colors`}>
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get <span className="text-cyan-400">Protected</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to strengthen your security posture? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`${isDark ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400`}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`${isDark ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className={`${isDark ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400`}
                />
                <select className={`${isDark ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400`}>
                  <option>Select a service</option>
                  <option>Threat Intelligence & Monitoring</option>
                  <option>Penetration Testing</option>
                  <option>Incident Response</option>
                  <option>Cloud Security</option>
                  <option>Compliance & Risk Assessment</option>
                  <option>Managed Security Services</option>
                </select>
                <textarea
                  placeholder="Tell us about your security needs..."
                  rows="4"
                  className={`${isDark ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400`}
                ></textarea>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="agree" className="mt-1" />
                  <label htmlFor="agree" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    I agree to the privacy policy and terms of service
                  </label>
                </div>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Submit Request
                </button>
                <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  🔒 Secure Form - Your information is encrypted
                </p>
              </form>
            </div>

            {/* Why Choose & Emergency */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose XyberClan</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: 'Elite Expertise',
                      desc: 'Our team consists of certified security professionals with experience protecting Fortune 500 companies.'
                    },
                    {
                      icon: <Eye className="w-5 h-5" />,
                      title: '24/7 Protection',
                      desc: 'Our Security Operations Center monitors your systems around the clock, ensuring no threat goes undetected.'
                    },
                    {
                      icon: <Lock className="w-5 h-5" />,
                      title: 'Proprietary Technology',
                      desc: 'Our advanced security solutions leverage AI and machine learning to stay ahead of evolving threats.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Emergency Response</h4>
                <p className="text-sm mb-4 text-cyan-50">
                  Experiencing a security incident? Our rapid response team is available 24/7.
                </p>
                <div className="space-y-2">
                  <a href="tel:+237673806298" className="flex items-center space-x-2 text-white hover:text-cyan-100">
                    <span>📞</span>
                    <span className="font-semibold">+237 673806298</span>
                  </a>
                  <a href="mailto:xyberclan@gmail.com" className="flex items-center space-x-2 text-white hover:text-cyan-100">
                    <span>✉️</span>
                    <span className="font-semibold">xyberclan@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-950 border-gray-900' : 'bg-gray-900 text-white'} border-t py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Xyber</span>
                <span className="text-cyan-400">Clan</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Fortifying the Future</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Threat Intelligence</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Penetration Testing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Incident Response</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cloud Security</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">News</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Whitepapers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 XyberClan — Fortifying the Future. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default XyberClanWebsite;