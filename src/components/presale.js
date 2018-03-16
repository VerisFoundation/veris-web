import React from 'react'
import styled from 'styled-components'
import Container from './container'
import SectionHeader from './sectionHeader'
import timeline from '../images/timeline.svg'
import allocationImg from '../images/ill_allocation.svg'
import Timer from './timer'

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

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
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

  img {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }

  @media (max-width: 640px) {
    section {
      flex-direction: column;
    }

    aside {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
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

class Presale extends React.Component {
  state = {
    thanks: false,
    email: ''
  }

  _submit = event => {
    event.preventDefault()
    const email = encodeURIComponent(this.state.email)
    const url = `https://script.google.com/a/suncoast.io/macros/s/AKfycbx5j3f48_i0layRQ8mKhBwVo-wJSuu-XHNMXc77kKPC9pGhob5P/exec?email=${email}`
    window.fetch(url, { method: 'GET' })
    this.setState({ thanks: true, email: '' })
  }

  _change = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <Container>
          <SectionHeader>Presale</SectionHeader>
          <Header>
            {this.state.thanks ? (
              <div>
                <h3>
                  <strong>Thanks</strong>, we'll be in touch.
                </h3>
              </div>
            ) : (
              <section>
                <h3>The VRS Presale opens on Monday, March 19.</h3>
                <p>We will be releasing our coin at 12:00p EST. Sign up below to be reminded.</p>
                <form action="" onSubmit={this._submit}>
                  <input required type="email" placeholder="Enter Your Email" onChange={this._change} />
                  <button type="submit">Submit</button>
                </form>
              </section>
            )}
            <aside>
              <h4>Time until Presale</h4>
              <Timer to="Mon, 19 Mar 2018 12:00:00 -0400" />
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
                  <tbody>
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
                      <th>Presale Price (25% bonus)</th>
                      <td>
                        1 NEO = 100 VRS<br />
                        1 ETH = (ETH-USD/NEO-USD) * 100 VRS
                      </td>
                    </tr>
                    <tr>
                      <th>ICO Price</th>
                      <td>
                        1 NEO = 80 VRS<br />
                        1 ETH = (ETH-USD/NEO-USD) * 80 VRS
                      </td>
                    </tr>
                    <tr>
                      <th>Minimum Cap</th>
                      <td>9,000 ETH / 28,000 NEO</td>
                    </tr>
                    <tr>
                      <th>Maximum Cap</th>
                      <td>90,000 ETH / 270,000 NEO</td>
                    </tr>
                  </tbody>
                </table>
              </aside>

              <aside>
                <h3>Allocation</h3>

                <img src={allocationImg} width="400" />
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
      </div>
    )
  }
}

export default Presale
