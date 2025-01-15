import React from 'react';
import icoGithub from './img/ico-github.svg';
import Project from './components/project/Project';
import projects from './components/project/projects.json';
import Work from './components/experiens/Experiens';
import works from './components/experiens/experience.json';

import PropTypes from 'prop-types';

const PositionText = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <p className="about-me-text" key={index}>
          {line}
        </p>
      ))}
    </>
  );
};

PositionText.propTypes = {
  text: PropTypes.string.isRequired,
};

const aboutMeText =
  'I know HTML5, CSS3, SASS/SCSS, and work with Webpack.\nProficient in responsive design, including media queries, Flexbox, and Grid.\nHave solid experience with JavaScript, TypeScript, and React.\nHave experience with Node.js and Express.js for backend web application development.\nManage MongoDB databases, including schema design and performing CRUD operations.\nImplement secure authentication and authorization systems using JWT.\nUnderstand OOP, FP, RP, and essential design patterns.\nHave experience working with REST and use Postman for API testing.\nCan develop functional data submission forms using React and Axios.\nWrite unit and integration tests using Jest and React Testing Library.\nWork with Git.\nSkilled in Figma, with the ability to work with color palettes and create well-thought-out designs.\nDeploy applications to platforms like Render.com and Netlify.\nReady to work in a team.';

function App() {
  return (
    <div className="App">
      <div className="wrapper header__wrapper">
        <a target="_self" className="link" href="https://kanatjuzbayev.github.io/cv-react/">
          <p className="header__tittle">CV</p>
        </a>
      </div>

      <div className="wrapper content__wrapper">
        <img className="avatar" src={require('img/me.jpg')} alt="My img, I'm cute ;))" />
        <div>
          <a target="_self" className="link" href="https://kanatjuzbayev.github.io/cv-react/">
            <h1 className="outer">Kanat Juzbayev</h1>
          </a>
        </div>

        <section className="about-me">
          <h3>About Me:</h3>
          <PositionText text={aboutMeText} />

          <div className="skills">
            <h4 className="skills-title">Skills</h4>
            <div className="list skills_list">
              <p>
                <span className="summary">Basic coding skills:</span> HTML, CSS, Sass, JavaScript /
                TypeScript, DOM Manipulation, Express, Node.js, MongoDB
              </p>
              <p>
                <span className="summary">Framework:</span> React
              </p>
              <p>
                <span className="summary">Designing skills:</span> Figma, Color selection
              </p>
              <p>
                <span className="summary">Responsive web:</span> Well-versed with media queries,
                Flexbox and Grid
              </p>
              <p>
                <span className="summary">Testing:</span> Unit testing with NodeJS, Jest, React
                Testing Library
              </p>
              <p>
                <span className="summary">Build tools:</span> Webpack
              </p>
              <p>
                <span className="summary">API testing: </span> Experience with Postman
              </p>
              <p>
                <span className="summary">Version control: </span> Knowledge of Git
              </p>
            </div>
          </div>

          <div className="list additional_info">
            <h4 className="additional_info-title">Info</h4>
            <p>
              <span className="summary">Education:</span> Bachelor of telecommunications (Almaty
              University of Power Engineering and Telecommunications)
            </p>
            <p>
              <span className="summary">English:</span> Pre-intermediate
            </p>
            {/* <p>
              <span className="summary">Hobby:</span> Running
            </p> */}
            <p>
              <span className="summary">Location:</span> Almaty, Kazakhstan
            </p>
          </div>
        </section>

        <h4>Here are examples of the work done:</h4>
        <ul className="list projects_list">
          {projects.map((project, i) => {
            return <Project project={project} key={i} />;
          })}
        </ul>

        <section className="experiens">
          <h3>Work experience:</h3>
          {works.map((work, i) => {
            return <Work work={work} key={i} />;
          })}
        </section>

        <section className="contacts">
          <h3>Contacts:</h3>
          <div className="list contacts_list">
            <p>
              Tel:
              <a className="link" href="tel:+77079009392">
                +77079009392
              </a>
            </p>
            <p>
              Email:
              <a className="link" href="mailto:kanat.juzbayev@gmail.com?subject=feedback">
                kanat.juzbayev@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section className="address">
          <h3>The address:</h3>
          <p>Kazakhstan, Almaty, Abaya street, 107</p>
        </section>
      </div>

      <div className="wrapper footer_wrapper">
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/KanatJuzbayev"
        >
          <img className="ico-github" src={icoGithub} alt="GitHub" />
          Kanat Juzbayev
        </a>
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
