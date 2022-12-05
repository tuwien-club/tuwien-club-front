//#region > Imports
import React from 'react';
// Contains all the functionality necessary to define React components
import {fields} from '@snek-at/jaen-pages'

import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '../components/organisms'
import {CookieModal} from '../components/molecules'

import './index.scss'
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <>
      <CookieModal />
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <h1 className="cms-center mt-5">
          <fields.TextField
            fieldName="homeheading"
            initValue="<h1>Neues von der Baustelle</h1>"
            rtf={false}
          />
        </h1>
        <div className="cms-center mt-5">
          <fields.TextField
            fieldName="homesubheading"
            initValue="<p>Neues von der Baustelle</p>"
            rtf={true}
          />
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
