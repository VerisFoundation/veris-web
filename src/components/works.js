import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Crowdsale from './crowdsale'
import SectionHeader from './sectionHeader'
import processImg from '../images/process.svg'
import scAutomated from '../images/smartcontract_automated.svg'
import scMoney from '../images/smartcontract_money.svg'
import scSecure from '../images/smartcontract_secure.svg'
import scTransfer from '../images/smartcontract_transfer.svg'

const Works = styled.div``

const Header = styled.header`
  display: flex;
  margin: 1rem 0;
  align-items: flex-start;

  h3 {
    font-size: 2.5rem;
    margin-right: 2rem;
    flex: 1;
    margin-top: 3rem;
  }

  iframe {
    flex: 1;
    width: 100%;
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const Process = styled.div`
  background-color: #0f3552;
  text-align: center;

  img {
    margin: 4rem 1rem 0;
    width: calc(100% - 2rem);
  }

  &:before {
    background: #fff;
    height: 100%;
    clip-path: ellipse(150% 50% at 50% -45%);
    width: 100%;
    content: '';
    display: block;
    position: absolute;
  }
`

const SmartContractWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;

  &:before {
    background: #0f3552;
    height: 400px;
    clip-path: ellipse(150% 50% at 50% -45%);
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
  }
`

const SmartContracts = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.12);
  padding: 3rem 4rem 2rem;
  margin: -80px 1rem 1rem;
  max-width: 800px;
  z-index: 2;

  h3 {
    color: #278cd6;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  aside:nth-child(even) {
    flex-direction: row-reverse;
  }

  p {
    flex: 2;
  }

  figure {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 0 2rem;
    width: 100%;
  }
`

export default () => (
  <Works>
    <Container>
      <SectionHeader>How it Works</SectionHeader>
      <Header>
        <h3>Veris removes unnecessary steps in the claims process</h3>
        <iframe
          src="https://player.vimeo.com/video/233677512?byline=0&portrait=0"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        />
      </Header>
    </Container>
    <Process>
      <Container>
        <img src={processImg} width="640" />
      </Container>
    </Process>
    <SmartContractWrapper>
      <SmartContracts>
        <h3>Smart contracts are the automation backbone of the entire Veris blockchain.</h3>

        <aside>
          <p>
            Smart contracts are execute automatically based on certain conditions without the need of manual delivery of
            documents and forms.
          </p>
          <figure>
            <img src={scAutomated} width="72" />
          </figure>
        </aside>

        <aside>
          <p>Smart Contracts are secure and only work if both parties have the key to start the execution</p>
          <figure>
            <img src={scSecure} width="72" />
          </figure>
        </aside>

        <aside>
          <p>Being able to move payments from party to party without a middle man will increase savings signficantly</p>
          <figure>
            <img src={scTransfer} width="72" />
          </figure>
        </aside>

        <aside>
          <p>By ridding of errors and time to get paid, all parties benefit by up to $59b/year</p>
          <figure>
            <img src={scMoney} width="72" />
          </figure>
        </aside>
      </SmartContracts>
    </SmartContractWrapper>
    <Crowdsale />
  </Works>
)
