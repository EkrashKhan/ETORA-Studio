import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  Globe,
  Shield,
  Share2,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from 'lucide-react';
import { ContactFormData } from '../types';
import { ETORA_CONTACT } from '../data/content';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpalvww';

const INDUSTRY_OPTIONS = [
  'Restaurant / Cafe',
  'Real Estate',
  'Local Services',
  'E-commerce',
  'Professional Services',
  'Consultancy',
  'Healthcare',
  'Construction',
  'Hospitality / Tourism',
  'Other',
];

const SERVICE_OPTIONS = [
  'New Website',
  'Website Redesign',
  'Landing Page',
  'E-commerce Website',
  'Mobile App',
  'Custom Web Solution',
  'SEO / Local SEO',
  'Social Media / Content',
  'Paid Advertising',
  'Marketing Automation',
  'AI Chatbot',
  'Other',
];

const BUDGET_OPTIONS = [
  'Not sure yet',
  'Under $500',
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    websiteUrl: '',
    serviceType: 'New Website',
    budget: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Your name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.serviceType) {
      errors.serviceType = 'Please select what you need.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide details about your message & goals.';
    }

    if (!formData.consent) {
      errors.consent = 'Please agree to be contacted regarding your project enquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        business_name: formData.businessName?.trim() || undefined,
        email: formData.email.trim(),
        phone: formData.phone?.trim() || undefined,
        industry: formData.industry || undefined,
        website: formData.websiteUrl?.trim() || undefined,
        service: formData.serviceType,
        budget: formData.budget || undefined,
        message: formData.message.trim(),
        consent: formData.consent ? 'Agreed' : 'Not agreed',
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          'Something went wrong while sending your enquiry. Please try again.'
        );
      }
    } catch {
      setErrorMessage(
        'Something went wrong while sending your enquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFieldErrors({});
    setErrorMessage('');
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      industry: '',
      websiteUrl: '',
      serviceType: 'New Website',
      budget: '',
      message: '',
      consent: false,
    });
  };

  const hasAnySocial = Boolean(
    ETORA_CONTACT.instagram ||
      ETORA_CONTACT.linkedin ||
      ETORA_CONTACT.facebook ||
      ETORA_CONTACT.twitter
  );

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0E1116] border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-[-100px] w-[400px] h-[400px] bg-[#7C5CFC] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#7C5CFC]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight">
              Let's Talk About <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] to-[#A78BFA]">
                Your Project.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
              Have an existing website that needs work, or starting from scratch? Tell us a little about what you need.
            </p>

            {/* Direct Inquiries & Channels Card */}
            <div className="p-6 rounded-xl bg-[#12151C] border border-white/10 space-y-4 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F7FA]">
                Direct Inquiries & Channels
              </div>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#9AA3AF]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono block text-[#9AA3AF]">
                      STUDIO EMAIL
                    </span>
                    {ETORA_CONTACT.email ? (
                      <a
                        href={`mailto:${ETORA_CONTACT.email}`}
                        className="font-mono text-[#A78BFA] hover:text-[#F5F7FA] font-medium text-xs transition-colors"
                      >
                        {ETORA_CONTACT.email}
                      </a>
                    ) : (
                      <>
                        <span className="font-semibold text-[#F5F7FA] text-xs">
                          Coming soon
                        </span>
                        <p className="text-[11px] text-[#9AA3AF]/80 mt-0.5 leading-snug">
                          Our official business email will be available shortly.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#9AA3AF]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono block text-[#9AA3AF]">
                      WHATSAPP DIRECT
                    </span>
                    {ETORA_CONTACT.whatsapp ? (
                      <a
                        href={`https://wa.me/${ETORA_CONTACT.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[#A78BFA] hover:text-[#F5F7FA] font-medium text-xs transition-colors"
                      >
                        {ETORA_CONTACT.whatsapp}
                      </a>
                    ) : (
                      <>
                        <span className="font-semibold text-[#F5F7FA] text-xs">
                          Coming soon
                        </span>
                        <p className="text-[11px] text-[#9AA3AF]/80 mt-0.5 leading-snug">
                          Direct WhatsApp support will be available shortly.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Social Presence */}
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#9AA3AF]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] shrink-0 mt-0.5">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono block text-[#9AA3AF]">
                      SOCIAL PRESENCE
                    </span>
                    {hasAnySocial ? (
                      <div className="flex items-center gap-3 mt-1.5">
                        {ETORA_CONTACT.instagram && (
                          <a
                            href={ETORA_CONTACT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA3AF] hover:text-[#A78BFA] transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {ETORA_CONTACT.linkedin && (
                          <a
                            href={ETORA_CONTACT.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA3AF] hover:text-[#A78BFA] transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {ETORA_CONTACT.facebook && (
                          <a
                            href={ETORA_CONTACT.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA3AF] hover:text-[#A78BFA] transition-colors"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </a>
                        )}
                        {ETORA_CONTACT.twitter && (
                          <a
                            href={ETORA_CONTACT.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA3AF] hover:text-[#A78BFA] transition-colors"
                            aria-label="X"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <>
                        <span className="font-semibold text-[#F5F7FA] text-xs">
                          Launching soon
                        </span>
                        <p className="text-[11px] text-[#9AA3AF]/80 mt-0.5 leading-snug">
                          Follow ETORA Studio once our official social profiles go live.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Coverage */}
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#9AA3AF]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono block text-[#9AA3AF]">
                      PRIMARY COVERAGE
                    </span>
                    <span className="text-[#F5F7FA] font-medium text-xs">
                      USA (EST/PST) • UK (GMT) • UAE (GST)
                    </span>
                  </div>
                </div>
              </div>

              {/* Conversion Prompt Note */}
              <div className="pt-3 border-t border-white/5 text-[11px] text-[#A78BFA] font-medium">
                For project enquiries, please use the form.
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#9AA3AF]">
                <Shield className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Direct consultation with the studio founders.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Questionnaire Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#12151C] border border-white/10 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-[#F5F7FA]">
                      Project Questionnaire
                    </h3>
                    <p className="text-xs text-[#9AA3AF] mt-1">
                      Share the details of what you are aiming to build or improve.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Your Name <span className="text-[#7C5CFC]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) {
                            setFieldErrors({ ...fieldErrors, name: '' });
                          }
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none transition-colors ${
                          fieldErrors.name
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#7C5CFC]'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business_name"
                        placeholder="Company or trade name"
                        value={formData.businessName || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessName: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none focus:border-[#7C5CFC] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & WhatsApp / Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Email Address <span className="text-[#7C5CFC]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) {
                            setFieldErrors({ ...fieldErrors, email: '' });
                          }
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none transition-colors ${
                          fieldErrors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#7C5CFC]'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone || ''}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none focus:border-[#7C5CFC] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Industry & Current Website URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Industry / Business Type
                      </label>
                      <select
                        name="industry"
                        value={formData.industry || ''}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] text-sm focus:outline-none focus:border-[#7C5CFC] transition-colors"
                      >
                        <option value="" className="bg-[#161A22] text-[#9AA3AF]">
                          Select industry (optional)
                        </option>
                        {INDUSTRY_OPTIONS.map((ind) => (
                          <option
                            key={ind}
                            value={ind}
                            className="bg-[#161A22] text-[#F5F7FA]"
                          >
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Current Website URL
                      </label>
                      <input
                        type="text"
                        name="website"
                        placeholder="www.yourcurrentsite.com"
                        value={formData.websiteUrl || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            websiteUrl: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none focus:border-[#7C5CFC] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Service & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        What do you need? <span className="text-[#7C5CFC]">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.serviceType}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            serviceType: e.target.value,
                          });
                          if (fieldErrors.serviceType) {
                            setFieldErrors({
                              ...fieldErrors,
                              serviceType: '',
                            });
                          }
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border text-[#F5F7FA] text-sm focus:outline-none transition-colors ${
                          fieldErrors.serviceType
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#7C5CFC]'
                        }`}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-[#161A22] text-[#F5F7FA]"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.serviceType && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {fieldErrors.serviceType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget || ''}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] text-sm focus:outline-none focus:border-[#7C5CFC] transition-colors"
                      >
                        <option value="" className="bg-[#161A22] text-[#9AA3AF]">
                          Select budget (optional)
                        </option>
                        {BUDGET_OPTIONS.map((b) => (
                          <option
                            key={b}
                            value={b}
                            className="bg-[#161A22] text-[#F5F7FA]"
                          >
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message & Goals */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                      Message & Goals <span className="text-[#7C5CFC]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your business, current bottlenecks, and what a successful website would do for you."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) {
                          setFieldErrors({ ...fieldErrors, message: '' });
                        }
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border text-[#F5F7FA] placeholder-[#9AA3AF]/40 text-sm focus:outline-none transition-colors resize-y ${
                        fieldErrors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/10 focus:border-[#7C5CFC]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-[11px] text-red-400 mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Required Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          });
                          if (fieldErrors.consent) {
                            setFieldErrors({ ...fieldErrors, consent: '' });
                          }
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#161A22] text-[#7C5CFC] focus:ring-[#7C5CFC] focus:ring-offset-[#12151C] accent-[#7C5CFC]"
                      />
                      <span className="text-xs text-[#9AA3AF] leading-relaxed">
                        I agree to be contacted regarding my project enquiry.{' '}
                        <span className="text-[#7C5CFC]">*</span>
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p className="text-[11px] text-red-400 mt-1 pl-7">
                        {fieldErrors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.98] text-white text-sm transition-all duration-200 shadow-[0_0_25px_rgba(124,92,252,0.25)] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Details</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Extra Note Below Form */}
                  <p className="text-[11px] text-[#9AA3AF]/80 leading-relaxed pt-2">
                    Prefer to keep things simple? Tell us what you need in the form and we'll take it from there.
                  </p>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/50 text-[#A78BFA] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F7FA]">
                    Thanks — your project details have been received. We'll get back to you soon.
                  </h3>
                  <p className="text-sm text-[#9AA3AF] max-w-md mx-auto leading-relaxed">
                    A studio founder will review your requirements for{' '}
                    <strong className="text-[#F5F7FA]">{formData.serviceType}</strong>{' '}
                    and follow up directly at{' '}
                    <strong className="text-[#F5F7FA] font-mono">{formData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F5F7FA] transition-colors cursor-pointer"
                    >
                      <span>Send Another Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
