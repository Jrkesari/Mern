import React, { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(false); // State for loading status

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle successful login
        console.log('Login successful');
        // You might want to redirect or handle successful login here
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      setError(err.response ? err.response.data.msg : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="main-agileits">
        <div className="form-w3agile">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="key">
              <i className="fa fa-envelope" aria-hidden="true" aria-label="Email"></i>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
                aria-label="Email"
              />
              <div className="clearfix"></div>
            </div>
            <div className="key">
              <i className="fa fa-lock" aria-hidden="true" aria-label="Password"></i>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
                aria-label="Password"
              />
              <div className="clearfix"></div>
            </div>
            <input type="submit" value={loading ? 'Logging in...' : 'Login'} disabled={loading} />
            {error && <p className="error-message">{error}</p>} {/* Error message display */}
          </form>
        </div>
        <div className="forg">
          <Link to="#" className="forg-left">Forgot Password</Link>
          <Link to="/register" className="forg-right">Register</Link>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
