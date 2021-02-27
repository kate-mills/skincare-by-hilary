import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    defaultImg: file(relativePath: { eq: "default-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const FluidImage = (props) => {
  const {defaultImg:{childImageSharp:{fluid:defaultFluid}}} = useStaticQuery(query);
  return (
    <div className={props.className} style={{maxWidth: props.maxWidth, marginBottom: props.marginBottom,}}>
      <Img fluid={props.fluid || defaultFluid}/>
    </div>
  )
}
FluidImage.defaultProps = {
  maxWidth: `300px`,   // should equal query maxWidth
  marginBottom: `1.45rem`,
}

export default FluidImage
