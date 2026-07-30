import { MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function RelocationCard() {
  return (
    <div className="card-light p-6 space-y-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
          Location & Mobility Status
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-mono font-bold border border-indigo-200/60">
          <Globe className="w-3 h-3 text-indigo-600" />
          <span>OPEN TO RELOCATION & HYBRID</span>
        </span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        {/* Current Base */}
        <div className="flex items-start gap-2.5 text-slate-800">
          <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wide">Current Base</span>
            <span className="font-semibold text-slate-900">Zenica / Sarajevo, Bosnia & Herzegovina</span>
          </div>
        </div>

        {/* Mobility Preference */}
        <div className="flex items-start gap-2.5 text-slate-700">
          <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wide">Work Preference</span>
            <span>Available for <strong className="text-slate-900 font-semibold">European Relocation</strong>, Onsite/Hybrid, or Remote Roles</span>
          </div>
        </div>

        {/* Credentials */}
        <div className="flex items-start gap-2.5 text-slate-700 pt-1 border-t border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wide">Eligibility & Language</span>
            <span className="text-slate-900 font-semibold">EU Blue Card Eligible • German B1 (ÖSD) Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}