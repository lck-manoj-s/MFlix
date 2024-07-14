import React, { useState } from "react";
import "../App.css";
import genreMap from "../assets/genres"

function WatchMovie({movies, removeMovies}) {
    const imgUrl = `https://image.tmdb.org/t/p/original${movies.poster_path}`;

    const date = new Date(movies.release_date);
    const releaseDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(date);
    
    
    
    return (
        <div className="flex justify-around m-2">
            <div className="flex flex-col w-[75vw] shadow-lg rounded-lg m-2">
                <div className="flex">
                    <div
                        style={{
                            backgroundImage: `url(${imgUrl})`,
                        }}
                        className="card-image h-[32vh] flex rounded-tl-lg rounded-bl-lg"
                    ></div>
                    <div className="flex flex-col w-[65vw] mt-2">
                        <div className="flex flex-row">
                            <div className="flex items-center justify-center relative w-16 h-16">
                                <i
                                    className="fa-regular fa-circle fa-3x absolute"
                                    style={{ color: "#e70808" }}
                                ></i>
                                <span className="text-center text-2xl absolute text-lg text-gray-900">
                                    {(movies.vote_average).toFixed(1)}
                                </span>
                            </div>

                            <div className="flex flex-col mt-1">
                                <h2><span className="text-xl font-bold mr-1">{movies.title}</span> {movies.genre_ids.map((genre, index) =>{
                                    if(index === movies.genre_ids.length - 1){
                                        return <i>{genreMap[genre]} </i>
                                    }
                                    else{
                                        return <i>{genreMap[genre]}, </i>
                                    }
                                })}
                                </h2>
                                <p className="">{releaseDate}</p>
                            </div>

                            <div className="ml-auto m-3 hover:cursor-pointer">
                                <i
                                    class="fa-solid fa-trash fa-2x"
                                    style={{ color: "#ff2424" }}
                                    onClick={() => removeMovies(movies)}
                                ></i>
                            </div>
                        </div>
                        <div className="ml-2 mt-auto flex flex-col space-around">
                            <p className="w-[62vw] italic text-xl mx-2">
                                {movies.overview}
                            </p>
                        </div>
                        <div className="flex flex-row mt-auto ml-2 mb-2">
                            <p className="mx-2 mr-3"><i className="text-xl">Popularity:</i> {movies.popularity.toFixed(2)}</p>
                            <p className="mx-5"><i className="text-xl">Total votes:</i> {movies.vote_count}</p>
                            <p className="mx-5"><i className="text-xl">Score:</i> {(((movies.vote_average).toFixed(1))*12-20).toFixed(0)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;
