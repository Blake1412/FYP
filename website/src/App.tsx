import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/Register';
import LoginPage from './pages/Login';
import UserHomepage from "./pages/UserHomepage.tsx";
import Elections from "./pages/Elections.tsx"
import ElectionsMock from "./pages/ElectionsMock.tsx"
import './globals.css'


const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/userHomepage" element={<UserHomepage/>}/>
                    <Route path='/electionsFalse' element={<Elections voted={false}/>}/>
                    <Route path='/electionsTrue' element={<Elections voted={true}/>}/>
                    <Route path='/electionsMock' element={<ElectionsMock/>}/>
                </Routes>
            </Router>
        </>

    );
};

export default App
