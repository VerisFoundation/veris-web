import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faBars } from '@fortawesome/fontawesome-pro-regular'
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
  z-index: 100;
  height: 9rem;

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

  a:link,
  a:visited {
    color: ${props => (props.hero ? '#fff' : '#0F3552')};
    text-decoration: none;
  }
`

const HorizontalNav = styled.ul`
  display: flex;
  margin-left: 0;
  list-style: none;
  align-items: center;

  ul {
    list-style: none;
    margin-left: 0;
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

  &:not(:last-child) > li {
    margin-right: 0.5rem;
  }

  @media (max-width: 700px) {
    display: none;
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
          <FontAwesomeIcon icon={faChevronUp} rotation={active ? null : 180} />
        </span>
        <NavList active={active}>{this.props.children}</NavList>
      </li>
    )
  }
}

const NavToggle = styled.button`
  background-color: transparent;
  color: ${props => (props.hero ? '#fff' : '#0F3552')};
  border: none;
  font-size: 2rem;
  margin: 0 1rem 2rem;
  cursor: pointer;

  &:hover {
    color: #278cd6;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:active {
    opacity: 0.6;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

const openDrawerMixin = css`
  transform: translateX(-100%);
`

const NavDrawer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #0f3552;
  min-width: 200px;
  box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.25);
  transform: translateX(0);
  transition: transform 200ms ease;
  ${props => !props.open && openDrawerMixin};
  font-weight: 300;
  z-index: 1;

  button {
    color: white;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0;
    line-height: 1rem;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }

  a:link,
  a:visited {
    color: #fff;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    padding: 0.5rem 1rem;
    border-bottom: thin solid hsla(240, 1%, 84%, 0.25);
  }

  @media (min-width: 700px) {
    display: none;
  }
`

const DrawerHeader = styled.li`
  font-weight: 700;
  margin-top: 1.5rem;
  color: #278cd6;
`

class Nav extends React.Component {
  state = {
    open: false
  }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const { hero } = this.props
    return (
      <Navigation hero={hero}>
        <Link to="/">
          <img src={hero ? verisLogo : verisLogoBlue} width="180" height="47" alt="Veris Logo" />
        </Link>
        <HorizontalNav>
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
        </HorizontalNav>
        <HorizontalNav>
          <NavLink>
            <Link to="/presale">Presale</Link>
          </NavLink>
        </HorizontalNav>
        <NavToggle hero={hero} onClick={this.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </NavToggle>
        <NavDrawer open={this.state.open}>
          <button onClick={() => this.setState({ open: false })}>&times;</button>
          <ul>
            <DrawerHeader>Technology</DrawerHeader>
            <NavItem to="/works">How it works</NavItem>
            <NavItem to="/faq">FAQ</NavItem>
            <DrawerHeader>Company</DrawerHeader>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/team">Team</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <DrawerHeader>&nbsp;</DrawerHeader>
            <NavItem to="/#whitepaper">Whitepaper</NavItem>
            <NavItem to="https://medium.com/verisfoundation">Blog</NavItem>
            <NavItem to="/presale">Presale</NavItem>
          </ul>
        </NavDrawer>
      </Navigation>
    )
  }
}

export default Nav
