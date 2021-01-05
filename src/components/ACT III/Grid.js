import React from "react"
import Images from "./Images"
import Gallery from "react-grid-gallery"

const Grid = () => {
  
  return (
      <Gallery images={Images} enableImageSelection={false} rowHeight={300} />
  )
}

export default Grid
