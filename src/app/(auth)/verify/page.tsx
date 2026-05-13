export default function Verify() {
  return (
    <div className="auth-form-wrapper">
      <div>
        <h1 className="auth-title">Verification</h1>
        <p className="auth-subtitle">We sent a 5-digit code to<br/>star***@gmail.com</p>
      </div>
      
      <div className="auth-form">
        <div className="verify-inputs">
          <input type="text" maxLength={1} className="verify-input" />
          <input type="text" maxLength={1} className="verify-input" />
          <input type="text" maxLength={1} className="verify-input" />
          <input type="text" maxLength={1} className="verify-input" />
          <input type="text" maxLength={1} className="verify-input" />
        </div>

        <button className="auth-btn" style={{marginTop: '24px'}}>Continue</button>
      </div>
    </div>
  );
}
