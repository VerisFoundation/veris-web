import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ButtonLink = styled(Link)`
  background-color: #278cd6;
  color: #fff;
  border: none;
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

export default ButtonLink
