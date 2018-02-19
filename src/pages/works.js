import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Works from '../components/works'
import Whitepaper from '../components/whitepaper'

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Main>
    <Navigation />
    <Works />
    <Whitepaper />
    <Footer />
  </Main>
)
