import { theme as proTheme } from '@chakra-ui/pro-theme'

export const theme = extendTheme(
  {
    colors: { ...proTheme.colors, brand: proTheme.colors.purple },
    fonts: {
      heading: "'Quicksand', sans-serif",
      body: "'Quicksand', sans-serif",
    },
  },
  proTheme,
)