import React from 'react'
import styled from 'styled-components'
import Container from './container'
import verisLogo from '../images/vrs_logo.svg'

const Footer = styled.div`
  background-color: #0f3552;
  color: white;
  font-weight: 100;
  font-size: 0.8rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 1rem;
    }

    img {
      position: relative;
      top: 0.2rem;
    }
  }
`

export default () => (
  <Footer>
    <Container>
      <ul>
        <li>
          <img src={verisLogo} width="120" alt="Veris Logo" />
        </li>
        <li>Contact / Legal</li>
      </ul>
      <ul>
        <li>Twitter, etc.</li>
      </ul>
    </Container>
  </Footer>
)
