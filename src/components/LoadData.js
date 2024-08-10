import React from 'react'

export const LoadData = (data) => {
    const jsonData = JSON.stringify(data);
  return (
    <div>
        <p>{jsonData ? "Data successfully loaded." : "Loading Data..."}</p>
        {console.log(jsonData)}
    </div>
  );
};
