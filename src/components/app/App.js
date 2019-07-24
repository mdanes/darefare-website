import React from 'react';
import df_logo from '../../assets/images/monkey-barrel-logo.svg';
import work1 from '../../assets/images/example1.png';
import work2 from '../../assets/images/example2.png';
import work3 from '../../assets/images/example3.png';
import './App.css';

function App() {
  return (
    <>
      <main className="overflow--auto">
        <h1 className="color--slateGrey section__heading--largest">
          <img src={df_logo}  alt="Darefare" />
        </h1>

        <ul className="section--social">
          <li className="socialWrapper">
            <a className="color--cloud social"
              title="Facebook Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          
          <li className="socialWrapper color--cloud">
            <a className="social color--cloud"
              title="Instagram Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mdanes/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>

          <li className="socialWrapper">
            <a className="social color--cloud"
              title="Twitter Profile"
              href="/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </main>

      <section className="background--slateGrey section section__main">
        <h2 className="color--cloud margin--none section__text--centered">
        Redefine how your brand connects with your audience
        </h2>
      </section>

      <section className="section section--alignCentered section--description">
        <div className="section__exampleWrapper">
          <div className="section__example">
            <img alt="example screenshot of a project involving code"
                className="section__exampleImage"
                src={work1}/>
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered">
                Campaign Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>

        <div className="section__exampleWrapper">
          <div className="section__example">
            <img alt="example screenshot of a project involving chemistry"
                className="section__exampleImage"
                src={work2}/>
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered ">
                Campaign Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>

        <div className="section__exampleWrapper">
          <div className="section__example">
            <img alt="example screenshot of a project involving cats"
                className="section__exampleImage"
                src={work3}/>
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered">
                Campaign Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="background--slateGrey section">
        <h2 className="color--cloud margin--none section__text--centered">
          About DAREFARE
        </h2>
      </section>

      <section className="section section--alignCentered section--description">
        <p className="color--darkgrey section__description">
        Understanding that today's cohort interacts, engages and follows a brand with a new generation of tools that are defining today's culture, the DAREFARE platform changes the way brands interact with their fans, followers and contributors.
        </p>
      </section>

      <div className="background--slateGrey modal--closed">
        <span className="color--cloud modal__closeButton">
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt="example screenshot of a project involving code"
            className="modal__image"
            src={work3}/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            Work Example Name
          </h2>
          <a className="color--slateGrey modal__link"
            href="{}">
            Check it out
          </a>
          <p className="modal__description">
            A long description of the work in question.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
