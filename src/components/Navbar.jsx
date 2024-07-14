import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [currSection, setCurrSection] = useState("Home");

    return (
        <div className="flex border space-x-10 items-center py-2 px-5 font-serif font-bold bg-gray-200">
            <h1 className="text-red-600 text-[4vh] italic font w-full flex justify-left">
                MFlix
            </h1>
            <Link
                to="/"
                onClick={() => setCurrSection("Home")}
                className={`text-[3vh] hover:text-red-700 hover:underline ${currSection == "Home"? "text-red-700":"text-red-400"}`}
            >
                Home
            </Link>
            <Link
                to="/trending"
                onClick={() => setCurrSection("Trending")}
                className={`text-[3vh] hover:text-red-700 hover:underline ${currSection == "Trending"? "text-red-700":"text-red-400"}`}
            >
                Trending
            </Link>
            <Link
                to="/toprated"
                onClick={() => setCurrSection("Top")}
                className={`text-[3vh] hover:text-red-700 hover:underline ${currSection == "Top"? "text-red-700":"text-red-400"}`}
            >
                Top
            </Link>
            <Link
                to="/watchlist"
                onClick={() => setCurrSection("Watchlist")}
                className={`text-[3vh] hover:text-red-700 hover:underline ${currSection == "Watchlist"? "text-red-700":"text-red-400"}`}
            >
                Watchlist
            </Link>
        </div>
    );
}

export default Navbar;
