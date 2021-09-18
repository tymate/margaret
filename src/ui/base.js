import styled, { css } from 'styled-components';
import Stack from '../components/Stack';
import Box from '../components/Box';

export const Name = styled.span`
  font-weight: 500;
`;

export const List = props => <Stack {...props} />;

List.defaultProps = {
  as: 'ul',
  margin: 0,
  padding: 0,
};

export const InlineList = styled(List)`
  flex-wrap: wrap;
`;

InlineList.defaultProps = {
  direction: 'row',
  marginTop: 0,
  marginBottom: 0,
};

export const ButtonReset = styled.button`
  border: 0;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  text-align: inherit;

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}
`;

export const Buttons = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(-1)};
  margin-top: ${({ theme }) => theme.spacing(-1)};
  display: flex;
  justify-content: ${({ theme }) => theme.buttonsDefaultAlignX};
  flex-wrap: wrap;

  > * {
    margin-left: ${({ theme }) => theme.spacing()};
    margin-top: ${({ theme }) => theme.spacing()};
  }

  ${({ alignX }) =>
    Boolean(alignX) &&
    css`
      justify-content: ${({ alignX }) => alignX};
    `}

  ${({ alignY }) =>
    Boolean(alignY) &&
    css`
      align-items: ${({ alignY }) => alignY};
    `}

  ${props =>
    props.hasTopMargin &&
    css`
      margin-top: ${({ theme }) => theme.spacing()};
    `};

  ${props =>
    props.spacingSize === 'small' &&
    css`
      margin-left: ${({ theme }) => theme.spacing(-0.5)};
      margin-top: ${({ theme }) => theme.spacing(-0.5)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(0.5)};
        margin-top: ${({ theme }) => theme.spacing(0.5)};
      }
    `}

  ${props =>
    props.spacingSize === 'big' &&
    css`
      margin-left: ${({ theme }) => theme.spacing(-2)};
      margin-top: ${({ theme }) => theme.spacing(-2)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(2)};
        margin-top: ${({ theme }) => theme.spacing(2)};
      }
    `}
`;

export const Icon = styled.div`
  font-size: 1.25rem;
  + * {
    margin-left: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const TitleAndAction = styled(Stack)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ hasTopMargin, theme }) =>
    hasTopMargin &&
    `
      margin-top: ${theme.spacing()}
    `}

  ${({ hasBottomMargin, theme }) =>
    hasBottomMargin &&
    `
      margin-bottom: ${theme.spacing()}
    `}

  ${({ hasBottomBorder, theme }) =>
    hasBottomBorder &&
    `
      padding-bottom: ${theme.spacing()};
      border-bottom: 1px solid ${theme.text}
    `}
`;

export const ColorModeSampleBox = styled(Box)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-top: ${({ theme }) => theme.spacing()};
  margin-bottom: ${({ theme }) => theme.spacing()};
`;
