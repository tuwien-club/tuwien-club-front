import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const FaqPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />

      <div className="container pt-5">
        <h1 className="container">
          <TextField name={'faqheading'} />
        </h1>
        <div className="container">
          <RichTextField name={'faqsubheading'} />
        </div>
      </div>

      <Footer
        copyrightText={'CC <3 snek'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

FaqPage.PageType = 'FaqPage'
FaqPage.ChildPages = []

export default FaqPage
