import React from 'react'
import styled from 'styled-components'
import Button from './button'
import Container from './container'
import whitepaperIcon from '../images/ico_whitepaper.svg'

const Whitepaper = styled.div`
  background-color: #278cd6;
  color: #fff;
  padding: 4rem 0;

  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    font-weight: 100;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: thin solid #fff;
    padding: 0.2rem 0;
    width: 100%;
    color: white;
  }

  input:focus {
    outline: none;
    border-color: hsla(0, 100%, 100%, 0.5);
  }

  input::placeholder {
    color: #fff;
    opacity: 0.34;
    font-size: 0.8rem;
  }

  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  aside,
  form {
    flex: 1;
    margin: 2rem;
    flex-basis: 300px;
  }

  aside {
    display: flex;
    align-items: flex-start;
  }

  aside p {
    font-weight: 100;
    font-size: 0.9rem;
  }

  aside span {
    font-size: 0.7rem;
    opacity: 0.65;
  }
`

const WhitepaperContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`

const WhitepaperButton = styled(Button)`
  border: thin solid #fff;
`

export default () => (
  <Whitepaper id="whitepaper">
    <WhitepaperContainer>
      <aside>
        <img src={whitepaperIcon} alt="Whitepaper Icon" width="92" />
        <div>
          <h2>Whitepaper</h2>
          <p>
            Our whitepaper is currently available by request only. Please fill out the form and we’ll send you the
            latest version.
          </p>
          <span>NOTE: All information is kept confidential and never shared.</span>
        </div>
      </aside>
      <form>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name here" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email here" />
        </p>
        <WhitepaperButton>Request Whitepaper</WhitepaperButton>
      </form>
    </WhitepaperContainer>
  </Whitepaper>
)
