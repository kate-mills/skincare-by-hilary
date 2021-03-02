import React from "react"
import {graphql, Link} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, PageHeader } from "../components/Complete"

const FacialsPeels = (props) => {
  const {data:{hr}} = props
  const {data:{extras}} = props
  return(
  <Layout img={props.data.seoImg.childImageSharp.fluid.src}
    title="Waxing & Lash Extensions in Napa, CA."
    subtitle="Looking your best makes you feel better">
    <SEO title="Waxing & Lash Extensions in Napa, CA | Skincare By Hilary" image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about hair removal & lash extension procedures performed by Hilary Molloy. Hilary serves Napa, CA and surrounding areas."
    />
    <PageWrapper>
      <PageHeader img={props.data.seoImg.childImageSharp.fluid.src}>
        <span className="head-span">Hair Removal & Lash Extensions</span>
      </PageHeader>
      <p className="click-to-schedule">Click a service below to get scheduled with Hilary.</p>

      <section className="menu-box">
        <div className="hr service-menu">
      <p className="category">Waxing, Sprucing, & Shaping</p>
          { hr.nodes.map(({data:treatment}, index)=> {
            return(
              <div key={index}>
                <Link to="/schedule" state={{
                  name: treatment.name,
                  time: treatment.time,
                  warning: "*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users."
                 }}>
                  <h3 className="menu-item">
                    {treatment.name}
                    <span className="price">{treatment.priceRange || ` $ ${treatment.price} `} </span>
                  </h3>
                  <p className="desc">{treatment.description}</p>
                </Link>
              </div>
              )
            })
          }
        <p className="warning">*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users.</p>

        </div>

        <div className="extras service-menu">
          <p className="category">Extras</p>

          { extras.nodes.map(({data:treatment}, index)=> {
            return(
              <div key={index}>
                <Link to="/schedule" state={treatment}>
                  <h3 className="menu-item">
                    {treatment.name}
                    <span className="price">{treatment.priceRange || ` $ ${treatment.price} `} </span>
                  </h3>
                  <p className="desc">{treatment.description}</p>
                </Link>
              </div>
              )
            })
          }
        </div>
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
      margin: 1.45rem auto;
      background: #7dc27233;
      color: var(--black);
      font-weight: 500;
      width: fit-content;
      padding: 0 0.4rem;
    }
    .click-to-schedule {
      margin-top: 1rem;
      text-align: center;
      font-size: 0.9rem;
      font-style: italic;
    }
    .menu-box{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .hr {
      max-width: 370px;
    }
    .extras {
      max-width: 350px;
    }
    .menu-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price{
        margin-left: 20px;
      }
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
    }
    .warning{
      font-size: .75rem;
      max-width: 300px;
      text-align: justify;
    }
  }
`
export default FacialsPeels
