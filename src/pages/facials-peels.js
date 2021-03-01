import React from "react"
import {graphql, Link} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, PageHeader } from "../components/Complete"

const FacialsPeels = (props) => {
  const {data:{allAirtable:{nodes}}} = props
  return(
  <Layout img={props.data.seoImg.childImageSharp.fluid.src}
    title="Facials & Peels"
    subtitle="Looking your best makes you feel better">
    <SEO title="Facials, Peels, & Accoutrements in Napa, CA | Skincare By Hilary" image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about skin rejuvenation procedures performed by Hilary Molloy. Hilary serves Napa, CA and surrounding areas."
    />
    <PageWrapper>
      <PageHeader img={props.data.seoImg.childImageSharp.fluid.src}>
        <span className="head-span">Facials, Peels, & Accoutrements</span>
      </PageHeader>
      <Btn className="btn" to="/contact" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)" />
      <p className="category">Facials & Peels</p>
        { nodes.map(({data:treatment}, index)=> {
          return(
            <div key={index}>
              <h3>
                <Link to="/contact" state={treatment}> {treatment.name} </Link>
                <span className="price"> {treatment.priceRange || `$${treatment.price}`} </span>
                <span className="time">{treatment.time}</span>
              </h3>
              <p className="desc">{treatment.description}</p>
            </div>
            )
          })
        }
      <Btn className="btn" to="/contact" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)"/>
    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {data: {category: {eq: "facials-peels"}}}, sort: {fields: data___name}) {
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
    seoImg:file(relativePath: { eq: "hil-head4.jpeg" }) {
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
  & {
    .head-span{
      font-size: 2.5rem;
      color: white;
      display: block;
      width: 100%;
      text-align: center;
      line-height: 2.5rem;
    }
    .btn{
      margin: 1rem auto 2rem;
      display: block;
      width: fit-content;
    }
    .category{
      background: #7dc27233;
      color: var(--black);
      font-weight: 500;
      width: fit-content;
      padding: 0 0.4rem;
    }
    h3{
      font-size: 1.1rem;
      line-height: 1rem;
      margin-bottom: 0.2rem;
      .price{
        font-size: 0.85rem;
        font-style: italic;
        font-weight: 600;
        line-height: 0.7rem;
        margin-left: 0.4rem;
      }
      .time{
        color: forestgreen;
        font-size: 0.85rem;
        margin-left: 0.4rem;
      }
    }
    .desc{
      background: #cccccc38;
      font-size: 0.8rem;
      margin: 0 auto 1.5rem;
      padding: 0 0.5rem;
      text-align: justify;
    }
  }
`
export default FacialsPeels
