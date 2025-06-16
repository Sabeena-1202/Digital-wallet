import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');
    setSuccess('');

    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);

    try {
      // Send data to backend
      const response = await fetch('http://localhost:3000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Password reset instructions have been sent to your email address. Please check your inbox and spam folder.');
        setEmail(''); // Clear the form
      } else {
        setError(data.message || 'Failed to send reset instructions. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '"Nunito Sans", sans-serif',
      height: '100vh',
      overflow: 'hidden'
    },
    nav: {
      position: 'fixed',
      zIndex: 999,
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'black',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px 8px 15px 50px',
      transition: 'all 0.4s ease-out'
    },
    brand: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      textDecoration: 'none',
      transition: 'all ease-in-out 0.3s'
    },
    brandH1: {
      margin: 0,
      fontSize: '36px',
      fontWeight: '900',
      color: 'black',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)'
    },
    ampasend: {
      color: 'indigo',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)'
    },
    accent: {
      color: 'black',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)'
    },
    forgotContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f3e2d4',
      paddingTop: '100px',
      boxSizing: 'border-box'
    },
    forgotBox: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      width: '400px',
      maxWidth: '90%'
    },
    forgotHeader: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    forgotHeaderH1: {
      fontSize: '32px',
      color: '#7D62B0',
      marginBottom: '10px'
    },
    description: {
      color: '#666',
      fontSize: '14px',
      lineHeight: '1.5',
      textAlign: 'center',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
      boxSizing: 'border-box'
    },
    submitBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#7D62B0',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      position: 'relative'
    },
    submitBtnDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    },
    forgotFooter: {
      textAlign: 'center',
      marginTop: '20px'
    },
    forgotFooterA: {
      color: '#7D62B0',
      textDecoration: 'none',
      margin: '0 10px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    },
    backLink: {
      display: 'inline-block',
      color: '#7D62B0',
      textDecoration: 'none',
      fontSize: '14px',
      marginBottom: '20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '15px',
      padding: '10px',
      backgroundColor: '#fee',
      borderRadius: '5px',
      border: '1px solid #fcc'
    },
    success: {
      color: 'green',
      textAlign: 'center',
      marginBottom: '15px',
      padding: '15px',
      backgroundColor: '#efe',
      borderRadius: '5px',
      border: '1px solid #cfc',
      lineHeight: '1.5'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '2px solid #ffffff',
      borderRadius: '50%',
      borderTop: '2px solid transparent',
      animation: 'spin 1s linear infinite'
    }
  };

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <nav style={styles.nav}>
        <button
          type="button"
          onClick={() => handleNavigation('/')}
          style={styles.brand}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          <h1 style={styles.brandH1}>
            <sup>Paws</sup>
            <b style={styles.ampasend}>&</b>
            <sub style={styles.accent}>Claws</sub>
          </h1>
        </button>
      </nav>

      <div style={styles.forgotContainer}>
        <div style={styles.forgotBox}>
          <button 
            type="button"
            style={styles.backLink}
            onClick={() => handleNavigation('/login')}
            onMouseEnter={(e) => e.target.style.color = '#6a529b'}
            onMouseLeave={(e) => e.target.style.color = '#7D62B0'}
          >
            ← Back to Login
          </button>
          
          <div style={styles.forgotHeader}>
            <h1 style={styles.forgotHeaderH1}>Forgot Password?</h1>
            <p style={styles.description}>
              Don't worry! Enter your email address below and we'll send you instructions to reset your password.
            </p>
          </div>
          
          {error && <div style={styles.error}>{error}</div>}
          {success && <div style={styles.success}>{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                placeholder="Enter your email address"
                disabled={isLoading}
              />
            </div>
            
            <button 
              type="submit"
              style={{
                ...styles.submitBtn,
                ...(isLoading ? styles.submitBtnDisabled : {})
              }}
              onMouseOver={(e) => {
                if (!isLoading) e.target.style.backgroundColor = '#6a529b';
              }}
              onMouseOut={(e) => {
                if (!isLoading) e.target.style.backgroundColor = '#7D62B0';
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span style={styles.loadingSpinner}></span>
                  {' '}Sending...
                </span>
              ) : (
                'Send Reset Instructions'
              )}
            </button>
          </form>
          
          <div style={styles.forgotFooter}>
            <p>
              Remember your password? 
              <button 
                type="button"
                style={styles.forgotFooterA}
                onClick={() => handleNavigation('/login')}
                onMouseEnter={(e) => e.target.style.color = '#6a529b'}
                onMouseLeave={(e) => e.target.style.color = '#7D62B0'}
              >
                Sign in
              </button>
            </p>
            <p>
              Don't have an account? 
              <button 
                type="button"
                style={styles.forgotFooterA}
                onClick={() => handleNavigation('/signup')}
                onMouseEnter={(e) => e.target.style.color = '#6a529b'}
                onMouseLeave={(e) => e.target.style.color = '#7D62B0'}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;