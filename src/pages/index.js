import React from "react"

import Layout from "../components/layout"
import { SEO, Banner, FixedImage, Btn } from "../components/Complete"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner title="Home Page" subtitle="Welcome to your new Gatsby site.  Now go build something great!">
      <FixedImage />
      <Btn
        to="/contact"
        text="Get an appointment"
        backgroundColor="var(--grey)"
        color="var(--black)"
        hoverColor="var(--primaryColor)"
        hoverBackground="var(--primaryDark)"
      />
    </Banner>
  </Layout>
)

export default IndexPage
