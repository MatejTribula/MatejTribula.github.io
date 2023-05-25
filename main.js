// FORM SUBMIT, VALIDITY etc.
const form = document.getElementById('form')

const email = document.getElementById('email')
const textrea = document.getElementById('textarea')

const submitBtn = document.getElementById('submit')

const botCheck = document.getElementById('botCheck')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const expectedValue = 6

  if (botCheck.value !== expectedValue.toString()) {
    alert('You have entered wrong answer!')
    return
  }

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
        botCheck.value = ""
        return response.text()
      } else {
        throw new Error('There was an error while sending a request')
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

  'At age of 15 I decided to study IT at Súkromná Stredná Odborná Škola, Ulica 29. Augusta 4812, 058 01 Poprad (also called SSOSTA). At this secondary school I’ve been learning basics of various IT oriented subjects for the last 3 years. I learnt about networking, graphics design, web design, databases, programming and many more things. Thanks to this school I found out what I like to do most and what I would like to do in the future.',

  'For the last year I have been interested in web design and all the skills important for a developer. I got to become good in planning, writing HTML, simplifying syntax, making the documents esay to read and so on. Near the end of the last year I started learning javascript and that’s what I would love to get better at. '
]
const aboutTextTarget = document.getElementById('aboutTextParagraph')


const educationButtons = document.querySelectorAll('.education-btn')
const educationText = [
  '<h3>Secondary School</h3><p>During my second year at SSOSTA I had an opportunity to learn basics of web development. I got start practising with HTML and CSS. After getting better at CSS I was able to work with Bootstrap. These skills were this year reinforced by learning scripting language php.</p>',

  '<h3>Self taught</h3><p>After finishing some school projects, I became interested in learning HTML and CSS on my own. I used multiple resources to study from such as Udemy or YouTube. I tried to practice in simulated scenarios by Frontend Mentor where I got to learn what is common practice. Later I started to learn js which I still did not master and I am really keen to do so.</p>'
]

const educationTextTarget = document.querySelector('.education-group')


buttonFunction(aboutBtns, aboutTextTarget, aboutText)
buttonFunction(educationButtons, educationTextTarget, educationText)


function buttonFunction(clickBtns, clickTextDest, clickText) {
  clickBtns.forEach((clickBtn, index) => {
    clickBtn.addEventListener('click', () => {
      clickTextDest.innerHTML = clickText[index]
      clickBtns.forEach((clickBtn) => {
        clickBtn.classList.remove('active')
        clickBtns[index].classList.add('active')
      })
    })


  })
}

// CLIPBOARD

const contacts = document.querySelectorAll('.contact')
const contactName = ['Email', 'Tel. No.', 'Twitter', 'TikTok']
const contactValues = ['matej.tribula@gmail.com', '0902286495', '@mattveym', '@mattveym']


clipboardFunction()



function clipboardFunction() {
  contacts.forEach((contact, index) => {
    contact.addEventListener('click', () => {
      var clipboard = document.createElement('textarea')
      clipboard.classList.add('clipboard')
      clipboard.value = contactValues[index]

      document.body.appendChild(clipboard)
      clipboard.select()
      document.execCommand('copy')
      document.body.removeChild(clipboard)

      alert(`You have successfully copied my ${contactName[index]}!`)
    })
  })
}