import React from 'react';

export default function Navbar() {
  return (
    <nav className="top" id="top">
      <div className="wrap">
        <a className="wordmark" href="#top">AI Skepticism</a>
        <div className="nav-links">
          <a href="mailto:contact@aiskepticism.org" className="cta keep-mobile">Contact →</a>
        </div>
      </div>
    </nav>
  );
}
