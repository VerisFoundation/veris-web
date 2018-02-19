import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import SectionHeader from './sectionHeader'
import timeline from '../images/timeline.svg'

const Presale = styled.div``

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  section {
    max-width: 420px;
  }

  p {
    font-weight: 300;
    line-height: 2rem;
  }

  aside {
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    text-transform: uppercase;
    color: #278cd6;
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  time {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }

  form {
    border: thin solid #278cd6;
    border-radius: 3rem;
    height: 3rem;
    display: flex;

    input {
      flex: 1;
      border: none;
      margin-left: 1.5rem;
      font-family: 'Open Sans';
      font-weight: 300;

      input::placeholder {
        opacity: 0.34;
        font-size: 0.8rem;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      color: #fff;
      background-color: #278cd6;
      border: none;
      border-radius: 3rem;
      padding: 0 2rem;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`

const CrowdsaleInfo = styled.div`
  background-color: #f7f7f9;
  padding-top: 100px;
  position: relative;

  &:before {
    background: #fff;
    height: 200px;
    clip-path: ellipse(100% 50% at 50% -40%);
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  h2 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 0.9rem;
    text-align: center;
  }

  aside {
    font-size: 0.8rem;
    flex-basis: calc(50% - 1rem);
  }

  table {
    font-size: 0.8rem;
  }
`

const Timeline = styled.div`
  text-align: center;
  h2 {
    margin: 4rem auto;
    font-size: 2rem;
  }

  img {
    margin: 4rem;
    max-width: 540px;
  }
`

export default () => (
  <Presale>
    <Container>
      <SectionHeader>Presale</SectionHeader>
      <Header>
        <section>
          <h3>The VRS Presale opens on Monday, March 19.</h3>
          <p>We will be releasing our coin at 12:00p EST. Sign up below to be reminded.</p>
          <form action="">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Submit</button>
          </form>
        </section>
        <aside>
          <h4>Time until Presale</h4>
          <time>23:13:45:45</time>
        </aside>
      </Header>
    </Container>
    <CrowdsaleInfo>
      <Container>
        <h2>Veris Foundation Crowdsale Info</h2>
        <section>
          <aside>
            <h3>Overview</h3>

            <table>
              <tr>
                <th>Presale Timeline</th>
                <td>Mar 19th, 2018 - Mar 26, 2018</td>
              </tr>
              <tr>
                <th>ICO Timeline</th>
                <td>Apr 2nd, 2018 - Apr 16, 2018</td>
              </tr>
              <tr>
                <th>VRS Total Supply</th>
                <td>50,000,000</td>
              </tr>
              <tr>
                <th>Presale + ICO Allocation</th>
                <td>30,000,000</td>
              </tr>
              <tr>
                <th>Presale Price</th>
                <td>100 VRS = 1 NEO (20% bonus)</td>
              </tr>
              <tr>
                <th>ICO Price</th>
                <td>100 VRS = 1 NEO (20% bonus) 80 VRS = 1 ETH</td>
              </tr>
              <tr>
                <th>Minimum Cap</th>
                <td>9,000 ETH / 28,000 NEO</td>
              </tr>
              <tr>
                <th>Maximum Cap</th>
                <td>90,000 ETH / 270,000 NEO</td>
              </tr>
              <tr>
                <th>ICO Minimum Cap</th>
                <td>100 VRS = 1 NEO (20% bonus)</td>
              </tr>
            </table>
          </aside>

          <aside>
            <h3>Allocation</h3>

            <ul>
              <li>Public Contributors: 30,000,000 VRS / 60% of total Veris</li>
              <li>Foundation: 13,000,000 VRS / 26% of total</li>
              <li>Veris Core Team : 4,000,000 VRS / 8% of total</li>
              <li>Partnerships and Advisory: 2,000,000 VRS / 4% of total</li>
              <li>Bounties: 1,000,000 VRS / 2% of total</li>
            </ul>
          </aside>
        </section>
      </Container>
    </CrowdsaleInfo>
    <Timeline>
      <Container>
        <h2>Veris Project Timeline</h2>
        <img src={timeline} />
      </Container>
    </Timeline>
  </Presale>
)
