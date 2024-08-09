import React from 'react';
import { useParams } from 'react-router-dom';

const Results = () => {
  const {gameID} = useParams();
  return (
  <div>
    <h2>Results</h2>
    <p>Game ID: {gameID}</p>
  </div>

  );
};

export default Results;