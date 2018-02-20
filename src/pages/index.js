import React from 'react'
import styled from 'styled-components'
import Hero from '../components/hero'
import Problem from '../components/problem'
import Solution from '../components/solution'
import Platform from '../components/platform'
import Crowdsale from '../components/crowdsale'
import Whitepaper from '../components/whitepaper'
import Footer from '../components/footer'
import Button from '../components/button'
import Container from '../components/container'

const Home = styled.div`
  display: flex;
  flex-direction: column;
`

const Questions = styled.div`
  border-top: thin solid #d8d8d9;
  border-bottom: thin solid #d8d8d9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin: auto;
  margin-bottom: 4rem;
  width: calc(100% - 2rem);
  max-width: 960px;

  h3 {
    font-size: 1.8rem;
    margin: 1rem;
  }
`

export default () => (
  <Home>
    <Hero />
    <Problem />
    <Solution />
    <Platform />
    <Crowdsale />
    <Questions>
      <h3>Have any questions?</h3>
      <Button>Read our FAQ</Button>
    </Questions>
    <Whitepaper />
  </Home>
)
