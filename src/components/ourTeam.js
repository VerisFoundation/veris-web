import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/fontawesome-pro-regular'
import Container from './container'
import SectionHeader from './sectionHeader'

import imgChris from '../images/img_chris@2x.png'
import imgEric from '../images/img_eric@2x.png'
import imgDan from '../images/img_dan@2x.png'
import imgJason from '../images/img_Jason@2x.png'
import imgMatt from '../images/img_matt@2x.png'

const OurTeam = styled.div`
  margin-bottom: 6rem;

  h3 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  aside {
    max-width: 32rem;
    margin-bottom: 4rem;
  }
`

const Team = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 540px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`

const Modal = styled.div`
  border-radius: 0.5rem;
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  padding: ${props => (props.active ? '3rem' : '1rem')};
  margin: 1rem;
  display: flex;
  position: relative;
  max-width: 960px;
  max-height: 80vh;
  overflow-y: scroll;

  aside {
    flex: 1;
    max-width: 16rem;
    margin-right: ${props => (props.active ? '2rem' : 0)};
  }

  section {
    flex: 2;
  }

  @media (max-width: 540px) {
    flex-direction: column;

    h5 {
      margin-bottom: 1rem;
    }
  }
`

const modalMixin = css`
  background-color: hsla(206, 89%, 7%, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 3rem;
`

const mouseHoverMixin = css`
  cursor: pointer;

  &:hover {
    opacity: 0.66;
  }
`

const MemberItem = styled.li`
  margin: 0;
  font-weight: 300;
  flex-basis: 33%;
  ${props => props.active && modalMixin};

  img {
    margin: 0;
    width: 100%;
    ${props => !props.active && mouseHoverMixin};
  }

  h4 {
    font-family: 'Open Sans';
    color: #0f3552;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1rem;
    margin: 1rem 0 0.6rem;
    ${props => !props.active && mouseHoverMixin};

    &:after {
      background: #008bca;
      height: 0.05rem;
      width: 2rem;
      content: '';
      display: block;
      position: relative;
      bottom: -0.3rem;
      left: 0.2rem;
    }
  }

  a:link,
  a:visited {
    color: #278cd6;
    text-decoration: none;
  }
`

const SocialLinks = styled.ul`
  margin: 0 0 1rem 0;
  list-style: none;
  display: flex;
  font-size: 0.8rem;

  li {
    margin-right: 1rem;

    &:after {
      background: #008bca;
      height: 0.05rem;
      width: 2rem;
      content: '';
      display: block;
      position: relative;
      bottom: -0.3rem;
      left: 0.2rem;
    }
  }
`

const SocalLink = ({ platform, url }) => (
  <li>
    <a href={url}>{platform}</a>
  </li>
)

const Back = styled.div`
  color: #278cd6;
  cursor: pointer;
  font-size: 0.8rem;

  span {
    margin-left: 0.25rem;
    font-weight: 300;
  }
`

const Close = styled.div`
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 300;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`

const CoreTeam = styled.div``

const Advisors = styled.div`
  background-color: #f7f7f9;
`

class Member extends React.Component {
  state = {
    active: false
  }

  toggle = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { active } = this.state
    const { name, title, image } = this.props
    return (
      <MemberItem onClick={this.toggle} active={active}>
        <Modal onClick={e => active && e.stopPropagation()} active={active}>
          <aside>
            <img src={image} alt={`Portait of ${name}`} width="200" />
            <h4>{name}</h4>
            <h5>{title}</h5>
          </aside>
          {active && (
            <section>
              {this.props.children}
              <Back onClick={this.toggle}>
                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                <span>Back</span>
              </Back>
            </section>
          )}
          {active && <Close onClick={this.toggle}>&times;</Close>}
        </Modal>
      </MemberItem>
    )
  }
}

export default () => (
  <OurTeam>
    <Container>
      <SectionHeader>Our Team</SectionHeader>
      <aside>
        <h3>Who we are</h3>
        <p>
          We&rsquo;re a team of like-minded individuals dedicated to our mission of improving healthcare data processes.
          Our work results in significantly lower costs and improves the way medical providers interact with payers.
        </p>
      </aside>
    </Container>
    <CoreTeam>
      <Container>
        <h2>Core Team</h2>
        <Team>
          <Member name="Chris Plance" title="Founder &amp; CEO" image={imgChris}>
            <SocialLinks>
              <SocalLink platform="Linked In" url="http://www.linkedin.com/in/chrisplance" />
              <SocalLink platform="Medium" url="https://medium.com/@chris.plance" />
            </SocialLinks>
            <p>
              Chris is an engineer, entrepreneur, and management consultant with over 20 years experience providing
              strategic guidance in the implementation of technology with a focus on healthcare.
            </p>
            <p>
              Chris was the co-founder of DATUS in 2002, a successful management consultancy spun off to employees in
              2012. Chris has also served as the senior strategic advisor to one of the largest non-profit providers of
              senior living in the United States.
            </p>
          </Member>
          <Member name="Jason L Perry" title="Technical Lead" image={imgJason}>
            <SocialLinks>
              <SocalLink platform="Twitter" url="https://twitter.com/ambethia" />
              <SocalLink platform="GitHub" url="https://github.com/ambethia" />
              <SocalLink platform="Medium" url="https://medium.com/@ambethia" />
            </SocialLinks>
            <p>
              Jason is a native Floridian who started building for the web as a teen in the mid-&rsquo;90s, so
              he&rsquo;s been a web developer for about as long as anybody. Co-founding the Tampa Ruby Brigade in 2006,
              Suncoast Developers Guild in 2015, Jason takes pride in being a leader in the local tech community. After
              stints in academia, startups, and as a consulting freelancer, he&rsquo;s found great joy in mentoring and
              sharing the knowledge gained along the way. He&rsquo;s also a game development enthusiast, passionate
              about cryptocurrency, and loves animation. Jason is a father, a skeptic, entirely too opinionated, and
              prefers a word count in powers of two. When the world gets heavy you can find him either unbuilding
              LEGO&reg; sets as catharsis or harnessing his power animal &mdash; the panda.
            </p>
          </Member>
          <Member name="Matthew LeGrice" title="Design Lead" image={imgMatt}>
            <SocialLinks>
              <SocalLink platform="Website" url="http://mattehue.com/" />
              <SocalLink platform="Dribbble" url="http://dribbble.com/Mattehue" />
            </SocialLinks>
            <p>
              Matthew LeGrice is an independent designer and illustrator based in Jersey City, New Jersey. He has nearly
              10 years of design experience working with brands small and big, helping to elevate the way they
              communicate visually with their audiences.
            </p>
            <p>Some recent clients include SeatGeek, New York Rangers, and Biolite Energy.</p>
          </Member>
        </Team>
      </Container>
    </CoreTeam>
    <Advisors>
      <Container>
        <h2>Advisors</h2>
        <Team>
          <Member name="Eric Lawlor" title="Advisor" image={imgEric}>
            <SocialLinks>
              <SocalLink platform="Linked In" url="http://www.linkedin.com/in/eric-lawlor-mba-cma-6505a214" />
              <SocalLink platform="Medium" url="https://medium.com/@ericlawlor" />
            </SocialLinks>
            <p>
              Eric has over 24 years of experience in numerous business lines in the healthcare industry. This
              experience includes over 20 years in some facet of the revenue cycle for a wide variety of provider types.
              These provider types range from hospitals and physician practices to post acute providers.
            </p>
            <p>
              Eric has personally performed all the major components of the provider side of revenue cycle in his career
              including eligibility verification, charge entry, claim submission, claim followup, claim appeals and post
              payment reviews. Eric has also been instrumental in the implementation of several new billing systems.
            </p>
          </Member>
          <Member name="Dan Riston" title="Advisor" image={imgDan}>
            <SocialLinks>
              <SocalLink platform="Linked In" url="https://www.linkedin.com/in/dan-riston-8ba0b217/" />
            </SocialLinks>
            <p>
              Dan has 30 years experience on the payer side of healthcare. During this time he has been primarily
              involved with the TPA (Third Part Administration of benefits) industry. The first 12 years as CFO and COO
              and the last 18 years as President and CEO of a national TPA. This tenure has allowed him to witness claim
              paying from when it was just entering the computer age to where it is today.
            </p>
            <p>
              Simultaneously during his healthcare career he has participated in many different efforts to improve the
              way claims are paid. He has participated in the development of a national PPO, been President of a company
              that developed one of the first electronic claims submission systems and, has been an advisor to numerous
              cost containment and claims adjudication companies.
            </p>
          </Member>
        </Team>
      </Container>
    </Advisors>
  </OurTeam>
)
