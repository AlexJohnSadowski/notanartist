import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ActOne = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".actOne-title",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-title', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".actOne-subtitle",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-title', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".actOne-photoOne",
      { opacity: 0, x:0},
      {x:100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-photoOne', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".actOne-photoTwo",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-photoTwo', markers: false, start: 'top 60%'}
      }
    )
    gsap.fromTo(
      ".actOne-photoThree",
      { opacity: 0, x:0},
      {x:-100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-photoThree', markers: false, start: 'top 60%'}
      }
    )
    gsap.fromTo(
      ".actOne-smalltxt",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actOne-smalltxt', markers: false, start: 'top 90%'}
      }
    )
  })

  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "KOLAZ1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "kolaz2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "trump.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="actOne-white-bg">
        <div className="actOne-title">ACT I</div>
        <div className="actOne-subtitle">Collages, dinosaurs and LSD</div>
        <div className="actOne-photoOne">
          <Img fluid={data.one.childImageSharp.fluid} />
        </div>
        <div className="actOne-photoTwo">
          <Img fluid={data.two.childImageSharp.fluid} />
        </div>
        <div className="actOne-photoThree">
          <Img fluid={data.three.childImageSharp.fluid} />
        </div>
      </div>
      <div className="actOne-smalltxt">
        No dinosaurs were harmed during the creation of these collages.
      </div>
    </>
  )
}

export default ActOne
