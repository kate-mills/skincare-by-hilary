import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const ServiceItems = (props) => {
  return (
    <ServiceItemsWrapper className={props.mini ? `mini`: `` }>
      <p className="category">{props.category}</p>
        {props.items.nodes.map(({data:treatment}, index)=> {
          return(
            <div key={index}>
              <Link to="/schedule" state={{
                name: treatment.name,
                time: treatment.time,
                warning: "*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users."
                }}>
                  <h3 className="menu-item">
                    <div className="name">{treatment.name} </div>
                    <div className="price">
                      {!props.mini && <span className="time">{treatment.time}</span>}
                      {treatment.priceRange || ` $ ${treatment.price} `}
                    </div>
                  </h3>
                  <p className="desc">{treatment.description}</p>
                </Link>
              </div>
            )
          })
        }
      {props.warning && <p className="warning">{props.warning}</p>}
      </ServiceItemsWrapper>
    )
}

const ServiceItemsWrapper = styled.div`
  & {
    box-sizing; border-box;
    margin: 0 auto;
  }
  &.mini{
    box-sizing; border-box;
    margin: 0 auto;
    max-width: 330px;
  }
  .category{
    background: #7dc27233;
    color: var(--black);
    font-weight: 500;
    margin: 1.45rem auto;
    padding: 0 0.4rem;
    text-transform: uppercase;
    width: fit-content;
  }
  h3{
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 0.2rem;
    .name{}
    .time{
      color: forestgreen;
      font-size: 0.75rem;
      font-style: italic;
      font-weight:300;
      min-width: fit-content;
      padding-right: 0.3rem;
      text-align: center;
    }
    .price{
      line-height: 0.7rem;
      margin-left: 0.2rem;
      font-size: 0.75rem;
      text-align: right;
    }
  }
  .desc{
    background: #cccccc38;
    font-size: 0.8rem;
    margin: 0 auto 1.5rem;
    padding: 0 0.5rem;
    text-align: justify;
  }
  & .menu-item{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  &.mini .menu-item{
    box-sizing: border-box;
    display: grid
    grid-template-columns: 1.5fr, 0.5fr;
    max-width: 250px;
  }
  .warning{
    font-size: .75rem;
    max-width: 300px;
    text-align: justify;
  }
`

export default ServiceItems
