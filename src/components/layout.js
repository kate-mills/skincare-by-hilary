import React from "react"

import { Navbar, Sidebar, Footer } from "./Complete"
import "./layout.css"


const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }

  return (
    <>
      <Navbar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{margin:`1rem auto`,maxWidth:960,padding:`0 1.0875rem 1.45rem`,}}>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
