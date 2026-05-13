'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Save } from 'lucide-react';
import './about.css';
import 'react-quill-new/dist/quill.snow.css';

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function AboutManagement() {
  const [description, setDescription] = useState(
    'At CoolAir HVAC, we believe that everyone deserves a comfortable indoor environment. Founded over two decades ago, our family-owned business has grown from a single truck operation to a full fleet of certified technicians. We pride ourselves on honest pricing, exceptional workmanship, and a commitment to customer satisfaction that sets us apart in the industry.'
  );

  return (
    <div className="about-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">About Us Content</h1>
          <p className="page-subtitle">Manage the content on your company's About page.</p>
        </div>
        <button className="btn-primary flex-btn">
          <Save size={18} /> Save All Changes
        </button>
      </div>

      <div className="card content-card">
        <div className="card-header">
          <h2 className="card-title">Main Content</h2>
        </div>
        
        <div className="card-body">
          <div className="form-group">
            <label className="form-label">Main Title</label>
            <input type="text" className="form-input" placeholder="e.g. Your Comfort, Our Priority" />
          </div>

          <div className="form-group">
            <label className="form-label">Subtitle</label>
            <input type="text" className="form-input" placeholder="e.g. Providing top-tier HVAC services since 1998." />
          </div>

          <div className="form-group">
            <label className="form-label">Description (Rich Text)</label>
            <div className="rich-text-editor-container">
              <ReactQuill 
                theme="snow" 
                value={description} 
                onChange={setDescription}
                className="quill-editor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
