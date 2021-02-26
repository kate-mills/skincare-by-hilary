import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactWrapper>
      <div>
        <form
          className="form"
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success/"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input
              ref={input => input && input.focus()}
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
              aria-label="Email"
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email *"
              required
            />
          </div>
          <div>
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
            <textarea
              aria-label="Message"
              name="message"
              id="message"
              rows="5"
              className="form-control"
              placeholder="Message *"
            />
          </div>
          <div>
            <button type="submit" className="submit">Send</button>
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
    input,
    textarea{
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
