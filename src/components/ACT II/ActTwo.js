import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ActTwo = () => {
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
    <div className="actTwo-whiteBg">
      <div className="actTwo-title">
        ACT II
        <p>I Kant even right properly </p>
        <p className="actTwo-subtitle">but hover if you want to read </p>
      </div>
      <div
        className="container card card-one"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="overlay">
          <div className="items" />
          <div className="items head">
            <p>Gradobor RPG</p>
          </div>
          <div className="items descr">
            <p>
              My first short story which I wrote when I was still studying.
              Certainly influenced by V.Woolf, Hemingway and other modernist
              writers.
            </p>
          </div>
          <div className="items go">
            <div className="multi-button">
              <a
                href="https://gradobor-rpg.web.app/"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                Website
              </a>
              <a
                href="https://github.com/AlexJohnSadowski/Gradobor-rpg"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container card card-two"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="overlay">
          <div className="items" />
          <div className="items head">
            <p>Gradobor RPG</p>
          </div>
          <div className="items descr">
            <p>
              Second attempt to deliver to the reader an unusual perspective of
              a young man, constantly dreaming about reaching the stars and
              becoming an astronaut.
            </p>
          </div>
          <div className="items go">
            <div className="multi-button">
              <a
                href="https://gradobor-rpg.web.app/"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                Website
              </a>
              <a
                href="https://github.com/AlexJohnSadowski/Gradobor-rpg"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="actTwo-collection">
        <p>
          The rest of my short stories will be published soon in the collection
          “Smoking Kills”.{" "}
        </p>
        <p className="actTwo-colection__text">
          please buy it, because I’m poor
        </p>
      </div>
    </div>
  )
}

export default ActTwo
