import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiHomeCircleOutline, mdiCogOutline, mdiAccountCircleOutline } from '@mdi/js';


const Navbar = () => {
    const navigate = useNavigate();

    const handleHomePageClick = () => {
        navigate('/');
    };

    return (
        <nav className="w-full h-16 bg-green-700 flex items-center px-6 justify-between">
            <div>
                <button onClick={handleHomePageClick} className="hover:bg-green-500 cursor-pointer">
                    <Icon path={mdiHomeCircleOutline} size={2}></Icon>
                </button>
            </div>
            <div className='flex gap-5'>
                <button className='hover:bg-green-500 cursor-pointer'>
                    <Icon path={mdiCogOutline} size={2}></Icon>
                </button>
                <button className='hover:bg-green-500 cursor-pointer'>
                    <Icon path={mdiAccountCircleOutline} size={2}></Icon>
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
