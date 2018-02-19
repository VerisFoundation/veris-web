import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Whitepaper from '../components/whitepaper'
import Presale from '../components/presale'

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Main>
    <Navigation />
    <Presale />
    <Whitepaper />
    <Footer />
  </Main>
)
