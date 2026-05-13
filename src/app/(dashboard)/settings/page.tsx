import { Save, Building2, Upload } from 'lucide-react';
import './settings.css';

export default function SettingsManagement() {
  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your dashboard preferences and company details.</p>
        </div>
        <button className="btn-primary flex-btn">
          <Save size={18} /> Save Settings
        </button>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar card">
          <button className="settings-tab active">
            <Building2 size={18} className="tab-icon" /> Company Info
          </button>
        </div>

        <div className="settings-content">
          <div className="card content-card">
            <div className="card-header">
              <h2 className="card-title">Company Information</h2>
            </div>
            
            <div className="card-body">
              <div className="logo-upload-section">
                <div className="logo-preview">CA</div>
                <div className="logo-upload-details">
                  <button className="btn-outline flex-btn btn-small">
                    <Upload size={14} /> Upload Logo
                  </button>
                  <p className="upload-hint">Recommended size: 256x256px. Max 2MB.</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Email</label>
                  <input type="email" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Website URL</label>
                  <input type="url" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Business Address</label>
                <input type="text" className="form-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
