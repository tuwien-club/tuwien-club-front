import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const RulesPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />

      <MDBContainer className="pt-5">
        <h1>
          <TextField name={'rulesheading'} />
        </h1>
        <div>
          <RichTextField name={'rulessubheading'} />
        </div>
      </MDBContainer>

      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

RulesPage.PageType = 'RulesPage'
RulesPage.ChildPages = []

export default RulesPage
