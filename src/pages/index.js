import React from "react"
import "../styles/styles.scss"
import Header from "../components/Navbar/Header"

import LP from "../components/Mainpage/LP"
import About from "../components/About/About"
import ActOne from "../components/ACT I/ActOne"
import ActOneSecondPage from "../components/ACT I/ActOneSecondPage"
import ActTwo from "../components/ACT II/ActTwo"
import ActThree from "../components/ACT III/ActThree"
import TheEnd from "../components/The End/TheEnd"





const IndexPage = () => (
  <>
    <div className="lp-background">
      <Header />
      <LP />
    </div>
    <About/>
    <ActOne/>
    <ActOneSecondPage/>
    <ActTwo />
    <ActThree />
    <TheEnd/>
  </>
)

export default IndexPage
