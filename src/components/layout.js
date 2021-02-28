import React from "react"

import { Navbar, Sidebar, Footer, HomeHeader, PageHeader } from "./Complete"
import "./layout.css"


const Layout = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }

  return (
    <>
      <Navbar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {
         (!!props.large) ?
          ( <HomeHeader img={props.img} >
              <h1 style={{
                color: 'white',
                fontSize: '5rem',
                fontFamily: 'cursive',
              }}>{props.title}</h1>

          </HomeHeader>
          )
          :
          (
            <PageHeader img={props.img}>
              <h1 style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '5rem',
                fontFamily: 'cursive',
              }}>{props.title}</h1>
            </PageHeader>
          )
      }

      <div style={{margin:`1rem auto`,maxWidth:960,padding:`0 1.0875rem 1.45rem`,}}>
        <main>{props.children}</main>
      </div>
        <Footer/>
    </>
  )
}

export default Layout
