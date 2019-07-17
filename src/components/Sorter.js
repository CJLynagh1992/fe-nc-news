import React from 'react';

const Sorter = ({ setSort }) => {
  return (
    <select onChange={setSort}>
      <option value="created_at">Date</option>
      <option value="comment_count">comments</option>
      <option value="votes">votes</option>
    </select>
  );
};
export default Sorter;
