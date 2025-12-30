"use client";
import { useState } from "react";
import api from "@/src/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.post("/inquires/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-8">Have questions about your unclaimed funds? Our auditors are here to help.</p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <input 
          type="text" placeholder="Full Name" required 
          className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" placeholder="Email Address" required 
          className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <select 
          className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          onChange={e => setFormData({...formData, subject: e.target.value})}
        >
          <option value="">Select a Subject</option>
          <option value="claim-status">Claim Status</option>
          <option value="new-recovery">New Recovery Inquiry</option>
          <option value="legal">Legal/Compliance</option>
        </select>
        <textarea 
          placeholder="How can we help you?" rows={4} required
          className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
        <button 
          type="submit" disabled={status === "loading"}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-blue-300"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <p className="text-green-600 text-center font-medium">Message sent! We will contact you soon.</p>}
      </form>
    </div>
  );
}