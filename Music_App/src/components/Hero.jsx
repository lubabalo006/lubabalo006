import React, { useEffect, useState } from "react";
import "/src/components/styles/Hero.css";

const Hero = () => {
    const [shows, setShows] = useState([]);
    const [formattedDates, setFormattedDates] = useState([]);

    useEffect(() => {
        async function fullShowsPreview() {
            const response = await fetch('https://podcast-api.netlify.app/shows');
            const previews = await response.json();

            const fullShowsPromises = previews.map(async (preview) => {
                const fullShowResponse = await fetch(`https://podcast-api.netlify.app/id/${preview.id}`);
                return fullShowResponse.json();
            });

            const fullShows = await Promise.all(fullShowsPromises);
            setShows(fullShows.filter((show) => show !== null));

            // Extract and format dates
            const dates = fullShows.map((show) => new Date(show.updated));
            const formattedDates = dates.map((date) => date.toLocaleDateString());
            setFormattedDates(formattedDates);
        }
        fullShowsPreview();
    }, []);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const index = getRandomInt(shows.length);
    const heroDetails = shows[index];

    /*        PLAY AUDIO        */
    const playAudio = shows.map((show)=>show.image)
    console.log(playAudio)
    console.log(shows)

    return (
        <div>
            <div className="hero">
                {heroDetails && <img src={heroDetails.image} alt="show" className="hero" />}
            </div>

            <div className="songsCard">
                {shows.map((show, index) => (
                    <div key={index} className="songsPreview">
                        <img src={show.image} alt={show.title} className="cardImage" />
                        <h4>{show.title}</h4>
                        <div className="datePlay">
                            <p>{formattedDates[index]}</p>
                            <div className="play">
                                <label>
                                    <input className="play-btn" type="checkbox"/>
                                    <div className="play-icon"></div>
                                    <div className="pause-icon"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
