export const theme = {
  primary: 'hsl(137, 54%, 61%)',
  primaryLight: 'hsl(137, 54%, 70%)',
  primaryBackground: 'hsla(137, 54%, 61%, 0.15)',
  secondary: 'hsl(196, 53%, 41%)',
  secondaryLight: 'hsl(196, 53%, 50%)',

  disabled: 'rgba(4%, 6%, 13%, 0.2)',
  disabledBackground: 'rgba(4%, 6%, 13%, 0.06)',
  separator: 'rgba(4%, 6%, 13%, 0.2)',

  text: '#0B0F21',
  textLight: 'rgba(4%, 6%, 13%, 0.5)',

  colors: {
    primary: 'hsl(137, 54%, 61%)',
    primaryLight: 'hsl(137, 54%, 70%)',
    primaryBackground: 'hsla(137, 54%, 61%, 0.15)',
    secondary: 'hsl(196, 53%, 41%)',
    secondaryLight: 'hsl(196, 53%, 50%)',

    disabled: 'rgba(4%, 6%, 13%, 0.2)',
    disabledBackground: 'rgba(4%, 6%, 13%, 0.06)',
    separator: 'rgba(4%, 6%, 13%, 0.2)',

    text: '#0B0F21',
    textLight: 'rgba(4%, 6%, 13%, 0.5)',
  },

  borderRadius: {
    none: '0',
    small: '4px',
    default: '6px',
    large: '12px',
  },

  buttonsDefaultAlignX: 'flex-start',
  boxShadowColor: 'rgba(0, 0, 0, 0.12)',
  boxShadowColorHover: 'rgba(0, 0, 0, 0.24)',

  button: {
    transition: 'background 150ms ease',
    borderRadius: '6px',
    alignY: 'center',
    alignX: 'center',
    fontWeight: 600,
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 0,
    color: 'hsl(137, 54%, 61%)',
    boxShadow: '',
    colorHover: 'hsl(137, 54%, 70%)',
    boxShadowHover: '',
    colorFocus: '',
    boxShadowFocus: '',

    primary: {
      background: 'hsl(137, 54%, 61%)',
      color: '#fff',
      boxShadow: '',

      backgroundHover: 'hsl(137, 54%, 70%)',
      colorHover: '',
      transformHover: '',
      boxShadowHover: '',

      backgroundDisabled: 'rgba(4%, 6%, 13%, 0.2)',
      colorDisabled: 'rgba(0, 0, 0, 0.38)',
      boxShadowDisabled: '',
      transformDisabled: '',

      paddingHorizontal: '24px',
      paddingVertical: '14px',
      borderRadius: '6px',
      minWidth: '220px',
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
      padding: '14px',
      fontWeight: 600,
      fontSize: '1rem',
      borderRadius: '3px',
      minWidth: '100%',
      maxWidth: '162px',
      whiteSpace: 'wrap',

      background: 'hsl(137, 54%, 61%)',
      boxShadow: '',
      color: '#fff',

      backgroundHover: '#fff',
      boxShadowHover: `0px 9px 18px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.24)`,
      colorHover: 'hsl(137, 54%, 61%)',

      backgroundDisabled: '',
      boxShadowDisabled: '',
      colorDisabled: '',

      backgroundActive: '#fff',
      boxShadowActive: '',
      colorActive: 'hsl(137, 54%, 61%)',
    },
  },

  mainNav: {
    width: '320px',
    maxWidth: '100%',
    background: {
      mobile: '#ffffff',
      tablet: '#ffffff',
    },
    boxShadow: `0 4px 4px rgba(0,0,0,0.05)`,
    position: 'top',
    height: '80px',
    triggerColor: {
      expanded: '#41D974',
      collapsed: 'rgba(0, 0, 0, 0.87)',
    },
  },

  fonts: {
    title: '"Archivo Narrow", sans-serif',
    body: '"Chivo", sans-serif',
    ui: 'sans-serif',
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
    foobar: 800,
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
