import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  return (
    <div className="auth-form-wrapper">
      <div>
        <h1 className="auth-title">Forgot password</h1>
        <p className="auth-subtitle">Enter your email address</p>
      </div>
      
      <div className="auth-form">
        <div className="auth-input-group">
          <label className="auth-label">Email</label>
          <div className="auth-input-wrapper">
            <Mail size={18} className="auth-input-icon-left" />
            <input type="email" placeholder="Enter email" className="auth-input" />
          </div>
        </div>

        <button className="auth-btn" style={{ marginTop: '24px' }}>Continue</button>
      </div>
    </div>
  );
}
