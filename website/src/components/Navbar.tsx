import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js';


const Navbar = () => {
    const navigate = useNavigate();

    const handleHomePageClick = () => {
        navigate('/');
    };

    return (
        <nav className="w-full h-16 bg-green-700 flex items-center px-6">
            <button onClick={handleHomePageClick} className="hover:bg-green-500 cursor-pointer">
                <Icon path={mdiHomeCircleOutline} size={2}></Icon>
            </button>
        </nav>
    );
};

export default Navbar;
