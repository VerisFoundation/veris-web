import React from 'react'
import styled from 'styled-components'
import Button from './button'
import Container from './container'
import whitepaperIcon from '../images/ico_whitepaper.svg'

const Whitepaper = styled.div`
  background-color: #278cd6;
  color: #fff;
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  aside {
    display: flex;
    align-items: flex-start;
    margin: 2rem;
    max-width: 520px;
  }

  aside p {
    font-weight: 100;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    aside {
      flex-direction: column;
      margin: 0;
    }
  }
`

const WhitepaperContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhitepaperButton = styled.a`
  background-color: #278cd6;
  color: #fff;
  border: thin solid #fff;
  border-radius: 48px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 12px 24px;
  letter-spacing: 0.1rem;

  &:link,
  &:visited {
    text-decoration: none;
  }
`

export default () => (
  <Whitepaper id="whitepaper">
    <WhitepaperContainer>
      <aside>
        <img src={whitepaperIcon} alt="Whitepaper Icon" width="92" />
        <div>
          <h2>Veris Whitepaper</h2>
          <p>
            Veris is proud to make more details of our solution available within our whitepaper. Comments or questions
            are welcome.
          </p>
          <WhitepaperButton href="https://veris.docsend.com/view/fbqysxf">View Whitepaper</WhitepaperButton>
        </div>
      </aside>
    </WhitepaperContainer>
  </Whitepaper>
)
