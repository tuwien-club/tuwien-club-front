import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const RulesPage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />

      <div className="container pt-5">
        <h1 className="container">
          <TextField name={'rulesheading'} />
        </h1>
        <div className="container">
          <RichTextField name={'rulessubheading'} />
        </div>
      </div>

      <Footer
        copyrightText={'CC <3 snek'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

RulesPage.PageType = 'RulesPage'
RulesPage.ChildPages = []

export default RulesPage
