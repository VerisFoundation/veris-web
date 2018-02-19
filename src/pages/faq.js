import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import FAQ from '../components/faq'

const FAQs = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <FAQs>
    <Navigation />
    <FAQ />
    <Footer />
  </FAQs>
)
