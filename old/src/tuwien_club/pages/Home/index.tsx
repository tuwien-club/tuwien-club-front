import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {MDBContainer} from 'mdb-react-ui-kit'

import {NavbarHeader, Footer} from '~/components/organisms'

import ContactPage from '../Contact'
import FaqPage from '../Faq'
import GroupsPage from '../Groups'
import HowtoPage from '../Howto'
import RulesPage from '../Rules'
//import {ContactPage, FaqPage, GroupsPage, HowtoPage, RulesPage, StudyPage} from '..'
import './index.scss'

const HomePage: ConnectedPageType = () => {
  return (
    <>
      <NavbarHeader />
      <MDBContainer className="pt-5">
        <h1 className="cms-center mt-5">
          <TextField name={'homeheading'} />
        </h1>
        <div className="cms-center mt-5">
          <RichTextField name={'homesubheading'} />
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [ContactPage, FaqPage, GroupsPage, HowtoPage, RulesPage]

export default HomePage
