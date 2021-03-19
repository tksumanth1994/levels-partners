import React from "react";
import Head from "next/head";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

type Props = AppInitialProps & AppProps;

type AppPage<P = unknown> = {
  (props: P): JSX.Element | null;
  getInitialProps: ({ Component, ctx }: AppContext) => Promise<AppInitialProps>;
};

const MyApp: AppPage<Props> = ({ pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>Levels - Partners</title>
        <link rel="shortcut icon" href="../static/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default MyApp;
