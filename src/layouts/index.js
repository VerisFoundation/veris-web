import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Contact from '../components/contact'

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
export default ({ children, location }) => (
  <Main>
    <Navigation hero={location.pathname === '/'} />
    {children()}
    <Footer />
  </Main>
)
