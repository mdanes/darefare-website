import React from 'react';
import work1 from '../../assets/images/example1.png';
import work2 from '../../assets/images/example2.png';
import work3 from '../../assets/images/example3.png';
import './App.css';

function App() {
  return (
    <>
    <main className="overflow--auto">
      <h1 className="color--skyBlue section__heading--largest">
        Darefare
      </h1>

      <ul className="section--social">
        <li className="socialWrapper">
          <a className="color--skyBlue social"
             title="LinkedIn Profile"
             target="_blank"
             rel="noopener noreferrer"
             href="https://www.linkedin.com/in/michael-danes/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        
        <li className="socialWrapper color--skyBlue">
          <a className="social color--skyBlue"
             title="GitHub Profile"
             target="_blank"
             rel="noopener noreferrer"
             href="https://github.com/mdanes/">
            <i className="fa fa-github"></i>
          </a>
        </li>

        <li className="socialWrapper">
          <a className="social color--skyBlue"
             title="Resume"
             href="/">
            <i className="fa fa-file-text"></i>
          </a>
        </li>
      </ul>

      </main>

      <section className="background--skyBlue section">
        <h2 className="color--cloud margin--none section__text--centered">
          Portfolio
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
                Work Example
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
                Work Example
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
                Work Example
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="background--skyBlue section">
        <h2 className="color--cloud margin--none section__text--centered">
          About Me
        </h2>
      </section>

      <section className="section section--alignCentered section--description">
        <p className="color--darkgrey section__description">
          Use this space to reference presentation deck
        </p>
      </section>
      <div className="background--skyBlue modal--closed">
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
          <a className="color--skyBlue modal__link"
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
