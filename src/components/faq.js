import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import SectionHeader from './sectionHeader'

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
`

const Questions = styled.div`
  font-size: 0.8rem;
  min-width: 240px;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.16);
  border-radius: 0.25rem;
  position: sticky;
  top: 1rem;
`

const Question = styled.div`
  margin: 1rem;

  a:link,
  a:visited {
    color: #0f3552;
    text-decoration: none;
  }

  ,
  a:focus,
  a:hover,
  a:active {
    color: #278cd6;
  }
`

const Answers = styled.div`
  margin-right: 2rem;
`

const Answer = styled.div`
  &:not(:last-child) {
    border-bottom: thin solid #d8d8d9;
    margin-bottom: 2rem;
  }

  p {
    color: #144062;
    font-weight: 300;
    line-height: 1.8rem;
  }
`

export default () => (
  <Container>
    <SectionHeader>FAQ</SectionHeader>
    <Main>
      <Answers>
        <Answer id="what-and-how">
          <h2>What is veris building and how?</h2>
          <p>
            Veris is building a blockchain with a set of smart contracts designed specifically to service the healthcare
            industry.
          </p>
          <p>
            Blockchain provides four key fundamentals which sets this solution aside from existing attempts to address
            this with 'clearinghouse' type organizations:
            <ol>
              <li>Disintermediation - No central agent is required to approve transactions.</li>
              <li>
                Immutability - All transactions can not not be altered or deleted once added to the chain via consensus.
              </li>
              <li>
                Reliability - All nodes contain a copy of the blockchain data, removing a central point of failure.
              </li>
              <li>
                Transparency - The transactions in the blockchain are visible to all parties with appropriate access to
                decrypt and review.
              </li>
            </ol>
          </p>
        </Answer>
        <Answer id="non-profit">
          <h2>Why is Veris a non-profit entity?</h2>
          <p>
            We feel strongly that the only effective way to solve the challenges in back -end administrative expense in
            the American healthcare system is that the characteristics of the organization itself must match the
            blockchain as best possible. The best current business entity for this is a non profit. A non-profit
            business structure requires transparency and stakeholder feedback via a board of directors comprised of
            healthcare payers, providers and financial institutions
          </p>
        </Answer>
        <Answer id="role">
          <h2>What is the role of the Veris Foundation?</h2>
          <p>
            The Veris Foundation provides the strong governance mechanism required for the continuing development and
            maintenance of a blockchain. The Foundation is also a structure that allows industry stakeholders to
            collaborate and drive down expenses while meeting their common needs.
          </p>
        </Answer>
        <Answer id="funding">
          <h2>How is Veris Funded?</h2>
          <p>
            Veris is initially funded via donations from the founder and key private parties. Once an inital deployment
            of the solution occurs in the fall of 2017, an Initial Coin Offering will be created to further fund Veris.
          </p>
        </Answer>
      </Answers>
      <Questions>
        <Question>
          <a href="#what-and-how">What is veris building and how?</a>
        </Question>
        <Question>
          <a href="#non-profit">Why is Veris a non-profit entity?</a>
        </Question>
        <Question>
          <a href="#role">What is the role of the Veris Foundation?</a>
        </Question>
        <Question>
          <a href="#funding">How is Veris Funded?</a>
        </Question>
      </Questions>
    </Main>
  </Container>
)
