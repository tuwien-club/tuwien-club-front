import React from 'react';
import {
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit'
import {useState} from 'react'

import {navigate} from 'gatsby'

import Logo from '../../../common/logo.svg'

import {MDBNavbar, MDBCollapse} from '../../legacy'

import './index.scss'

interface Props {
  logoUrl?: string
  logoAlt?: string
  showMenu?: boolean
}

const Navbar = ({
  logoUrl = Logo,
  logoAlt = 'tuwien club'
}: Props): JSX.Element => {
  const activePath = (typeof window !== 'undefined' && window.location.pathname) || ''
  const [showNavbar, setShowNavbar] = useState(false)

  const navHandler = (
    path: string /*position: string, offset: number*/
  ): void => {
    // setShowNavbar(false)
    navigate(path)
    //scroller.scrollTo(position, offset)
  }

  return (
    <>
      <MDBNavbar className="navbar-main" expand="lg" dark>
        <MDBContainer>
          <MDBNavbarBrand
            aria-current="page"
            onClick={() => navHandler('/' /*"about", 300*/)}>
            <img
              className="nav-logo"
              src={logoUrl}
              alt={logoAlt}
              loading="lazy"
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavbar(!showNavbar)}>
            <MDBIcon icon="bars" size="lg" />
          </MDBNavbarToggler>

          <MDBCollapse isOpen={showNavbar} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  aria-current="page"
                  active={activePath === '/'}
                  onClick={() => navHandler('/' /*"about", 300*/)}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  active={activePath === '/groups'}
                  onClick={() => navHandler('/groups' /*"about", 300*/)}>
                  Gruppen
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  active={activePath === '/faq'}
                  onClick={() => navHandler('/faq' /*"about", 300*/)}>
                  FAQ
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  active={activePath === '/rules'}
                  onClick={() => navHandler('/rules' /*"about", 300*/)}>
                  Regeln
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  active={activePath === '/contact'}
                  onClick={() => navHandler('/contact' /*"about", 300*/)}>
                  Kontakt
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="ms-3 font-weight-bold text-uppercase">
                <MDBNavbarLink
                  active={activePath === '/howto'}
                  onClick={() => navHandler('/howto' /*"about", 300*/)}>
                  How-To
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/* <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form> */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
