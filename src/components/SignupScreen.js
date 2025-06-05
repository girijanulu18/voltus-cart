import { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../style.css'

function SignupScreen() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ first: '', last: '', email: '', pass: '', cpass: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.pass === form.cpass) {
            navigate('/welcome');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow" style={{ width: '22rem' }}>
                <h3 className="text-center mb-4">Signup</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaUser /> </span>
                            <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setForm({ ...form, first: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaUser /> </span>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setForm({ ...form, last: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaEnvelope /> </span>
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaLock /></span>
                            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setForm({ ...form, pass: e.target.value })} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><FaLock /></span>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, cpass: e.target.value })} required />
                        </div>
                    </div>
                    <button type='submit' className="btn btn-login w-100">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupScreen;
