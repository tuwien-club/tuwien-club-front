//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react'
import React from 'react'
// React Router
// import { Link } from "react-router-dom";

//> CSS
// import './index.scss'
//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

interface Props {
  partners1: React.ReactNode
  head1: React.ReactNode
  subhead1: React.ReactNode
}

//#region > Components
const PartnerSection = ({
  partners1,
  head1,
  subhead1
}: // background1
Props): JSX.Element => {
  const bgColor = useColorModeValue('panoramaweg.lightgray', 'gray.700')
  return (
    <Box as="section" id="partnersection" backgroundColor={bgColor} pb="10">
      <Container centerContent width="100vw" fontSize="1.1rem">
        <Heading as="h2" fontSize="1.5rem" mt="6">
          {head1}
        </Heading>
        <Text mb="10">{subhead1}</Text>
      </Container>
      {partners1}
    </Box>
  )
}

export default PartnerSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
