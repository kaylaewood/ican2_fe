import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkSelected } from '../../utils/methods';
import './NavButton.scss';
import { logoutCurrentUser } from '../../actions';
import PropTypes from 'prop-types';

const NavButton = ({ nav, name }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    if (name === 'log out') {
      dispatch(logoutCurrentUser());
    }
  }

  return (
    <Link to={nav}>
      <button value={name} id='logoutButton' className={`${checkSelected(window.location.pathname, nav)} nav-button`} onClick={() => logOut()}>
        {name}
      </button>
    </Link>
  );
};

NavButton.propTypes = {
  nav: PropTypes.string,
  name: PropTypes.string
}

export default NavButton;
