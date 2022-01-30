// import { Theme } from '@emotion/react'
import { extendTheme } from 'native-base'

const darkTheme = extendTheme({
  colors: {
    primary: {
      50: '#ddfefe',
      100: '#b7f5f5',
      200: '#8eeced',
      300: '#66e5e6',
      400: '#40dedf',
      500: '#28c4c5',
      600: '#199899',
      700: '#0a6d6e',
      800: '#004243',
      900: '#001818'
    }
  },
  config: {
    initialColorMode: 'dark'
  },
  components: {
    View: {
      baseStyle: {
        backgroundColor: 'gray.800'
      }
    },
    Button: {}
  }
})

export type DarkTheme = typeof darkTheme
export default darkTheme
