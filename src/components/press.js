import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-pro-regular'
import moment from 'moment'
import Container from './container'
import SectionHeader from './sectionHeader'
import imgBCN from '../images/press/blockchainnews.png'
import imgCabin from '../images/press/thecabin.png'
import imgCision from '../images/press/cision.png'
import imgInc from '../images/press/inc.png'
import imgSteemit from '../images/press/steemit.png'
import thumbInc from '../images/press/thumbs/inc.png'

const Article = styled.article`
  margin: 2rem 0;
  display: flex;

  .content {
    flex: 1;
  }

  figure {
    margin-left: 1rem;
    img {
      box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #999;
    padding-bottom: 1rem;
  }

  .date {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #278cd6;
  }
`

const Item = ({ children, date, link, logo, title, thumb }) => {
  return (
    <Article>
      <div className="content">
        {logo && (
          <div>
            <img src={logo} height="60" />
          </div>
        )}
        <div className="date">{moment(date).format('MMMM Do, YYYY')}</div>
        <h2>{title}</h2>
        {children && children}
        {link && (
          <p>
            <a href={link}>
              Read Article <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </p>
        )}
      </div>
      {thumb && (
        <figure>
          <a href={link}>
            <img src={thumb} height="240" />
          </a>
        </figure>
      )}
    </Article>
  )
}

export default () => (
  <Container>
    <SectionHeader>Press</SectionHeader>
    <Item
      logo={imgInc}
      date="2018-03-16"
      title="3 Ways to tell if your Blockchain ICO is a Scam"
      link="https://www.inc.com/heather-wilde/3-ways-to-tell-if-your-blockchain-ico-is-a-scam.html"
      thumb={thumbInc}
    />
    <Item
      date="2018-03-21"
      title="Polyswarm ICO Review & The Veris Foundation w/ Chris
Plance CEO/Founder"
    >
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414480768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </Item>
    <Item
      logo={imgCision}
      date="2018-02-23"
      title="First Non-Profit To Offer Blockchain Solution That Wil Save Up To $60 Billion in U.S. Healthcare Costs, Launching March 2018"
      link="http://www.prweb.com/releases/2018/02/prweb15239455.htm"
    />
    <Item
      logo={imgCabin}
      date="2018-03-14"
      title="Veris Foundation kicks off blockchain tech solution for healthcare industry March 19 with initial coin offering pre-sale"
      link="http://www.thecabin.net/news/20180314/business-briefs"
    />
    <Item
      logo={imgBCN}
      date="2018-03-12"
      title="Veris Launches Market-Ready Healthcare Solution Ahead
of First US, Non-Profit ICO"
      link="http://www.the-blockchain.com/2018/03/12/veris-launches-market-ready-healthcare-solution-ahead-of-first-us-non-profit-ico/"
    />
    <Item
      logo={imgSteemit}
      date="2017-12-26"
      title="Why American Healthcare Foundation Veris chooses NEO over ETH/IOTA/BTC/Cryptonote"
      link="https://steemit.com/cryptocurrency/@pandorasbox/why-american-healthcare-foundation-veris-chooses-neo-over-eth-iota-btc-cryptonote"
    />
  </Container>
)
