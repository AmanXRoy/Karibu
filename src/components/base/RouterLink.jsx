import React from 'react';
import { NavLink } from 'react-router-dom';

const RouterLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      style={({ isActive }) => ({
        color: isActive ? '#FFA500' : 'white',
        textDecoration: 'none',
        ...props.style,
      })}
    >
      {children}
    </NavLink>
  );
};

export default RouterLink;