import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../../context/context'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Submenu = ({toggleSidebar}) => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show` : `submenu hide`}`}
     ref={container}
     onClick={toggleSidebar}
   >
      <section>
        <div className={`submenu-center columns`}>
          {links.map((link, index) => {
            const {path , page } = link
            return (
              <Link
                key={index}
                to={path}
                className={`sublink`}
                onClick={closeSubmenu}>
                {page}
              </Link>
            )
          })}
        </div>
      </section>
    </SubmenuWrapper>
  )
}

const SubmenuWrapper = styled.aside`
  & {
    background: var(--grey);
    padding: 0 1rem;
    position: absolute;
    transform: translateX(-50%) translateY(3%);
    z-index: 1;
  }
  &.submenu.hide { display: none; }
  &.submenu.show { display: unset; }
  & .sublink{
    display: block;
    border-bottom: 2px solid #ccccccaa;
    padding: 1rem 0;
    text-align: center;
  }
  &.submenu.show  .sublink:first-of-type {
    border-top: 2px solid #ccccccaa;
  }
  &.submenu.show  .sublink:last-of-type {
    margin-bottom: 0.2rem;
  }
  & .sublink:hover{
    border-bottom: 2px solid var(--black);
  }
`
export default Submenu
