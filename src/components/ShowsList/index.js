import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div className="show" key={show.show.id}>
          <h3>
            <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
          </h3>
          <p>Language: {show.show.language}</p>
          <p>Premiered: {show.show.premiered}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ShowList;
