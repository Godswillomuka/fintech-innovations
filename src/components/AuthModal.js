import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isResetMode, setIsResetMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const handlePasskey = async () => {
    try {
      if (window.PublicKeyCredential) {
        // Triggers native UI seen in Screenshot from 2026-04-22 22-28-10.png
        console.log("Requesting security key for fintechprint-innovations.odoo.com");
        alert("Insert your security key and touch it");
      }
    } catch (err) {
      console.error("Passkey failed", err);
    }
  };

  const EyeIcon = ({ isVisible }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      {!isVisible && <line x1="1" y1="1" x2="23" y2="23" />}
    </svg>
  );

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>&times;</button>
        
        <div className="auth-header">
          <h3>{isResetMode ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Create Account')}</h3>
          <p>
            {isResetMode 
              ? 'Enter your email to receive recovery instructions.' 
              : (isLogin ? 'Enter your details to log in' : 'Join FintechPrint Innovations')}
          </p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {/* Always show Email */}
          <div className="auth-input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {!isResetMode && (
            <>
              {/* Full Name only on Sign Up */}
              {!isLogin && (
                <div className="auth-input-group">
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
              )}

              {/* Password Field */}
              <div className="auth-input-group">
                <div className="label-row">
                  <label>Password</label>
                  {isLogin && <span className="reset-link" onClick={() => setIsResetMode(true)}>Reset Password</span>}
                </div>
                <div className="password-wrapper">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    required 
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    <EyeIcon isVisible={showPassword} />
                  </button>
                </div>
              </div>

              {/* Confirm Password only on Sign Up */}
              {!isLogin && (
                <div className="auth-input-group">
                  <label>Confirm Password</label>
                  <div className="password-wrapper">
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder="Confirm your password" 
                      required 
                    />
                    <button type="button" className="eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      <EyeIcon isVisible={showConfirmPassword} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          <button type="submit" className="auth-main-btn">
            {isResetMode ? 'Send Reset Link' : (isLogin ? 'Log in' : 'Sign up')}
          </button>

          {isResetMode && (
            <button type="button" className="back-to-login" onClick={() => setIsResetMode(false)}>
              Back to Login
            </button>
          )}
        </form>

        {!isResetMode && (
          <>
            <div className="auth-divider"><span>- or -</span></div>
            <button className="passkey-btn" onClick={handlePasskey}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                <path d="M7 7h.01M17 7h.01M17 17h.01M7 17h.01" />
              </svg>
              Use a Passkey
            </button>
          </>
        )}

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => { setIsLogin(!isLogin); setIsResetMode(false); }}>
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;