import React from 'react'
import styled from 'styled-components'
import ButtonLink from './buttonLink'
import Container from './container'
import presaleScreenshot from '../images/img_presale@2x.png'

const Crowdsale = styled.div`
  display: flex;
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

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;

    figure {
      min-width: inherit;
    }

    h2 {
      font-size: 1.5rem;
      line-height: 1.4rem;
    }

    aside {
      min-width: inherit;
      margin-bottom: 2rem;
    }
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
