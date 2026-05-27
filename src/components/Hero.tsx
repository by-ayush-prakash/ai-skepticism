import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import gargoyleImage from '../assets/images/image-3.png';

const WORDS = [
  'AI',
  'ChatGPT',
  'Claude',
  'Gemini',
  'Copilot',
  'GenAI'
];

interface SmoothWordProps {
  word: string;
}

function SmoothWord({ word }: SmoothWordProps) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | 'auto'>('auto');

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Use getBoundingClientRect for layout-precision width calculations
        const w = entry.target.getBoundingClientRect().width;
        setWidth(w);
      }
    });

    observer.observe(el);

    // Initial width reading
    const initialWidth = el.getBoundingClientRect().width;
    if (initialWidth > 0) {
      setWidth(initialWidth);
    }

    return () => observer.disconnect();
  }, [word]);

  return (
    <motion.span
      animate={{ width: width === 'auto' ? 'auto' : width }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'inline-grid',
        overflow: 'hidden',
        position: 'relative',
        verticalAlign: 'bottom',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
      }}
    >
      {/* Hidden measuring anchor */}
      <span
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          color: 'var(--accent)',
          fontWeight: 600,
        }}
      >
        {word}
      </span>

      <AnimatePresence mode="popLayout">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 24, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, filter: 'blur(3px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: 'var(--accent)',
            fontWeight: 600,
            gridArea: '1 / 1 / 2 / 2', // Keeps transition states overlapped inside the cell
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(WORDS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const nextIndex = (WORDS.indexOf(prev) + 1) % WORDS.length;
        return WORDS[nextIndex];
      });
    }, 3000); // Transition every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{ background: 'var(--paper)', position: 'relative' }}>
      
      {/* 1. Upper Split Section (Clean White/Cream Background) */}
      <div className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="lg:grid-cols-12">
          
          {/* Main Editorial Header Left Side */}
          <div className="lg:col-span-9 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '16px' }}
            >
              <h1 
                className="headline"
                style={{ 
                  fontSize: 'clamp(34px, 5vw, 48px)', 
                  lineHeight: '1.3', 
                  letterSpacing: '-0.025em', 
                  color: 'var(--ink)', 
                  fontWeight: 500,
                  marginBottom: '28px'
                }}
              >
                A community for people asking whether 
                <br />
                <span style={{ display: 'inline-flex', gap: '0.25em', alignItems: 'center', flexWrap: 'wrap' }}>
                  <SmoothWord word={currentWord} />
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0px', flexWrap: 'nowrap' }}>
                    <span>is actually good for us.</span>
                    <a 
                      href="https://innovatingfuture.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'inline-block', 
                        flexShrink: 0, 
                        lineHeight: 0,
                        cursor: 'pointer'
                      }}
                      className="hover:opacity-80 transition-opacity"
                      id="gargoyle-link"
                    >
                      <img 
                        src={gargoyleImage} 
                        alt="Gargoyle Icon" 
                        style={{ 
                          height: '1.6em', 
                          width: 'auto', 
                          display: 'inline-block',
                          marginLeft: '-0.15em',
                          transform: 'translateY(16%)', // Perfect optical alignment with the letters of "us"
                          objectFit: 'contain',
                          mixBlendMode: 'multiply',
                          flexShrink: 0
                        }} 
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="hero-sub font-serif"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ 
                fontSize: '17.5px', 
                lineHeight: '1.7', 
                color: 'var(--ink-2)', 
                maxWidth: '680px',
                margin: 0
              }}
            >
              Most of the conversation about AI happens between the people building it and the people investing in it. This is the conversation for everyone else — the one about what it’s doing to our lives.
            </motion.p>
          </div>

        </div>
      </div>

    </section>
  );
}
