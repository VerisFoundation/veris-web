import React from 'react'
import styled from 'styled-components'
import Container from './container'
import SectionHeader from './sectionHeader'
import Button from './button'

const Contact = styled.div``

const Main = styled.main`
  display: flex;
  margin-top: 4rem;

  h3 {
    font-size: 2rem;
  }

  p {
    font-weight: 300;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const ContactForm = styled.div`
  flex: 1;
  margin-right: 2rem;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  form p:first-child,
  form p:nth-child(2) {
    flex-basis: calc(50% - 1rem);
  }

  form p {
    flex-basis: 100%;
  }

  label {
    display: block;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.8rem;
  }

  input,
  textarea {
    box-sizing: border-box;
    font-family: Raleway, sans-serif;
    font-size: 1em;
    border: none;
    padding: 0.5em;
    min-width: 8em;
    width: 100%;
  }

  input {
    border-bottom: thin solid hsla(0, 0%, 0%, 0.16);
  }

  textarea {
    border: thin solid hsla(0, 0%, 0%, 0.16);
    margin-top: 1rem;
  }

  input:focus,
  textarea:focus {
    border-color: #0f3552;
    outline: none;
  }
`

const OurOffice = styled.div`
  flex: 1;

  iframe {
    width: 100%;
  }
`

const ContactButton = styled(Button)`
  background-color: transparent;
  border: thin solid #278cd6;
  color: #278cd6;
`

export default () => (
  <Contact>
    <Container>
      <SectionHeader>Contact</SectionHeader>
      <Main>
        <ContactForm>
          <h3>Get in Touch &mdash;</h3>

          <p>
            If you are interested in learning more about the Veris Foundation, please contact us by filling out the form
            below.
          </p>

          <form action="">
            <p>
              <label htmlFor="givenName">First Name</label>
              <input type="text" name="givenName" />
            </p>

            <p>
              <label htmlFor="familyName">Last Name</label>
              <input type="text" name="familyName" />
            </p>

            <p>
              <label htmlFor="emailAddress">Email</label>
              <input type="email" name="emailAddress" />
            </p>

            <p>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="8" cols="80" />
            </p>

            <ContactButton>Submit</ContactButton>
          </form>
        </ContactForm>
        <OurOffice>
          <h2>Our Office</h2>

          <p>
            479 Momnouth Street<br />
            Jersey City, NJ 07302
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.594825334245!2d-74.05094168459455!3d40.72693517933025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574b71793023%3A0xe8365f28e8423519!2s479+Monmouth+St%2C+Jersey+City%2C+NJ+07302!5e0!3m2!1sen!2sus!4v1514056124553"
            width="480"
            height="320"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </OurOffice>
      </Main>
    </Container>
  </Contact>
)
