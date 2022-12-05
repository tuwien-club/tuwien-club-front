//#region > Imports
//> MDB
// "Material Design for Bootstrap" is a great UI design framework

//> CSS
import {Box, Flex, Heading, VStack, Text} from '@chakra-ui/react'
import './index.scss'
//#endregion

//#region > Components

interface Props {
  imgleftimg: React.ReactNode
  imgleftrichtext: React.ReactNode
  imgleftheading: React.ReactNode
}

const ImageLeftSection = ({
  imgleftimg,
  imgleftrichtext,
  imgleftheading
}: Props): JSX.Element => {
  return (
    <Box as="section" id="imageleftsection" maxW="100%">
      <Flex fontSize="1.1rem" direction={['column', 'column', 'column', 'row']}>
        {imgleftimg}
        <Box
          ml="5"
          mr={['5', '5', '0', '0']}
          justifyContent={['center', 'center', '', '']}
          alignContent={['center', 'center', '', '']}>
          <Heading mb="10" fontSize="1.5rem">
            {imgleftheading}
          </Heading>
          <Text maxW={['100%', '100%', '50vw', '50vw']}>{imgleftrichtext}</Text>
        </Box>
      </Flex>
    </Box>
  )
}
//#endregion

export default ImageLeftSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
