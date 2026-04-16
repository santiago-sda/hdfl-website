"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { whatHappensNext } from "@/lib/data";

interface FormState {
  orgName: string;
  industry: string;
  contactName: string;
  email: string;
  semester: string;
  challenge: string;
  dataAvailable: string;
  track: string;
  successDefinition: string;
}

const initialState: FormState = {
  orgName: "",
  industry: "",
  contactName: "",
  email: "",
  semester: "",
  challenge: "",
  dataAvailable: "",
  track: "",
  successDefinition: "",
};

const inputClass =
  "bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-black/30 focus:outline-none focus:border-um-orange/60 focus:ring-1 focus:ring-um-orange/20 transition-colors w-full";

const labelClass = "block text-xs font-semibold tracking-wide text-text-muted uppercase mb-1.5";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at dfl@miami.edu.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col py-8 gap-6"
      >
        {/* Check */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0,80,48,0.15)', border: '1px solid rgba(74,222,128,0.3)' }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#4ade80' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">Application Received</h3>
            <p className="text-sm text-text-muted">Our Lab director will be in touch within 5 business days.</p>
          </div>
        </div>

        {/* What happens next */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">What Happens Next</p>
          <ol className="space-y-3">
            {whatHappensNext.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="w-5 h-5 rounded-full bg-um-orange/12 text-um-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <button
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          className="text-sm text-um-orange hover:underline self-start"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Row 1: Org + Industry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Organization Name</label>
          <input type="text" name="orgName" value={form.orgName} onChange={handleChange} required placeholder="Acme Corp" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Industry</label>
          <input type="text" name="industry" value={form.industry} onChange={handleChange} required placeholder="e.g. Financial Services" className={inputClass} />
        </div>
      </div>

      {/* Row 2: Contact + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Contact Name & Title</label>
          <input type="text" name="contactName" value={form.contactName} onChange={handleChange} required placeholder="Jane Smith, VP of Operations" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>

      {/* Row 3: Semester + Track */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Preferred Semester</label>
          <select name="semester" value={form.semester} onChange={handleChange} required className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select semester...</option>
            <option value="fall-2025">Fall 2025</option>
            <option value="spring-2026">Spring 2026</option>
            <option value="fall-2026">Fall 2026</option>
            <option value="spring-2027">Spring 2027</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Preferred Capability Solution</label>
          <select name="track" value={form.track} onChange={handleChange} required className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select solution...</option>
            <option value="hcd">HCD & Product Design</option>
            <option value="ai">AI Engineering</option>
            <option value="bi">BI & Dashboards</option>
            <option value="capstone">Graduate Capstone</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
      </div>

      {/* Challenge */}
      <div>
        <label className={labelClass}>Describe Your Challenge</label>
        <textarea name="challenge" value={form.challenge} onChange={handleChange} required rows={4} placeholder="What business problem are you trying to solve? What's the current state and desired outcome?" className={`${inputClass} resize-none`} />
      </div>

      {/* Data available */}
      <div>
        <label className={labelClass}>Data / Systems Available</label>
        <textarea name="dataAvailable" value={form.dataAvailable} onChange={handleChange} rows={3} placeholder="What data, systems, or platforms can the student team access? (e.g. CRM exports, database access, API, spreadsheets)" className={`${inputClass} resize-none`} />
      </div>

      {/* Success definition */}
      <div>
        <label className={labelClass}>Success Definition</label>
        <textarea name="successDefinition" value={form.successDefinition} onChange={handleChange} rows={3} placeholder="What does a successful engagement look like? What would you do with the deliverable?" className={`${inputClass} resize-none`} />
      </div>

      <p className="text-xs text-text-muted">
        There is no cost to apply or to participate. All engagements are delivered through Miami Herbert&apos;s ACE (Applied Career Experience) framework.
      </p>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-um-orange hover:bg-um-orange-dim disabled:opacity-60 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-um-orange/20 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Your Challenge"
        )}
      </button>
    </motion.form>
  );
}
