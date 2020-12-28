import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ActOneSecondPage = () => {
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
