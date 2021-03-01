import React from "react"
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn } from "../components/Complete"

const Treatments = (props) => {
  return(
  <Layout>
    <SEO title="Treatments" />
    <PageWrapper>
      <div className="flex-container">
        <div className="flex-item">
          <h2>A Clinical Approach<span className="underline"/></h2>
          <p>Hilary offers a clinical approach to working magic on your skin.</p>
          <p>Her experience as an esthetician spans well over a decade.</p>
          <p>Having worked in both plastic surgery and dermatology she is able to offer you a thorough skin analysis, as well as a broad range of treatment options, perfectly suited to your needs. </p>
          <p>This, combined with her nurturing and intuitive touch, allows her to provide facial treatments that will bring new life to your skin!</p>
         <Btn className="container-btn" to="/contact" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)" hoverColor="var(--primaryColor)" hoverBackground="var(--primaryDark)" />
        </div>
        <FluidImage maxWidth="500px" fluid={props.data.file.childImageSharp.fluid}/>
      </div>
    </PageWrapper>
  </Layout>
  )
}

const PageWrapper = styled.section`
  & {
    .flex-container{
      margin-bottom: 10px;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;
    }
    h2{
      max-width: fit-content;
      .underline{
        display:block;
        height: 3px;
        background: var(--primaryColor);
        margin: 0 auto;
        margin-top: 0.25rem;
        width: 50%;
      }
    }
    .fluid-img,
    .flex-item{
      margin: 1rem auto;
      box-sizing: border-box;
      width: 100%;
      max-width: 500px;
      .container-btn{
        margin: 0 auto;
      }
    }
    @media(min-width: 768px ){
      .flex-container{
        flex-direction: row;
      }
      .fluid-img,
      .flex-item{
        box-sizing: border-box;
        width: 45%;
      }
    }
  }
`
export const query = graphql`
  {
    allAirtable {
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
    file(relativePath: { eq: "flower-pot.jpeg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Treatments 

