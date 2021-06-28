import styled from 'styled-components';
import Stack from './Stack';

const Container = styled(Stack).attrs({
  direction: 'column',
  paddingVertical: { default: 1, tablet: 2 },
})`
  max-width: 100%;
  width: ${({ theme }) => theme.containerSizes?.default};
  margin-left: auto;
  margin-right: auto;

  ${({ size, theme }) =>
    Boolean(size) &&
    Boolean(theme?.containerSizes?.[size]) &&
    `
      width: ${theme?.containerSizes?.[size]}
    `};
`;

export default Container;
