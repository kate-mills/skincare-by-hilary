import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, className}) => {
  return <Link to={to} className={`${className}`}>{text}</Link>
}

export default styled(Btn)`
  background-color: ${props =>  props.backgroundColor? props.backgroundColor: `var(--primaryColor)`};
  border-width: 3px;
  border-color: ${props =>  props.backgroundColor ? props.backgroundColor : `var(--primaryColor)`};
  border-radius: var(--radius);
  border-style: solid;
  color:var(--black);
  color: ${props =>  props.color ? props.color: `var(--black)`};
  cursor: pointer;
  display: ${props => props.display ?  props.display: `inline-block` };
  font-family: var(--mainFF);
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
  max-width: 75vw;
  padding: .4rem 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  transition: var(--transition);

  &:hover{
    border-color: ${props =>  props.hoverBackground ? props.hoverBackground: `var(--black)`};
    color: ${props =>  props.hoverColor ? props.hoverColor: `var(--black)`} !important;
    background-color: transparent;
    cursor: pointer;
  }
  @media(min-width: 768px){
    font-family: var(--pFF);
    font-style: normal;
    font-size: 1.2rem;
    margin: 1rem;
    padding: .8rem 6rem;
  }
`
