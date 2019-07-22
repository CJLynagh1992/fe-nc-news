import React from 'react';
import './home.css';

const Home = ({ setUser }) => {
  return (
    <>
      <section className="homepage">
        <select className="select" onChange={setUser}>
          <option value="">Please select a username...</option>
          <option value="jessjelly">jessjelly</option>
          <option value="grumpy19">grumpy19</option>
          <option value="tickle122">tickle122</option>
          <option value="cooljmessy">cooljmessy</option>
          <option value="weegembump">weegembump</option>
          <option value="happyamy2016">happyamy2016</option>
        </select>
      </section>
    </>
  );
};
export default Home;
