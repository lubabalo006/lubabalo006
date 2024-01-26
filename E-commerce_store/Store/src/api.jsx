import React, {useState, useEffect } from 'react';

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

  return (
    <div>
      <p>Check the console for the API response</p>
    </div>
  );
};

export default API;
