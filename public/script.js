document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('center-container')
  present(container)
})

const html =
`{
  "name": "James Middleton",
  "location": "East Midlands, UK",
  "occupation": "Student / Programmer",
  "projects": [
      "<a href="http://cryptoinsights.online">CryptoInsights</a>",
      "<a href="https://github.com/james2mid/wgr-mn-notify">Masternode Notifier</a>",
      "<a href="https://github.com/james2mid/G-Sim" class="inactive">G-Sim</a>"
  ],
  "social media": [
      "<a href="https://twitter.com/james2mid">Twitter</a>",
      "<a href="https://github.com/james2mid">GitHub</a>"
  ]
}`

async function present (container) {
  const p = document.createElement('p')
  container.appendChild(p)

  p.innerHTML = '<span class="cursor"></span>'

  await wait(2000)
  
  // replace newlines for html's br tag
  const preparedHTML = (() => {
    let lines = html.split('\n')
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
        await wait(300)
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

    await wait(50)
  }

  await wait(2000)
  p.innerHTML = preparedHTML
}

async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}