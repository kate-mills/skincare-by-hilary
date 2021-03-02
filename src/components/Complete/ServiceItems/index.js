import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const ServiceItems = (props) => {
  return (
    <ServiceItemsWrapper>
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
                    {treatment.name}
                    <span className="price">{treatment.priceRange || ` $ ${treatment.price} `} </span>
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
  .category{
    margin: 1.45rem auto;
    background: #7dc27233;
    color: var(--black);
    font-weight: 500;
    width: fit-content;
    padding: 0 0.4rem;
  }
  .menu-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price{
      margin-left: 20px;
    }
  }
  .warning{
    font-size: .75rem;
    max-width: 300px;
    text-align: justify;
  }
`

export default ServiceItems
