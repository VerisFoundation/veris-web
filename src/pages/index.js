import React from 'react'
import styled from 'styled-components'
import Hero from '../components/hero'
import Problem from '../components/problem'
import Solution from '../components/solution'
import Platform from '../components/platform'
import Crowdsale from '../components/crowdsale'
import Whitepaper from '../components/whitepaper'
import Footer from '../components/footer'

const Home = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Home>
    <Hero />
    <Problem />
    <Solution />
    <Platform />
    <Crowdsale />
    <Whitepaper />
    <Footer />
  </Home>
)
