import React from 'react';
import icoGithub from './img/ico-github.svg';
import Project from './components/project/Project';
import projects from './components/project/projects.json';

function App() {
  return (
    <div className="App">
      <div className="wrapper header__wrapper">
        <p className="header__tittle">Curriculum Vitae</p>
      </div>

      <div className="wrapper content__wrapper">
        <img className="avatar" src={require('img/me.jpg')} alt="My img, I'm cute ;))" />
        <h1 className="outer">Kanat Juzbayev</h1>
        <section>
          <h3>About Me:</h3>
          <p>
            Hi. I am 33, live in Аlmaty. I know JavaScript, TypeScript and React. Earlier I wrote a
            little PHP. I can use Sass and Webpack. Not much experience yet. But I&apos;m determined
            to work on it.
          </p>
          <div className="skills">
            <h4>Skills:</h4>
            <p>Basic coding skills: HTML, CSS, Sass, JavaScript/TypeScript, DOM Manipulation</p>
            <p>Framework: React</p>
            <p>Designing skills: Figma, Color selection</p>
            <p>Responsive web: Well-versed with media queries, Flexbox and Grid</p>
            <p>Testing: Jest, React Testing Library</p>
          </div>

          <h4>Here are examples of work done as part of training and working projects:</h4>
          <ul className="projects-list">
            {projects.map((project, i) => {
              return <Project project={project} key={i} />;
            })}
          </ul>

          <p>
            Education: Bachelor of telecommunications <br />
            English: Pre-intermediate <br />
            Hobby: Marathon Run
          </p>

          <section className="experiens">
            <h3>Work experiens:</h3>
            <div className="work">
              <div className="date">
                <p>March 2018 — сurrently</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">Fox Cargo LLP</p>
                <p className="experiens__text">Transportation, Railway logistic</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Logistics specialist</p>
                <p className="experiens__text">
                  Conclusion of freight contracts. Search for wagons on required routes. Drawing up
                  documents for the movement of wagons across the territories.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="date">
                <p>March 2016 - February 2018</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">Huawei Almaty LLP</p>
                <p className="experiens__text">Telecommunications Mobile communications</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Engineer - designer</p>
                <p className="experiens__text">Kcell 4G project, design team. TSSR development</p>
              </div>
            </div>
            <div className="work">
              <div className="date">
                <p>July 2015 — January 2016</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">Logycom JSC</p>
                <p className="experiens__text">Telecommunications, Mobile communications</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Engineer-supervisor</p>
                <p className="experiens__text">
                  Launch and handover of base stations &quot;Altel 4G&quot;, organization of
                  installation process, Development of documentation for the facilities
                  commissioning.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="date">
                <p>November 2014 — May 2015</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">Logycom JSC</p>
                <p className="experiens__text">Telecommunications, Mobile communications</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Aktau Regional Manager</p>
                <p className="experiens__text">
                  Organization of installation, startup and commissioning of base stations
                  &quot;Altel 4G&quot;, Development of project documentation: SVR, SAR.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="date">
                <p>November 2012 — March 2013</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">
                  Okta Kom Solutions outsourcing company of ZTE Corporation
                </p>
                <p className="experiens__text">Telecommunications</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Aktau Regional Manager</p>
                <p className="experiens__text">
                  Supervising installation work according to TSSR project documentation, filling
                  configurations and launching the site, checking eNodeB nodes functionality,
                  troubleshooting, checking the emergency system.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="date">
                <p>December 2011 — September 2012</p>
              </div>
              <div className="place">
                <p className="experiens__tittle">&quot;AlmatyTelecom&quot;</p>
                <p className="experiens__text">Telecommunications</p>
              </div>
              <div className="position">
                <p className="experiens__tittle">Manager of Installation</p>
                <p className="experiens__text">
                  Installation works of &quot;Megaline&quot;, &quot;ID Phone&quot;, &quot;ID
                  TV&quot;, &quot;ID Net&quot;.
                </p>
              </div>
            </div>
          </section>

          <article className="contacts">
            <h3>Contacts:</h3>
            <ul className="list">
              <li>
                Tel:{' '}
                <a className="link" href="tel:+77079009392">
                  {' '}
                  +77079009392
                </a>
              </li>
              <li>
                Email:
                <a className="link" href="mailto:kanat.juzbayev@gmail.com?subject=feedback">
                  kanat.juzbayev@gmail.com
                </a>
              </li>
            </ul>
          </article>
          <div className="address">
            <h3>The address:</h3>
            <p>Kazakhstan, Almaty, Nurkent, 5/2</p>
          </div>
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
        <p>2022</p>
      </div>
    </div>
  );
}

export default App;
