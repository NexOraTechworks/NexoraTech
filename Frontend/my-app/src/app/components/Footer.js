"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Code2 } from "lucide-react";
import Logo from "./Logo";

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.03 3.2 1.56.1-.73.4-1.23.72-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.18h2.97v9.56ZM6.45 7.87a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02-3.44Zm12.29 10.87h-2.97v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.48V9.18h2.85v1.31h.04a3.13 3.13 0 0 1 2.81-1.55c3 0 3.56 1.98 3.56 4.56v5.24Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#08090C] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-40 w-72 rounded-full bg-[#7763F9]/[0.07] blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-9">
        {/* Main footer row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand and description */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Nexora home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7763F9]/30 bg-[#7763F9]/10">
                <Logo/>
              </div>

              <div>
                <span className="block text-base font-bold tracking-[0.16em]">
                  NEXORA
                </span>
                <span className="text-[9px] tracking-[0.3em] text-gray-500">
                  TECHWORKS
                </span>
              </div>
            </Link>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Thoughtful design. Modern technology. Scalable solutions.
            </p>
          </div>

          {/* Social and contact links */}
          <div className="flex flex-wrap items-center gap-3">
    
            <a
              href="https://www.linkedin.com/in/nexora-tech-2926aa415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-gray-400 transition-colors hover:border-[#7763F9]/50 hover:bg-[#7763F9]/10 hover:text-white"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="mailto:nexoratech.co26@gmail.com"
              aria-label="Email Nexora"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-gray-400 transition-colors hover:border-[#7763F9]/50 hover:bg-[#7763F9]/10 hover:text-white"
            >
              <Mail size={18} />
            </a>

            <Link
              href="/#contact"
              className="group ml-1 inline-flex items-center gap-2 rounded-xl border border-[#7763F9]/30 bg-[#7763F9]/10 px-4 py-2.5 text-sm font-medium text-[#B2A7FF] transition-colors hover:bg-[#7763F9]/20 hover:text-white"
            >
              Let's talk
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {currentYear} Nexora Techworks. All rights reserved.
          </p>

          <span className="inline-flex items-center gap-2 text-xs text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built with purpose
          </span>
        </div>
      </div>
    </footer>
  );
}