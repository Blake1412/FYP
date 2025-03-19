import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar/>

            <div className="flex flex-1 items-center justify-center px-10">
                <div className="flex flex-col items-center justify-center space-y-4 z-10">
                    <button
                        className="w-40 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
                        onClick={handleRegisterClick}
                    >
                        Register
                    </button>
                    <button
                        className="w-40 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
