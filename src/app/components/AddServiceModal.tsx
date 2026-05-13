import { X, Image as ImageIcon } from 'lucide-react';
import './AddServiceModal.css';

export default function AddServiceModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Add New Service</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Service Image</label>
            <div className="image-upload-area">
              <ImageIcon size={48} color="var(--color-text-muted)" />
              <p className="upload-text"><span className="upload-highlight">Upload a file</span> or drag and drop</p>
              <p className="upload-hint">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Service Title</label>
              <input type="text" className="form-input" placeholder="e.g. AC Installation" />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <input type="text" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Short Description</label>
            <input type="text" className="form-input" placeholder="Brief summary for the card view" />
          </div>

          <div className="form-group">
            <label className="form-label">Full Description</label>
            <textarea className="form-textarea" placeholder="Detailed description of the service..." rows={4}></textarea>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Create Service</button>
        </div>
      </div>
    </div>
  );
}
