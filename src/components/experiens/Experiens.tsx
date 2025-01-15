import React from 'react';
import './Experiens.css';

interface WorkProps {
  work: {
    placeTittle: string;
    placeText: string;
    positionTittle: string;
    positionText: string;
    workPeriod: string;
  };
}

export default function Work(props: WorkProps) {
  return (
    <div className="work">
      <div className="date">
        <p className="work__period">{props.work.workPeriod}</p>
      </div>
      <div className="place">
        <p className="work__tittle">{props.work.placeTittle}</p>
        <p className="work__text">{props.work.placeText}</p>
      </div>
      <div className="position">
        <p className="work__tittle">{props.work.positionTittle}</p>
        {props.work.positionText.split('\n').map((line, index) => (
          <p className="work__text" key={index}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
