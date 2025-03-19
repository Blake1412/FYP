import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/Register';
import LoginPage from './pages/Login';
import './globals.css'


const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/landingPage" element={<LoginPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </Router>
        </>

    );
};

export default App
