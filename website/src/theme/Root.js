import React from 'react';
import { MargaretProvider } from '@tymate/margaret';

const Root = ({ children }) => <MargaretProvider>{children}</MargaretProvider>;

export default Root;
