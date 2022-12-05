import {extendTheme} from '@chakra-ui/react'
import {StepsStyleConfig as Steps} from 'chakra-ui-steps'

const theme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    greenwhite: {
      50: '#77bd43',
      100: '#77bd43',
      200: '#77bd43',
      400: '#77bd43',
      500: '#77bd43',
      600: '#6bab3c',
      700: '#77bd43',
      800: 'white',
      900: '#77bd43'
    },
    panoramaweg: {
      dark: '#212529',
      red: '#f61a42',
      green: '#77bd43',
      pink: '#ea4aaa',
      lightgray: '#e9eef0'
    }
  },
  components: {
    Steps
  }
}

export default extendTheme(theme)
