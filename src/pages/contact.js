import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, ContactForm, Banner, PhoneNumber } from "../components/Complete"

import styled from 'styled-components'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Unique contact page description goes here."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <Banner title="Contact Us">
          <p className="form-instructions">Please call/text us at <PhoneNumber/>, or contact us via the form below and we'll get back to your as soon as we can.</p>
          <p className="form-instructions">Thank you!</p>
        </Banner>
        <div className="flexible">
          <ContactForm />
          <iframe title="mobile-map" id="mobile-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.046439909996!2d-122.28386748445573!3d38.30159178944664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085065b831d4fd1%3A0x3dafacedbd87c495!2sOxbow%20Public%20Market!5e0!3m2!1sen!2sus!4v1614363736557!5m2!1sen!2sus" width="350" height="350" style={{border:'0'}} allowFullScreen="" loading="lazy"/>
        </div>
      </PageWrapper>
    </Layout>
  )
}


const PageWrapper = styled.section`
  & {
    margin: 0 auto;
    .form-instructions{
      text-align: left;
      width: 75%;
    }
    .flexible{
      display: flex;
      flex-wrap:wrap;
      align-items: flex-start;
      justify-content: center;
    }
  }
`

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "pink-astronaut.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default Contact
