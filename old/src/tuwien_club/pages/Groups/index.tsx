import {
  ConnectedPageType,
  StreamField, //SimpleTextField as TextField,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'
import {
  // MDBIcon,
  MDBContainer, // MDBCollapse,
  // MDBCard,
  // MDBCardBody,
  // MDBCardHeader,
  MDBNavbarLink,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit'
import {useHistory} from 'react-router'

import {GroupsCardBlock} from '~/components/blocks'
//import {useState} from 'react'
import {NavbarHeader, Footer} from '~/components/organisms'

import StudyPage from '../Study'
import './index.scss'

const GroupsPage: ConnectedPageType = () => {
  //const [showShow, setShowShow] = useState('collapse0')
  // const studies = pageContent.studies.reduce((s: any, t: any) => {
  //   s[t.study.studyType] = [...(s[t.study.studyType] || []), t]
  //   return s
  // }, {})
  const history = useHistory()
  const linkHandler = (
    path: string /*position: string, offset: number*/
  ): void => {
    history.push(path)
  }

  return (
    <>
      <NavbarHeader />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <MDBContainer fluid>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem active>
              <MDBNavbarLink
                aria-current="page"
                onClick={() => linkHandler('/groups')}>
                groups
              </MDBNavbarLink>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBContainer>
      </nav>
      <MDBContainer className="pt-5">
        <RichTextField name={'groupsosubheading'} />
      </MDBContainer>
      <MDBContainer>
        <div className="accordion">
          <StreamField
            reverseOrder={false}
            name={'groupscards1'}
            blocks={[GroupsCardBlock]}
          />
          {/* {Object.keys(studies).map((studytype: any, index: number) => (
            <>
              <MDBCard className="accordion-item mt-3">
                <MDBCardHeader
                  className="accordion-header d-flex justify-content-between"
                  onClick={() =>
                    showShow === `collapse${index}`
                      ? setShowShow('collapse')
                      : setShowShow(`collapse${index}`)
                  }>
                  {studytype}
                  <MDBIcon
                    icon={
                      showShow === `collapse${index}`
                        ? 'angle-up'
                        : 'angle-down'
                    }
                  />
                </MDBCardHeader>
                <MDBCollapse show={showShow === `collapse${index}`}>
                  <MDBCardBody className="accordion-body">
                    {studies[studytype].map((studypage: any) => (
                      <>
                        <a href={`${window.location.href}/${studypage.slug}`}>
                          {studypage.study.studyName}
                        </a>
                      </>
                    ))}
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </>
          ))} */}
        </div>
      </MDBContainer>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </>
  )
}

GroupsPage.PageType = 'GroupsPage'
GroupsPage.ChildPages = [StudyPage]

export default GroupsPage
