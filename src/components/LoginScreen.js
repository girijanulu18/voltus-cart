import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import '../style.css'

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/welcome');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow" style={{ width: '22rem' }}>
                <h3 className="text-center mb-4">Voltus Cart</h3>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaEnvelope /></span>
                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaLock /></span>
                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <Link to="/signup" className="btn btn-secondary w-100">Signup</Link>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-login w-100">Login</button>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-outline-danger w-100" onClick={() => navigate('/google-login')}>
                        <FaGoogle className="me-2" /> Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
