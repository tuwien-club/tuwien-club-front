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

import {StudyCardBlock} from '~/components/blocks'
//import {useState} from 'react'
import {NavbarHeader, Footer} from '~/components/organisms'

import './index.scss'

const StudyPage: ConnectedPageType = () => {
  //const [showShow, setShowShow] = useState('collapse0')
  // const studies = pageContent.studies.reduce((s: any, t: any) => {
  //   s[t.study.studyType] = [...(s[t.study.studyType] || []), t]
  //   return s
  // }, {})
  const activePath = window.location.pathname

  const history = useHistory()
  const linkHandler = (
    path: string /*position: string, offset: number*/
  ): void => {
    history.push(path)
    //scroller.scrollTo(position, offset)
  }
  return (
    <>
      <NavbarHeader />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <MDBContainer fluid>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <MDBNavbarLink
                aria-current="page"
                onClick={() => linkHandler('/groups')}>
                {activePath.split('/')[1]}
              </MDBNavbarLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>
              <MDBNavbarLink
                aria-current="page"
                onClick={() => linkHandler(activePath)}>
                {activePath.split('/')[2]}
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
            reverseOrder={true}
            name={`studycards${activePath.split('/')[2]}`}
            blocks={[StudyCardBlock]}
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

StudyPage.PageType = 'StudyPage'
StudyPage.ChildPages = []

export default StudyPage
