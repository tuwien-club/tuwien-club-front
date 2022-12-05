//#region > Imports
import React from 'react';
import {fields} from '@snek-at/jaen-pages'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '../components/organisms'
import {CookieModal} from '../components/molecules'
import './index.scss'
//#endregion

//#region > Components
const ContactPage = () => {
  return (
    <>
      <CookieModal />
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <div>
          <fields.TextField
            fieldName="contactsubheading"
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
export default ContactPage
//#endregion
