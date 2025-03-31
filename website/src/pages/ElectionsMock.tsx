import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ReferendumPage = () => {
    const [vote, setVote] = useState<"yes" | "no" | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (vote === null) {
            alert("Please select an option before submitting.");
        } else {
            setSubmitted(true); // Set submitted to true after a vote is cast
        }
    };

    const handleReturn = () => {
        setSubmitted(false); // Reset the page to its original state
        setVote(null); // Optionally reset the vote if needed
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
                {submitted ? (
                    // Return Button section after submission
                    <div className="text-center flex flex-col gap-20">
                        <span className="text-3xl">Vote submitted successfully</span>
                        <button
                            onClick={() => { navigate("/electionsTrue") }}
                            className="px-6 py-2 bg-green-700 text-white rounded-lg shadow-md cursor-pointer hover:bg-green-500 transition-all"
                        >
                            Return
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Top Section with Description */}
                        <h1 className="text-4xl my-20 font-bold">The Thirty-Ninth Amendment of the Constitution (The Family)</h1>
                        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-2xl font-bold text-gray-800 align-center">Proposed Changes</h1>
                            <p className="font-bold mt-5">Proposed to change Article 41.1.1° text in bold:</p>
                            <p className="mt-2 text-gray-600">

                                Article 41.1.1° “The State recognises the Family, <strong>whether founded on marriage or on other durable relationships</strong>, as the natural primary and fundamental unit group of Society, and as a moral institution possessing inalienable and imprescriptible rights, antecedent and superior to all positive law.”

                            </p>
                            <p className="font-bold mt-5">Proposed to change Article 41.3.1° by deleting text shown with line through it:</p>
                            <p className="mt-2 text-gray-600">
                                “The State pledges itself to guard with special care the institution of Marriage, <s>on which the Family is founded</s>, and to protect it against attack.”
                            </p>
                        </div>

                        {/* Voting Section */}
                        <div className="mt-6 flex gap-8">
                            {/* Yes Option */}
                            <div
                                className={`p-4 w-40 text-center border rounded-lg cursor-pointer transition-all ${vote === "yes" ? "bg-green-500 text-white" : "bg-white text-gray-800"
                                    }`}
                                onClick={() => setVote("yes")}
                            >
                                <input
                                    type="checkbox"
                                    checked={vote === "yes"}
                                    onChange={() => setVote("yes")}
                                    className="mr-2"
                                />
                                Yes
                            </div>

                            {/* No Option */}
                            <div
                                className={`p-4 w-40 text-center border rounded-lg cursor-pointer transition-all ${vote === "no" ? "bg-red-500 text-white" : "bg-white text-gray-800"
                                    }`}
                                onClick={() => setVote("no")}
                            >
                                <input
                                    type="checkbox"
                                    checked={vote === "no"}
                                    onChange={() => setVote("no")}
                                    className="mr-2"
                                />
                                No
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                onClick={handleSubmit}
                                className="text-xl px-6 py-2 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-500 transition-all cursor-pointer"
                            >
                                Submit Vote
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>

    );
};

export default ReferendumPage;
