//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// React Router
// import { Link } from "react-router-dom";

//> CSS
import {Container, Heading, Text, Box, Image, Wrap} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {Link} from 'gatsby'
import './index.scss'
import {Step, Steps} from 'chakra-ui-steps'
import {Element} from 'react-scroll'
import {hasWindow} from '../../../common/utils'

//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

//#region > Components
interface Props {
  bloghead: React.ReactNode
  blogsubhead: React.ReactNode
}

const BlogSection = ({bloghead, blogsubhead}: Props): JSX.Element => {
  // Checks if not SSR
  const isWindow = hasWindow()

  return (
    <Element id="blogsection">
      <Container
        centerContent
        maxW={['100%', '100%', '80%', '80%']}
        mb="20"
        mt="10">
        <Heading fontSize="1.5rem">{bloghead}</Heading>
        <Text fontSize="1.1rem" mb="5">
          {blogsubhead}
        </Text>

        <fields.ChoiceField
          fieldName="stepper"
          options={[
            'Finanzierung',
            'Baustart',
            'Platzhalter1',
            'Platzhalter2',
            'Fertigstellung'
          ]}
          initValue={'Finanzierung'}
          onRenderPopover={null}
          onRender={(selection, options, onSelect, isEditing) => {
            if (!isWindow) {
              return null
            }

            return (
              <Steps activeStep={selection} colorScheme="greenwhite">
                {options.map((option, index) => (
                  <Step
                    cursor={isEditing ? 'pointer' : 'default'}
                    isCompletedStep={
                      selection === options.length - 1 ? true : undefined
                    }
                    label={option}
                    key={index}
                    onClick={
                      isEditing ? () => onSelect(index) : () => null
                    }></Step>
                ))}
              </Steps>
            )
          }}
        />
        <Box marginTop="10" />
        <fields.IndexField
          fieldName="blogindex"
          fixedSlug="SitePage /blog/"
          onRender={page => {
            function removePTags(value: string) {
              return value.substring(3, value.length - 4)
            }

            const children = page?.children
            const cards = []

            for (const child of children) {
              const slug = child?.page?.slug
              const fields = child?.page?.fields
              const heading = removePTags(
                fields?.bloghead?.content?.text || '<p>Überschrift</p>'
              )
              const text = removePTags(
                fields?.blogrichtext?.content?.text ||
                  '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
              )
              const img =
                fields?.blogimgleftimg?.content?.src ||
                'https://i.ibb.co/J2jzkBx/placeholder.jpg'

              cards.push(
                <Link to={'/blog/' + slug + '/'}>
                  <Box
                    border="1px"
                    borderColor="panoramaweg.lightgray"
                    borderRadius="25px"
                    boxSizing="border-box"
                    width={['300px', '300px', '425px', '425px']}>
                    <Image
                      alt="blogcardimg"
                      src={img}
                      height={['200px', '200px', '285px', '285px']}
                      width={['300px', '300px', '425px', '425px']}
                      borderTopRadius="25px"
                    />
                    <Box padding="5">
                      <Heading
                        fontSize={['1.1rem', '1.1rem', '1.5rem', '1.5rem']}>
                        {heading}
                      </Heading>
                      <Text noOfLines={3} fomtSize="1.1rem">
                        {text}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              )
            }

            return (
              <Wrap justify="center" spacing="5" marginTop="5">
                {cards.map((card, key) => {
                  return <Box key={key}>{card}</Box>
                })}
              </Wrap>
            )
          }}
        />
      </Container>
    </Element>
  )
}

export default BlogSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
