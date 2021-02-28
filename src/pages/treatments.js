import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, Banner, FluidImage, Title, Btn } from "../components/Complete"

import styled from 'styled-components'

const Treatments = ({ data }) => {
  return (
    <Layout title="Treatments">
      <SEO
        title="Treatments"
        description="Schedule Now! Skincare by Hilary's services include makeup, eyelash extensions, waxing, tinting, & facial spa treatments in Napa, CA."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <SectionWrapper>
      <Banner title="Spa Treatments" subtitle="Makeup Atrtistry | Eyelash Extensions | Waxing | Tinting | Facials">
        <div className="centered-image"> <FluidImage maxWidth="600px" fluid={data.seoImg.childImageSharp.fluid}/> </div>
      </Banner>
        <Title title="Waxing" subtitle="Services"/>
        <div className="center"><Btn to="/" text="Back to Home Page"/></div>
      </SectionWrapper>
    </Layout>
  )
}

const SectionWrapper = styled.section`
  & {
    .centered-image{
      max-width: 600px; /* needed to center img */
      margin: 0 auto;
    }
  }
`

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "treatments.jpg" }) {
      childImageSharp {
        fluid(maxWidth:600) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Treatments
