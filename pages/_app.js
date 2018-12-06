import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link';

import { Button, Navbar, Alignment } from "@blueprintjs/core";

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
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Choreolife</Navbar.Heading>
                <Navbar.Divider />
                <Link href="/"><Button className="bp3-minimal" icon="home" text="Home" /></Link>
                <Link href="/about"><Button className="bp3-minimal" icon="info-sign" text="About" /></Link>
            </Navbar.Group>
        </Navbar>  
        <Component {...pageProps} />
      </Container>
    )
  }
}