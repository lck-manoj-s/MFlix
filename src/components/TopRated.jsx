import React, { useEffect } from "react";
import MovieCards from "./MovieCards";
import axios from "axios";
import Paging from "./Paging";
import { useState } from "react";
import Banner from "./Banner";

function TopRated({watchList, addMovies, removeMovies}) {
    const [top, setTop] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [banner, setBanner] = useState([]);

    function getTopRated() {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=f6c70b99da59caf4ed4ebcfd654002e5&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                const results = res.data.results;
                setTop(results.slice(0, 18));
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
        getTopRated();
    }, [pageNo]);

    return (
        <div>
            <Banner
                key={banner.id}
                path={banner.backdrop_path}
                name={banner.title}
            />
            <div className="text-2xl font-bold text-center my-[3vh]">
                Top Rated Movies
            </div>
            <div className="flex flex-row flex-wrap justify-around">
                {top.map((movieObj) => {
                    return (
                        <MovieCards
                            movieObj={movieObj}
                            key={movieObj.id}
                            path={movieObj.poster_path}
                            name={movieObj.title}
                            watchList={watchList}
                            addMovies={addMovies}
                            removeMovies={removeMovies}
                        />
                    );
                })}
            </div>
            <Paging before={pageBefore} after={pageNext} no={pageNo} />
        </div>
    );
}

export default TopRated;

// API NOW PLAYING MOVIES URL
// https://api.themoviedb.org/3/movie/top_rated?api_key=f6c70b99da59caf4ed4ebcfd654002e5&language=en-US&page=1
