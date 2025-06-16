import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Simple form validation - just check if fields are filled
    if (formData.email && formData.password) {
      // Direct navigation to home page without authentication
      navigate('/');
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
    loginContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f3e2d4',
      paddingTop: '100px',
      boxSizing: 'border-box'
    },
    loginBox: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      width: '400px',
      maxWidth: '90%'
    },
    loginHeader: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    loginHeaderH1: {
      fontSize: '36px',
      color: '#7D62B0',
      marginBottom: '10px'
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
    loginBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#7D62B0',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '15px',
      marginBottom: '20px'
    },
    forgotPasswordA: {
      color: '#7D62B0',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    },
    loginFooter: {
      textAlign: 'center',
      marginTop: '20px',
      paddingTop: '15px',
      borderTop: '1px solid #eee'
    },
    loginFooterA: {
      color: '#7D62B0',
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      marginLeft: '5px'
    }
  };

  return (
    <div style={styles.body}>
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

      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <div style={styles.loginHeader}>
            <h1 style={styles.loginHeaderH1}>Welcome Back!</h1>
            <p>Please login to continue</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>
            
            <div style={styles.forgotPassword}>
              <button 
                type="button"
                onClick={() => handleNavigation('/forgot-password')}
                style={styles.forgotPasswordA}
                onMouseEnter={(e) => e.target.style.color = '#6a529b'}
                onMouseLeave={(e) => e.target.style.color = '#7D62B0'}
              >
                Forgot your password?
              </button>
            </div>
            
            <button 
              type="submit"
              style={styles.loginBtn}
              onMouseOver={(e) => e.target.style.backgroundColor = '#6a529b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#7D62B0'}
            >
              Login
            </button>
          </form>
          
          <div style={styles.loginFooter}>
            <p>Don't have an account? 
              <button
                type="button"
                onClick={() => handleNavigation('/signup')}
                style={styles.loginFooterA}
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

export default LoginPage;