import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, Banner, FluidImage, Title, Btn } from "../components/Complete"

import styled from 'styled-components'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Unique about page description goes here."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <SectionWrapper>
      <Banner title="About Us" subtitle="Welcome to the About us page.">
        <div className="centered-fluid-image">
          <FluidImage maxWidth="220px" fluid={data.seoImg.childImageSharp.fluid}/>
        </div>
        <Btn to="/" text="Return to the homepage" />
      </Banner>
        <Title title="Our" subtitle="Location"/>
    </SectionWrapper>
    </Layout>
  )
}

const SectionWrapper = styled.section`
  & .centered-fluid-image{
    max-width: 220px;
    width: 220px; /* needed to center img.*/
    margin: 0 auto;
  }
`

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth:220) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default About
