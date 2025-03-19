import {useState} from 'react';
import Navbar from "../components/Navbar.tsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        pps: '',
        dob: '',
        email: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
        navigate('/');
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar/>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl mb-8">Register</h2>
                <form onSubmit={handleSubmit} className="w-150 space-y-4">
                    <div>
                        <label htmlFor="pps">PPS Number</label>
                        <input type="text"
                               id="pps"
                               name="pps"
                               value={formData.pps}
                               onChange={handleChange}
                               className={'w-full px-4 py-2 border rounded-lg'}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date"
                               id="dob"
                               name="dob"
                               value={formData.dob}
                               onChange={handleChange}
                               className={'w-full px-4 py-2 border rounded-lg'}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               className={'w-full px-4 py-2 border rounded-lg'}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={formData.password}
                               onChange={handleChange}
                               className={'w-full px-4 py-2 border rounded-lg'}
                               required
                        />
                    </div>

                    <button type="submit"
                            className="w-full px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
