import React, { useState } from "react";
import MovieCards from "./MovieCards";
import axios from "axios";
import Paging from "./Paging";
import { useEffect } from "react";
import Banner from "./Banner";

function Trending({watchList, addMovies, removeMovies, movieDetails }) {
    const [trending, setTrending] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [banner, setBanner] = useState([]);

    function getTrending() {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=f6c70b99da59caf4ed4ebcfd654002e5&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                const results = res.data.results;
                setTrending(results.slice(0, 18));
                setBanner(results[18]);
            });
    }

    function pageBefore() {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    }

    function pageNext() {
        if (pageNo === 27) {
            setPageNo(pageNo);
        } else {
            setPageNo(pageNo + 1);
        }
    }

    useEffect(() => {
        getTrending();
    }, [pageNo]);

    return (
        <div>
            <Banner
                key={banner.id}
                path={banner.backdrop_path}
                name={banner.title}
            />
            <div className="text-2xl font-bold text-center my-[3vh]">
                Trending Movies
            </div>
            <div className="flex flex-row flex-wrap justify-around">
                {trending.map((movieObj) => {
                    return (
                        <MovieCards
                            movieObj={movieObj}
                            key={movieObj.id}
                            path={movieObj.poster_path}
                            name={movieObj.title}
                            watchList={watchList}
                            addMovies={addMovies}
                            removeMovies={removeMovies}
                            movieDetails={movieDetails}
                        />
                    );
                })}
            </div>
            <Paging before={pageBefore} after={pageNext} no={pageNo} />
        </div>
    );
}

export default Trending;

// API TRENDING MOVIES URL
// https://api.themoviedb.org/3/movie/popular?api_key=f6c70b99da59caf4ed4ebcfd654002e5&language=en-US&page=1
