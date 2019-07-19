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

        <img className="homepageimage" src="https://nerdist.com/wp-content/uploads/2019/03/jk-simmons-jjj-header-1200x676.jpg" alt="https://i.ytimg.com/vi/fY7kIbkmnpc/maxresdefault.jpg" />
      </section>
    </>
  );
};
export default Home;
