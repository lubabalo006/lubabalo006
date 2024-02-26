import React, {useState, useEffect } from 'react';
import "./shows.css"


const API = () => {
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
    console.log(shows)
    // let d=shows[0]
    // let df=d.updated
    // console.log(df.substring(0, 10))
    //  PLAY
    function play_audio(task) {
      if(task == 'play'){
           $(".my_audio").trigger('play');
      }
    }

  return (
    <div>
      <div className='shows'>
        {shows.map((show => 
          <div className='show'>
            <div className='show-details'>
              <img src={show.image} />
              <div>{show.title}</div>
              <p className='date'>Update: {show.updated.substring(0, 10)}</p>
            </div>
            <div className='description'>{show.description}</div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default API;
