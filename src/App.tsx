import React from 'react';
import icoGithub from './img/ico-github.svg';
import Project from './components/project/Project';
import projects from './components/project/projects.json';
import Work from './components/experiens/Experiens';
import works from './components/experiens/experiens.json';

function App() {
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="App">
      <div className="wrapper header__wrapper">
        <p className="header__tittle">Curriculum Vitae</p>
      </div>

      <div className="wrapper content__wrapper">
        <img className="avatar" src={require('img/me.jpg')} alt="My img, I'm cute ;))" />

        <h1 className="outer">Kanat Juzbayev</h1>

        <section className="about-me">
          <h3>About Me:</h3>
          <p>
            Hi. I am {getAge('1989-04-26')}, live in Аlmaty. I have experience in telecommunications
            and railroad logistics. At the moment I want to change the field of activity and develop
            in frontend. Not much experience in Frontend yet. But I&apos;m determined to work on it.
          </p>
          <div className="skills">
            <h4>Skills:</h4>
            <div className="list skills_list">
              <p>Basic coding skills: HTML, CSS, Sass, JavaScript/TypeScript, DOM Manipulation</p>
              <p>Framework: React</p>
              <p>Designing skills: Figma, Color selection</p>
              <p>Responsive web: Well-versed with media queries, Flexbox and Grid</p>
              <p>Testing: Jest, React Testing Library</p>
            </div>
          </div>

          <h4>Here are examples of work done as part of training and working projects:</h4>
          <ul className="list projects_list">
            {projects.map((project, i) => {
              return <Project project={project} key={i} />;
            })}
          </ul>

          <div className="list additional_info">
            <p>
              Education: Bachelor of telecommunications (Almaty University of Power Engineering and
              Telecommunications)
            </p>
            <p>English: Pre-intermediate</p>
            <p>Hobby: Marathon Run</p>
          </div>
        </section>

        <section className="experiens">
          <h3>Work experiens:</h3>
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
          <p>Kazakhstan, Almaty, Nurkent, 5/2</p>
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
