import {
  ConnectedPageType,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const ContactPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <div>
          <RichTextField name={'contactsubheading'} />
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

ContactPage.PageType = 'ContactPage'
ContactPage.ChildPages = []

export default ContactPage
