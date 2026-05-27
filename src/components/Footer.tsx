import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--paper)' }}>
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <a className="f-wordmark" href="#top" id="footer-top-link">
              AI SKEPTICISM
            </a>
            <span className="f-copy text-xs opacity-75" id="footer-copyright">
              © 2026 · aiskepticism.org. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


