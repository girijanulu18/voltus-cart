import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import GoogleLoginScreen from './components/GoogleLoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import ShopScreen from './components/ShopScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/google-login" element={<GoogleLoginScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
