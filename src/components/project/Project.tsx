import React from 'react';

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
        {props.project.name} ({props.project.usedTechnology})
      </a>
    </li>
  );
}
