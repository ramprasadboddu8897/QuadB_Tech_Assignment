import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };

    fetchShow();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!show) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{show.name}</h1>
      <p className="summary">Summary: {show.summary}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
  
};

export default ShowSummary;
