import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports.js";
import Head from "next/head";
import { Button } from "@aws-amplify/ui-react";
import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthenticatorContainer } from "../src/Components/Authentication/styles";
import Header from "../src/Components/Header/Header";
import { HeaderContainer } from "../src/Components/Header/styles";
import theme from "../theme";

Amplify.configure(awsExports);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-ExtraBold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Light.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ margin: "-8px" }}>
          <AuthenticatorContainer hideSignUp={true}>
            {({ signOut, user }) => (
              <>
                <HeaderContainer>
                  <Header />
                  <Button
                    onClick={signOut}
                    style={{
                      width: "120px",
                      height: "40px",
                      margin: "20px 30px 0 0",
                      borderRadius: "16px",
                      border: "1px solid blue",
                    }}
                  >
                    <p style={{ color: "white", margin: '0', height: 'fit-content', width: 'fit-content' }}>Sign Out</p>
                  </Button>
                </HeaderContainer>
                <Component {...pageProps} />
              </>
            )}
          </AuthenticatorContainer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
