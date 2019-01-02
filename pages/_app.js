import React from 'react';
import App, { Container } from 'next/app';

// import { Button, Navbar, Alignment } from "@blueprintjs/core";
import Navbar from '../components/Navbar';

import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Navbar account={true}></Navbar>
        <Component {...pageProps} />
      </Container>
    );
  }
}