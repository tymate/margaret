export const colors = {
  palette: {
    green: {
      100: 'hsla(137, 54%, 61%, 0.15)',
      300: 'hsl(137, 54%, 70%)',
      400: 'hsl(137, 54%, 61%)',
    },
    teal: {
      300: 'hsl(196, 53%, 50%)',
      400: 'hsl(196, 53%, 41%)',
    },
    gray: {
      0: '#ffffff',
      100: 'hsla(227, 53%, 8%, 0.06)',
      200: 'hsla(227, 53%, 8%, 0.12)',
      300: 'hsla(227, 53%, 8%, 0.24)',
      400: 'hsla(227, 53%, 8%, 0.38)',
      500: 'hsla(227, 53%, 8%, 0.5)',
      800: 'hsl(227, 53%, 8%)',
    },
  },
  ui: {
    primary: 'var(--colors-green-400)',
    primaryLight: 'var(--colors-green-300)',
    primaryBackground: 'var(--colors-green-100)',
    secondary: 'var(--colors-teal-400)',
    secondaryLight: 'var(--colors-teal-300)',
    disabled: 'var(--colors-gray-200)',
    disabledBackground: 'var(--colors-gray-100)',
    separator: 'var(--colors-gray-200)',
    separatorLight: 'var(--colors-gray-100)',
    separatorDark: 'var(--colors-gray-300)',
    text: 'var(--colors-gray-800)',
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
      color: 'var(--colors-gray-0)',
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

      background: 'var(--ui-primary)',
      boxShadow: '',
      color: 'var(--colors-gray-0)',

      backgroundHover: 'var(--colors-gray-0)',
      boxShadowHover: `0px 9px 18px var(--ui-separator), 0px 2px 5px var(--ui-separatorDark)`,
      colorHover: 'var(--ui-primary)',

      backgroundDisabled: '',
      boxShadowDisabled: '',
      colorDisabled: '',

      backgroundActive: 'var(--colors-gray-0)',
      boxShadowActive: '',
      colorActive: 'var(--ui-primary)',
    },
  },

  mainNav: {
    width: '320px',
    maxWidth: '100%',
    background: {
      mobile: 'var(--colors-gray-0)',
      tablet: 'var(--colors-gray-0)',
    },
    boxShadow: `0 4px 4px var(--colors-gray-100)`,
    position: 'top',
    height: '80px',
    triggerColor: {
      expanded: 'var(--ui-primary)',
      collapsed: 'var(--ui-text)',
    },
  },

  tooltip: {
    fontStyle: 'bodySmall',
    fontSize: '14px',
    fontWeight: '400',
    color: '#fff',
    background: 'hsl(137, 54%, 61%)',
    borderRadius: '2px',
    paddingVertical: '2px',
    paddingHorizontal: '4px',
    maxWidth: '120px',
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
