import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight, faCheck } from '@fortawesome/fontawesome-pro-regular'
import Container from './container'
import ButtonLink from './buttonLink'
import SectionHeader from './sectionHeader'

const About = styled.div`
  h3 {
    font-size: 2rem;
  }
`

const OverviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0f3552;

  &:before {
    background: #fff;
    height: 100%;
    clip-path: ellipse(150% 50% at 50% -10%);
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
  }
`

const Overview = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.12);
  padding: 3rem 4rem 2rem;
  margin: 1rem;
  max-width: 800px;
  z-index: 2;

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 640px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }

  li {
    flex: 1 0 calc(50% - 2rem);
    display: flex;
    margin: 1rem;
  }

  li span {
    margin-right: 0.5rem;
    color: #278cd6;
  }
`

const Meet = styled.p`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  margin: 1rem auto 0;

  a:link,
  a:visited {
    color: #278cd6;
    text-decoration: none;
  }

  span {
    margin-left: 0.5rem;
  }
`

const Blogs = styled.div`
  padding-top: 6rem;
  background-color: #0f3552;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 2.4rem;
  }

  ul {
    list-style: none;
    margin: 0;
    display: flex;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  li {
    padding: 2rem;
    text-align: left;
    flex: 1;
  }

  li + li {
    @media (min-width: 640px) {
      border-left: thin solid #d8d8d9;
    }

    @media (max-width: 640px) {
      border-top: thin solid #d8d8d9;
    }
  }

  a:link,
  a:visited {
    color: white;
  }
`

const MoreButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  margin: 6rem auto;
  background-color: #278cd6;
  color: #fff;
  border: none;
  border-radius: 48px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;

  &:link,
  &:visited {
    text-decoration: none;
  }
`

export default () => (
  <About>
    <Container>
      <SectionHeader>About Us</SectionHeader>
      <h3>Our Mission</h3>
      <p>
        Veris is committed to reducing the administrative expense and fraud in the American healthcare system. We
        believe these outcomes will result in higher value healthcare for all Americans.
      </p>
    </Container>
    <OverviewWrapper>
      <Overview>
        <h3>Company Overview</h3>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Governed by the Veris Foundation, non-profit entity, to ensure strong governance
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            An s-corp incorporated in Delaware,US and fully held by the Veris Foundation
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Financials all roll up to the Veris Foundation which is bound by strict financial reporting requirements
            providing a high level of financial transparency
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            All officers of the organization are citizens of the United States
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Offices based in Jersey City, NJ
          </li>
        </ul>
        <Meet>
          <Link to="/team">
            Meet our Team
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </Link>
        </Meet>
      </Overview>
    </OverviewWrapper>
    <Blogs>
      <Container>
        <h3>Latest Blog Articles</h3>
        <ul>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*2HBQKkJz9geVrAgiwfgLzw.jpeg" />
            <h4>
              <a href="https://medium.com/verisfoundation/a-primer-on-neo-network-fee-generation-and-its-importance-in-the-veris-blockchain-de293b5fa4a6">
                A Primer on NEO Network Fee Generation and its Importance in the Veris Blockchain
              </a>
            </h4>
            <p>
              When discussing NEO I find a surprising number of people are not certain what the purpose of GAS is, how
              GAS is created, and why GAS has value.
            </p>
          </li>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*p5SNikZmFBpcIhUV9OelOg.png" />
            <h4>
              <a href="https://medium.com/verisfoundation/the-administrative-burden-in-healthcare-f1c577f9edd1">
                The Administrative Burden in Healthcare
              </a>
            </h4>
            <p>
              This past week Amazon, Berkshire Hathaway and JP Morgan Chase announced that they forming a joint venture
              to address healthcare costs.
            </p>
          </li>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*S7EJHf1InOWv64hWuNBICA.jpeg" />
            <h4>
              <a href="https://medium.com/verisfoundation/one-example-of-rising-costs-in-the-us-healthcare-system-an-executive-view-62feef15c98f">
                One Example of Why US Healthcare Costs are Rising — An Executive’s View
              </a>
            </h4>
            <p>
              As healthcare costs continue to increase there is an ever growing battle going on between healthcare
              providers and insurers.
            </p>
          </li>
        </ul>
        <MoreButton href="https://medium.com/verisfoundation">Read More</MoreButton>
      </Container>
    </Blogs>
  </About>
)
