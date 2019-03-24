import DesignSystem from 'design-system-utils'

const gradientStart = '#62bdfe'
const gradientStop = '#6833cb'

/* eslint-disable no-dupe-keys */
const palette = {
  electricBlue: '#007AFF',
  blueNight: '#1F2245',
  magneticBlack: '#494949',
  babyBlue: '#99CAFF',
  gradient: `linear-gradient(to right, ${gradientStart}, ${gradientStop})`,
  progressionGradient: 'linear-gradient(90deg, #007AFF 0%, #F1F2F3 100%)',
  blockGradient: 'linear-gradient(180deg, #FCFCFD 0%, #EFF2F6 100%)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
  brightOrange: '#FF5C39',
  orange: '#FA983A',
  darkOrange: '#4a0d00',
  skyBlue: '#62BDFE',
  greyLighter: '#F7F8FA',
  greyLight: '#F1F2F3',
  greyMedium: '#E8EAEE',
  grey: '#DBDBDE',
  greyDark: '#ABADC2',
  greyDarker: '#767992',
  greyBlue: '#EFF4FF',
  white: '#FFFFFF',
  gradientStart,
  gradientStop,
}

const baseFontSize = 14

export const tokens = {
  type: {
    baseFontSize: `${baseFontSize}`,

    modularscale: {
      base: '14px', // should be the same as baseFontSize
      ratio: 1.5,
    },

    sizes: {
      xs: 11,
      sm: 12,
      md: 13,
      regular: 14,
      lg: 15,
      xl: 16,
      '2xl': 18,
      '3xl': 24,
      '4xl': 28,
      '5xl': 32,
      '6xl': 40,
      '7xl': 50,

      buttons: {
        xs: 11,
        default: 13,
      },
      links: {
        xs: 12,
        default: 13,
      },
      inputs: {
        default: {
          label: 13,
          value: 16,
        },
        times: {
          indicator: 18,
        },
        check: 15,
      },
      stepper: {
        steps: 12,
      },
      paragraph: {
        default: 16,
      },
      headings: {
        level0: 32,
        level1: 28,
        level2: 24,
        level3: 18,
        level4: 16,
      },
    },

    lineHeight: {
      inputs: 23,
    },

    fontWeight: {
      normal: 'normal', // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },

  colors: {
    ...palette,
    brand: palette,
    backgrounds: {
      inputs: palette.white,
      listDetails: palette.white,
      checkedInputs: palette.electricBlue,
      timeInputDials: palette.greyLighter,
      blockGradient: palette.blockGradient,
      progress: {
        todo: palette.greyLight,
        doing: palette.progressionGradient,
        done: palette.electricBlue,
      },
    },
    icons: {
      steppers: {
        todo: palette.greyLight,
        done: palette.electricBlue,
      },
    },
    borders: {
      inputs: {
        default: palette.grey,
        error: palette.brightOrange,
      },
      listDetails: palette.greyLight,
      fieldsets: {
        default: palette.greyMedium,
      },
    },
    texts: {
      default: palette.blueNight,
      stepper: {
        todo: palette.greyDarker,
        done: palette.skyBlue,
      },
      inputs: {
        label: palette.greyDarker,
        value: palette.magneticBlack,
        error: palette.brightOrange,
        times: {
          default: palette.magneticBlack,
          active: palette.electricBlue,
        },
      },
      listDetails: {
        legend: palette.greyDarker,
        details: {
          default: palette.blueNight,
          minor: palette.greyDarker,
        },
      },
    },
  },

  viewports: {
    xs: { width: 320, height: 600 },
    sm: { width: 768, height: 600 },
    md: { width: 991, height: 600 },
    lg: { width: 1280, height: 600 },
    xl: { width: 1440, height: 600 },
    xxl: { width: 1600, height: 900 },
  },

  zIndex: {
    normal: 0,
    high: 2,
    higher: 5,
    dropdowns: 50,
  },

  spacing: {
    padding: {
      inputs: 10,
    },
  },

  border: {
    radius: {
      inputs: 3,
      buttons: 3,
      fieldsets: 3,
      messages: 3,
      card: 3,
    },
    style: 'solid',
    width: {
      inputs: 2,
      fieldsets: 1,
      buttons: 1,
    },
  },

  layout: {
    gutter: 30,
    maxWidth: {
      sm: 750,
      md: 970,
      lg: 1170,
      xl: 1280,
      xxl: 1360,
    },
    grid: {
      columnCount: 12,
      columnWidth: 50,
    },
  },
  boxShadow: {
    light: `
      0 ${2 / baseFontSize}rem ${4 / baseFontSize}rem 0 rgba(0, 0, 0, 0.05),
      0 0 ${4 / baseFontSize}rem 0 rgba(0, 0, 0, 0.05)`,
    medium: `
      0 ${2 / baseFontSize}rem ${8 / baseFontSize}rem rgba(172,172,172,0.1)`,
  },
}

export default new DesignSystem(tokens, {
  fontSizeUnit: 'rem',
})
/* eslint-enable no-dupe-keys */
