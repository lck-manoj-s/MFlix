import React, { useEffect, useState } from "react";
import WatchMovie from "./WatchMovie";
import genreMap from "../assets/genres";

function WatchList({ watchList, removeMovies }) {
    const [isAsec, setAsec] = useState(true);
    const [search, setSearch] = useState("");
    const [genreList, setGenres] = useState([]);
    const [currGenre, setCurrGenre] = useState("All Genres");

    let searchText = (e) => {
        setSearch(e.target.value);
    };

    let sortAsec = () => {
        watchList.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average;
        });
    };

    let sortDesc = () => {
        watchList.sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average;
        });
    };

    function changeSort() {
        setAsec(!isAsec);
    }

    let filterMovies = (movieGenre) => {
        setCurrGenre(movieGenre);
    };

    useEffect(() => {
        let movieGenres = new Set();
        watchList.map((movies) => {
            movies.genre_ids.map((genre) => {
                movieGenres.add(genreMap[genre]);
            });
        });
        movieGenres = Array.from(movieGenres);
        setGenres(["All Genres", ...movieGenres]);
    }, [watchList]);
    return (
        <>
            <div className="flex justify-between items-center mx-[1vw] my-[2vw] font-bold text-red-400">
                <h1 className="text-3xl">My Watchlist</h1>
                <input
                    onChange={searchText}
                    value={search}
                    type="text"
                    className="w-[30vw] h-[4.5vh] outline-none bg-red-100 rounded-lg text-[2.25vh] text-red-700 p-[1vw]"
                    placeholder="Your movie to watch"
                ></input>
                <div>
                    <h1 className="text-3xl">
                        Order By :
                        <em
                            onClick={changeSort}
                            className="hover:cursor-pointer"
                        >
                            {isAsec ? (
                                <i
                                    class="fa-solid fa-arrow-down-1-9"
                                    style={{ color: "#4f4f4f" }}
                                    onClick={sortAsec}
                                ></i>
                            ) : (
                                <i
                                    class="fa-solid fa-arrow-down-9-1"
                                    style={{ color: "#4f4f4f" }}
                                    onClick={sortDesc}
                                ></i>
                            )}
                        </em>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center flex-wrap mb-5">
                {genreList.map((genre) => {
                    return (
                        <div
                            onClick={() => filterMovies(genre)}
                            className={`shadow-lg py-1 border-2 rounded-full px-4 text-xl mx-4 hover:cursor-pointer ${
                                currGenre === genre
                                    ? "border-red-100 text-red-400"
                                    : "border-gray-100 text-gray-400"
                            }`}
                        >
                            {genre}
                        </div>
                    );
                })}

            </div>
            {watchList
                .filter((movies) => {
                    if (currGenre == 'All Genres') {
                        return true;
                    } else {
                        return movies.genre_ids.some((genre) => genreMap[genre] === currGenre);
                    }
                })
                .filter((movies) => {
                    return movies.title
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase());
                })
                .map((movies) => {
                    return (
                        <WatchMovie
                            key={movies.id}
                            movies={movies}
                            removeMovies={removeMovies}
                        />
                    );
                })}
        </>
    );
}

export default WatchList;
