const form = document.getElementById('form')

const email = document.getElementById('email')
const textrea = document.getElementById('textarea')

const submitBtn = document.getElementById('submit')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const EmailMessage = {
    systemEmail: "mr.sawch@gmail.com",
    contactEmail: email.value,
    message: textrea.value
  }

  fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(EmailMessage)
  })
    .then(response => {
      if (response.ok) {
        email.value = ""
        textarea.value = ""
        return response.text()
      } else {
        throw new Error('Chyba pri odosielaní požiadavky')
      }
    })
    .then(responseText => {
      alert(responseText)
    })
    .catch(error => {
      alert(error)
    })
})


// BUTTONS

const aboutBtns = document.querySelectorAll('.about-btn')
const aboutText = [
  'I am Matej, I come from Slovak town called Poprad (apx. 50 000 residents) . I’ve been living here all my live and have been going to school here aswell.',

  'From age 6 to age 15 I visited elementary school on address Komenskeho in Poprad. There I’ve learnt the basic knowledge and after that I started going to Súkromná Stredná Odborná Škola, Ulica 29. Augusta 4812, 058 01 Poprad. In this secondary school I’ve been learning basics of various IT oriented subjects for the last 3 years. I learnt about networking, graphics design, web design, databases, programming and many more things. Thanks to this school I found out what I like to do most and what I would like to do in the future.',

  'For the last year I have been interested in web design and all the skills important for a developer. I got to become good in planning, writing HTML, simplifying syntax, making the documents esay to read and so on. Near the end of the last year I started learning javascript and that’s what I would love to get better at. '
]

const aboutTextP = document.getElementById('aboutTextP')


aboutBtns.forEach((aboutBtn, index) => {
  aboutBtn.addEventListener('click', () => {
    aboutTextP.innerText = aboutText[index]
    aboutBtns.forEach((aboutBtn) => {
      aboutBtn.classList.remove('active')
      aboutBtns[index].classList.add('active')
    })
  })
})


function buttonFunc(btnCon) {
  aboutBtns.forEach((btn, index) => {
    aboutBtn.addEventListener('click', () => {
      aboutTextP.innerText = aboutText[index]
      aboutBtns.forEach((aboutBtn) => {
        aboutBtn.classList.remove('active')
        aboutBtns[index].classList.add('active')
      })
    })
  })
}
