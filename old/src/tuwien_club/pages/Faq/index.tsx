import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const FaqPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <h1>
          <TextField name={'faqheading'} />
        </h1>
        <div>
          <RichTextField name={'faqsubheading'} />
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

FaqPage.PageType = 'FaqPage'
FaqPage.ChildPages = []

export default FaqPage
