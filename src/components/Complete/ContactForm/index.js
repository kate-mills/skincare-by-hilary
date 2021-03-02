import React from 'react'
import styled from 'styled-components'

const Contact = ({treatment}) => {
  const txName = treatment?.name || ""
  const txTime = treatment?.time || ""

  const refTreatment = React.useRef(null)
  const refTime = React.useRef(null)
  const refName = React.useRef(null)
  const refMessage = React.useRef(null)

  React.useEffect(()=>{
    if (txName && txTime){
      refTime.current.value = txTime
      refTreatment.current.value =  txName
      refMessage.current.value = 'Book me for a ' + txTime + " " + txName + '.'
    } else{
      refMessage.current.value = ''
    }
    refName.current.focus()
  })
  return (
    <ContactWrapper>
      <div>
        <form
          action="/success"
          className="form"
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          {
            treatment.name &&  (
              <>
                <div>
                  <input
                    ref={refTreatment}
                    type="text"
                    aria-label="Treatment"
                    name="treatment"
                    id="treatment"
                    className="form-control"
                    placeholder="What would you like to schedule?"
                  />
                </div>
                <div>
                  <input
                    ref={refTime}
                    type="text"
                    aria-label="Time"
                    name="time"
                    id="time"
                    className="form-control"
                    placeholder="Time"
                  />
                </div>
              </>
            )
          }
          <div>
            <input
              ref={refName}
              aria-label="Name"
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name *"
              required
            />
          </div>
          <div>
              <input
                aria-label="Phone"
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone *"
                required
              />
          </div>
          <div>
            <textarea
              ref={refMessage}
              aria-label="Message"
              name="message"
              id="message"
              rows="5"
              className="form-control"
              placeholder="Scheduling Message"
            />
          </div>
          <div className="radio">
            <div>
              <label htmlFor="textme"> Text me back!</label><input type="radio" name="textorcall" id="textme" value="textme" defaultChecked />
            </div>
            <div>
              <label htmlFor="callme">Call me back!</label><input type="radio" name="textorcall" id="callme" value="callme"/>
            </div>
          </div>
          <div>
            <input type="submit" className="submit" value="Send"/>
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}


const ContactWrapper = styled.section`
  & {
    width: 85%;
    margin: 0 auto;

    .form-control,
    .submit {
      border: 1px solid var(--black);
      border-radius: 0.25rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.375rem 0.75rem;
      width: 100%;
    }
    .submit {
      background-color: var(--black);
      outline: none;
      border-color: var(--black);
      text-transform: uppercase;
      color: var(--white);
      transition: var(--mainTransition);
      cursor: pointer;
      padding: 0.65rem 0.75rem;
      width: 100% !important;
    }
    .radio{
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .radio > div{
      margin-bottom: 1rem;
    }
    input,
    textarea{
      display: inline;
      width: 100% !important;
    }
    input:focus,
    textarea:focus{
      outline-color: var(--primaryColor);
    }
    .submit:hover {
      background: transparent;
      color: var(--black);
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--black);
      opacity: 0.8; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: var(--black);
      opacity: 0.8;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: var(--black);
      opacity: 0.8;
    }
  }

  @media (min-width: 375px){
    & {
      width: 75%;
    }
  }
  @media (min-width: 768px){
    & {
      width: 50%;
    }
  }
`
export default Contact
