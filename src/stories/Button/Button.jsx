import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

export const Button = ({ label, onClick }) => {
  const [buttonStyle, setButtonStyle] = useState({
    fontSize: '16px',
    backgroundColor: '#007BFF',
  });

  const handleButtonClick = () => {
    setButtonStyle((prevStyle) => ({
      fontSize: prevStyle.fontSize === '16px' ? '20px' : '16px',
      backgroundColor: prevStyle.backgroundColor === '#007BFF' ? '#00cc66' : '#007BFF',
    }));

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Name',
  onClick: undefined,
};
