import React from "react"

import Layout from "../components/layout"
import { SEO, Banner, Btn } from "../components/Complete"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Success" />
    <Banner title="Success!" subtitle="Your submission was received! We'll be in contact shortly.">
      <Btn to="/" text="return to home page"/>
    </Banner>
  </Layout>
)

export default NotFoundPage
