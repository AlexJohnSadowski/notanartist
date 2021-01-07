import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const ActTwo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".actTwo-title",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actTwo-title', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".actOne-subtitle",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actTwo-subtitle', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".card-one",
      { opacity: 0, y:0},
      {y:100,
        duration: 2,
        opacity: 1,
        scrollTrigger: {trigger: '.card-one', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".card-two",
      { opacity: 0, x:0},
      {
        x:100,
        duration: 2,
        opacity: 1,
        scrollTrigger: {trigger: '.card-two', markers: false, start: 'top 60%'}
      }
    )
    gsap.fromTo(
      ".actTwo-collection",
      { opacity: 0, x:0},
      {x:-100,
        duration: 2,
        opacity: 1,
        scrollTrigger: {trigger: '.actTwo-collection', markers: false, start: 'top 60%'}
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
            <p>Stop number 4 in the Land Of The Rising Sun</p>
          </div>
          <div className="items descr">
            <p>
              My first short story which I wrote when I was still studying.
              Certainly influenced by V.Woolf, Hemingway and other modernist
              writers.
            </p>
          </div>
          <div className="items go">
            <a
                href="https://gradobor-rpg.web.app/"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                READ
              </a>
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
            <p>To Become An Astronaut</p>
          </div>
          <div className="items descr">
            <p>
              Second attempt to deliver to the reader an unusual perspective of
              a young man, constantly dreaming about reaching the stars and
              becoming an astronaut.
            </p>
          </div>
          <div className="items go">
              <a
                href="https://gradobor-rpg.web.app/"
                target="_blank"
                rel="noreferrer"
                class="buttonOne"
              >
                READ
              </a>
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
