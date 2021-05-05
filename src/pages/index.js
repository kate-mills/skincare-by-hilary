import React from "react"
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn, Banner } from "../components/Complete"

const Home = (props) => {
  return(
  <Layout>
    <SEO title="Skincare in Napa by Hilary Molloy" />
    <PageWrapper>
      <Banner title="Skincare By Hilary Molloy">
        <p className="p-title">A clinical approach to working magic on your skin.</p>
      </Banner>
      <div className="flex-container">
        <div className="flex-item first">
        <FluidImage maxWidth="500px" fluid={props.data.file.childImageSharp.fluid}/>
          <h2>Learn More<span className="underline"/></h2>
          <ul>
          <li className="link"> <Link to="/facials-peels">Facials & Peels</Link> </li>
          <li className="link"> <Link to="/wax-and-lash">Waxing & Lashes</Link> </li>
          <li className="link"> <Link to="/makeup">Makeup</Link> </li>
          </ul>
        </div>
        <div className="flex-item">
          <h2>About Hilary<span className="underline"/></h2>
          <p>
            Hilary's experience as an Esthetician in the Napa Valley spans well over a decade.
          </p>
          <p>
            Having worked in both plastic surgery and dermatology, 
            she can offer you a thorough skin analysis, 
            as well as a broad range of treatments perfectly suited to your needs.
          </p>
          <p>
            Combined with her nurturing and intuitive touch, 
            it allows her to provide facial treatments that will bring new life to your skin!
          </p>
         <Btn className="container-btn" to="/schedule" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)" hoverColor="var(--primaryColor)" hoverBackground="var(--primaryDark)" />
        </div>
      </div>
    </PageWrapper>
  </Layout>
  )
}

const PageWrapper = styled.section`
  & {
    .p-title{
      text-transform: capitalize;
      font-size: 1.2rem;
      letter-spacing: var(--altSpacing);
    }
    .flex-container{
      align-items: center;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      width: 100%;
    }
    h2{
      text-align: center;
      margin: 0 auto 0.5rem;
      width: 100%;
      .underline{
        background: var(--primaryColor);
        display:block;
        height: 3px;
        margin: 0 auto;
        margin-top: 0.25rem;
        width: 25%;
      }
    }
    .fluid-img,
    .flex-item{
      margin: 1rem auto;
      box-sizing: border-box;
      width: 100%;
      max-width: 500px;
      p{
        padding-left: 1rem;
        letter-spacing: 1px;
      }
    }
    .first{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .first > .fluid-img{
      width: 100%;
    }
    .first  ul,
    .first  ul li{
      margin: unset;
      padding: unset;
    }
    .first ul li a{
      display: block;
      font-size: 0.9rem;
      margin: 0.5rem;
      padding: 0.1rem 1rem;
      white-space: none;
    }
    .first ul li a:hover{
      background: var(--primaryColor);
      border-radius: 0.4rem;
      color: var(--white);
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
    file(relativePath: { eq: "hilary molloy esthetician.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Home
