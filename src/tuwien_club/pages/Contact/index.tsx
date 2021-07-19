import {
  ConnectedPageType,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const ContactPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />

      <div className="container pt-5">
        <div className="container">
          <RichTextField name={'contactsubheading'} />
        </div>
      </div>

      <Footer
        copyrightText={'CC <3 snek'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

ContactPage.PageType = 'ContactPage'
ContactPage.ChildPages = []

export default ContactPage
