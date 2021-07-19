import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

import {NavbarHeader, Footer} from '~/components/organisms'

import {ContactPage, FaqPage} from '..'
//import {ContactPage, FaqPage, GroupsPage, HowtoPage, RulesPage} from '..'
import './index.scss'

const HomePage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />
      <div style={{margin: 100}}>
        <TextField name={'homeheading'} />
        <RichTextField name={'homesubheading'} />
      </div>

      <Footer
        copyrightText={'CC <3 snek'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [
  ContactPage,
  FaqPage
  //GroupsPage,
  //HowtoPage,
  //RulesPage
]

export default HomePage
