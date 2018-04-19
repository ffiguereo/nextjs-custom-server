'use strict'

import React, { Component, Fragment } from 'react'
import Head from 'next/head'

class Services extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }
  render () {
    return (
      <Fragment>
        <Head>
          <title>Services</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <h1>Page Services #{this.props.postId}</h1>
      </Fragment>
    )
  }
}

export default Services
