import React from 'react';
import Button from './Button';
import { useMargaret } from './MargaretProvider';

const ColorModeSwitcherButton = props => {
  const { colorMode, switchColorMode } = useMargaret();

  return (
    <Button onClick={switchColorMode} {...props}>
      {colorMode === 'light' ? 'light' : 'dark'}
    </Button>
  );
};

export default ColorModeSwitcherButton;
