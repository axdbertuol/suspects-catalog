import React from 'react';
import './style.css';

interface IHeadline {
  text?: string;
}

const Headline: React.FC<IHeadline> = ({ text }) => {
  return <h2 className={'headline'}>{text}</h2>;
};

export default Headline;
