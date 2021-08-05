import React from 'react';
import styled, { css } from 'styled-components';
import { trim } from 'lodash';

const AvatarWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.avatarSizes?.default};
  height: ${({ theme }) => theme.avatarSizes?.default};
  font-size: calc(${({ theme }) => theme.avatarSizes?.default} / 2);
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 100%;
  background-size: cover;
  background-position: center center;
  text-transform: uppercase;

  ${({ size, theme }) =>
    Boolean(size) &&
    Boolean(theme?.avatarSizes?.[size]) &&
    css`
      width: ${({ theme }) => theme?.avatarSizes?.[size]};
      height: ${({ theme }) => theme?.avatarSizes?.[size]};
      font-size: calc(${({ theme }) => theme?.avatarSizes?.[size]} / 2);
    `};

  ${({ variant }) =>
    variant === 'rounded' &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius?.default};
    `}

  ${({ variant }) =>
    variant === 'square' &&
    css`
      border-radius: 0;
    `}

  ${({ background }) =>
    Boolean(background) &&
    css`
      background: ${({ theme }) =>
        theme.gradients?.[background] ||
        theme.colors?.[background] ||
        theme?.[background]};
    `}

  ${({ borderRadius }) =>
    Boolean(borderRadius) &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius?.[borderRadius]};
    `}
`;

const getAvatarContent = ({ firstName, lastName, icon, imageUrl, name }) => {
  if (Boolean(imageUrl)) {
    return null;
  }

  if (Boolean(icon)) {
    return icon;
  }

  if (Boolean(firstName) || Boolean(lastName)) {
    return (
      <span>
        {trim(firstName || '').charAt(0)}
        {trim(lastName || '').charAt(0)}
      </span>
    );
  }

  return (
    <span>
      {(name || '')
        .split(' ')
        .map(chunk => chunk.charAt(0))
        .slice(0, 2)
        .join('')}
    </span>
  );
};

const Avatar = ({ size, imageUrl, ...props }) => (
  <AvatarWrapper
    size={size}
    style={{
      backgroundImage: Boolean(imageUrl) ? `url(${imageUrl})` : undefined,
    }}
    {...props}
  >
    {getAvatarContent({ imageUrl, ...props })}
  </AvatarWrapper>
);

export default Avatar;
