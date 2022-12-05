//#region > Imports
// Contains all the functionality necessary to define React components
import {BlockContainer, fields} from '@snek-at/jaen-pages'
// import PartnerCard from '../components/blocks/PartnerCard'

// import BlogSection from '../../organisms/BlogSection'
//> Components
// import HeroSection from '../components/organisms/HeroSection'
// import HousesSection from '../components/organisms/HousesSection'
// import ImageTopSection from '../components/organisms/ImageTopSection'
// import MapSection from '../components/organisms/MapSection'
// import PartnerSection from '../components/organisms/PartnerSection'
// import BlogSection from '../components/organisms/BlogSection'
// import {CookieModal} from '../components/molecules'

import {Footer, NavbarHeader} from '../components/organisms'
import {Box, Center} from '@chakra-ui/react'

import styled from '@emotion/styled'

import {mq} from '../utils'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPageCSS = styled(Box)`
  .responsiveImage {
    min-height: 180px;
    ${mq[0]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
    }
    ${mq[2]} {
      width: 600px;
      height: 360px;
    }
    ${mq[3]} {
      width: 600px;
      height: 360px;
    }
  }
`
//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <IndexPageCSS>
      <NavbarHeader />
      <Box paddingTop="5">
       <Box paddingTop="5">
          <fields.TextField
            fieldName="homeheading"
            initValue="<h1>Neues von der Baustelle</h1>"
            rtf={true}
          />
        </Box>
        <Box paddingTop="5">
          <fields.TextField
            fieldName="homesubheading"
            initValue="<p>Neues von der Baustelle</p>"
            rtf={true}
          />
        </Box>
      </Box>
      <Footer copyrightText={'CC'} copyrightUrl={'mailto:admin@tuwien.club'} />
    </IndexPageCSS>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
