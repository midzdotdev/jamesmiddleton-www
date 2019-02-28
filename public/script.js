const START_INTERVAL = 2000
const KEYSTROKE_INTERVAL = 40
const NEWLINE_INTERVAL = 400
const END_INTERVAL = 3000

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('center-container')

  let skipAnimation = false

  if (sessionStorage.getItem('animated')) {
    skipAnimation = true
  } else {
    sessionStorage.setItem('animated', true)
  }

  present(container, skipAnimation)
})

const content =
`{
  "name": "James Middleton",
  "location": "East Midlands, UK",
  "occupation": "Software Developer",
  "email": "<a href="mailto:hi@jamesmiddleton.me">hi@jamesmiddleton.me</a>",
  "active projects": [
      "<a href="http://cryptoinsights.online">CryptoInsights</a>"
  ],
  "archived projects: [
      "<a href="https://github.com/james2mid/wgr-mn-notify">Wagerr Masternode Notifier</a>",
      "<a href="https://github.com/james2mid/G-Sim">Gravitational Forces Simulator</a>"
  ],
  "social media": [
      "<a href="https://twitter.com/james2mid">Twitter</a>",
      "<a href="https://github.com/james2mid">GitHub</a>",
      "<a href="https://www.linkedin.com/in/james-middleton-8944484b">LinkedIn</a>"
  ]
}`

async function present (container, skipAnimation) {
  const p = document.createElement('p')
  container.appendChild(p)

  if (skipAnimation) {
    p.innerHTML = content
    return
  }

  for (let i = 1; i <= 5;  i++) {
    let html = 'DOWNLOADING TRANSMISSION'
    for (let i2 = 0; i2 < i; i2++) {
      html += '.'
    }
    html += '<span class="cursor"></span>'

    p.innerHTML = html

    await wait(NEWLINE_INTERVAL * 2)
  }

  await wait(START_INTERVAL)
  
  // replace newlines for html's br tag
  const preparedHTML = (() => {
    let lines = content.split('\n')
    return lines.join('<br>')
  })()

  for (let i = 0; i < preparedHTML.length; i++) {
    if (preparedHTML[i] === ' ') {
      // check if multiple spaces and skip if so
      while(preparedHTML[i+1] === ' ')
        i++
    }
    if (preparedHTML[i+1] === ']') {
      i++
    }
    if (preparedHTML[i] === '<') {
      // skip to end of tag
      const tagEndIndex = preparedHTML.slice(i).indexOf('>') + i

      const tagText = preparedHTML.slice(i, tagEndIndex+1)
      if (tagText === '<br>') {
        // pause at the end of lines
        await wait(NEWLINE_INTERVAL)
      }

      i = tagEndIndex
      
      continue
    }
    p.innerHTML = preparedHTML.slice(0, i+1)
    p.innerHTML += '<span class="cursor"></span>'

    // add open brackets
    if (p.innerText.includes('{') && !p.innerText.includes('}')) {
      const squareOpen = p.innerText.split('[').length - 1
      const squareClosed = p.innerText.split(']').length - 1
      if ((squareOpen > squareClosed) && preparedHTML[i+1] !== ']') {
        p.innerHTML += '<br>  ]'
      }

      p.innerHTML += '<br>}'
    }

    await wait(KEYSTROKE_INTERVAL)
  }

  await wait(END_INTERVAL)
  p.innerHTML = preparedHTML
}

async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}