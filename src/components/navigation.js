import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import verisLogo from '../images/vrs_logo.svg'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
  padding: 1rem;

  ul {
    display: flex;
    margin-left: 0;
    list-style: none;
  }

  li {
    text-align: center;
    min-width: 120px;
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
      <li>Technology</li>
      <li>Company</li>
      <li>Whitepaper</li>
      <li>Blog</li>
    </ul>
    <ul>
      <li>
        <a href="https://ico.verisfoundation.com">Presale</a>
      </li>
    </ul>
  </Navigation>
)
