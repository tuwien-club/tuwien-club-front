//#region > Imports
//> React
// Contains all the functionality necessary to define React components

//> SNEK
import {fields} from '@snek-at/jaen-pages'

//> Components
import ImageLeftSection from '../../components/organisms/ImageLeftSection'
//> CSS

import {Footer, Navbar} from '../../components/molecules'

import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {Box} from '@chakra-ui/layout'
import {Container, Heading, Text, Center} from '@chakra-ui/react'
import ImageCollection from '../../components/organisms/ImageCollection'
import {CookieModal} from '../../components/molecules'
//#endregion

//#endregion
import * as style from './style'
//#region > Components

const BlogPage: JaenTemplate = () => {
  return (
    <style.responsiveImage>
      <CookieModal />
      <Box
        as="section"
        id="blogpage"
        pb="115px"
        pt="140px"
        minH={['', '', '100vh', '100vh']}>
        <Navbar />
        <Container
          maxW={['90%', '90%', '70%', '70%']}
          centerContent
          fontSize="1.1rem">
          <Heading fontSize="1.75rem">
            <fields.TextField
              fieldName="blogheading"
              initValue="<p>Überschrift</p>"
              rtf={false}
            />
          </Heading>
          <Text fontSize="1.5rem" mb="10">
            <fields.TextField
              fieldName="blogsubheading"
              initValue="<p>vom 01.01.2022</p>"
              rtf={false}
            />
          </Text>
          <Text mb="10" maxW={['85%', '85%']}>
            <fields.TextField
              fieldName="blogrichtext"
              initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            />
          </Text>
          <ImageLeftSection
            imgleftimg={
              <fields.ImageField
                fieldName="blogimgleftimg"
                initValue={{
                  src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                  alt: 'blogimgleftimg'
                }}
                className="responsiveImage"
              />
            }
            imgleftheading={
              <fields.TextField
                fieldName="blogimgleftheading"
                initValue="<p>Unterüberschrift</p>"
                rtf={false}
              />
            }
            imgleftrichtext={
              <fields.TextField
                fieldName="blogimgleftrichtext"
                initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
              />
            }
          />
        </Container>
        <Center mt="20" mb="10">
          <ImageCollection />
        </Center>
        <Footer />
      </Box>
    </style.responsiveImage>
  )
}
//#endregion

BlogPage.TemplateName = 'BlogPage'

//#region > Exports
export default BlogPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
