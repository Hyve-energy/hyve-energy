"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const industries = [
  "Construction Equipment",
  "Mining",
  "Marine",
  "Robotics",
  "Defense",
  "Autonomous Vehicles",
  "Industrial Automation",
  "Other",
];

const timelines = ["0–3 months", "3–6 months", "6–12 months", "12+ months", "Exploratory"];

const inputClass =
  "w-full border border-hyve-line bg-hyve-black px-4 py-3 text-sm text-hyve-bone placeholder:text-hyve-ash transition-colors duration-200 focus:border-hyve-accent focus:outline-none";
const labelClass = "font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    // Static export has no server runtime, so submissions are relayed via a
    // pre-filled mailto link. In production, point this form at a hosted
    // endpoint (e.g. a Cloudflare Pages Function, or a form backend such as
    // Formspree) instead.
    const lines = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Industry: ${form.get("industry")}`,
      `Application: ${form.get("application")}`,
      `Voltage: ${form.get("voltage")}`,
      `Capacity: ${form.get("capacity")}`,
      `Timeline: ${form.get("timeline")}`,
      "",
      "Project Description:",
      String(form.get("description") ?? ""),
    ];

    const subject = encodeURIComponent(`Program Inquiry — ${form.get("company") || form.get("name")}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.emails.sales}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClass}>
          Company *
        </label>
        <input id="company" name="company" type="text" required className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="industry" className={labelClass}>
          Industry *
        </label>
        <select id="industry" name="industry" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select an industry
          </option>
          {industries.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="application" className={labelClass}>
          Application
        </label>
        <input id="application" name="application" type="text" placeholder="e.g. AGV, UAV, vessel auxiliary" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="voltage" className={labelClass}>
          Voltage
        </label>
        <input id="voltage" name="voltage" type="text" placeholder="e.g. 48V nominal" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="capacity" className={labelClass}>
          Capacity
        </label>
        <input id="capacity" name="capacity" type="text" placeholder="e.g. 20 kWh" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="timeline" className={labelClass}>
          Timeline
        </label>
        <select id="timeline" name="timeline" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a timeline
          </option>
          {timelines.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="description" className={labelClass}>
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Tell us about your application, environment, and requirements."
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-hyve-accent px-6 py-3.5 text-sm font-medium text-hyve-black transition-colors duration-300 hover:bg-white"
        >
          Submit Inquiry
        </button>
        {status === "sent" && (
          <p className="mt-4 text-sm text-hyve-fog" role="status">
            Your email client should now be open with your inquiry pre-filled — send it through
            and our team will follow up within two business days.
          </p>
        )}
      </div>
    </form>
  );
}
