'use client';

import { X } from 'lucide-react';
import './AddFaqModal.css';

interface AddFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddFaqModal({ isOpen, onClose }: AddFaqModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Add New FAQ</h2>
          <button onClick={onClose} className="modal-close">
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Question</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. How often should I service my AC?" 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <input 
              type="text" 
              className="form-input" 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Answer</label>
            <textarea 
              className="form-textarea" 
              rows={5} 
              placeholder="Provide a clear, helpful answer..."
            ></textarea>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-outline">Cancel</button>
          <button className="btn-primary" style={{ backgroundColor: 'var(--color-primary)' }}>Add FAQ</button>
        </div>
      </div>
    </div>
  );
}
