import Typography from "typography"
import sutro from "typography-theme-sutro"

sutro.baseFontSize = '16px' // was 22px

sutro.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: '#107AB0'
  },
  'blockquote': {
    marginLeft: '-32px'
  },
  'h1,h2,h3': {
  }
})

const typography = new Typography(sutro)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
