//#region > Components

import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, Text, Center, VStack} from '@chakra-ui/react'

import {StaticImage} from 'gatsby-plugin-image'

import {Link} from 'react-scroll'
// import HeroHidden from '../../molecules/HeroHidden'

import React from 'react'
import {fields} from '@snek-at/jaen-pages'
import * as style from './style'
//#region > Components

const HeroSection = (): JSX.Element => {
  return (
    <>
      <style.HeroStyle>
        <Box h="100vh" mb="20">
          <fields.ImageField
            fieldName="herobackground"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'herobackground'
            }}
            className="herobackground"
          />
          {/* <HeroHidden /> */}
          <Box
            justifyContent="center"
            alignContent="center"
            position="absolute"
            top="0"
            w="100%"
            pointerEvents="none">
            <VStack spacing="5" pt={['40vh', '18rem', '23rem', '23rem']}>
              <StaticImage
                src="../../../images/panoramaweg_light.svg"
                alt="Logo"
                className="herologo"
              />
              <Link to="imagetopsection" isDynamic offset={-80} smooth={true}>
                <Box
                  position="relative"
                  marginTop="14rem"
                  padding="1rem"
                  borderRadius="30px"
                  backgroundColor="white"
                  color="black"
                  justifyContent="center"
                  alignContent="center"
                  zIndex={10}
                  display="flex"
                  pointerEvents="all"
                  cursor="pointer">
                  <ChevronDownIcon w={6} h={6} />
                  <Text>Mehr dazu</Text>
                </Box>
              </Link>
            </VStack>
          </Box>
        </Box>
      </style.HeroStyle>
    </>
  )
}

export default HeroSection
//#endregion
