import React from "react";

function MovieDetail({ details }) {
    const imgUrl = `https://image.tmdb.org/t/p/original${details.poster_path}`;
    return (
        <div className="flex justify-around m-2">
            <div className="flex flex-col w-[60vw] shadow-lg rounded-lg m-2">
                <div className="flex">
                    <div
                        style={{
                            backgroundImage: `url(${imgUrl})`,
                        }}
                        className="card-image flex rounded-tl-lg rounded-bl-lg"
                    ></div>
                    <div className="flex flex-col w-[50vw] mt-2">
                        <div className="flex flex-row">
                            <div className="flex items-center justify-center relative w-16 h-16">
                                <i
                                    className="fa-regular fa-circle fa-3x absolute"
                                    style={{ color: "#e70808" }}
                                ></i>
                                <span className="text-center text-2xl absolute text-lg text-gray-900">
                                    7.1
                                </span>
                            </div>

                            <div className="flex flex-col mt-1">
                                <h2>
                                    <span className="text-xl">
                                        {details.title}
                                    </span>{" "}
                                    <i>Action, Love</i>
                                </h2>
                                <p className="">{details.release_date}</p>
                            </div>

                            <div className="ml-auto m-3 hover:cursor-pointer">
                                <i
                                    class="fa-solid fa-trash fa-2x"
                                    style={{ color: "#ff2424" }}
                                ></i>
                            </div>
                        </div>
                        <div className="ml-2 mt-5 flex flex-col space-around">
                            <p className="w-[50vw] italic">
                                {details.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
