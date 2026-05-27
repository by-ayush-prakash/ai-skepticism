import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';

export default function FaqSection() {
  // Let no items be open by default
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // prevent default HTML toggle behaviour to smoothly manage it ourselves
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Your questions, answered plainly.</h2>
          <p className="section-deck">
            If you don't see yours here, bring it into the community. The best questions usually come from people outside the industry.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <details 
                key={item.id} 
                className="faq-item" 
                open={isOpen}
              >
                <summary 
                  onClick={(e) => handleToggle(item.id, e)}
                  style={{ userSelect: 'none' }}
                >
                  {item.question}
                </summary>
                <div className="answer">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
