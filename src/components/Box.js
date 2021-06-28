import styled, { css } from 'styled-components';
import { spacings } from '../ui/utils';

const Box = styled.div`
  ${spacings()}

  ${({ theme, color }) =>
    Boolean(color) &&
    (Boolean(theme?.colors?.[color]) || Boolean(theme?.[color])) &&
    css`
      color: ${({ theme }) => theme?.colors?.[color] || theme?.[color]};
    `}

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}

  ${({ size }) =>
    size === 'fit-content' &&
    css`
      width: fit-content;
    `}
`;

export default Box;
