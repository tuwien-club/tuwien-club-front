//#region > Imports
import React from 'react';
import {fields} from '@snek-at/jaen-pages'
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
import {navigate} from 'gatsby'
import {NavbarHeader, Footer} from '../components/organisms'
import {CookieModal} from '../components/molecules'
import './index.scss'
//#endregion

//#region > Components
const StudyPage = () => {

  const activePath = (typeof window !== 'undefined' && window.location.pathname) || ''

  const linkHandler = (
    path: string /*position: string, offset: number*/
    ): void => {
    // setShowNavbar(false)
    navigate(path)
    //scroller.scrollTo(position, offset)
  }

  return (
    <>
      <CookieModal />
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
        <fields.TextField
          fieldName="studysubheading"
          initValue="<p>Neues von der Baustelle</p>"
          rtf={true}
        />
      </MDBContainer>
      <MDBContainer>
        <div className="accordion">
          {/* <StreamField
            reverseOrder={true}
            name={`studycards${activePath.split('/')[2]}`}
            blocks={[StudyCardBlock]}
          /> */}
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
//#endregion

//#region > Exports
export default StudyPage
//#endregion