export const colors = {
  palette: {
    white: '#ffffff',
    green: {
      50: '#EDF8F3',
      100: '#CDEADC',
      200: '#ACDDC6',
      300: '#8CCFB0',
      400: '#6BC299',
      500: '#4BB483',
      600: '#3C9069',
      700: '#2D6C4F',
      800: '#1E4834',
      900: '#0F241A',
    },
    yellow: {
      50: '#FFFBE5',
      100: '#FFF3B8',
      200: '#FFEB8A',
      300: '#FFE45C',
      400: '#FFDC2E',
      500: '#FFD400',
      600: '#CCAA00',
      700: '#997F00',
      800: '#665500',
      900: '#332A00',
    },
    teal: {
      50: '#ECF8F9',
      100: '#C9ECEE',
      200: '#A6E1E3',
      300: '#83D5D8',
      400: '#60C9CD',
      500: '#3DBDC2',
      600: '#31979B',
      700: '#257174',
      800: '#194C4D',
      900: '#0C2627',
    },
    gray: {
      50: 'hsla(227, 53%, 8%, 0.03)',
      100: 'hsla(227, 53%, 8%, 0.06)',
      200: 'hsla(227, 53%, 8%, 0.12)',
      300: 'hsla(227, 53%, 8%, 0.24)',
      400: 'hsla(227, 53%, 8%, 0.36)',
      500: 'hsla(227, 53%, 8%, 0.48)',
      600: 'hsla(227, 53%, 8%, 0.64)',
      700: 'hsla(227, 53%, 8%, 0.72)',
      800: 'hsla(227, 53%, 8%, 0.87)',
      900: 'hsl(227, 53%, 8%)',
    },
    red: {
      50: '#FFF0EE',
      100: '#F7BFC0',
      200: '#F5ABA5',
      300: '#ED6E6F',
      400: '#EA5557',
      500: '#E31C1F',
      600: '#B61619',
      700: '#881112',
      800: '#5B0B0C',
      900: '#2D0606',
    },
    orange: {
      50: '#FEF0E7',
      100: '#FBD4BB',
      200: '#F9B88F',
      300: '#F79C64',
      400: '#F58138',
      500: '#F2650D',
      600: '#C2510A',
      700: '#913C08',
      800: '#612805',
      900: '#301403',
    },
    blue: {
      50: '#ECF1F8',
      100: '#CAD8EC',
      200: '#A9BFE0',
      300: '#87A6D4',
      400: '#658DC8',
      500: '#406FB3',
      600: '#365D96',
      700: '#284671',
      800: '#1B2F4B',
      900: '#0D1726',
    },
    cyan: {
      50: '#E9FAFB',
      100: '#C3F2F4',
      200: '#9CE9ED',
      300: '#75E1E6',
      400: '#4ED8DF',
      500: '#27D0D8',
      600: '#1FA6AD',
      700: '#187D81',
      800: '#105356',
      900: '#082A2B',
    },
    purple: {
      50: '#F2EBF9',
      100: '#DBC7EF',
      200: '#C4A4E5',
      300: '#AD80DB',
      400: '#965CD1',
      500: '#7F39C6',
      600: '#652D9F',
      700: '#4C2277',
      800: '#33174F',
      900: '#190B28',
    },
    pink: {
      50: '#FFE5ED',
      100: '#FFB8CC',
      200: '#FF8AAB',
      300: '#FF5C8A',
      400: '#FF2E69',
      500: '#FF0048',
      600: '#CC003A',
      700: '#99002B',
      800: '#66001D',
      900: '#33000E',
    },
  },
  ui: {
    primary: 'var(--colors-red-400)',
    primaryLight: 'var(--colors-red-300)',
    primaryBackground: 'var(--colors-red-50)',
    secondary: 'var(--colors-blue-500)',
    secondaryLight: 'var(--colors-blue--400)',
    disabled: 'var(--colors-gray-200)',
    disabledBackground: 'var(--colors-gray-100)',
    separator: 'var(--colors-gray-200)',
    separatorLight: 'var(--colors-gray-100)',
    separatorDark: 'var(--colors-gray-300)',
    text: 'var(--colors-gray-900)',
    textLight: 'var(--colors-gray-500)',
  },
};

export const theme = {
  borderRadius: {
    none: '0',
    small: '4px',
    default: '6px',
    large: '12px',
  },

  buttonsDefaultAlignX: 'flex-start',
  boxShadowColor: 'var(--ui-separator)',
  boxShadowColorHover: 'var(--ui-separatorDark)',

  button: {
    transition: 'background 150ms ease',
    borderRadius: '6px',
    alignY: 'center',
    alignX: 'center',
    fontWeight: 600,
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 0,
    color: 'var(--ui-primary)',
    boxShadow: '',
    colorHover: 'var(--ui-primary-light)',
    boxShadowHover: '',
    colorFocus: '',
    boxShadowFocus: '',

    primary: {
      background: 'var(--ui-primary)',
      color: 'var(--colors-white)',
      boxShadow: '',

      backgroundHover: 'var(--ui-primary-light)',
      colorHover: '',
      transformHover: '',
      boxShadowHover: '',

      backgroundDisabled: 'var(--ui-disabled)',
      colorDisabled: 'var(--colors-gray-400)',
      boxShadowDisabled: '',
      transformDisabled: '',

      paddingHorizontal: '24px',
      paddingVertical: '12px',
      borderRadius: '6px',
      minWidth: '180px',
    },
  },

  tabs: {
    margin: '',
    padding: '',
    alignY: 'center',
    alignX: 'center',
    tab: {
      direction: 'column',
      alignX: 'center',
      padding: '0.5rem 1rem',
      fontWeight: 600,
      fontSize: '1rem',
      borderRadius: '3px',
      minWidth: '100%',
      maxWidth: '162px',
      whiteSpace: 'wrap',

      background: 'var(--ui-primary)',
      boxShadow: '',
      color: 'var(--colors-gray-0)',

      backgroundHover: 'var(--ui-primary-light)',
      boxShadowHover: '0 2px 4px var(--ui-separator)',
      colorHover: 'var(--colors-gray-0)',

      backgroundDisabled: '',
      boxShadowDisabled: '',
      colorDisabled: '',

      backgroundActive: 'var(--ui-primary-light)',
      boxShadowActive: '0 2px 4px var(--ui-separator)',
      colorActive: 'var(--colors-gray-0)',
    },
  },

  mainNav: {
    width: '320px',
    maxWidth: '100%',
    background: {
      mobile: 'var(--colors-red-50)',
      tablet: 'var(--colors-red-50)',
    },
    offCanvasToVisibleBreakpoint: 'tablet',
    boxShadow: `0 4px 4px var(--colors-gray-100)`,
    position: 'top',
    height: '80px',
    triggerColor: {
      expanded: 'var(--ui-primary)',
      collapsed: 'var(--ui-text)',
    },
  },

  modal: {
    sizes: {
      default: '500px',
      big: '1100px',
      medium: '800px',
      full: '100%',
    },
    padding: '1rem',
    boxShadow: '0 0 20px var(--ui-separator)',
    borderRadius: '6px',
    outline: 'none',
    background: 'var(--colors-white)',
    overlay: {
      background: 'var(--colors-gray-500)',
    },
  },

  card: {
    boxShadow: '0 2px 4px var(--ui-separator)',
    borderRadius: '20px',
  },

  tooltip: {
    fontStyle: 'bodySmall',
    fontSize: '14px',
    fontWeight: '400',
    color: 'var(--colors-white)',
    background: 'var(--ui-primary)',
    borderRadius: '2px',
    paddingVertical: '2px',
    paddingHorizontal: '4px',
    maxWidth: '200px',
  },

  fonts: {
    title:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    ui: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },

  cssLockLowerBreakpoint: 'tablet',
  cssLockHigherBreakpoint: 'desktop',

  fontStacks: {
    h1Mega: {
      sizeMinRem: 1.75,
      sizeMaxRem: 2.625,
      lineHeightMin: 1.2,
      lineHeightMax: 1.1,
      fontWeight: 700,
      defaultTag: 'h1',
      fontFamily: 'title',
    },
    h1: {
      sizeMinRem: 1.375,
      sizeMaxRem: 2,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
      fontWeight: 700,
      defaultTag: 'h1',
      fontFamily: 'title',
    },
    h2: {
      sizeMinRem: 1.25,
      sizeMaxRem: 1.5,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
      fontWeight: 700,
      defaultTag: 'h2',
      fontFamily: 'title',
    },
    heading: {
      sizeMinRem: 1.125,
      sizeMaxRem: 1.25,
      lineHeightMin: 1.4375,
      lineHeightMax: 1.25,
      fontWeight: 700,
      defaultTag: 'h3',
      fontFamily: 'title',
    },
    subHeading: {
      sizeMinRem: 1.0625,
      sizeMaxRem: 1.1875,
      lineHeightMin: 1.2,
      lineHeightMax: 1.3,
      fontWeight: 700,
      defaultTag: 'h4',
      fontFamily: 'title',
    },
    bodyLarge: {
      sizeMinRem: 1.0625,
      sizeMaxRem: 1.1875,
      lineHeightMin: 1.2,
      lineHeightMax: 1.3,
      fontWeight: 400,
      defaultTag: 'span',
      fontFamily: 'body',
    },
    body: {
      sizeMinRem: 1,
      sizeMaxRem: 1,
      lineHeightMin: 1.3125,
      lineHeightMax: 1.5,
      fontWeight: 400,
      fontFamily: 'body',
    },
    bodySmall: {
      sizeMinRem: 0.8125,
      sizeMaxRem: 0.875,
      lineHeightMin: 1.4,
      lineHeightMax: 1.35,
      fontWeight: 400,
      fontFamily: 'body',
    },
    legend: {
      sizeMinRem: 0.8125,
      sizeMaxRem: 0.875,
      lineHeightMin: 1.4,
      lineHeightMax: 1.35,
      fontWeight: 400,
      color: 'textLight',
    },
  },

  breakpoints: {
    desktop: 1200,
    medium: 1000,
    tablet: 750,
  },

  containerSizes: {
    tight: '30rem',
    narrow: '45rem',
    default: '75rem',
    full: '100%',
  },

  avatarSizes: {
    tiny: '1rem',
    small: '2rem',
    default: '3rem',
    medium: '4rem',
    large: '6rem',
    huge: '8rem',
  },
};
