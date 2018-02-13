import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-pro-regular'
import verisLogo from '../images/vrs_logo.svg'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
  z-index: 100;

  ul {
    display: flex;
    margin-left: 0;
    list-style: none;
  }

  li {
    margin-bottom: 0;
    position: relative;
  }

  li li {
    margin: 0.5rem 0;
  }

  span {
    border-top: 0.3rem solid #278CD6;
    display: block;
    background-color: hsla(205, 69%, 49%, 0.12);
    padding: 1rem;
  }

  span a {
    margin-right: 0.5rem;
  }

  ul ul {
    margin-top: 0.2rem;
    display: block;
    background-color: hsla(205, 69%, 49%, 0.12);
    padding: 1rem;
    position: absolute;
    right: 0;
    left: 0;
  }

  > ul:not(:last-child) > li {
    margin-right: 0.5rem;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
  }
`

export default () => (
  <Navigation>
    <Link to="/">
      <img src={verisLogo} width="180" height="47" alt="Veris Logo" />
    </Link>
    <ul>
      <li className="active">
        <span>
          <Link>Technology</Link>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
        <ul>
          <li>
            <Link>How it works</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
        </ul>
      </li>
      <li className="hidden">
        <span>
          <Link>Company</Link>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        <ul>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Team</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>
          <Link>Whitepaper</Link>
        </span>
      </li>
      <li>
        <span>
          <Link>Blog</Link>
        </span>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://ico.verisfoundation.com">Presale</a>
      </li>
    </ul>
  </Navigation>
)
