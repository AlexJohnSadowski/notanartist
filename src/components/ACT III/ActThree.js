import React, {useEffect} from "react"
import Grid from "./Grid"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ActThree = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".actThree-title",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actThree-title', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".actThree-subtitle",
      { opacity: 0},
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {trigger: '.actThree-subtitle', markers: false, start: 'top 60%'}
      }
    )

    gsap.fromTo(
      ".gallery-container",
      { opacity: 0},
      {
        duration: 2,
        opacity: 1,
        scrollTrigger: {trigger: '.gallery-container', markers: false, start: 'top 60%'}
      }
    )
  })
  return (
    <div className="black-bg-actthree">
      <div className="actThree-title">ACT III</div>
      <div className="actThree-subtitle">I take photos, because I suck at painting </div>
      <div className="gallery-container">
        <Grid />
      </div>
    </div>
  )
}

export default ActThree
