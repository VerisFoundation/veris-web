import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-pro-regular'
import icoDisintermediation from '../images/ico_disintermediation.svg'
import icoDistributed from '../images/ico_distributed.svg'
import icoEncryption from '../images/ico_encryption.svg'
import icoGovernance from '../images/ico_governance.svg'
import icoImmutable from '../images/ico_immutable.svg'
import icoTransparency from '../images/ico_transparency.svg'

const Platform = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.12);
  padding: 4rem;
  margin: 1rem;
  max-width: 800px;
  position: relative;
  top: -18rem;
  margin-bottom: -16rem;
  text-align: center;

  h3 {
    color: #278cd6;
    font-size: 2rem;
    line-height: 3rem;
  }

  > p {
    font-weight: 100;
  }

  h3,
  p {
    margin: 1rem auto;
    max-width: 620px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  li {
    flex-basis: 33%;
    max-width: 200px;
    font-size: 0.8rem;
    font-weight: 300;
  }

  li p {
    font-weight: 100;
  }

  li h4 {
    font-family: 'Open Sans';
    font-size: 1.1rem;
  }

  li img {
    margin-bottom: 0;
  }
`

const LearnMore = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;

  a:link,
  a:visited {
    color: #278cd6;
    text-decoration: none;
  }

  span {
    margin-left: 0.5rem;
  }
`

export default () => (
  <Platform>
    <h3>The Veris platform is built using smart contracts and blockchain tech</h3>
    <p>
      Blockchain technology has many advantages over the information systems currently in place. The addition of
      conditional executables known as smart contracts makes an even stronger case for why Veris’s solution will save
      time and money, especially in the longer term.
    </p>

    <ul>
      <li>
        <img src={icoDistributed} width="90" height="90" />
        <h4>Distributed Reliability</h4>
        <p>
          The database is replicated on a large network of servers to ensure the network does not have a central point
          of failure.
        </p>
      </li>
      <li>
        <img src={icoImmutable} width="90" height="90" />
        <h4>Immutable Records</h4>
        <p>Using a distributed ledger safeguards transactions and patient histories from being altered or deleted.</p>
      </li>
      <li>
        <img src={icoGovernance} width="90" height="90" />
        <h4>Strong Governance</h4>
        <p>
          Governance of the chain is directed by a separate non-profit entity, and upgrades are voted on by users of the
          platform.
        </p>
      </li>
      <li>
        <img src={icoTransparency} width="90" height="90" />
        <h4>Data Transparency</h4>
        <p>
          Changes to the Veris blockchain are always 100% publicly viewable by all parties to ensure secure movement of
          information.
        </p>
      </li>
      <li>
        <img src={icoEncryption} width="90" height="90" />
        <h4>Multi-Level Encryption</h4>
        <p>
          All data is secured by standard blockchain encryption. Patient data is additionally secured via encryption of
          a smart contract.
        </p>
      </li>
      <li>
        <img src={icoDisintermediation} width="90" height="90" />
        <h4>Disintermediated</h4>
        <p>
          No central agent is required to approve transactions which allows for strength in automated document
          processing.
        </p>
      </li>
      <LearnMore>
        <Link to="/how-it-works">
          Learn more about how veris works
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Link>
      </LearnMore>
    </ul>
  </Platform>
)
