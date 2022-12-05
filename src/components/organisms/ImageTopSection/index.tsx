//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import {Container, Heading, Text, Box} from '@chakra-ui/react'
import React from 'react'
// React Router
import {Element} from 'react-scroll'
// import { Link } from "react-router-dom";

//> CSS
import './index.scss'
//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

//#region > Components
interface Props {
  img1: React.ReactNode
  head1: React.ReactNode
  text1: React.ReactNode
}

const ImageTopSection = ({head1, img1, text1}: Props): JSX.Element => {
  return (
    <Box id="imagetopsection">
      <Container
        maxWidth="100%"
        centerContent
        mt={{base: '10', md: '20'}}
        mb="20">
        {/* <img src={img} alt={head} className="img-fluid mb-3" /> */}
        {img1}
        <Heading fontSize="1.75rem" mt="6" mb="6">
          {head1}
        </Heading>
        <Text w={['90%', '90%', '50vw', '50vw']} fontSize="1.1rem">
          {text1}
        </Text>
      </Container>
    </Box>
  )
}

export default ImageTopSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
