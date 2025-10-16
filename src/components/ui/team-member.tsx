"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

/**
 * Props for the TeamMember component
 */
export interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  location: string;
  email: string;
  linkedinUrl: string;
  quote: string;
}

/**
 * Reusable Team Member Component
 * Displays team member information with avatar, contact details, and quote
 */
export function TeamMember({
  imageSrc,
  name,
  title,
  location,
  email,
  linkedinUrl,
  quote
}: TeamMemberProps) {
  return (
    <div className="relative flex flex-col md:flex-row bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#63b583]/30 hover:bg-white/10 rounded-2xl shadow-md w-full p-6 group hover:shadow-lg transition-shadow duration-200 items-center flex-1">
      <Avatar className="w-24 h-24 ring-2 ring-[#63b583]/30 group-hover:ring-[#63b583]/60 transition-all duration-500 shadow-lg shadow-[#63b583]/20 group-hover:shadow-xl group-hover:shadow-[#63b583]/30 mb-2 md:mb-0 md:mr-4 flex-shrink-0">
        <AvatarImage src={imageSrc} alt={name} className="object-cover" />
        <AvatarFallback className="bg-gradient-to-br from-[#63b583] via-[#5aa676] to-[#4a9666] text-white font-bold text-lg">
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>

      {/* Profile details */}
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        {/* Contact details */}
        <div className="flex flex-col text-center md:text-left mb-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-base text-gray-300 font-semibold">{title}</p>
          <p className="text-sm text-gray-400">{location}</p>
          <a
            href={`mailto:${email}`}
            className="text-[#63b583] underline text-sm block mb-2 hover:text-[#5aa676] transition-colors"
          >
            {email}
          </a>

          {/* Social media links */}
          <div className="flex gap-2 justify-center md:justify-start mb-3">
            <a
              href={`mailto:${email}`}
              className="bg-white/10 p-2 rounded-lg transition hover:bg-[#63b583]/20"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5 text-[#63b583]" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-lg transition hover:bg-[#63b583]/20"
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin className="h-5 w-5 text-[#63b583]" />
            </a>
          </div>
        </div>

        {/* Quote - positioned under profile info */}
        <div className="w-full">
          <blockquote className="text-sm text-gray-300 italic text-center md:text-left leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
