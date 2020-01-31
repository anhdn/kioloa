import withRedux from 'next-redux-wrapper'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import App from 'next/app'
import Layout from 'components/Layout'
import createStore from 'store/createStore'
import 'bootstrap.scss'
import 'globalStyle.scss'
import theme from 'theme'
import TagManager from 'react-gtm-module'
import MobileDetect from 'mobile-detect'

const tagManagerArgs = {
  gtmId: 'GTM-KVH7L9'
}

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const { req } = ctx
    const userAgent = process.browser
      ? window.navigator.userAgent
      : req.headers['user-agent']
    const md = new MobileDetect(userAgent)
    const isDesktop = md.mobile() === null
    return {
      isDesktop,
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }
  render () {
    const {
      Component,
      pageProps,
      store,
      router,
      isDesktop
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout isDesktop={isDesktop}>
            <Component
              router={router}
              {...pageProps}
              isDesktop={isDesktop}
            />
          </Layout>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withRedux(createStore)(withRouter(MyApp))
