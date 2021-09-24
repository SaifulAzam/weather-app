/** @format */

import React from "react";
import "./header.scss";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='wrapper'>
          <p className="city-name">New York, NY</p>
          <i className='fas fa-arrow-down'></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
