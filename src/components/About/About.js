import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
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
