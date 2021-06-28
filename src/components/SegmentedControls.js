import React from 'react';
import styled, { css } from 'styled-components';
import { Pills, PillItem, PillButton } from './Pills';
import Stack from './Stack';

const SegmentedWrapper = styled(Pills)`
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.separator};
  border-radius: ${({ theme }) => theme.borderRadius?.default};
  overflow: hidden;
`;

export const SegmentedItem = styled(PillItem)`
  box-shadow: inset -1px 0 0 0 ${({ theme }) => theme.separator};
  flex-grow: 1;
  flex-shrink: 1;

  + li {
    margin-left: -1px;
  }

  &:last-child {
    box-shadow: none;
  }
`;

const SegmentedButton = styled(PillButton)`
  border-radius: 0;
  box-shadow: none;
  width: 100%;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  ${({ variant }) =>
    variant === 'oneLiner' &&
    css`
      white-space: nowrap;
    `};

  &.active[disabled] {
    background-color: ${({ theme }) => theme.primaryBackground};
  }

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.disabledBackground};
    color: ${({ theme }) => theme.disabled};
  }
`;

const SegmentedControls = ({
  options,
  value,
  onSelect,
  label,
  variant,
  disabled,
  ...props
}) => (
  <Stack>
    <SegmentedWrapper gap={0} {...props}>
      {options.map(
        (
          {
            value: optionValue,
            label,
            alternateActiveOptions = [],
            cls,
            ...optionProps
          },
          key,
        ) => (
          <SegmentedItem key={key}>
            <SegmentedButton
              className={
                value === optionValue ||
                alternateActiveOptions.indexOf(value) > -1
                  ? 'active'
                  : ''
              }
              onClick={() => onSelect(optionValue)}
              variant={variant}
              type="button"
              disabled={disabled}
              {...optionProps}
            >
              {label}
            </SegmentedButton>
          </SegmentedItem>
        ),
      )}
    </SegmentedWrapper>
  </Stack>
);

SegmentedControls.defaultProps = {
  values: [],
  onSelect: () => null,
};

export default SegmentedControls;
