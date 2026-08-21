import React from 'react';
import { X, ArrowRight, Monitor, Smartphone, Globe, MapPin, Building } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onAuditClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onAuditClick,
}) => {
  if (!project) return null;

  const overview = project.overview || project.caseStudy?.overview || project.description;
  const problemSolved = project.problemSolved || project.caseStudy?.problemSolved || project.caseStudy?.solution || project.caseStudy?.challenge;
  const whatWeBuilt = project.whatWeBuilt || project.caseStudy?.whatWeBuilt;
  const technologies = project.technologies;
  const liveUrl = project.liveUrl || project.projectUrl;
  const heroImage = project.heroImage || project.image;
  const mobileScreenshot = project.secondaryImages?.mobileScreenshot;
  const additionalScreenshot = project.secondaryImages?.additionalScreenshot;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#12151C] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 text-[#9AA3AF] hover:text-[#F5F7FA] hover:border-[#7C5CFC]/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Header Badges */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="text-xs font-mono font-semibold text-[#A78BFA] px-2.5 py-1 rounded bg-[#7C5CFC]/15 border border-[#7C5CFC]/30">
              {project.industry || project.category || 'Tourism'}
            </span>
            {project.location && (
              <span className="text-xs font-mono text-[#9AA3AF] px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#7C5CFC]" />
                <span>{project.location}</span>
              </span>
            )}
            {whatWeBuilt && (
              <span className="text-xs font-mono text-[#F5F7FA] px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                <Building className="w-3 h-3 text-[#A78BFA]" />
                <span>{whatWeBuilt}</span>
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 mt-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
              {project.projectName}
            </h3>

            {/* Optional Client Logo slot */}
            {project.clientLogo ? (
              <div className="h-9 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <img
                  src={project.clientLogo}
                  alt={`${project.projectName} Client Logo`}
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto max-w-[120px] object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('postimg.cc')) {
                      target.src = `/images/projects/${project.id}-logo.png`;
                    }
                  }}
                />
              </div>
            ) : (
              <span className="text-[10px] font-mono text-[#9AA3AF] px-2 py-1 rounded bg-white/5 border border-white/10 shrink-0">
                [{project.projectName.toUpperCase()} CLIENT LOGO]
              </span>
            )}
          </div>

          {overview && (
            <p className="text-sm text-[#9AA3AF] mt-3 leading-relaxed">
              {overview}
            </p>
          )}
        </div>

        {/* Live Website Link Bar */}
        {liveUrl && (
          <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA]">
              <Globe className="w-4 h-4 text-[#7C5CFC] shrink-0" />
              <span className="truncate">Live Website: <strong className="text-[#A78BFA]">{liveUrl}</strong></span>
            </div>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#7C5CFC] hover:bg-[#A78BFA] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(124,92,252,0.3)] shrink-0"
            >
              <span>Visit Live Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* 1. Main Project Screenshot Slot (Desktop Homepage) */}
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#0B0D10] border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-[#9AA3AF]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="font-mono text-[11px] text-[#A78BFA] flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>Desktop Homepage View</span>
            </span>
          </div>

          {heroImage ? (
            <div className="rounded-lg overflow-hidden border border-white/10 bg-[#161A22]">
              <img
                src={heroImage}
                alt={`${project.projectName} Desktop Homepage`}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[420px] object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('postimg.cc')) {
                    target.src = `/images/projects/${project.id}-screenshot.png`;
                  }
                }}
              />
            </div>
          ) : (
            <div className="p-8 border border-dashed border-[#7C5CFC]/40 rounded-lg bg-[#12151C]/60 text-center flex flex-col items-center justify-center min-h-[160px]">
              <div className="w-12 h-12 rounded-xl bg-[#161A22] border border-white/10 flex items-center justify-center mb-3 text-[#7C5CFC]">
                <Monitor className="w-6 h-6" />
              </div>
              <p className="font-mono text-xs font-semibold text-[#F5F7FA]">
                [{project.projectName.toUpperCase()} WEBSITE SCREENSHOT]
              </p>
              <p className="text-xs text-[#9AA3AF] mt-1">
                Primary desktop homepage screenshot slot
              </p>
            </div>
          )}
        </div>

        {/* 2. Mobile Experience View (Rendered only when available) */}
        {mobileScreenshot && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#0B0D10] border border-white/10">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-[#9AA3AF]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                <Smartphone className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Mobile Experience View</span>
              </div>
              <span className="text-[10px] font-mono text-[#9AA3AF] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                Responsive Mobile Design
              </span>
            </div>
            
            <div className="flex justify-center items-center py-4 px-2 bg-[#161A22] rounded-lg border border-white/10">
              {/* Sleek mobile phone mockup container */}
              <div className="relative rounded-[28px] p-2.5 bg-[#0B0D10] border-2 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] max-w-[280px] w-full">
                {/* Phone speaker & camera notch */}
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                </div>
                <div className="rounded-[18px] overflow-hidden border border-white/10 bg-black">
                  <img
                    src={mobileScreenshot}
                    alt={`${project.projectName} Mobile Experience`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[480px]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('postimg.cc')) {
                        target.src = `/images/projects/${project.id}-mobile.jpg`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Optional Additional Screenshot (Only rendered if available, no empty placeholder) */}
        {additionalScreenshot && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#0B0D10] border border-white/10">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-[#9AA3AF]">
              <span className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-wider">
                Inner Page / Feature View
              </span>
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10">
              <img
                src={additionalScreenshot}
                alt={`${project.projectName} Feature`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Problem Solved & Objectives */}
        {problemSolved && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#161A22] border border-white/10">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A78BFA] mb-2 flex items-center gap-2">
              <span>Problem Solved & Platform Focus</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#9AA3AF] leading-relaxed">
              {problemSolved}
            </p>
          </div>
        )}

        {/* What We Built & Technologies Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {whatWeBuilt && (
            <div className="p-4 rounded-xl bg-[#161A22] border border-white/10">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
                What We Built
              </h4>
              <p className="text-sm font-semibold text-[#F5F7FA]">
                {whatWeBuilt}
              </p>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div className="p-4 rounded-xl bg-[#161A22] border border-white/10">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-[#F5F7FA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action CTA */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9AA3AF]">
            Looking for a custom high-performance website for your company?
          </p>
          <button
            onClick={() => {
              onClose();
              onAuditClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-bold bg-[#7C5CFC] hover:bg-[#A78BFA] text-white text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(124,92,252,0.3)] cursor-pointer"
          >
            <span>Get a Free Website Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
