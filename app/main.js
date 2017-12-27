const fontawesome = require('@fortawesome/fontawesome')
const faTwitter = require('@fortawesome/fontawesome-free-brands/faTwitter')
const faMediumM = require('@fortawesome/fontawesome-free-brands/faMediumM')
const faSlackHash = require('@fortawesome/fontawesome-free-brands/faSlackHash')
const faGoogle = require('@fortawesome/fontawesome-free-brands/faGoogle')
const faLinkedinIn = require('@fortawesome/fontawesome-free-brands/faLinkedinIn')
const faGithub = require('@fortawesome/fontawesome-free-brands/faGithub')

fontawesome.library.add(faTwitter)
fontawesome.library.add(faMediumM)
fontawesome.library.add(faSlackHash)
fontawesome.library.add(faGoogle)
fontawesome.library.add(faLinkedinIn)
fontawesome.library.add(faGithub)

const FORM_QUERY = 'input[type=text], input[type=email], textarea'

const showModal = () => (document.querySelector('.modal').style.visibility = 'visible')

const hideModal = () => (document.querySelector('.modal').style.visibility = 'hidden')

const resetForm = () => document.querySelectorAll(FORM_QUERY).forEach(el => (el.value = ''))

document.addEventListener('DOMContentLoaded', () => {
  const modalButton = document.querySelector('.modal button')
  if (modalButton) modalButton.addEventListener('click', hideModal)

  const form = document.querySelector('form')
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault()
      showModal()
      const data = {}
      const formData = new FormData(form)
      formData.forEach((value, key) => (data[key] = value))
      window
        .fetch('https://veris-contact-mailer.azurewebsites.net/api/HttpTrigger', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(resetForm)
    })
  }
})
