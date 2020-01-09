import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/global.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      height: '100px'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img style={{ width: '50px', marginRight: '24px' }} src={Logo} />
          <h1>INVESTORS</h1>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
