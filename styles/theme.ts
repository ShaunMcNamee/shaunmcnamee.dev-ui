import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      blueJeans: '#61A7E1',
      onyx: '#393E41',
      mintCream: '#F7FFF6',
      viridian: '#558B6E',
      xanthous: '#EDB230',
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'brand.mintCream',
        fontSize: '16px',
      },
      variants: {
        inherit: {
          color: 'inherit',
        },
      }
    },
    Heading: {
      baseStyle: {
        color: 'brand.mintCream',
      },
      variants: {
        inherit: {
          color: 'inherit',
        },
      }
    },
    Link: {
      variants: {
        header: {
          color: 'brand.onyx',
          margin: '0 !important',
          fontSize: '20px',
          padding: '0 24px',
          _hover: {
            textDecoration: 'none',
          },
          _focus: {
            outline: '1px solid #F7FFF6',
          },
        },
        hamburgerMenu: {
          color: 'brand.onyx',
          margin: '0 !important',
          fontSize: '24px',
          fontWeight: '600',
          padding: '16px 0px',
          _hover: {
            textDecoration: 'none',
          },
          _focus: {
            outline: '1px solid #F7FFF6',
          },
        },
        body: {
          color: 'brand.mintCream',
          _hover: {
            textDecoration: 'none',
            color: 'brand.xanthous',
          },
        },
        content: {
          textDecoration: 'underline',
        },
      },
    },
    Container: {
      variants: {
        blogPost: {
          margin: '12px',
          padding: '6',
          maxWidth: '260px',
          cursor: 'pointer',
          borderColor: 'brand.mintCream',
          color: 'brand.mintCream',
          borderWidth: '1px',
          borderRadius: 'lg',
          _hover: {
            borderColor: 'brand.xanthous',
            color: 'brand.xanthous',
            borderWidth: '1px',
            borderRadius: 'lg',
          },
        },
      },
    },
  },
})

export default theme
