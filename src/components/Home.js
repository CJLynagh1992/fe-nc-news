import React from 'react';

const Home = ({ setUser }) => {
  return (
    <select onChange={setUser}>
      <option disabled value="Please select Username">
        Please select your username
      </option>
      <option value="jessjelly">jessjelly</option>
      <option value="grumpy19">grumpy19</option>
      <option value="tickle122">tickle122</option>
    </select>
  );
};
export default Home;
