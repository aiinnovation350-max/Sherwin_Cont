import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { SERVICES, INDUSTRIES, COMPANY_DETAILS } from '../data/companyData';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialFrequency?: string;
  initialIndustry?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialFrequency = 'Not Sure',
  initialIndustry = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    facilityType: initialIndustry || 'Corporate Offices',
    requiredService: initialService || SERVICES[0].title,
    preferredFrequency: (initialFrequency as any) || 'Not Sure',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, requiredService: initialService }));
    }
    if (initialFrequency) {
      setFormData(prev => ({ ...prev, preferredFrequency: initialFrequency as any }));
    }
    if (initialIndustry) {
      setFormData(prev => ({ ...prev, facilityType: initialIndustry }));
    }
  }, [initialService, initialFrequency, initialIndustry]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot trapped
    setSubmitting(true);

    // Simulate verified form transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Facility Proposal
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Request a Free Quote
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              No lock-in contracts • Transparent pricing • Fast response in Doha, Qatar
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900">
                Thank You, {formData.fullName}!
              </h4>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your request for <strong>{formData.requiredService}</strong> has been logged. A Sharwin operations manager in Doha will review your requirements and reach out at <strong>{formData.phone || formData.email}</strong> promptly.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-600">
                <div><span className="font-semibold text-slate-900">Facility Type:</span> {formData.facilityType}</div>
                <div><span className="font-semibold text-slate-900">Preferred Frequency:</span> {formData.preferredFrequency}</div>
                <div><span className="font-semibold text-slate-900">Service:</span> {formData.requiredService}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field for bot protection */}
              <input 
                type="text" 
                name="website_quiz" 
                value={honeypot} 
                onChange={(e) => setHoneypot(e.target.value)} 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Abdullah Al-Thani"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm outline-hidden transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organisation Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Al Rayyan Properties"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (Qatar) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+974 5000 0000"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm outline-hidden transition-all"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@company.qa"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm outline-hidden transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Facility Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Facility Type
                  </label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 text-sm outline-hidden bg-white"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name}</option>
                    ))}
                    <option value="Other Facility">Other Commercial Facility</option>
                  </select>
                </div>

                {/* Required Service */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Required Service
                  </label>
                  <select
                    value={formData.requiredService}
                    onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 text-sm outline-hidden bg-white"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>{srv.title}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Frequency */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Frequency
                  </label>
                  <select
                    value={formData.preferredFrequency}
                    onChange={(e) => setFormData({ ...formData, preferredFrequency: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 text-sm outline-hidden bg-white"
                  >
                    <option value="Not Sure">Not Sure / Recommend</option>
                    <option value="One-Off">One-Off Intervention</option>
                    <option value="Periodic">Periodic Scheduled</option>
                    <option value="Regular">Regular Contract</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Scope Details / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share facility size, specific access times, or particular problem areas (e.g. carpet stains, glass facade, commercial kitchen)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm outline-hidden transition-all"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Your corporate information is treated with strict confidentiality.
                </span>
                <span className="text-[11px] font-semibold text-sky-700">Sharwin CC Qatar</span>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Submitting...' : 'Submit Quote Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
