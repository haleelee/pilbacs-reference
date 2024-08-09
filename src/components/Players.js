import React from 'react';
import { SortingTable } from './SortingTable';

const Players = () => (
  <div>
    <h2>Players</h2>
    This is the Players page.
    <div className="table">
      <SortingTable />
    </div>
  </div>
  
);

export default Players;