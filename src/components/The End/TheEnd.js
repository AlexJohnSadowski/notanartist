import React, { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const TheEnd = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".title-theend",
      { opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".flex-theend",
          markers: true,
          start: "bottom",
        },
      }
    )

    gsap.fromTo(
      ".subtitle-theend",
      { opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".flex-theend",
          markers: true,
          start: "bottom",
        },
      }
    )
  })
  return (
    <div className="black-bg-theend">
      <div className="flex-theend">
        <div className="title-theend">The End</div>
        <div className="subtitle-theend">@monsieur.voland </div>
        <div className="subtitle-theend">notanartist@alexsadowski.pl</div>
      </div>
    </div>
  )
}

export default TheEnd
