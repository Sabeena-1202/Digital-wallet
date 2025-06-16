import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    try {
      // Send data to backend
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Account created successfully! Please check your email to verify your account.');
        // Redirect to login after a delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError('Registration failed: ' + (data.message || 'Please try again'));
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '"Nunito Sans", sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
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
    signupContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3e2d4',
      padding: '120px 20px 40px 20px',
      boxSizing: 'border-box'
    },
    signupBox: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      width: '450px',
      maxWidth: '100%',
      boxSizing: 'border-box'
    },
    signupHeader: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    signupHeaderH1: {
      fontSize: '36px',
      color: '#7D62B0',
      marginBottom: '10px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    formRow: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap'
    },
    formRowItem: {
      flex: 1,
      minWidth: '150px'
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
    signupBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#7D62B0',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '10px'
    },
    signupFooter: {
      textAlign: 'center',
      marginTop: '20px'
    },
    signupFooterA: {
      color: '#7D62B0',
      textDecoration: 'none'
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
      padding: '10px',
      backgroundColor: '#efe',
      borderRadius: '5px',
      border: '1px solid #cfc'
    }
  };

  return (
    <div style={styles.body}>
      <nav style={styles.nav}>
        <div 
          style={{...styles.brand, cursor: 'pointer'}}
          onClick={() => navigate('/')}
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
        </div>
      </nav>

      <div style={styles.signupContainer}>
        <div style={styles.signupBox}>
          <div style={styles.signupHeader}>
            <h1 style={styles.signupHeaderH1}>Create Account</h1>
            <p>Join the Paws & Claws community</p>
          </div>
          
          {error && <div style={styles.error}>{error}</div>}
          {success && <div style={styles.success}>{success}</div>}
          
          <div>
            <div style={styles.formRow}>
              <div style={styles.formRowItem}>
                <div style={styles.formGroup}>
                  <label htmlFor="firstName" style={styles.label}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>
              </div>
              <div style={styles.formRowItem}>
                <div style={styles.formGroup}>
                  <label htmlFor="lastName" style={styles.label}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>
              </div>
            </div>
            
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
                placeholder="At least 6 characters"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#7D62B0'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              style={styles.signupBtn}
              onMouseOver={(e) => e.target.style.backgroundColor = '#6a529b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#7D62B0'}
            >
              Create Account
            </button>
          </div>
          
          <div style={styles.signupFooter}>
            <p>Already have an account? <span onClick={() => navigate('/login')} style={{...styles.signupFooterA, cursor: 'pointer'}}>Sign in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;