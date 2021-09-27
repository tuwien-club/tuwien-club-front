import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../utils'

export const responsiveImage = styled(Box)`
  .responsiveImage {
    border-radius: 25px;
    ${mq[0]} {
      width: 300px;
      height: 180px;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
    }
    ${mq[2]} {
      width: 600px;
      height: 375px;
    }
    ${mq[3]} {
      width: 600px;
      height: 375px;
    }
  }
`
