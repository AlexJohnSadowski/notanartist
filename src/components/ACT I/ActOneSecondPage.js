import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const ActOneSecondPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".bar-title",
      { opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".bar-title",
          markers: false,
          start: "top 60%",
        },
      }
    )

    gsap.fromTo(
      ".actOne-photoFive",
      { opacity: 0, x:0 },
      {
        x:100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".actOne-photoFive",
          markers: false,
          start: "top 60%",
        },
      }
    )

    gsap.fromTo(
      ".actOne-photoSix",
      { opacity: 0, x: 0 },
      {
        x:-100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".actOne-photoFive",
          markers: false,
          start: "top 60%",
        },
      }
    )
  })

  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "aush.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "gott.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="black-bg">
      <div className="flex-container-one">
        <div className="bar-title"></div>
      </div>
      <div className="flex-container-two">
        <div className="actOne-photoFive">
          <Img fluid={data.one.childImageSharp.fluid} />
        </div>
        <div className="actOne-photoSix">
          <Img fluid={data.three.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default ActOneSecondPage
