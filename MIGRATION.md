# Migration guide – 2.1.0

## Documentation migration

The prefered way of consuming Margaret doc is now via [its own website](https://margaret.tech).

## Colors handling

Color palettes & ui colors are now passed to MargaretProvider. By doing so, they can be casted to CSS variables, and reused in the theme object.

e.g.

```javascript
// Before
const theme = {
  colors: {
    blue: {
      100: '#406fb3',
    },
  },
  primary: '#406fb3',
  button: {
    color: '#406fb3',
    primary: {
      background: '#406fb3',
    },
  },
};

return <MargaretProvider theme={theme} />;
```

```javascript
// After
const colors = {
  palette: {
    blue: {
      400: '#406fb3',
      500: '#365E96',
    },
  },
  ui: {
    primary: 'var(--colors-blue-400)',
  },
};

const theme = {
  button: {
    color: 'var(--ui-primary)',
    primary: {
      background: 'var(--ui-primary)',
    },
  },
};

return <MargaretProvider theme={theme} colors={colors} />;
```

In order to use those ui & palette colors in your styled components, two way are available:

```javascript
// Using CSS Variables
const MyCard = styled(Stack)`
  color: var(--ui-primary);

  &:hover {
    color: var(--colors-blue-500);
  }
`;
```

```javascript
// Using theme variables (prefered)
const MyCard = styled(Stack)`
  color: ${({ theme }) => theme.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.blue.500};
  }
`;
```

## Deprecated media function

Importing media directly from Margaret is now deprecated. It was forcing user to use pre-setup breakpoints. Concurrently, breakpoints can now be configured in the theme.

```javascript
// v1
import { media } from '@tymate/margaret';

const MyDiv = styled.div`
  color: blue;

  ${media.tablet`
    color: rebeccapurple;
  `}
`;

// v2
const theme = {
  breakpoints: {
    myCustomBreakpoint: 1337,
  },
};

<MargaretProvider theme={theme} />;

const MyDiv = styled.div`
  color: blue;

  ${({ theme }) => theme.media.myCustomBreakpoint`
    color: rebeccapurple;
  `}
`;
```

## Responsive props

All props are now responsive. They can either be set to the foreseen value (string, number…), or to an object whose keys are set in `theme.breakpoints`.

```javascript
const theme = {
  breakpoints: {
    tablet: 768,
    desktop: 1200,
  },
};

<Stack
  gap={{ default: 1, tablet: 5 }}
  color={{ default: 'primary', desktop: 'secondary' }}
/>;
```

## Helper props

A handful of props are now available to `Box` and its derived components, `Stack`, `Grid`, `List`, et. al : `display`, `position`, `top`, `right`, `bottom`, `left`, `padding`, `paddingVertical`, `paddingHorizontal`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `marginAuto`, `color`, `backgroundColor`, `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `order`, `width`, `height`, `minWidth`, `minHeight`, `overflow`, `overflowX`, `overflowY`, `textDecoration`, `fontWeight`, `fontStyle`, `boxShadow`, `borderRadius`, `gridArea`, `gridColumnStart`, `gridColumnEnd`, `gridRowStart`, `gridRowEnd`.

We do not recommend using more than 4 helper props, to avoid falling into the prop hell well.

```javascript
// Bad
const MyText = styled(Box)`
  color: ${({ theme }) => theme.textLight};
`;
<MyText>Hi!</MyText>

// Good
<Box color="textLight">Hi!</Box>

// Bad
<Box
  color="textLight"
  fontWeight="700"
  backgroundColor="background"
  paddingVertical={{ default: 1, tablet: 2 }}
  flex={{ default: 1, medium: 2 }}
  borderRadius="small"
  width="100%"
  overflowY="auto"
  order={-1}
  boxShadow="0 2px 4px var(--ui-separator)"
/>

// Good
const MyWrapper = styled(Box)`
  flex: 1;
  order: -1;
  width: 100%;
  overflow-y: auto;
  padding-top: ${({ theme }) => theme.spacing()};
  padding-bottom: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.textLight};
  font-weight: 700;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 2px 4px ${({ theme }) => theme.separator};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ theme }) => theme.media.tablet`
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  `}

  ${({ theme }) => theme.media.medium`
    flex: 2;
  `}
`;

<MyWrapper />
```
