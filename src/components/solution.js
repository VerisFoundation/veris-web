import React from 'react'
import styled from 'styled-components'
import illSolution from '../images/ill_solution.svg'
import graph from '../images/graph.svg'

const Solution = styled.div`
  color: #fff;
  background-color: #278cd6;
  padding: 6rem 0 22rem;
  clip-path: ellipse(150% 50% at 50% 47%);
  background: url(${graph}) no-repeat, linear-gradient(-45deg, #008bca 0%, #278cd6 100%);
  background-position: center 120%;
  background-size: 200vh, auto;

  h2 {
    font-family: 'Open Sans';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  img {
    margin-top: 2rem;
    max-width: 420px;
    margin: 1rem;
  }
`

const Section = styled.div`
  margin: auto;
  max-width: 640px;
  text-align: center;
`

export default () => (
  <Solution>
    <Section>
      <h2>The Solution</h2>
      <h3>Distribruted information systems increase efficiency and lower costs</h3>
      <p>
        Creating decentralized databases enables all parties to securely access and share data within and across
        organizations, eliminating the need to hire and maintain expensive third-party information systems.
      </p>
      <img src={illSolution} alt="The Solution" />
    </Section>
  </Solution>
)
