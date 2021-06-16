import React from 'react';
import './Button.css';
import { HashLink as Link } from 'react-router-hash-link';

/***************Here we set the types of buttons to make the file more maintainable***********************/

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large','btn--small'];

const PATH = ['/#Home','/#About','/#Timeline','/#Markets','/#Tokenomics','/#FAQ']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkPath = PATH.includes(path)
    ? path
    : PATH[0];
  return (
    <Link to={`${checkPath}`} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
