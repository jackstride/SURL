import React, { Fragment } from 'react';
import Header from '../Components/Header';
import Phone from '../images/iphone.png';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="header_message">
        <h1>
          Easy to <br></br> remembers <span>links</span> <br></br> for all
        </h1>
        <button className="cta">Get started</button>
        <p>
          Just like you, we find it hard to remember long links. That's why we
          created Surl. Manage and shorten your links be signing.
        </p>
      </div>
      <div className="case_use_one">
        <div className="case_grid">
          <div className="grid_image">
            <img src={Phone} alt="Web Resposnive" />
          </div>
          <div className="grid_text">
            <h2>
              {' '}
              Easily manage<br></br>your links.
            </h2>
            <div className="features_grid">
              <p>Create</p>
              <p>Edit</p>
              <p>Manage</p>
              <p>Share</p>
            </div>
            <p className="grid_p">
              Just link you, we find it hard to remember long liks. That's why
              we created surl. Manage and shorten your links be signing.
            </p>
          </div>
        </div>
      </div>
      <div className="desktop_container">
        <div className="single_heading">
          <h2>Share & link with everyone.</h2>
          <button className="cta">Get started</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
