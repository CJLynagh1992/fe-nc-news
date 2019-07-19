import React from 'react';

const Sorter = ({ setSort, type }) => {
  return (
    <>
      <h4>Sort By:</h4>
      <select onChange={setSort}>
        <option value="created_at">Date</option>
        <option value="votes">votes</option>
        {type === 'articles' ? <option value="comment_count">comments</option> : null}
      </select>
    </>
  );
};
export default Sorter;
