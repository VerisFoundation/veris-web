import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import OurTeam from '../components/ourTeam'
import Footer from '../components/footer'

const Team = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Team>
    <Navigation />
    <OurTeam />
    <Footer />
  </Team>
)