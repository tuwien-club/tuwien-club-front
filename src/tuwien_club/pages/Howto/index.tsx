import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const HowtoPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />

      <div className="container pt-5">
        <h1 className="container">
          <TextField name={'howtoheading'} />
        </h1>
        <div className="container">
          <RichTextField name={'howtosubheading'} />
        </div>
      </div>

      <Footer
        copyrightText={'CC <3 snek'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

HowtoPage.PageType = 'HowtoPage'
HowtoPage.ChildPages = []

export default HowtoPage
