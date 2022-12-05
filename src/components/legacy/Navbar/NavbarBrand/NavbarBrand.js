import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'gatsby'

const NavbarBrand = ({ className, href, ...attributes }) => {
  const classes = classNames('navbar-brand', className);

  const navbarBrand = () => {
    if (href) {
      return <Link data-test='navbar-brand' to={href} {...attributes} className={classes} />;
    }
    return <div data-test='navbar-brand' {...attributes} className={classes} />;
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

export default NavbarBrand;
export { NavbarBrand as MDBNavbarBrand };
