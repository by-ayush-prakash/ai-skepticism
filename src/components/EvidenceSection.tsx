import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface ResearchCard {
  id: string;
  badge: string;
  title: string;
  body: string;
  source: string;
  url: string;
  year: string;
}

const RESEARCH_DATA: ResearchCard[] = [
  {
    id: 'res1',
    badge: 'Social Connection',
    title: 'Weekly Bot Conversional Flow',
    body: 'Adults who utilize artificial dialogue systems daily report significantly lower scores in actual personal social connection and higher indices of offline disconnectedness.',
    source: 'Journal of Public Health',
    url: 'https://link.springer.com/article/10.1007/s10389-025-02554-6',
    year: '2025'
  },
  {
    id: 'res2',
    badge: 'Cognition & Mind',
    title: 'Decline in Evaluative Reasoning',
    body: 'A measurably negative correlation where subjects who frequently offloaded reasoning tasks to digital agents performed worse on active critical thinking and evaluation tests.',
    source: 'Gerlich, Societies · MDPI',
    url: 'https://www.mdpi.com/2075-4698/15/1/6',
    year: '2025'
  },
  {
    id: 'res3',
    badge: 'Developing Minds',
    title: 'Inhibited Adolescent Growth',
    body: 'Habitual cognitive outsourcing during formative teenager neurological stages restricts core active brain circuits, preventing development of critical evaluation patterns.',
    source: 'Adolescent Health Review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12621494/',
    year: '2025'
  },
  {
    id: 'res4',
    badge: 'Labor Dynamics',
    title: 'Active Job Automation Spikes',
    body: 'Over 23 million American workforce roles have crossed the crucial benchmark where at least 50% of routine daily operations are fully handled by algorithms.',
    source: 'SHRM Research Study',
    url: 'https://www.shrm.org/about/press-room/ai-s-wake-up-call--new-shrm-research-reveals-23-2-million-americ',
    year: '2025'
  },
  {
    id: 'res5',
    badge: 'Human Biases',
    title: 'Cognitive Authority Displacement',
    body: 'Empirical research shows users automatically treat machine responses as inherently neutral and mathematically clean, ignoring systemic corporate and publisher biases.',
    source: 'Yale Inquiry Journal',
    url: 'https://link.springer.com/article/10.1007/s10389-025-02554-6',
    year: '2025'
  }
];

export default function EvidenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="evidence" 
      style={{ 
        backgroundColor: 'var(--paper)', 
        borderTop: '1px solid var(--rule)',
        paddingTop: '90px',
        paddingBottom: '90px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      
      {/* Soft elegant background wireframe graphic using soft warm accents */}
      <div 
        style={{ 
          position: 'absolute', 
          right: '-100px', 
          top: '-100px', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(249, 92, 75, 0.02) 0%, rgba(246, 244, 241, 0) 70%)', 
          borderRadius: '50%',
          pointerEvents: 'none'
        }} 
      />

      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'start' }} className="lg:grid-cols-12">
          
          {/* Left Block: Heading and contextual narrative with interactive sliders */}
          <div className="lg:col-span-4" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', justifyContent: 'flex-start', zIndex: 10 }}>
            <div>
              
              {/* Title with gargoyle icon next to text to show editorial gravity */}
              <h2 
                style={{ 
                  fontSize: 'clamp(32px, 3.8vw, 40px)', 
                  lineHeight: '1.2', 
                  fontWeight: 500, 
                  color: 'var(--ink)',
                  letterSpacing: '-0.022em',
                  marginBottom: '24px'
                }}
              >
                What the research is saying
              </h2>

              <p 
                className="section-deck"
                style={{ 
                  marginTop: '20px',
                  marginBottom: '40px'
                }}
              >
                A growing body of peer-reviewed work is surfacing measurable effects of automation on cognition, social connection, and labor.
              </p>
            </div>
          </div>

          {/* Right Block: Horizontally scrollable row of elegant white cards matching image specs exactly */}
          <div className="lg:col-span-8 relative">
            <div 
              ref={containerRef}
              style={{
                display: 'flex',
                gap: '28px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                paddingBottom: '24px',
                paddingTop: '8px',
                paddingLeft: '4px',
                paddingRight: '64px',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              className="scrollbar-hide"
            >
              {RESEARCH_DATA.map((card, idx) => (
                <div
                  key={card.id}
                  style={{
                    width: '320px',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--rule)',
                    borderRadius: '16px',
                    padding: '36px 30px',
                    boxShadow: '0 4px 16px rgba(5, 10, 36, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="hover:border-[var(--rule-strong)] hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    {/* Top indicator icon or mini-badge style mapping */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: 650, 
                          letterSpacing: '0.08em', 
                          color: 'var(--ink-2)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {card.badge}
                      </span>
                      <a 
                        href={card.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="muted hover:text-indigo-600 transition-colors"
                        title="View publisher source"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Card Title Header exactly styled: e.g. "Optimize Marketing Efforts" */}
                    <h3 
                      style={{ 
                        fontSize: '19px', 
                        fontWeight: 500, 
                        lineHeight: '1.35', 
                        color: 'var(--ink)',
                        marginTop: '0',
                        marginBottom: '16px',
                        letterSpacing: '-0.015em'
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Left-aligned aesthetic horizontal divider line as visual accent */}
                    <div 
                      style={{ 
                        width: '32px', 
                        height: '1.5px', 
                        backgroundColor: 'var(--rule)', 
                        margin: '18px 0' 
                      }} 
                    />

                    {/* Paragraph exactly placed inside card body */}
                    <p 
                      style={{ 
                        fontSize: '13.5px', 
                        lineHeight: '1.55', 
                        color: 'var(--ink-2)', 
                        margin: 0,
                        fontFamily: 'var(--serif)'
                      }}
                    >
                      {card.body}
                    </p>
                  </div>

                  {/* Bottom of Card: Source journal bibliographical attribution & tiny icon background indicator */}
                  <div 
                    style={{ 
                      marginTop: '32px', 
                      paddingTop: '16px', 
                      borderTop: '1px solid var(--rule)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '11.5px',
                      color: 'var(--ink-3)'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{card.source}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontWeight: 600 }}>{card.year}</span>
                  </div>

                  {/* Aesthetic index counter inside card */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      bottom: '52px', 
                      right: '30px', 
                      opacity: 0.05,
                      pointerEvents: 'none',
                      fontSize: '60px',
                      fontFamily: 'var(--sans)',
                      fontWeight: 800,
                      lineHeight: '1'
                    }}
                  >
                    0{idx + 1}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
