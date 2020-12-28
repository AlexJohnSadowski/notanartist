import { Link } from "gatsby"
import React from "react"

import VisibleNav from '../Navbar/VisibleNav'
import Burger from '../Navbar/Burger'


const Header = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Monsieur Voland
      </Link>
        <VisibleNav />
        <Burger />
    </nav>
  )
}


export default Header
