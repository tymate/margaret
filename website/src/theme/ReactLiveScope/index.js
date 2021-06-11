/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  Avatar,
  Button,
  Text,
  Stack,
  Card,
  ButtonReset,
  injectMargaret,
  theme,
} from '@tymate/margaret';
import { ThemeProvider } from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Avatar,
  Button,
  Text,
  Stack,
  Card,
  ButtonReset,
  ThemeProvider,
  injectMargaret,
  theme,
  FaUserCircle,
};

export default ReactLiveScope;
