import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../style.css'

function ForgotPasswordScreen() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', newpass: '', confirmpass: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.newpass === form.confirmpass) {
            navigate('/welcome');
        }
    };
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow" style={{ width: '22rem' }}>
                <h3 className="text-center mb-4">Reset Password</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaEnvelope /></span>
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaLock /></span>
                            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setForm({ ...form, newpass: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaLock /></span>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, confirmpass: e.target.value })} required />
                        </div>
                    </div>
                    <button type='submit' className="btn btn-login w-100">Update Password</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordScreen;
