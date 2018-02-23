import React from 'react'
import styled from 'styled-components'
import ButtonLink from './buttonLink'
import Container from './Container'
import presaleScreenshot from '../images/img_presale@2x.png'

const Crowdsale = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    color: #278cd6;
    font-size: 2rem;
    line-height: 3rem;
  }

  figure {
    min-width: 320px;
    flex: 2;

    img {
      width: 100%;
      margin: 0;
    }
  }

  aside {
    min-width: 320px;
    flex: 1;
    font-weight: 100;
  }
`

export default () => (
  <Container>
    <Crowdsale>
      <figure>
        <img src={presaleScreenshot} alt="Presale Screenshot" width="420" />
      </figure>
      <aside>
        <h2>The VRS crowdsale is opening soon</h2>
        <p>We will be opening our presale at 12:00p EST on March 19, 2018.</p>
        <ButtonLink to="/presale">Learn More</ButtonLink>
      </aside>
    </Crowdsale>
  </Container>
)
