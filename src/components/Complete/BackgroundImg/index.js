import React from "react"
import styled from "styled-components"
import defaultImg from "../../../images/hil-head3.jpeg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 68px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 40vh;
`

HomeHeader.defaultProps = {
  img: defaultImg,
}

PageHeader.defaultProps = {
  img: defaultImg,
}

export { HomeHeader, PageHeader }
