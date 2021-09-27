import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const HeroStyle = styled(Box)`
  .herobackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
  }
  .herologo {
    ${mq[0]} {
      width: 300px;
      position: absolute;
      z-index: 10;
    }
    ${mq[1]} {
      width: 300px;
      position: absolute;
      z-index: 10;
    }
    ${mq[2]} {
      width: 350px;
      position: absolute;
      z-index: 10;
    }
    ${mq[3]} {
      width: 350px;
      position: absolute;
      z-index: 10;
    }
  }
`
