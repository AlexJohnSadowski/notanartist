import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
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
      <div className="lp-hero">
        <Img fluid={data.two.childImageSharp.fluid} />
      </div>
      <div className="lp-bottomtitle">art and alcoholism</div>
    </>
  )
}

export default Banner
