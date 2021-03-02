import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, PageHeader, ServiceItems } from "../components/Complete"

const HairRemoval = (props) => {
  const {data:{hr}} = props
  const {data:{extras}} = props
  return(
  <Layout img={props.data.seoImg.childImageSharp.fluid.src}
    subtitle="Looking your best makes you feel better | ">
    <SEO title="Waxing & Lash Extensions in Napa, CA" image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about hair removal & lash extension procedures performed by Hilary Molloy. Hilary serves Napa, CA and surrounding areas."
    />
    <PageWrapper>
      <PageHeader img={props.data.seoImg.childImageSharp.fluid.src}>
        <span className="head-span">Hair Removal & Lash Extensions</span>
      </PageHeader>
      <p className="click-to-schedule">Click a service below to get scheduled with Hilary.</p>
      <section className="menu-box">
        <ServiceItems category="Waxing & Sprucing" items={hr} warning="*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users." mini />
        <ServiceItems category="Extras" items={extras} mini/>
      </section>
      <Btn className="btn" to="/schedule" state={{name: "Waxing, Sprucing, & Shaping", time: "30 min", warning: "*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users."}} text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)"/>
    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    hr: allAirtable(filter: {data: {category: {eq: "hair-removal"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    extras: allAirtable(filter: {data: {category: {eq: "extras"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    seoImg:file(relativePath: { eq: "bcg/hilary-hair-removal.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PageWrapper = styled.section`
    .menu-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .head-span{
      color: white;
      display: block;
      font-size: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      width: 100%;
    }
    .btn{
      display: block;
      margin: 1rem auto 2rem;
      width: fit-content;
    }
    .click-to-schedule {
      font-size: 0.9rem;
      font-style: italic;
      margin-top: 1rem;
      text-align: center;
    }
  }
`
export default HairRemoval
