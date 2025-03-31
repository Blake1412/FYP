import {useState} from 'react';
import Navbar from "../components/Navbar.tsx";

const Register = () => {
    const [formData, setFormData] = useState({
        forename: '',
        surname: '',
        dob: '',
        pps: '',
        constituency: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar/>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl mb-8">Register</h2>
                <form onSubmit={handleSubmit} className="w-150 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <label htmlFor="forename" className="block">Forename</label>
                        <input
                            type="text"
                            id="forename"
                            name="forename"
                            value={formData.forename}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                        <label htmlFor="surname" className="block">Surname</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="dob" className="block">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pps" className="block">PPS Number</label>
                        <input
                            type="text"
                            id="pps"
                            name="pps"
                            value={formData.pps}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="constituency" className="block">Constituency</label>
                        <select
                            id="constituency"
                            name="constituency"
                            value={formData.constituency}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        >
                            <option value="">Select Constituency</option>
                            <option value="Constituency1">Constituency 1</option>
                            <option value="Constituency2">Constituency 2</option>
                            <option value="Constituency3">Constituency 3</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={formData.password}
                               onChange={handleChange}
                               className="w-full px-4 py-2 border rounded-lg"
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Confirm Password" className="block">Confirm Password</label>
                        <input type="password"
                               id="confirmPassword"
                               name="confirmPassword"
                               value={formData.confirmPassword}
                               onChange={handleChange}
                               className="w-full px-4 py-2 border rounded-lg"
                               required
                        />
                    </div>
                    <button type="submit"
                            className="w-full px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
