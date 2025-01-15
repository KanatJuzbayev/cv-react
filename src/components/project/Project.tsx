import React from 'react';
import './Project.css';

interface ProjectProps {
  project: {
    name: string;
    link: string;
    usedTechnology: string;
  };
}

export default function Project(props: ProjectProps) {
  return (
    <li>
      <a className="link" target="_blank" rel="noreferrer" href={props.project.link}>
        {props.project.name} <span className="tech-title"> ({props.project.usedTechnology})</span>
      </a>
    </li>
  );
}
