import React from "react";
import { useEffect, useState} from "react"
import "/src/components/styles/Hero.css"


const Hero = () => {

    const [shows, setShows] = useState([]);
    
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
          setLoading(false);
        }
        fullShowsPreview();
      }, []);
    console.log(shows[1])


    const getRandomInt =(max)=>{
        return Math.floor(Math.random() * max)
    };

    const index = getRandomInt(shows.length);
    console.log(index)
    const heroDetails = shows[index]
    console.log(heroDetails) 

    return(
        <div>
            <div className="hero">
                {heroDetails && (
                    <img src={heroDetails.image} alt="show" className="hero"/>
                    )};
            </div>

            <div className="songsCard">
                {shows.map((show =>
                    <div className="songsPreview">
                        <img src={show.image} alt={show.title} className="cardImage"/>
                        <h4>{show.title}</h4>
                    </div>
                    ))}

            </div>
        </div>
    )
};

export default Hero