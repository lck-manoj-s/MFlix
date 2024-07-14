import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MovieCards({
    movieObj,
    path,
    name,
    watchList,
    addMovies,
    removeMovies,
    movieDetails,
}) {
    const imageUrl = `https://image.tmdb.org/t/p/original/${path}`;

    function wished(movieObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id == movieObj.id) {
                return true;
            }
        }
        return false;
    }
    return (
        <>
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="card-image rounded-lg my-[1vh] hover:cursor-pointer hover:scale-110 duration-300"
            >
                {wished(movieObj) ? (
                    <div
                        className="self-end mr-[0.3vw] mt-[0.3vh] "
                        onClick={() => removeMovies(movieObj)}
                    >
                        <i
                            class="fa-solid fa-heart"
                            style={{ color: "#ff0000" }}
                        ></i>
                    </div>
                ) : (
                    <div
                        className="self-end mr-[0.3vw] mt-[0.3vh] "
                        onClick={() => addMovies(movieObj)}
                    >
                        <i
                            class="fa-regular fa-heart"
                            style={{ color: "#ff0000" }}
                        ></i>
                    </div>
                )}
                <div
                    className="card-text self-start"
                    onClick={() => movieDetails(movieObj)}
                >
                    <Link to="/movie-details">{name}</Link>
                </div>
            </div>
        </>
    );
}

export default MovieCards;
