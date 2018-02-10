import React from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import Navigation from '../components/navigation'
import heroBG from '../images/img_herobg@2x.png'

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${heroBG});
  background-size: cover;
  color: white;
  clip-path: ellipse(150% 50% at 50% 47%);
  min-height: 100vh;
`

const Section = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;

  aside {
    max-width: 600px;
  }
`

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-width: 320px;
  border: thin solid white;
`

export default () => (
  <Hero>
    <Navigation />
    <Section>
      <aside>
        <h1>
          Blockchain built for the
          <br />
          American Healthcare System
        </h1>
        <p>
          The Veris Foundation is focused on directly connecting payers with providers, reducing yearly healthcare
          expenses by up to $59B, ultimately lowering healthcare costs for patients.
        </p>
        <button>Watch the Video</button>
      </aside>
      <Countdown>
        <h2>VRS Presale</h2>
        <time>20:40:40:30</time>
        <button>Learn More</button>
      </Countdown>
    </Section>
  </Hero>
)
