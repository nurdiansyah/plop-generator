/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import 'react-toastify/dist/ReactToastify.css';

import * as firebase from 'firebase/app';
import React from 'react';

import TopLayout from './TopLayout';

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, '');
  });
};

export const onRouteUpdate = () => {
  if (!!window.IDBIndex) {
    firebase.analytics();
  }
};

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
