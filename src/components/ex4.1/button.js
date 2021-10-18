import React from 'react'

const Button = ({ name, fontWeight }) => {
  return (
    <input type="button" value={name} style={{ fontWeight: fontWeight }} />
  );
};

export default Button;
