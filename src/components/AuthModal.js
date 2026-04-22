import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>&times;</button>
        
        <div className="auth-header">
          <h3>{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
          <p>{isLogin ? 'Enter your details to log in' : 'Join FintechPrint Innovations'}</p>
        </div>

        <form className="auth-form">
          {!isLogin && (
            <div className="auth-input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}

          <div className="auth-input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="auth-input-group">
            <div className="label-row">
              <label>Password</label>
              {isLogin && <span className="reset-link">Reset Password</span>}
            </div>
            <div className="password-wrapper">
              <input type="password" placeholder="Enter your password" required />
              <button type="button" className="eye-btn">👁</button>
            </div>
          </div>

          <button type="submit" className="auth-main-btn">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
        </form>

        <div className="auth-divider"><span>- or -</span></div>

        <button className="passkey-btn">
  <svg 
    className="qr-code-icon" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M7 7h.01M17 7h.01M17 17h.01M7 17h.01" />
  </svg>
  Use a Passkey
</button>

        <div className="auth-footer">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)}>Log in</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;