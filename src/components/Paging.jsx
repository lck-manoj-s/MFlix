import React from "react";

function Paging({ before, after, no }) {
    return (
        <div className="bg-gray-400 mt-[1.5vh] p-[0.5vh] flex justify-center">
            {no > 1 ? (
                <div onClick={before} className="mx-[1vw] hover:cursor-pointer">
                    <i class="fa-sharp fa-solid fa-backward" style={{color: "white"}}></i>
                </div>
            ) : (
                <div></div>
            )}
            <div className="mx-[1vw] font-bold text-white">{no}</div>
            {no < 27 ? (
                <div onClick={after} className="mx-[1vw] hover:cursor-pointer">
                    <i class="fa-sharp fa-solid fa-forward" style={{color: "white"}}></i>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Paging;
