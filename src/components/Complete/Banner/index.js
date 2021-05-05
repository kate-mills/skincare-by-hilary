import React from 'react'
import styled from 'styled-components'

const Banner = ({className,  title, subtitle, children }) => {
  return (
    <BannerWrapper className="dots">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </BannerWrapper>
  )
}


const BannerWrapper = styled.div`
  & {
    text-align: center;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2.5rem;

    & h1 {
      color: var(--black);
      font-weight: 300;
      font-size: 2.5rem;
      letter-spacing: var(--altSpacing);
      padding: 2rem 0 0;
      width: 99%;
      margin: 2rem auto 1rem;
      white-space: pre-wrap !important;
    }
    & h2{
      color: var(--primaryDark);
      font-weight: 400;
      margin-bottom: 1rem;
    }
    & p {
      font-weight: 300;
      width: 90%;
      color: var(--black);
      margin: 0 auto;
      padding-bottom: 2rem;
      white-space: pre-wrap !important;
    }
  }
`
export default Banner
