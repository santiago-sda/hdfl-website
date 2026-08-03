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
  track: string;
  challenge: string;
  dataAvailable: string;
  successDefinition: string;
}

const initialState: FormState = {
  orgName: "",
  industry: "",
  contactName: "",
  email: "",
  semester: "",
  track: "",
  challenge: "",
  dataAvailable: "",
  successDefinition: "",
};

const inputClass =
  "w-full bg-paper border border-rule rounded-[10px] px-3.5 py-3 text-[13.5px] text-ink placeholder:text-muted focus:outline-none focus:border-ink focus:ring-0 transition-colors";

const selectClass = `${inputClass} appearance-none pr-9 bg-no-repeat bg-right`;

interface NumberedLabelProps {
  number: string;
  htmlFor: string;
  children: React.ReactNode;
}

function NumberedLabel({ number, htmlFor, children }: NumberedLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline gap-2 mb-1.5"
    >
      <span
        aria-hidden="true"
        className="font-mono text-[10px] font-bold tabular-nums tracking-[0.18em] text-um-orange-text"
      >
        {number}
      </span>
      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
        {children}
      </span>
    </label>
  );
}

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

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
      if (!FORMSPREE_ENDPOINT) throw new Error("Formspree endpoint not configured");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Formspree submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at alex.korogodsky@miami.edu.");
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
        className="flex flex-col py-2 gap-6"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: "rgba(0,80,48,0.10)", border: "1px solid rgba(0,80,48,0.25)" }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#005030" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-ink">Application Received</h3>
            <p className="text-sm text-ink-soft">Our Lab director will be in touch within 5 business days.</p>
          </div>
        </div>

        <div className="bg-paper border border-rule rounded-2xl p-6">
          <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
            What happens next
          </p>
          <ol className="space-y-0">
            {whatHappensNext.map((step, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 py-2.5 text-[13.5px] text-ink-soft ${
                  i === 0 ? "border-t border-ink/15" : "border-t border-rule-soft"
                }`}
              >
                <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-[0.06em] text-um-orange-text shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="text-[13px] font-medium text-um-orange-text hover:underline self-start"
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
      className="space-y-[18px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <NumberedLabel number="01" htmlFor="orgName">Organization</NumberedLabel>
          <input
            id="orgName"
            type="text"
            name="orgName"
            value={form.orgName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <NumberedLabel number="02" htmlFor="industry">Industry</NumberedLabel>
          <input
            id="industry"
            type="text"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <NumberedLabel number="03" htmlFor="contactName">Contact Name + Title</NumberedLabel>
          <input
            id="contactName"
            type="text"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <NumberedLabel number="04" htmlFor="email">Email</NumberedLabel>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <NumberedLabel number="05" htmlFor="semester">Preferred Semester</NumberedLabel>
          <select
            id="semester"
            name="semester"
            value={form.semester}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select semester…
            </option>
            <option value="fall-2026">Fall 2026</option>
            <option value="spring-2027">Spring 2027</option>
            <option value="fall-2027">Fall 2027</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <NumberedLabel number="06" htmlFor="track">Preferred Solution</NumberedLabel>
          <select
            id="track"
            name="track"
            value={form.track}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select solution…
            </option>
            <option value="hcd">HCD &amp; Product Design</option>
            <option value="ai">AI Engineering</option>
            <option value="bi">BI &amp; Dashboards</option>
            <option value="finance">Finance &amp; Valuation</option>
            <option value="capstone">Graduate Capstone</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <NumberedLabel number="07" htmlFor="challenge">Describe the challenge</NumberedLabel>
        <textarea
          id="challenge"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          required
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <NumberedLabel number="08" htmlFor="dataAvailable">Data / systems available</NumberedLabel>
        <textarea
          id="dataAvailable"
          name="dataAvailable"
          value={form.dataAvailable}
          onChange={handleChange}
          rows={2}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <NumberedLabel number="09" htmlFor="successDefinition">Definition of success</NumberedLabel>
        <textarea
          id="successDefinition"
          name="successDefinition"
          value={form.successDefinition}
          onChange={handleChange}
          required
          rows={2}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-[10px] px-4 py-3">
          {error}
        </p>
      )}

      <div className="pt-6 border-t border-rule-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
          No cost · No retainer · ACE-governed
        </p>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center gap-2 px-5 py-[14px] bg-um-orange hover:bg-um-orange-dim disabled:opacity-60 text-white text-[13px] font-semibold rounded-xl transition-colors"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Filing…
            </>
          ) : (
            <>
              File this challenge{" "}
              <span className="font-mono transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
