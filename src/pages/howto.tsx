//#region > Imports
import React from 'react';
import {fields} from '@snek-at/jaen-pages'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '../components/organisms'
import {CookieModal} from '../components/molecules'
import './index.scss'
//#endregion

//#region > Components
const HowtoPage = () => {
  return (
    <>
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <h1>
          <fields.TextField
            fieldName="howtoheading"
            initValue="<p>Neues von der Baustelle</p>"
            rtf={true}
          />
        </h1>
        <div>
          <fields.TextField
            fieldName="howtosubheading"
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
export default HowtoPage
//#endregion
