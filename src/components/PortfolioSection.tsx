import React, { useState } from 'react';
import { ArrowRight, Monitor, Smartphone, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onAuditClick: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onAuditClick }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getMockupIcon = (type: string) => {
    switch (type) {
      case 'browser':
        return <Monitor className="w-4 h-4 text-[#A78BFA]" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-[#A78BFA]" />;
      default:
        return <Layers className="w-4 h-4 text-[#A78BFA]" />;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#0E1116] border-t border-white/10 relative overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-[#7C5CFC] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#7C5CFC]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
              SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Work That Speaks <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#A78BFA] to-[#7C5CFC]">
              For Itself.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            Explore a selection of websites and digital experiences created to solve real business and design challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${PROJECTS.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-5xl mx-auto'} gap-8`}>
          {PROJECTS.map((project) => {
            const projectImage = project.heroImage || project.image;
            const liveUrl = project.liveUrl || project.projectUrl;

            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                className="bg-[#12151C] border border-white/10 hover:border-[#7C5CFC]/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl hover:shadow-[0_0_40px_rgba(124,92,252,0.15)]"
              >
                {/* Visual Mockup Area / Image Placeholder */}
                <div className="bg-[#0B0D10] p-4 border-b border-white/10 relative flex flex-col">
                  {/* Browser top-bar */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/5 text-[10px] text-[#9AA3AF]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[9px] text-[#9AA3AF]/80 truncate max-w-[160px]">
                      {getMockupIcon(project.mockupType || 'browser')}
                      <span>{liveUrl ? liveUrl.replace(/^https?:\/\//, '') : `${project.projectName.toLowerCase().replace(/\s+/g, '-')}.com`}</span>
                    </div>
                  </div>

                  {/* Main Card Graphic / Screenshot Area */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="h-48 sm:h-52 rounded-lg bg-[#161A22] border border-dashed border-[#7C5CFC]/30 group-hover:border-[#7C5CFC]/70 p-0 flex flex-col items-center justify-center text-center transition-colors relative overflow-hidden cursor-pointer"
                  >
                    {projectImage ? (
                      <img
                        src={projectImage}
                        alt={`${project.projectName} Website Screenshot`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                        onError={(e) => {
                          // Fallback to alternate source if one fails
                          const target = e.currentTarget;
                          if (target.src.includes('postimg.cc')) {
                            target.src = `/images/projects/${project.id}-screenshot.png`;
                          }
                        }}
                      />
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-[#12151C] border border-white/10 flex items-center justify-center mb-2 shadow-inner text-[#7C5CFC] group-hover:text-[#A78BFA] transition-colors">
                          {getMockupIcon(project.mockupType || 'browser')}
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#F5F7FA] tracking-wide px-2">
                          [{project.projectName.toUpperCase()} WEBSITE SCREENSHOT]
                        </span>
                        {project.whatWeBuilt && (
                          <span className="text-[10px] font-mono text-[#A78BFA] mt-1">
                            {project.whatWeBuilt}
                          </span>
                        )}
                        <span className="text-[9px] text-[#9AA3AF] mt-1">
                          Reserved for high-res project screenshot
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Card Meta & Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label & Location */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-mono font-semibold text-[#A78BFA] tracking-wide uppercase">
                        {project.industry || project.category}
                      </span>
                      {project.location && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#9AA3AF]">
                          {project.location}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Optional Client Logo Slot */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-[#F5F7FA] group-hover:text-[#A78BFA] transition-colors cursor-pointer"
                      >
                        {project.projectName}
                      </h3>

                      {/* Optional subtle client logo */}
                      {project.clientLogo ? (
                        <div className="h-7 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                          <img
                            src={project.clientLogo}
                            alt={`${project.projectName} Logo`}
                            referrerPolicy="no-referrer"
                            className="h-5 w-auto max-w-[80px] object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (target.src.includes('postimg.cc')) {
                                target.src = `/images/projects/${project.id}-logo.png`;
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <span
                          className="text-[9px] font-mono text-[#9AA3AF]/70 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/10 shrink-0"
                          title="Reserved for client logo"
                        >
                          [CLIENT LOGO]
                        </span>
                      )}
                    </div>

                    {/* Short description */}
                    {project.description && (
                      <p className="text-sm text-[#9AA3AF] leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    {/* Technology Line */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-6 pt-3 border-t border-white/5">
                        <div className="text-[11px] font-mono text-[#A78BFA]/90 flex flex-wrap items-center gap-1.5 leading-snug">
                          <span className="text-[#9AA3AF] text-[10px] uppercase tracking-wider font-sans">Stack:</span>
                          <span>{project.technologies.join(' · ')}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions: View Live Website & View Case Study */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    {liveUrl ? (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C5CFC] hover:text-[#A78BFA] transition-colors group/link"
                      >
                        <span>View Live Website</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C5CFC] hover:text-[#A78BFA] transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#F5F7FA] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      <span>Case Study</span>
                      <ExternalLink className="w-3 h-3 text-[#9AA3AF]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onAuditClick={onAuditClick}
      />
    </section>
  );
};
