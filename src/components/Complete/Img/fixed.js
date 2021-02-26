import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    defaultImg: file(relativePath: { eq: "pink-astronaut.jpg" }) {
      childImageSharp {
        fixed(width: 300, height:300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const FixedImage = (props) => {
  const {defaultImg:{childImageSharp:{fixed:defaultFixed}}} = useStaticQuery(query);
  return (
    <div className="fixed-image-container" style={{ marginBottom: props.marginBottom, }}>
      <Img fixed={props.fixed || defaultFixed}/>
    </div>
  )
}
FixedImage.defaultProps = {
  marginBottom: `1.45rem`,
}

export default FixedImage
