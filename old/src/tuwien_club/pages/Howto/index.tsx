import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const HowtoPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <h1>
          <TextField name={'howtoheading'} />
        </h1>
        <div>
          <RichTextField name={'howtosubheading'} />
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

HowtoPage.PageType = 'HowtoPage'
HowtoPage.ChildPages = []

export default HowtoPage
