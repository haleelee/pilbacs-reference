import React from 'react'
import { useParams } from 'react-router-dom';

export const TeamInfo = () => {
  const {teamName} = useParams();
  console.log(teamName)
  return (
    <div>
      <h1>
        {teamName}
      </h1>
    </div>
  )
}

