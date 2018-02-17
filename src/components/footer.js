import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faMediumM,
  faSlackHash,
  faGooglePlusG,
  faLinkedinIn,
  faGithub
} from '@fortawesome/fontawesome-free-brands'
import Container from './container'
import verisLogo from '../images/vrs_logo.svg'

const Footer = styled.div`
  background-color: #0f3552;
  color: white;
  font-weight: 100;
  font-size: 0.8rem;

  a:link,
  a:visited {
    text-decoration: none;
    color: #fff;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 1rem 0.5rem;
    }

    img {
      position: relative;
      top: 0.2rem;
    }
  }
`

const SocialLinks = styled.ul`
  font-size: 1.8rem;
`

const SocialLink = ({ url, icon }) => (
  <li>
    <a href={url}>
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
)

export default () => (
  <Footer>
    <Container>
      <ul>
        <li>
          <Link to="/">
            <img src={verisLogo} width="120" alt="Veris Logo" />
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          &nbsp;/&nbsp;
          <Link to="/legal">Legal</Link>
        </li>
      </ul>
      <SocialLinks>
        <SocialLink url="https://twitter.com/verisfoundation" icon={faTwitter} />
        <SocialLink url="https://medium.com/verisfoundation" icon={faMediumM} />
        <SocialLink url="https://verisfoundation.slack.com" icon={faSlackHash} />
        <SocialLink url="#" icon={faGooglePlusG} />
        <SocialLink url="https://www.linkedin.com/company/theverisfoundation" icon={faLinkedinIn} />
        <SocialLink url="https://github.com/VerisFoundation" icon={faGithub} />
      </SocialLinks>
    </Container>
  </Footer>
)
