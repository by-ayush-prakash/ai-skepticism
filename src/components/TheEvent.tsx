import React, { useState, useRef } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
// @ts-ignore
import bgImage from '../assets/images/image-1.jpg';

export default function TheEvent() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errorStatus, setErrorStatus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const metaEnv = (import.meta as any).env || {};
  const googleFormActionUrl = metaEnv.VITE_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdG1AU2Pyuujnm7QYXxnBeEOqN-gKheNWlBSC-kjh2-3aYuQQ/formResponse";
  const googleFormEmailEntryId = metaEnv.VITE_GOOGLE_FORM_EMAIL_ENTRY_ID || "entry.1300688572";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorStatus(true);
      return;
    }

    setErrorStatus(false);
    setStatus('sending');

    // Store in localStorage as interactive register simulation
    try {
      const existing = localStorage.getItem('aiskepticism_subscribers');
      const list = existing ? JSON.parse(existing) : [];
      list.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('aiskepticism_subscribers', JSON.stringify(list));
    } catch (err) {
      console.warn('Failed to save to local storage:', err);
    }

    try {
      // Create urlencoded body for standard Google Forms submission
      const body = new URLSearchParams();
      body.append(googleFormEmailEntryId, email);

      // Submit to Google Forms via fetch with no-cors
      await fetch(googleFormActionUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
      });

      // Show success after a brief transition delay to feel premium
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 500);
    } catch (err) {
      console.error('Failed to submit to Google Form:', err);
      // Fallback: click submit natively in the form if fetch fails
      if (formRef.current) {
        formRef.current.submit();
      }
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section 
      className="relative overflow-hidden w-full flex flex-col justify-between" 
      id="event" 
      style={{ 
        backgroundColor: '#05070c', 
        borderTop: '1px solid #1a202c',
        minHeight: '900px',
        padding: '30px 0 60px 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <style>{`
        #event-description {
          color: #ffffff !important;
          opacity: 0.95 !important;
        }
        #eventEmail {
          color: #000000 !important;
        }
        #eventEmail::placeholder {
          color: rgba(0, 0, 0, 0.45) !important;
          opacity: 1 !important;
        }
      `}</style>
      {/* Immersive background from user uploaded image, fully exposed but subtle with edge fading */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(5, 7, 12, 0.4) 0%, rgba(5, 7, 12, 0.1) 35%, rgba(5, 7, 12, 0.3) 75%, #05070c 100%), url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          zIndex: 1,
          filter: 'contrast(1.05) brightness(0.78)'
        }} 
      />

      {/* Decorative ambient glowing center beacon light */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(235, 94, 85, 0.08) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 2,
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      {/* Elegant gradual backdrop blur layer only across the bottom quarter of the background to ensure premium legibility */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '26%',
          background: 'linear-gradient(to top, rgba(5, 7, 12, 0.95) 0%, rgba(5, 7, 12, 0.6) 50%, rgba(5, 7, 12, 0) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          maskImage: 'linear-gradient(to top, black 20%, rgba(0, 0, 0, 0.6) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 20%, rgba(0, 0, 0, 0.6) 60%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      />

      {/* Main Content Layout Container */}
      <div 
        className="wrap relative flex flex-col justify-between h-full w-full" 
        style={{ 
          zIndex: 10, 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '40px'
        }}
      >
        {/* Main interactive top section - Split layout matching Racketon */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full"
          style={{ 
            paddingTop: '40px',
            marginBottom: '20px'
          }}
        >
          {/* Left Column matching Racketon with giant text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">

            {/* Giant display typography headline stacked exactly like Racketon */}
            <h1 
              style={{ 
                color: '#ffffff', 
                fontSize: 'clamp(40px, 6vw, 84px)', 
                lineHeight: '1.0', 
                letterSpacing: '-0.02em', 
                fontWeight: 900,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-maison-display), "Helvetica Neue", Arial, sans-serif',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ display: 'block', color: '#ffffff' }}>AI Skepticism</span>
              <span style={{ display: 'block', color: '#ffffff' }}>Montréal</span>
            </h1>
          </div>

          {/* Right Column with description only */}
          <div 
            className="lg:col-span-5 flex flex-col items-start text-left justify-end animate-fade-in w-full"
          >
            {/* Descriptive paragraph matching Racketon's right side text block */}
            <p 
              id="event-description"
              className="mb-8"
              style={{ 
                color: '#ffffff', 
                fontSize: '15px', 
                lineHeight: '1.7', 
                fontFamily: 'var(--sans)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                maxWidth: '520px'
              }}
            >
              A one-day conference for anyone asking whether AI is actually good for us. Doctors, teachers, parents, policymakers, researchers — everyone whose life AI is changing, in one room, for one day of real, honest discussion.
            </p>
          </div>
        </div>

        {/* Bottom Container pushed to the bottom */}
        <div 
          style={{ 
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
            paddingBottom: '40px'
          }}
        >
          {/* Centered Sign-up Field */}
          <div 
            className="flex flex-col items-center justify-center w-full animate-fade-in"
            style={{ 
              zIndex: 20, 
              margin: '0 auto',
              maxWidth: '750px',
              width: '100%'
            }}
          >
            {status !== 'success' ? (
              <form 
                ref={formRef}
                action={googleFormActionUrl} 
                method="POST" 
                target="event_form_sink" 
                onSubmit={handleSubmit}
                noValidate
                className="flex w-full items-center"
                style={{ width: '100%' }}
              >
                {/* Single horizontal capsule spanning the width of the details row above */}
                <div 
                  style={{
                    display: 'flex',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '5px',
                    border: errorStatus ? '2px solid #eb5e55' : '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    alignItems: 'center',
                    transition: 'all 0.2s ease-in-out',
                    width: '100%'
                  }}
                >
                  <label htmlFor="eventEmail" className="visually-hidden" style={{ position: 'absolute', left: '-9999px' }}>
                    Email
                  </label>
                  <input 
                    id="eventEmail" 
                    name={googleFormEmailEntryId} 
                    type="email" 
                    required 
                    placeholder="Get notified when tickets drop" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorStatus) setErrorStatus(false);
                    }}
                    disabled={status === 'sending'}
                    autoComplete="email"
                    style={{
                      flex: 1,
                      border: 'none',
                      background: 'transparent',
                      color: '#000000',
                      fontSize: '14px',
                      padding: '10px 16px',
                      outline: 'none',
                      minWidth: '50px',
                      fontWeight: 500,
                      fontFamily: 'var(--sans)'
                    }}
                  />
                  
                  {/* One button beside the field, only one. */}
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      border: '1px solid rgba(0, 0, 0, 0.12)',
                      fontWeight: 750,
                      fontSize: '14px',
                      borderRadius: '8px',
                      padding: '12px 28px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease-in-out',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="hover:bg-gray-50 hover:scale-[1.02] active:scale-95"
                  >
                    {status === 'sending' ? 'Sending…' : 'Notify me'}
                  </button>
                </div>
              </form>
            ) : (
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(235, 94, 85, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(235, 94, 85, 0.4)',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontSize: '15px',
                  fontWeight: 600,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  width: '100%',
                  maxWidth: '430px'
                }}
              >
                <Check className="w-5 h-5 flex-shrink-0 text-[#eb5e55]" />
                We&#39;ll write when tickets are live. Thank you!
              </div>
            )}

            {errorStatus && (
              <p style={{ color: '#eb5e55', fontWeight: 600, fontSize: '12px', marginTop: '8px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Bottom Header - Beautiful horizontal row of details representing the screenshot info without blurry pills */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
            className="lg:flex-row"
          >
            {/* Row of Information loaded with exact details, styled without any blurry pills */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '16px 24px', 
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {[
                { label: 'when', val: '2026' },
                { label: 'where', val: 'Montréal, Québec' },
                { label: 'Format', val: 'One Day, In-Person' },
                { label: 'Tickets', val: 'Open Registration' }
              ].map((pill, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span 
                    style={{ 
                      fontSize: '10px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.12em', 
                      color: 'rgba(255, 255, 255, 0.4)',
                      fontWeight: 600,
                    }}
                  >
                    {pill.label}
                  </span>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
                  <span 
                    style={{ 
                      fontSize: '13px', 
                      fontWeight: 500, 
                      color: '#ffffff',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {pill.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hidden target iframe for forms */}
        <iframe 
          name="event_form_sink" 
          id="event_form_sink" 
          style={{ display: 'none' }} 
          aria-hidden="true" 
          tabIndex={-1}
          title="Silent Form Submit Sink"
        />
      </div>
    </section>
  );
}
