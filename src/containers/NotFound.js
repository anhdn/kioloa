import React, { Component } from 'react'
import Helmet from 'react-helmet'

class NotFound extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>404 Not Found</title>
          <meta name='description' content='The Url is not available.' />
        </Helmet>
        Store not found
      </div>
    )
  }
}

export default NotFound
