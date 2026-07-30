'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, Send, Clock, Check } from 'lucide-react';
import { useAudio } from '@/app/context/AudioContext'; // Adjust path if needed

export default function ContactForm() {
  const { playSound } = useAudio();
  const [inquiryType, setInquiryType] = useState('Frontend Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playSound(); // Trigger click sound on submission
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          subject: inquiryType,
          message: message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      // Reset form fields
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="card-light p-6 sm:p-8 space-y-6 bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden"
    >
      {/* Subtle Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500" />

      {/* Stylish Header Section with Incorporated Text */}
      <div className="space-y-3 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-heading text-xl font-extrabold text-slate-900 tracking-tight">
            Send a Message
          </h3>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-mono font-medium border border-emerald-200/60">
            <Clock className="w-3 h-3 text-emerald-600" />
            <span>RESPONSE TIME &lt; 24 HOURS</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          Interested in working together? Share some details and I will get back to you within 24 hours.
        </p>
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 text-red-800 text-xs font-mono flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Inquiry Type Selection */}
      <div className="space-y-2.5">
        <label className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">
          Select Inquiry Type
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'Frontend Role', label: 'Frontend Engineer Role' },
            { id: 'Design System', label: 'Design System Project' },
            { id: 'Contract', label: 'Contract Development' },
          ].map((type) => {
            const isSelected = inquiryType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => {
                  playSound();
                  setInquiryType(type.id);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-150 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:border-indigo-200'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="senderName" className="text-xs font-mono font-medium text-slate-700 block">
          Your Name <span className="text-indigo-600">*</span>
        </label>
        <input
          type="text"
          id="senderName"
          required
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="e.g. Alex Morgan"
          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="senderEmail" className="text-xs font-mono font-medium text-slate-700 block">
          Email Address <span className="text-indigo-600">*</span>
        </label>
        <input
          type="email"
          id="senderEmail"
          required
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="email@company.com"
          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="senderMessage" className="text-xs font-mono font-medium text-slate-700 block">
            Message <span className="text-indigo-600">*</span>
          </label>
          <span className="text-[10px] font-mono text-slate-400">{message.length} / 500</span>
        </div>
        <textarea
          id="senderMessage"
          rows={4}
          maxLength={500}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Details regarding your project requirements, scope, or job opportunity..."
          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white py-3 px-6 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      {/* Success Notification */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-mono flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <strong className="block font-bold text-slate-900">Message Delivered</strong>
            <span className="text-slate-600">Thank you! I will get back to you shortly.</span>
          </div>
        </div>
      )}
    </form>
  );
}