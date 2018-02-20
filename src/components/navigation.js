import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-pro-regular'
import verisLogo from '../images/vrs_logo.svg'
import verisLogoBlue from '../images/vrs_logo_blue.svg'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
  margin: auto;
  margin-bottom: ${props => (props.hero ? '-9rem' : '0')};
  color: ${props => (props.hero ? '#fff' : 'inherit')};
  z-index: 1;

  ul {
    display: flex;
    margin-left: 0;
    list-style: none;
    align-items: center;
  }

  li {
    margin-bottom: 0;
    position: relative;

    svg {
      margin-left: 0.5rem;
      transition: transform 200ms ease;
    }
  }

  li li {
    margin: 0.5rem 0;
  }

  span {
    border-top: 0.3rem solid #278cd6;
    display: block;
    background-color: hsla(205, 69%, 49%, 0.12);
    padding: 1rem;
  }

  ul ul {
    margin-top: 0rem;
    display: block;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 0.2rem,
      hsla(205, 69%, 49%, 0.12) 0.2rem,
      hsla(205, 69%, 49%, 0.12) 100%
    );
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
    color: ${props => (props.hero ? '#fff' : '#0F3552')};
    text-decoration: none;
  }
`

const NavLink = styled.li`
  padding-left: 1rem;
`

const activeNavMixin = css`
  opacity: 1;
  transform: translateY(0);
  pointer-events: inherit;
`

const NavList = styled.ul`
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
  transition: all 200ms ease;
  ${props => props.active && activeNavMixin};
`

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

class NavMenu extends React.Component {
  state = {
    active: false
  }

  activate = () => this.setState({ active: true })
  deactivate = () => this.setState({ active: false })

  toggle = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state
    return (
      <li onClick={this.toggle} onMouseEnter={this.activate} onMouseLeave={this.deactivate}>
        <span>
          {this.props.label}
          <FontAwesomeIcon icon={faChevronUp} rotation={active ? 0 : 180} />
        </span>
        <NavList active={active}>{this.props.children}</NavList>
      </li>
    )
  }
}

export default ({ hero }) => (
  <Navigation hero={hero}>
    <Link to="/">
      <img src={hero ? verisLogo : verisLogoBlue} width="180" height="47" alt="Veris Logo" />
    </Link>
    <ul>
      <NavMenu label="Technology">
        <NavItem to="/works">How it works</NavItem>
        <NavItem to="/faq">FAQ</NavItem>
      </NavMenu>
      <NavMenu label="Company">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/team">Team</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavMenu>
      <NavLink>
        <Link to="/#whitepaper">Whitepaper</Link>
      </NavLink>
      <NavLink>
        <a href="https://medium.com/verisfoundation">Blog</a>
      </NavLink>
    </ul>
    <ul>
      <NavLink>
        <Link to="/presale">Presale</Link>
      </NavLink>
    </ul>
  </Navigation>
)
