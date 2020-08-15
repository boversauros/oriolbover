import PropTypes from 'prop-types'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="hey" />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
