import { Lock, Eye } from 'lucide-react';

export default function ResetPassword() {
  return (
    <div className="auth-form-wrapper">
      <h1 className="auth-title">Create new password</h1>
      
      <div className="auth-form">
        <div className="auth-input-group">
          <label className="auth-label">Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} className="auth-input-icon-left" />
            <input type="password" placeholder="Enter password" className="auth-input" />
            <Eye size={18} className="auth-input-icon-right" />
          </div>
        </div>

        <div className="auth-input-group">
          <label className="auth-label">Confirm Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} className="auth-input-icon-left" />
            <input type="password" placeholder="Enter password" className="auth-input" />
            <Eye size={18} className="auth-input-icon-right" />
          </div>
        </div>

        <button className="auth-btn">Continue</button>
      </div>
    </div>
  );
}
