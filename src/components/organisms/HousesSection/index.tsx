//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
import {fields} from '@snek-at/jaen-pages'
import {usePages} from '@snek-at/jaen-pages/src/contexts/cms'
import {SitePages} from '@snek-at/jaen-pages/src/types'
// React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
//> Components
//> CSS
import './index.scss'
import {
  Box,
  Container,
  Heading,
  Text,
  Wrap,
  Flex,
  Image,
  Badge,
  Button,
  Progress
} from '@chakra-ui/react'

import {GiResize} from '@react-icons/all-files/gi/GiResize'
import {IconContext} from '@react-icons/all-files/lib'
import {navigate} from 'gatsby'
//#endregion

interface Props {
  househead: React.ReactNode
  housesubhead: React.ReactNode
}

//#region > Components
const HousesSection = ({househead, housesubhead}: Props): JSX.Element => {
  const site = usePages()

  const addDot = (x: any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  const store = site?.nodes
  let minPrice = 0
  let maxPrice = 0
  let maxSize = 0
  let minSize = 0
  let availableFlats = 0
  let numFlats = 0
  let apartmentTypes: string[] = []
  let heading = ''
  function cleanFieldValues(value: string, type: string) {
    value = value.substring(3, value.length - 4)
    if (type === 'price') {
      value = value.replaceAll('.', '')
    }
    return value
  }

  function findMinMax(price: string, size: string) {
    const parsedPrice = parseInt(price)
    const parsedSize = parseInt(size)
    if (minPrice === 0) {
      minPrice = parsedPrice
    } else if (minPrice > parsedPrice) {
      minPrice = parsedPrice
    }
    if (maxPrice < parsedPrice) {
      maxPrice = parsedPrice
    }
    if (minSize === 0) {
      minSize = parsedSize
    } else if (minSize > parsedSize) {
      minSize = parsedSize
    }
    if (maxSize < parsedSize) {
      maxSize = parsedSize
    }
  }

  function fetchData(pages) {
    numFlats = pages?.length
    for (const page of pages) {
      const fields = store?.[page.id]?.fields
      let price = fields?.apartmentprice?.content?.text || '<p>0</p>'
      let size = fields?.apartmentsize?.content?.text || '<p>0</p>'
      const type = fields?.apartmenttype?.content?.option || 'Penthouse'
      const available =
        fields?.apartmentavailable?.content?.option || 'Verfügbar'
      price = cleanFieldValues(price, 'price')
      size = cleanFieldValues(size, 'size')
      if (!apartmentTypes.includes(type)) {
        apartmentTypes.push(type)
      }
      if (available === 'Verfügbar') {
        availableFlats += 1
      }
      findMinMax(price, size)
    }
  }

  return (
    <Box as="section" id="housesection" mb="20" mt="20">
      <Container centerContent maxW="40vw">
        <Heading fontSize="1.75rem">{househead}</Heading>
        <Text fontSize="1.1rem" mb="5">
          {housesubhead}
        </Text>
      </Container>
      <fields.IndexField
        fieldName="houseindex"
        fixedSlug="SitePage /haus/"
        onRender={page => {
          const children = page?.children || []

          const cards = []
          for (const child of children) {
            const img =
              child?.page?.fields?.houseimg?.content?.src ||
              'https://i.ibb.co/J2jzkBx/placeholder.jpg'
            let slug = child?.page?.slug || ''
            let head = slug
            head = slug.replace('haus', 'haus ')
            head = head.charAt(0).toUpperCase() + head.substring(1)
            const grandchildren = child?.page?.children || []
            minPrice = 0
            maxPrice = 0
            maxSize = 0
            minSize = 0
            availableFlats = 0
            numFlats = 0
            apartmentTypes = []
            heading = head

            fetchData(grandchildren)
            minPrice = addDot(minPrice)
            maxPrice = addDot(maxPrice)

            cards.push(
              <Box
                padding="5"
                border="1px"
                borderColor="panoramaweg.lightgray"
                borderRadius="25px">
                <Flex direction={['column', 'column', 'row', 'row']}>
                  <Image
                    alt="housesectionimg"
                    src={img}
                    width="250px"
                    height="170px"
                    ml={['auto', 'auto', '0', '0']}
                    mr={['auto', 'auto', '0', '0']}
                    mb={['5', '5', '0', '0']}
                  />
                  <Box
                    ml={['0', '0', '5', '5']}
                    minW="210px"
                    alignContent={['center', 'center', 'start', 'start']}
                    justifyContent={['center', 'center', 'start', 'start']}>
                    <Heading fontSize="1.25rem">{heading}</Heading>
                    <Text fontSize="1.1rem">{numFlats} Wohnungen</Text>
                    <Flex mb="3">
                      {apartmentTypes.includes('Penthouse') ? (
                        <Badge
                          fontSize="xs"
                          backgroundColor="panoramaweg.green"
                          color="white"
                          borderRadius="25px"
                          size="sm"
                          textTransform="none"
                          marginRight="1">
                          Penthouse
                        </Badge>
                      ) : (
                        <Box />
                      )}
                      {apartmentTypes.includes('4-Zimmer') ? (
                        <Badge
                          fontSize="xs"
                          backgroundColor="panoramaweg.green"
                          color="white"
                          borderRadius="25px"
                          size="sm"
                          textTransform="none"
                          marginRight="1">
                          4-Zimmer
                        </Badge>
                      ) : (
                        <Box />
                      )}
                      {apartmentTypes.includes('3-Zimmer') ? (
                        <Badge
                          fontSize="xs"
                          backgroundColor="panoramaweg.green"
                          color="white"
                          borderRadius="25px"
                          size="sm"
                          textTransform="none">
                          3-Zimmer
                        </Badge>
                      ) : (
                        <Box />
                      )}
                    </Flex>
                    <Flex mb="2">
                      <IconContext.Provider value={{color: 'gray'}}>
                        <GiResize />
                      </IconContext.Provider>
                      <Text fontSize="sm" color="gray" ml="1">
                        {minSize} - {maxSize} m²
                      </Text>
                    </Flex>
                    <Flex>
                      <Text fontWeight="bold" color="gray" fontSize="lg" mr="1">
                        €
                      </Text>
                      <Text mt="1" ml="1.5" fontSize="sm" color="gray">
                        {minPrice} - {maxPrice}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  marginTop="3"
                  direction={[
                    'column-reverse',
                    'column-reverse',
                    'row',
                    'row'
                  ]}>
                  <Button
                    colorScheme="greenwhite"
                    mt={['3', '3', '0', '0']}
                    padding="5"
                    paddingLeft="12"
                    paddingRight="12"
                    fontSize="sm"
                    size="lg"
                    borderRadius="30px"
                    onClick={() => navigate('/haus/' + slug + '/')}>
                    Wohnungsübersicht
                  </Button>
                  <Container mt="auto">
                    <Progress
                      max={numFlats}
                      value={availableFlats}
                      borderRadius="25px"
                      colorScheme="greenwhite"
                      size="md"
                      width={['90%', '90%', '70%', '70%']}
                      ml="auto"
                      mr={['auto', 'auto', '0', '0']}
                    />
                    <Text
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      color="gray"
                      width={['90%', '90%', '70%', '70%']}
                      ml="auto"
                      mr={['auto', 'auto', '0', '0']}>
                      {availableFlats} von {numFlats} Wohnungen verfügbar
                    </Text>
                  </Container>
                </Flex>
              </Box>
            )
          }
          return (
            <Wrap
              justify="center"
              spacing="5"
              maxW={['90%', '100%', '100%', '75vw']}
              ml="auto"
              mr="auto">
              {cards.map((card, key) => {
                return <Box key={key}>{card}</Box>
              })}
            </Wrap>
          )
        }}
      />
    </Box>
  )
}

export default HousesSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
