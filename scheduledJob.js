const Heroku = require('heroku-client')
const fetch = require('node-fetch')
require('dotenv').config()

const HEROKU_TOKEN = process.env.HEROKU_TOKEN
const GRAB_EMAIL = process.env.GRAB_EMAIL
const GRAB_PASSWORD = process.env.GRAB_PASSWORD

const heroku = new Heroku({ token: HEROKU_TOKEN })

const appsToUpdate = [
  'sellect-api-dev',
  'sellect-api-prod'
]

const updateGrabConfig = async () => {
  const grabToken = await fetch('https://enterprise-api.myteksi.net/portal/login', {
    'headers': {
      'accept': 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': 'null',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'x-mts-ssid': 'null'
    },
    'referrer': 'https://enterprise-api.myteksi.net/',
    'referrerPolicy': 'no-referrer-when-downgrade',
    'body': `{\"password\":\"${GRAB_PASSWORD}\",\"email\":\"${GRAB_EMAIL}\"}`,
    'method': 'POST',
    'mode': 'cors'
  }).then(res => res.json()).then(res => res.token)

  appsToUpdate.forEach(app => {
    try {
      heroku.request({
        method: 'PATCH',
        path: `/apps/${app}/config-vars`,
        body: {
          'GRAB_AUTHORIZATION': grabToken
        }
      }).then(() => console.log(`success for ${app}`))
    } catch (err) {
      console.log(`${app} failed because of ${err}`)
    }
  })
}

updateGrabConfig()
