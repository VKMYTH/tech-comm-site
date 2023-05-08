import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Explore the Impacts of Transportation and Communication on Society</h1>
      <p>Our website is dedicated to exploring the impact of transportation and communication from 1900 to the present day. From the first airplanes to the latest satellites, transportation and communication have opened up new horizons of possibility and brought people closer together than ever before. Discover how these technologies have shaped our daily lives and transformed the world around us.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Get Started Below</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
