import Link from 'next/link';
import { Mail, Lock, Eye } from 'lucide-react';

export default function SignIn() {
  return (
    <div className="auth-form-wrapper">
      <h1 className="auth-title">Sign in</h1>
      
      <div className="auth-form">
        <div className="auth-input-group">
          <label className="auth-label">Email</label>
          <div className="auth-input-wrapper">
            <Mail size={18} className="auth-input-icon-left" />
            <input type="email" placeholder="Enter email" className="auth-input" />
          </div>
        </div>

        <div className="auth-input-group">
          <label className="auth-label">Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} className="auth-input-icon-left" />
            <input type="password" placeholder="Enter password" className="auth-input" />
            <Eye size={18} className="auth-input-icon-right" />
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <Link href="/forgot-password" style={{ color: 'var(--color-text-muted)', fontSize: '14px', textDecoration: 'none' }}>
            Forgot password?
          </Link>
        </div>

        <button className="auth-btn">Sign in</button>

        <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }}></div>
          <span style={{ padding: '0 12px', color: 'var(--color-text-muted)', fontSize: '14px' }}>Or</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }}></div>
        </div>

        <button className="btn-outline flex-btn" style={{ justifyContent: 'center', padding: '14px', width: '100%', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px', marginRight: '8px' }} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
