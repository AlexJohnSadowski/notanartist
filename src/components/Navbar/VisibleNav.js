import React, { useContext } from "react"
import { Link } from "gatsby"

const VisibleNav = () => {
  return (
    <div className="side-menu">
      <Link to="/products">About</Link>

      <Link to="/products">Collection</Link>

      <Link to="/products">Contact</Link>
    </div>
  )
}

export default VisibleNav
