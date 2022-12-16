import Bleed from 'nextra-theme-docs/bleed'
import 'rapidoc'
import PropTypes from 'prop-types'

import pages from '../../public/OAS/pages.v3.yml'
// import corex51 from '../../public/versions/5.1/corex.yaml'
// import corex46 from '../../public/versions/4.6/corex.yaml'
import { scroller } from 'react-scroll'

// const versionMap = {
//   4.6: corex46,
//   '5.0': corex50,
//   5.1: corex51,
// }

const APIViewer = (props) => (
  <div className="no-top-margin">
    <div className="api-container">
      <Bleed full>
        <rapi-doc
          style={{ height: '100vh', width: '100%' }}
          spec-url="https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference/pages.v3.yml"
          render-style="view"
          font-size="large"
          class="bg-white"
          show-header="false"
          allow-search="false"
          allow-advanced-search="false"
          // onLoaded={() => {
          //   const hash = window.location.hash
          //   if (hash !== '') {
          //     scroller.scrollTo(hash.slice(1), { offset: -100 })
          //   }
          // }}
        />
      </Bleed>
    </div>
  </div>
)

// APIViewer.propTypes = {
//   version: PropTypes.oneOf(['4.6', '5.0']),
// }

export default APIViewer
