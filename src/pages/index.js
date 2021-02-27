import React from "react"

import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn } from "../components/Complete"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <h2>Looking your best makes you feel better</h2>
    <div className="flex-container">
      <FluidImage maxWidth="500px"/>
      <div className="flex-item">
        <p>Hilary offers a clinical approach to working magic on your skin.</p>
        <p>Her experience as an esthetician spans well over a decade.</p>
        <p>Having worked in both plastic surgery and dermatology she is able to offer you a thorough skin analysis, as well as a broad range of treatment options, perfectly suited to your needs. </p>
        <p>This, combined with her nurturing and intuitive touch, allows her to provide facial treatments that will bring new life to your skin!</p>

      <Btn className="container-btn" to="/contact" text="Schedule now" backgroundColor="var(--grey)" color="var(--black)" hoverColor="var(--primaryColor)" hoverBackground="var(--primaryDark)" />
      </div>
    </div>
    </PageWrapper>
  </Layout>
)

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
    .fluid-img,
    .flex-item{
      margin: 0 auto;
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
export default IndexPage
