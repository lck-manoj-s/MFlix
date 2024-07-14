import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import MovieDetail from "./components/MovieDetail";

function App() {
    const [watchList, setWatchList] = useState([]);
    const [current, setCurrent] = useState([]);

    let addMovies = (movieObj) => {
        let nextList = [...watchList, movieObj];
        localStorage.setItem("MFlix", JSON.stringify(nextList));
        setWatchList(nextList);
    };

    let removeMovies = (movieObj) => {
        console.log(movieObj.title);
        let removed = watchList.filter((movie) => {
            return movie.id != movieObj.id;
        });
        localStorage.setItem("MFlix", JSON.stringify(removed));
        setWatchList(removed);
    };

    useEffect(() => {
        let moviedata = localStorage.getItem("MFlix");
        if (!moviedata) {
            return;
        }
        setWatchList(JSON.parse(moviedata));
    },[]);

    let clickedMovie = (movieObj) => {
        setCurrent(movieObj);
        console.log("clicked", movieObj);
    };
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/trending"
                        element={
                            <Trending
                                watchList={watchList}
                                addMovies={addMovies}
                                removeMovies={removeMovies}
                                movieDetails={clickedMovie}
                            />
                        }
                    />
                    <Route
                        path="/toprated"
                        element={
                            <TopRated
                                watchList={watchList}
                                addMovies={addMovies}
                                removeMovies={removeMovies}
                            />
                        }
                    />
                    <Route
                        path="/watchlist"
                        element={<WatchList watchList={watchList} removeMovies={removeMovies} />}
                    />
                    <Route
                        path="/movie-details"
                        element={<MovieDetail details={current} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
