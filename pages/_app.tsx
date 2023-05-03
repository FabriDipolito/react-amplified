import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import { Button } from "@aws-amplify/ui-react";
import type { AppProps } from "next/app";

import { AuthenticatorContainer } from "../src/Components/Authentication/styles";
import Header from "../src/Components/Header/Header";

Amplify.configure(awsExports);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <div style={{ margin: "-8px" }}>
      <AuthenticatorContainer hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <Header signOut={signOut} />
            <Button onClick={signOut}>Sign out</Button>
            <Component {...pageProps} />
          </>
        )}
      </AuthenticatorContainer>
    </div>
  );
};

export default MyApp;
