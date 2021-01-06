import React from "react"
import "../styles/styles.scss"
import Header from "../components/Navbar/Header"

import {Helmet} from "react-helmet";

import LP from "../components/Mainpage/LP"
import About from "../components/About/About"
import ActOne from "../components/ACT I/ActOne"
import ActOneSecondPage from "../components/ACT I/ActOneSecondPage"
import ActTwo from "../components/ACT II/ActTwo"
import ActThree from "../components/ACT III/ActThree"
import TheEnd from "../components/The End/TheEnd"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Not An Artist</title>
      <meta
        name="description"
        content="Definitely not an artistic website. I'm definitely not an artist, photographer, writer or whatsoever. Trust me."
      />
    </Helmet>
    <div className="lp-background">
      <Header />
      <LP />
    </div>
    <About />
    <ActOne />
    <ActOneSecondPage />
    <ActTwo />
    <ActThree />
    <TheEnd />
  </>
)

export default IndexPage
