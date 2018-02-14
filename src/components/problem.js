import React from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import illProblem from '../images/ill_problem.svg'

const Problem = styled(Container)`
  text-align: center;
  max-width: 620px;
  margin: 4rem auto;

  h2 {
    font-family: 'Open Sans';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    color: #c35b00;
  }

  h3 {
    font-size: 2rem;
  }

  img {
    margin-top: 2rem;
  }
`

export default () => (
  <Problem>
    <h2>The Problem</h2>
    <h3>Traditional, centralized systems are slow, redundant, and expensive</h3>
    <p>
      Providers and payers employ their own staff and separate software stacks to facilitate their medical claims
      processes. These isolated systems make the sharing of basic information difficult, costly, and prone to errors
      &amp; fraud.
    </p>
    <img src={illProblem} alt="The Problem" />
  </Problem>
)
