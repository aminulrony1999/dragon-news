import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <nav>
            <div className="text-center">
            <img src={logo} alt="loading..." />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </nav>
    );
};

export default Header;