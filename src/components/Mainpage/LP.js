import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".lp-hero",
        { opacity: 0 },
        {
          duration: 3,
          opacity: 1,
          delay: 3,
        }
      )

      gsap.fromTo(
        ".lp-whitey",
        { y: "0vh" },
        {
          opacity:0,
          duration: 3,
          delay: 1,
          y: "50vh",
        }
      )

      gsap.fromTo(
        ".lp-blackey",
        { x: "-50%" },
        {
          duration: 4,
          delay: 1,
          x: "-100%",
        }
      )
      gsap.fromTo(
        ".lp-bottomtitle",
        { opacity: 0},
        {
          duration: 4,
          opacity:1,
          delay: 2,
        }
      )
  })

  const data = useStaticQuery(graphql`
    query {
      two: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="lp-whitey"></div>
      <div className="lp-blackey"></div>

      <div className="lp-hero">
        <Img fluid={data.two.childImageSharp.fluid} />
      </div>
      <h1>
        <div className="lp-bottomtitle">art and alcoholism</div>
      </h1>
    </>
  )
}

export default Banner
