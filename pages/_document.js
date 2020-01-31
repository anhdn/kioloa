import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const documentProps = await Document.getInitialProps(ctx)
      return {
        ...documentProps,
        helmet: Helmet.renderStatic(),
        styles: (
          <>
            {documentProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    const title = ''
    const description = ''
    return (
      <Helmet>
        <title>Eventalk - Free Bootstrap 4 Template by Colorlib</title>
        <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"/>
          <link rel="stylesheet" href="./static/eventalk/css/open-iconic-bootstrap.min.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/animate.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/owl.carousel.min.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/owl.theme.default.min.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/magnific-popup.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/aos.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/ionicons.min.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/bootstrap-datepicker.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/jquery.timepicker.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/flaticon.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/icomoon.css"/>
          <link rel="stylesheet" href="./static/eventalk/css/style.css"/>
      </Helmet>
    )
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
          <style type='text/css'>{`button:focus { outline: none !important }`}</style>
        </Head>
        {/* <body {...this.helmetBodyAttrComponents}></body> */}
        <Main />
        <NextScript />

        <script src="./static/eventalk/js/jquery.min.js"></script>
        <script src="./static/eventalk/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="./static/eventalk/js/popper.min.js"></script>
        <script src="./static/eventalk/js/bootstrap.min.js"></script>
        <script src="./static/eventalk/js/jquery.easing.1.3.js"></script>
        <script src="./static/eventalk/js/jquery.waypoints.min.js"></script>
        <script src="./static/eventalk/js/jquery.stellar.min.js"></script>
        <script src="./static/eventalk/js/owl.carousel.min.js"></script>
        <script src="./static/eventalk/js/jquery.magnific-popup.min.js"></script>
        <script src="./static/eventalk/js/aos.js"></script>
        <script src="./static/eventalk/js/jquery.animateNumber.min.js"></script>
        <script src="./static/eventalk/js/bootstrap-datepicker.js"></script>
        <script src="./static/eventalk/js/jquery.timepicker.min.js"></script>
        <script src="./static/eventalk/js/scrollax.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="./static/eventalk/js/google-map.js"></script>
        <script src="./static/eventalk/js/main.js"></script>
      </html>
    )
  }
}
