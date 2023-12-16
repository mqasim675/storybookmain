import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';

export const IconButton = ({ iconName, label, primary, size, ...props }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assume desktop width > 768px
  const [backgroundColor, setBackgroundColor] = useState(primary ? '#1ea7fd' : '#e0e0e0');

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mode = primary ? 'storybook-icon-button--primary' : 'storybook-icon-button--secondary';
  const buttonSize = `storybook-icon-button--${size}`;

  const handleClick = () => {
    if (!isDesktop) {
      // Change background color on click only for non-desktop devices
      setBackgroundColor(primary ? '#0072ff' : '#c4c4c4');
    }
    // Add any other click logic here
  };

  return (
    <button
      className={['storybook-icon-button', mode, buttonSize].join(' ')}
      style={{ backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      <i className={`icon ${iconName}`} />
      <span className="button-label">{label}</span>
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
