import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../utils'

export const responsiveImage = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[2]} {
      width: 22vw;
      height: 26vh;
    }
    ${mq[3]} {
      width: 22vw;
      height: 26vh;
    }
  }
`
