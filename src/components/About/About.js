import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".about-title",
      { opacity: 0, x: 0 },
      {
        x: -100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-width",
          markers: false,
          start: "top 80%",
        },
      }
    )

    gsap.fromTo(
      ".about-width",
      { opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-width",
          markers: false,
          start: "top 80%",
        },
      }
    )

    gsap.fromTo(
      ".about-img",
      { opacity: 0, x: 0 },
      {
        x: 100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-img",
          markers: false,
          start: "top 60%",
        },
      }
    )

    gsap.fromTo(
      ".about-textOne",
      { opacity: 0, x: 0 },
      {
        x: 100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-textOne",
          markers: false,
          start: "top 80%",
        },
      }
    )
    gsap.fromTo(
      ".about-textTwo",
      { opacity: 0, x: 0 },
      {
        x: -100,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-textOne",
          markers: false,
          start: "top 80%",
        },
      }
    )

    
  })

  const data = useStaticQuery(graphql`
    query {
      three: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-test">
      <div className="about-bg">
        <div className="about-flexy">
          <div className="about-img">
            <Img fluid={data.three.childImageSharp.fluid} />
          </div>
          <div className="about-width"></div>
          <div className="about-title">Blind Eyed</div>
        </div>

        <div className="about-textOne">
          Hello, stranger. I am just a weirdo who likes to get carried away with
          my own passion and... Well, I guess I just try to express myself - for
          myself.
        </div>
        <div className="about-flex">
          <div className="about-textTwo">
            I write short stories, make collages, take photos and... who knows
            what else will come to my mad and lost mind. I hope you will like
            it.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
