//#region > Imports
//> React
import React from 'react'
// Contains all the functionality necessary to define React components
import {fields} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework

//> Components
//> CSS
import {Navbar, Footer} from '../../components/molecules'
import {
  Box,
  Checkbox,
  Center,
  Container,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  HStack,
  Image,
  Progress,
  Wrap,
  Button,
  Badge,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import * as style from './style'
import {CookieModal} from '../../components/molecules'
//#endregion

//#region > Components
const HousePage: JaenTemplate = (): JSX.Element => {
  const [maxSize, setMaxSize] = React.useState<number>(0)
  const [maxRooms, setMaxRooms] = React.useState<number>(0)
  const [minSize, setMinSize] = React.useState<number>(0)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => setIsClient(true))

  const [filters, setFilters] = React.useState<any>({
    sizeFilter: 0,
    roomFilter: 1,
    hasFilter: false,
    availableFilter: false
  })
  const houseimage = React.useMemo(() => {
    return (
      <>
        <fields.ImageField
          fieldName="houseimg"
          initValue={{
            src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
            alt: 'houseimg'
          }}
          className="responsiveImage"
        />
      </>
    )
  }, [])

  const flex = useBreakpointValue({base: 'column', md: 'row'})

  const handleValueChange = (val: any, stateName: string) => {
    setFilters({
      [stateName]: val,
      hasFilter: true
    })
  }

  const disableFilter = () => {
    setFilters({
      filterRooms: 1,
      filterSize: 0,
      availableFilter: false,
      hasFilter: false
    })
  }

  const findMinMax = (rooms: string, size: string) => {
    let parsedSize = parseInt(size)
    if (parsedSize > maxSize) {
      setMaxSize(parsedSize)
    }
    let parsedRooms = parseInt(rooms)
    if (parsedRooms > maxRooms) {
      setMaxRooms(parsedRooms)
    }
    if (parsedSize < minSize) {
      setMinSize(parsedSize)
    }
  }
  return (
    <style.responsiveImage>
      <CookieModal />
      <Box
        as="section"
        id="housepage"
        minH="100vh"
        paddingTop={{base: '75px', md: '140px'}}
        overflow="hidden"
        paddingBottom="115px">
        <Navbar />
        <Container
          centerContent
          maxW={['100%', '100%', '90vw', '90vw']}
          borderBottom="1px"
          borderColor="panoramaweg.lightgray"
          pb="12"
          mb="7">
          <Heading mb="0">
            <fields.TextField
              fieldName="housetitle"
              initValue="<p>Überschrift</p>"
              rtf={false}
            />
          </Heading>
          <Text fontSize="1.5rem" marginBottom="10">
            <fields.TextField
              fieldName="houseteaser"
              initValue="<p>Unterüberschrift</p>"
              rtf="false"
            />
          </Text>
          <Flex direction={flex}>
            {houseimage}
            <Container
              maxW={['300px', '300px', '35vw', '35vw']}
              ml={['auto', 'auto', '10', '10']}
              mr={['auto', 'auto', '0', '0']}
              fontSize="1.1rem">
              <fields.TextField
                fieldName="houserichtext"
                initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
              />
            </Container>
          </Flex>
        </Container>

        <Container centerContent maxW={['100%', '100%', '40vw', '40vw']}>
          <Text fontWeight="light" fontSize="1.75rem" mb="5">
            <fields.TextField
              fieldName="houseadtext"
              initValue="<p>Unterüberschrift</p>"
              rtf={false}
            />
          </Text>
          <Flex direction={flex}>
            <Box
              key={isClient}
              width={['90%', '90%', 'fit-content', 'fit-content']}
              borderRadius="25px"
              border="1px"
              borderColor="panoramaweg.lightgray"
              padding="5"
              alignSelf={['center', 'center', 'auto', 'auto']}
              mb={['3', '3', '0', '0']}
              ml={['0', '0', '3', '3']}>
              <Text>Wohnungsgröße mindestens</Text>
              <HStack spacing="3">
                <Text>0m²</Text>
                <Slider
                  max={maxSize}
                  step={5}
                  defaultValue={filters.sizeFilter}
                  onChangeEnd={value => {
                    handleValueChange(value, 'sizeFilter')
                  }}>
                  <SliderTrack bg="panoramaweg.lightgray">
                    <SliderFilledTrack bg="panoramaweg.green" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>{maxSize}m²</Text>
              </HStack>
            </Box>
            <Box
              width={['90%', '90%', 'fit-content', 'fit-content']}
              borderRadius="25px"
              border="1px"
              borderColor="panoramaweg.lightgray"
              padding="5"
              alignSelf={['center', 'center', 'auto', 'auto']}
              mb={['3', '3', '0', '0']}
              ml={['0', '0', '3', '3']}>
              <Text>Zimmer mindestens</Text>
              <HStack spacing="3">
                <Text>1</Text>
                <Slider
                  min={1}
                  max={maxRooms}
                  defaultValue={filters.roomFilter}
                  onChangeEnd={value => {
                    handleValueChange(value, 'roomFilter')
                  }}>
                  <SliderTrack bg="panoramaweg.lightgray">
                    <SliderFilledTrack bg="panoramaweg.green" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>{maxRooms}</Text>
              </HStack>
            </Box>
            <Box
              width={['90%', '90%', 'fit-content', 'fit-content']}
              borderRadius="25px"
              border="1px"
              borderColor="panoramaweg.lightgray"
              padding="5"
              alignSelf={['center', 'center', 'auto', 'auto']}
              mb={['3', '3', '0', '0']}
              ml={['0', '0', '3', '3']}>
              <Flex
                direction={['row', 'row', 'column', 'column']}
                alignContent={['center', 'center']}
                justifyContent={['center', 'center']}>
                <Text>Verfügbar</Text>
                <Center marginTop="1" ml={['3', '3', '0', '0']}>
                  <Checkbox
                    isChecked={filters.availableFilter}
                    onChange={() =>
                      handleValueChange(
                        !filters.availableFilter,
                        'availableFilter'
                      )
                    }
                  />
                </Center>
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Box minH="10vh">
          <fields.IndexField
            onRender={page => {
              function cleanFieldValues(value: string, type: string) {
                value = value.slice(3, value.length - 4)
                if (type === 'price') {
                  value = value.replace('.', '')
                }
                return value
              }
              const filter: number[] = []
              const cards = []
              for (const child of page.children) {
                const fields = child.page.fields || {}

                const richtext =
                  fields?.apartmentrichtextright?.content?.text ||
                  '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
                const image =
                  fields?.apartmentrightimg?.content?.src ||
                  'https://i.ibb.co/J2jzkBx/placeholder.jpg'
                const size = fields?.apartmentsize?.content?.text || '<p>0</p>'
                const rooms =
                  fields?.apartmentrooms?.content?.text || '<p>1</p>'
                const available =
                  fields?.apartmentavailable?.content?.option || 'Verfügbar'
                let slug = child?.page?.slug

                const formatedSlug = slug.replace('top', 'Top ')
                const cleanedSize = cleanFieldValues(size, 'size')
                const cleanedRooms = cleanFieldValues(rooms, 'rooms')
                const cleanedRichtext = cleanFieldValues(richtext, 'richtext')
                const link =
                  typeof window !== 'undefined' &&
                  window.location.pathname + slug + '/'
                findMinMax(cleanedRooms, cleanedSize)

                if (
                  parseInt(cleanedSize) < filters.sizeFilter ||
                  parseInt(cleanedRooms) < filters.roomFilter ||
                  (filters.availableFilter && available === 'Verkauft')
                ) {
                  filter.push(cards.length)
                }

                cards.push(
                  <>
                    <Link to={link}>
                      <Box
                        width={['90%', '90%', '580px', '580px']}
                        border="1px"
                        borderColor="panoramaweg.lightgray"
                        padding="5"
                        borderRadius="25px"
                        justifyContent="center"
                        alignContent="center"
                        ml={['auto', 'auto', '0', '0']}
                        mr={['auto', 'auto', '0', '0']}>
                        <Flex direction={['column', 'column', 'row', 'row']}>
                          <VStack
                            spacing="0"
                            ml={['auto', 'auto', '0', '0']}
                            mr={['auto', 'auto', '0', '0']}
                            mt={['0', '0', 'auto', 'auto']}
                            mb={['5', '5', 'auto', 'auto']}>
                            <Image
                              src={image}
                              alt="apartmentcardimg"
                              w={{base: '200px', md: '300px'}}
                              h={{base: '150px', md: '200px'}}
                            />
                            <Badge
                              backgroundColor={
                                available === 'Verfügbar'
                                  ? 'panoramaweg.green'
                                  : '#f61a42'
                              }
                              width={{base: '200px', md: '300px'}}
                              height="30px"
                              color="white"
                              textTransform="none"
                              textAlign="center"
                              fontSize="1.1rem"
                              pt="0.6">
                              {available}
                            </Badge>
                          </VStack>
                          <Container size="lg">
                            <Heading>{formatedSlug}</Heading>

                            <Text>Wohnungsgröße: {cleanedSize}m²</Text>
                            <Progress
                              value={parseInt(cleanedSize)}
                              max={maxSize}
                              colorScheme="greenwhite"
                              borderRadius="25px"
                              size="sm"
                              width="100%"
                            />
                            <Text>Zimmer: {cleanedRooms}</Text>
                            <Progress
                              value={parseInt(cleanedRooms)}
                              max={maxRooms}
                              colorScheme="greenwhite"
                              borderRadius="25px"
                              size="sm"
                              width="100%"
                            />
                            <Text mt="1" noOfLines={4}>
                              {cleanedRichtext}
                            </Text>
                          </Container>
                        </Flex>
                      </Box>
                    </Link>
                  </>
                )
              }
              return (
                <Wrap spacing="5" justify="center" mt="5" mb="10">
                  {cards.map((component, index) => {
                    return (
                      <Box
                        key={index}
                        display={filter.includes(index) ? 'none' : 'static'}>
                        {component}
                      </Box>
                    )
                  })}
                </Wrap>
              )
            }}
          />
        </Box>

        <Container centerContent>
          <Button
            colorScheme="greenwhite"
            borderRadius="25px"
            mb="5"
            display={filters.hasFilter ? 'static' : 'none'}
            onClick={() => disableFilter()}>
            Filter deaktivieren
          </Button>
        </Container>

        <Footer />
      </Box>
    </style.responsiveImage>
  )
}
//#endregion

HousePage.TemplateName = 'HousePage'
//#region > Exports
export default HousePage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
