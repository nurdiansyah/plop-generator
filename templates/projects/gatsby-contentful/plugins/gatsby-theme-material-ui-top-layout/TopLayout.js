import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import omitDeep from 'omit-deep-lodash';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';

import Backdrop from '../../src/components/backdrop';
import Snackbar from '../../src/components/snackbar';
import i18next from '../../src/i18n';
import AuthProvider from '../../src/providers/AuthProvider';
import { TransitionProvider } from '../../src/providers/TransitionProvider';
import globalState from '../../src/state/global';
import theme from '../../src/themes/theme-light';

export const client = new ApolloClient({
  fetch,
  uri: process.env.GATSBY_GRAPHQL_ENDPOINT || 'http://localhost:4000',
  request: (operation) => {
    // strip ye ole __typename cache fields
    operation.variables = omitDeep(operation.variables, ['__typename']);
    const token = globalState.token.get();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          rel='preconnect'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionProvider>
          <I18nextProvider i18n={i18next}>
            <NoSsr>
              <Suspense fallback={<>Loading</>}>
                <ApolloProvider client={client}>
                  <AuthProvider>{children}</AuthProvider>
                </ApolloProvider>
              </Suspense>
            </NoSsr>
          </I18nextProvider>
        </TransitionProvider>
        <Snackbar />
        <Backdrop />
      </ThemeProvider>
    </>
  );
};
