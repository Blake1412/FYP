import {mdiBallotOutline, mdiAccountCircleOutline, mdiInformationOutline, mdiCogOutline} from "@mdi/js"
import Icon from "@mdi/react";
import Navbar from "../components/Navbar.tsx";
import {useNavigate} from "react-router-dom";

const UserHomepage = () => {
    const navigate = useNavigate();

    const items = [
        {
            image: mdiBallotOutline,
            text: "Current Elections",
            onClick: () => {
                navigate("/electionsFalse")
            }
        },
        {image: mdiAccountCircleOutline, text: "My Account", link: "#"},
        {image: mdiInformationOutline, text: "Information", link: "#"},
        {image: mdiCogOutline, text: "Settings", link: "#"},
    ];

    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="grid grid-cols-2 gap-25 p-6 rounded-2xl ">
                    {items.map((item, index) => (
                        <div key={index}
                             className="w-100 h-70 flex flex-col rounded-lg overflow-hidden outline-2 items-center">
                            <Icon path={item.image} className="w-full h-3/4 object-cover"/>
                            <a onClick={item.onClick}
                               className="h-1/4 w-full flex items-center justify-center bg-green-700 text-white text-2xl cursor-pointer font-bold hover:bg-green-500 transition">
                                {item.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserHomepage;