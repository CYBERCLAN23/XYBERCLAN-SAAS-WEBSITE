import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Send, Mail, MessageCircle, Check, Globe } from 'lucide-react';
import { translations } from './translations';

const ProjectForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState('forward');
    const [lang, setLang] = useState('en');
    const t = translations[lang];

    const [formData, setFormData] = useState({
        projectType: '',
        projectName: '',
        description: '',
        timeline: '',
        budget: '',
        contactName: '',
        contactPhone: '',
        contactEmail: ''
    });

    const questions = [
        {
            id: 'projectType',
            question: t.form.questions.projectType,
            type: 'choice',
            options: [
                { value: 'web', label: t.form.options.web, icon: '🌐' },
                { value: 'mobile', label: t.form.options.mobile, icon: '📱' },
                { value: 'design', label: t.form.options.design, icon: '🎨' },
                { value: 'cybersec', label: t.form.options.cybersec, icon: '🔒' },
                { value: 'hardware', label: t.form.options.hardware, icon: '🖥️' },
                { value: 'training', label: t.form.options.training, icon: '📚' }
            ]
        },
        {
            id: 'projectName',
            question: t.form.questions.projectName,
            type: 'text',
            placeholder: t.form.placeholders.projectName
        },
        {
            id: 'description',
            question: t.form.questions.description,
            type: 'textarea',
            placeholder: t.form.placeholders.description
        },
        {
            id: 'timeline',
            question: t.form.questions.timeline,
            type: 'choice',
            options: [
                { value: 'asap', label: t.form.options.asap, icon: '⚡' },
                { value: '1-2weeks', label: t.form.options.weeks, icon: '📅' },
                { value: '1month', label: t.form.options.month, icon: '📆' },
                { value: '2-3months', label: t.form.options.months, icon: '🗓️' },
                { value: 'flexible', label: t.form.options.flexible, icon: '🔄' }
            ]
        },
        {
            id: 'budget',
            question: t.form.questions.budget,
            type: 'choice',
            options: [
                { value: 'under100k', label: t.form.options.under100k, icon: '💰' },
                { value: '100k-500k', label: t.form.options.range1, icon: '💵' },
                { value: '500k-1m', label: t.form.options.range2, icon: '💸' },
                { value: '1m+', label: t.form.options.over1m, icon: '💎' },
                { value: 'notsure', label: t.form.options.notSure, icon: '🤔' }
            ]
        },
        {
            id: 'contact',
            question: t.form.questions.contact,
            type: 'contact',
            fields: [
                { id: 'contactName', label: t.form.contactLabels.name, placeholder: t.form.placeholders.contactName, type: 'text' },
                { id: 'contactPhone', label: t.form.contactLabels.phone, placeholder: t.form.placeholders.contactPhone, type: 'tel' },
                { id: 'contactEmail', label: t.form.contactLabels.email, placeholder: t.form.placeholders.contactEmail, type: 'email' }
            ]
        }
    ];

    const [theme, setTheme] = useState('light');
    const isDark = theme === 'dark';

    // Detect theme from parent if available
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
    }, []);

    const handleNext = () => {
        if (isStepValid()) {
            setDirection('forward');
            setCurrentStep(prev => Math.min(prev + 1, questions.length));
        }
    };

    const handlePrevious = () => {
        setDirection('backward');
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };

    const handleChoice = (value) => {
        const currentQuestion = questions[currentStep];
        setFormData(prev => ({ ...prev, [currentQuestion.id]: value }));
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleLang = () => {
        setLang(lang === 'en' ? 'fr' : 'en');
    };

    const isStepValid = () => {
        const currentQuestion = questions[currentStep];
        if (currentQuestion.type === 'choice') {
            return formData[currentQuestion.id] !== '';
        } else if (currentQuestion.type === 'text' || currentQuestion.type === 'textarea') {
            return formData[currentQuestion.id]?.trim() !== '';
        } else if (currentQuestion.type === 'contact') {
            return formData.contactName?.trim() !== '' &&
                formData.contactPhone?.trim() !== '' &&
                formData.contactEmail?.trim() !== '';
        }
        return true;
    };

    const progress = ((currentStep) / questions.length) * 100;

    const generateWhatsAppMessage = () => {
        const projectTypeLabels = {
            web: t.form.options.web,
            mobile: t.form.options.mobile,
            design: t.form.options.design,
            cybersec: t.form.options.cybersec,
            hardware: t.form.options.hardware,
            training: t.form.options.training
        };

        const timelineLabels = {
            asap: t.form.options.asap,
            '1-2weeks': t.form.options.weeks,
            '1month': t.form.options.month,
            '2-3months': t.form.options.months,
            flexible: t.form.options.flexible
        };

        const budgetLabels = {
            'under100k': t.form.options.under100k,
            '100k-500k': t.form.options.range1,
            '500k-1m': t.form.options.range2,
            '1m+': t.form.options.over1m,
            notsure: t.form.options.notSure
        };

        const message = `Hello XyberClan! 👋

I'm interested in working with you on a project:

📋 *Project Details:*
• Type: ${projectTypeLabels[formData.projectType] || formData.projectType}
• Name: ${formData.projectName}
• Description: ${formData.description}

⏰ *Timeline:* ${timelineLabels[formData.timeline] || formData.timeline}
💰 *Budget:* ${budgetLabels[formData.budget] || formData.budget}

👤 *Contact Information:*
• Name: ${formData.contactName}
• Phone: ${formData.contactPhone}
• Email: ${formData.contactEmail}

Looking forward to hearing from you!`;

        return encodeURIComponent(message);
    };

    const generateEmailContent = () => {
        const projectTypeLabels = {
            web: t.form.options.web,
            mobile: t.form.options.mobile,
            design: t.form.options.design,
            cybersec: t.form.options.cybersec,
            hardware: t.form.options.hardware,
            training: t.form.options.training
        };

        const subject = `New Project Inquiry: ${formData.projectName}`;
        const body = `Hello XyberClan Team,

I'm interested in working with you on a project. Here are the details:

PROJECT DETAILS:
- Type: ${projectTypeLabels[formData.projectType] || formData.projectType}
- Name: ${formData.projectName}
- Description: ${formData.description}

TIMELINE: ${formData.timeline}
BUDGET: ${formData.budget}

CONTACT INFORMATION:
- Name: ${formData.contactName}
- Phone: ${formData.contactPhone}
- Email: ${formData.contactEmail}

Looking forward to hearing from you!

Best regards,
${formData.contactName}`;

        return {
            subject: encodeURIComponent(subject),
            body: encodeURIComponent(body)
        };
    };

    const handleWhatsAppSend = () => {
        const message = generateWhatsAppMessage();
        const whatsappUrl = `https://wa.me/237654269488?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailSend = () => {
        const { subject, body } = generateEmailContent();
        const emailUrl = `mailto:contact@xyberclan.com?subject=${subject}&body=${body}`;
        window.location.href = emailUrl;
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
            {/* Header */}
            <div className={`fixed w-full z-50 ${isDark ? 'bg-gray-950/80' : 'bg-white/80'} backdrop-blur-xl border-b ${isDark ? 'border-cyan-500/10' : 'border-gray-200/50'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="/" className="flex items-center group cursor-pointer">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <span className="relative text-3xl font-black tracking-tight">
                                    <span className={`${isDark ? 'text-white' : 'text-gray-900'} transition-colors`}>Xyber</span>
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clan</span>
                                </span>
                            </div>
                        </a>

                        <div className="flex items-center gap-4">
                            {/* Language Toggle Button */}
                            <button
                                onClick={toggleLang}
                                className={`p-2 rounded-xl ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300'} transition-all duration-300 hover:scale-110 shadow-lg ${isDark ? 'shadow-cyan-500/10' : 'shadow-gray-300/50'}`}
                                aria-label="Toggle language"
                            >
                                <div className="flex items-center gap-1 font-bold text-sm">
                                    <Globe className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{lang.toUpperCase()}</span>
                                </div>
                            </button>

                            <a
                                href="/"
                                className={`text-sm font-semibold ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                            >
                                ← {t.form.backToHome}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="fixed top-20 left-0 right-0 z-40">
                <div className={`h-1 ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`}>
                    <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Step Counter */}
                    <div className="text-center mb-8">
                        <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t.form.step} {currentStep + 1} {t.form.of} {questions.length + 1}
                        </p>
                    </div>

                    {/* Question Container */}
                    {currentStep < questions.length ? (
                        <div className="relative overflow-hidden">
                            <div
                                key={currentStep}
                                className={`question-slide ${direction === 'forward' ? 'slide-in-right' : 'slide-in-left'}`}
                            >
                                <div className={`${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800' : 'bg-white border-gray-200'} border rounded-3xl p-10 md:p-14 shadow-2xl`}>
                                    <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-tight">
                                        {questions[currentStep].question}
                                    </h2>

                                    {/* Choice Type */}
                                    {questions[currentStep].type === 'choice' && (
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {questions[currentStep].options.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => handleChoice(option.value)}
                                                    className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-left ${formData[questions[currentStep].id] === option.value
                                                            ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                                            : `${isDark ? 'border-gray-700 hover:border-cyan-400/50 bg-gray-800/50' : 'border-gray-200 hover:border-cyan-400/50 bg-gray-50'}`
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-3xl">{option.icon}</span>
                                                        <span className="text-lg font-semibold">{option.label}</span>
                                                        {formData[questions[currentStep].id] === option.value && (
                                                            <Check className="w-6 h-6 text-cyan-500 ml-auto" />
                                                        )}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Text Input Type */}
                                    {questions[currentStep].type === 'text' && (
                                        <input
                                            type="text"
                                            value={formData[questions[currentStep].id] || ''}
                                            onChange={(e) => handleInputChange(questions[currentStep].id, e.target.value)}
                                            placeholder={questions[currentStep].placeholder}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 text-lg ${isDark
                                                    ? 'bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500'
                                                    : 'bg-white border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400'
                                                } focus:outline-none transition-colors`}
                                        />
                                    )}

                                    {/* Textarea Type */}
                                    {questions[currentStep].type === 'textarea' && (
                                        <textarea
                                            value={formData[questions[currentStep].id] || ''}
                                            onChange={(e) => handleInputChange(questions[currentStep].id, e.target.value)}
                                            placeholder={questions[currentStep].placeholder}
                                            rows={6}
                                            className={`w-full px-6 py-4 rounded-2xl border-2 text-lg resize-none ${isDark
                                                    ? 'bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500'
                                                    : 'bg-white border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400'
                                                } focus:outline-none transition-colors`}
                                        />
                                    )}

                                    {/* Contact Type */}
                                    {questions[currentStep].type === 'contact' && (
                                        <div className="space-y-5">
                                            {questions[currentStep].fields.map((field) => (
                                                <div key={field.id}>
                                                    <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {field.label}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        value={formData[field.id] || ''}
                                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                        placeholder={field.placeholder}
                                                        className={`w-full px-6 py-4 rounded-2xl border-2 text-lg ${isDark
                                                                ? 'bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500'
                                                                : 'bg-white border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400'
                                                            } focus:outline-none transition-colors`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Summary Page
                        <div className={`question-slide slide-in-right ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800' : 'bg-white border-gray-200'} border rounded-3xl p-10 md:p-14 shadow-2xl`}>
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                                    <Check className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                                    {t.form.summaryTitle}
                                </h2>
                                <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {t.form.summaryDesc}
                                </p>
                            </div>

                            <div className={`${isDark ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-2xl p-8 mb-10 space-y-6`}>
                                <div>
                                    <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.projectType}</p>
                                    <p className="text-lg font-bold">{formData.projectType}</p>
                                </div>
                                <div>
                                    <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.projectName}</p>
                                    <p className="text-lg font-bold">{formData.projectName}</p>
                                </div>
                                <div>
                                    <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.description}</p>
                                    <p className="text-lg">{formData.description}</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.timeline}</p>
                                        <p className="text-lg font-bold">{formData.timeline}</p>
                                    </div>
                                    <div>
                                        <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.budget}</p>
                                        <p className="text-lg font-bold">{formData.budget}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.contactInfo}</p>
                                    <div className="space-y-1">
                                        <p className="text-lg"><span className="font-semibold">{t.form.name}</span> {formData.contactName}</p>
                                        <p className="text-lg"><span className="font-semibold">{t.form.phone}</span> {formData.contactPhone}</p>
                                        <p className="text-lg"><span className="font-semibold">{t.form.email}</span> {formData.contactEmail}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-center text-lg font-semibold mb-6">{t.form.chooseSend}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <button
                                        onClick={handleWhatsAppSend}
                                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        {t.form.sendWhatsApp}
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleEmailSend}
                                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1"
                                    >
                                        <Mail className="w-6 h-6" />
                                        {t.form.sendEmail}
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {currentStep < questions.length && (
                        <div className="flex justify-between items-center mt-10">
                            <button
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${currentStep === 0
                                        ? 'opacity-0 pointer-events-none'
                                        : `${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                {t.form.previous}
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${isStepValid()
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                                        : `${isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`
                                    }`}
                            >
                                {t.form.next}
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {currentStep === questions.length && (
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={handlePrevious}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                {t.form.backToEdit}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }

        .slide-in-left {
          animation: slideInLeft 0.5s ease-out;
        }

        .question-slide {
          animation-fill-mode: both;
        }
      `}</style>
        </div>
    );
};

export default ProjectForm;
