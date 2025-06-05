import { useNavigate } from 'react-router-dom';
import '../style.css'

function WelcomeScreen() {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="mb-4">WELCOME<br />To<br /><strong>Voltus Cart</strong></h1>
            <div className="d-flex gap-4">
                <button className="btn btn-outline-secondary" onClick={() => navigate('/shop')}>Skip</button>
                <button className="btn btn-login" onClick={() => navigate('/shop')}>Next</button>
            </div>
        </div>
    );
}

export default WelcomeScreen;
