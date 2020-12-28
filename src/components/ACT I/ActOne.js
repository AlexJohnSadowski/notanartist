import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ActOne = () => {
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
