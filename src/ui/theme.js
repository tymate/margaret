import { spacing } from './utils';

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

  spacing,

  borderRadius: '6px',

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
    colorHover: 'hsl(137, 54%, 70%)',

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

  buttonsDefaultAlignX: 'flex-start',

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

  boxShadowColor: 'rgba(0,0,0, 0.12)',
  boxShadowColorHover: 'rgba(0,0,0, 0.24)',

  fontStack: {
    title: '"Archivo Narrow", sans-serif',
    body: '"Chivo", sans-serif',
    ui: 'sans-serif',
  },
};
