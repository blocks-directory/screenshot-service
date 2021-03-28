import puppeteerCore from 'puppeteer-core'

let puppeteerLocal: any

try {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  puppeteerLocal = require('puppeteer')
} catch (e) {
  // eslint-disable-next-line no-console
  console.log('local puppeteer is missing')
}

// eslint-disable-next-line import/prefer-default-export
export const getPuppeteer = () => puppeteerLocal || puppeteerCore
