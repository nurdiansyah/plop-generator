import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

import React from 'react';

import TopLayout from './TopLayout';

export function onRenderBody ({ setBodyAttributes }) {
  setBodyAttributes({
    className: 'no-js',
  });
}

export const wrapPageElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
