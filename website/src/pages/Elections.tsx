import Navbar from "../components/Navbar"
import Icon from '@mdi/react';
import { mdiClockTimeFiveOutline } from '@mdi/js';
import { useNavigate } from "react-router-dom";

interface ElectionProps {
    voted: boolean
}


const Elections = ({ voted }: ElectionProps) => {
    const navigate = useNavigate()

    const elections = [
        {
            title: "2024 General Election", time: "1 week", hasVoted: false,
        },
        {
            title: "The Thirty-Ninth Amendment of the Constitution (The Family)", time: "2 Days", hasVoted: voted, onClick: () => {
                navigate("/electionsMock")
            }
        },
        { title: "The Fortieth Amendment of the Constitution (Care)", time: "2 Days", hasVoted: false },
    ]

    return (
        <>
            <Navbar />
            <div className="flex items-center flex-col h-225 w-full justify-center gap-10">
                {
                    elections.map((item, index) => (
                        <div className="w-200 h-50 flex  transition-all duration-300 hover:w-220 hover:h-60 ">
                            <div onClick={item.onClick} className="flex flex-col shadow-xl h-full w-9/10 border-1 justify-between cursor-pointer" key={index}>
                                <span className="font-bold text-xl self-center col-span-2 my-10">{item.title}</span>
                                <span className="flex gap-1 m-5"> <Icon path={mdiClockTimeFiveOutline} size={1}></Icon> Time remaining: {item.time}</span>
                            </div>
                            {item.hasVoted === false ? <div className="bg-red-100 h-full w-2/10 items-center justify-center flex border-1">
                                <span>No Vote submitted</span>
                            </div> : <div className="bg-green-100 h-full w-2/10 items-center justify-center flex">
                                <a href="#" className="text-blue-500 underline">Vote submitted</a>
                            </div>}
                        </div>


                    ))
                }
            </div>


        </>
    )
}

export default Elections