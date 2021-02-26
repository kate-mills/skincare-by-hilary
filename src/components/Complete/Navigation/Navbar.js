import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {Link} from "gatsby"
import {navigationLinks} from '../../../constants/links'
import {PhoneNumber} from '../ContactInfo'


const Nav = ({toggleSidebar}) => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" width="175px" height="54px" />
          </Link>
          <button type="button" aria-label="Open sidebar" className="nav-opener" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {navigationLinks.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.page}</Link>
              </li>
            )
          })}
          <li>
            <PhoneNumber className="phone"/>
          </li>
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: unset;
      margin-bottom: unset;
    }
  }
  .nav-opener {
    background: transparent;
    border: transparent;
    color: var(--black);
    cursor: pointer;
    outline: none;
    svg { font-size: 2rem; }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-opener {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      margin-bottom: unset;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--black);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--black);
        }
      }
      li:last-of-type a:hover {
        border-bottom: none;
      }
    }
  }
`

export default Nav
