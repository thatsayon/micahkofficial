'use client';

import { useState } from 'react';
import { Edit, Trash2, Plus, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';
import './faq.css';
import AddFaqModal from '../../components/AddFaqModal';

const initialFaqs = [
  { id: 1, question: 'How often should I have my HVAC system serviced?', answer: 'It is recommended to have your HVAC system serviced at least once a year, preferably in the spring for cooling and fall for heating.', category: null },
  { id: 2, question: 'What are the signs that I need a new air conditioner?', answer: 'Signs include frequent breakdowns, rising energy bills, uneven cooling, and if your system is over 10-15 years old.', category: null },
  { id: 3, question: 'How often should I change my air filters?', answer: 'Air filters should be changed every 1-3 months depending on usage, pets, and indoor air quality needs.', category: 'General' },
  { id: 4, question: 'Do you offer emergency repair services?', answer: 'Yes, we offer 24/7 emergency HVAC repair services for all our customers.', category: 'Repairs' },
];

export default function FaqManagement() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [openId, setOpenId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">FAQ Management</h1>
          <p className="page-subtitle">Manage frequently asked questions displayed on your website.</p>
        </div>
        <button className="btn-primary flex-btn" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Add New FAQ
        </button>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item card ${openId === faq.id ? 'open' : ''}`}>
            <div className="faq-header" onClick={() => toggleFaq(faq.id)}>
              <div className="faq-question-container">
                <GripVertical size={16} className="drag-handle" />
                <span className="faq-question">{faq.question}</span>
                {faq.category && <span className="faq-badge">{faq.category}</span>}
              </div>
              <div className="faq-actions" onClick={(e) => e.stopPropagation()}>
                <button className="action-btn"><Edit size={16} /></button>
                <button className="action-btn text-danger"><Trash2 size={16} /></button>
                <button className="action-btn" onClick={() => toggleFaq(faq.id)}>
                  {openId === faq.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
            {openId === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <AddFaqModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
