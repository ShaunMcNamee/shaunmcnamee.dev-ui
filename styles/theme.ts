import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      blueJeans: '#61A7E1',
      onyx: '#393E41',
      mintCream: '#F7FFF6',
      mayGreen: '#2E933C',
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.onyx",
      },
    },
  },
})

export default theme