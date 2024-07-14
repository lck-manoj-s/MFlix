import React from "react";
import "../App.css";

function Banner({path, name}) {
    const bannerUrl = `https://image.tmdb.org/t/p/w500/${path}`;
    return (
        <div
            className="banner-image"
            style={{ backgroundImage: `url(${bannerUrl})` }}
        >
            <div className="banner-text">{name}</div>
        </div>
    );
}

export default Banner;
