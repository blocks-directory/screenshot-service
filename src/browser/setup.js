const fs = require('fs')
const tar = require('tar')
const puppeteer = require('puppeteer')
const config = require('./config')

let browser

const isBrowserAvailable = async () => {
  try {
    await browser.version()
  } catch (e) {
    // not opened etc.
    return false
  }
  return true
}

const existsLocalChrome = () => new Promise((resolve) => {
  fs.exists(config.localChromePath, (exists) => {
    resolve(exists)
  })
})

const existsExecutableChrome = () => new Promise((resolve) => {
  fs.exists(config.executablePath, (exists) => {
    resolve(exists)
  })
})

const setupLocalChrome = () => new Promise((resolve, reject) => {
  fs.createReadStream(config.localChromePath)
    .on('error', err => reject(err))
    .pipe(tar.x({
      C: config.setupChromePath,
    }))
    .on('error', err => reject(err))
    .on('end', () => resolve())
})


const setupChrome = async () => {
  if (process.env.LOCAL) {
    return
  }

  if (!await existsExecutableChrome()) {
    if (await existsLocalChrome()) {
      await setupLocalChrome()
    } else {
      Promise.reject(new Error('Chrome is not available'))
    }
  }
}


exports.getBrowser = async (options) => {
  if (typeof browser === 'undefined' || !await isBrowserAvailable(browser)) {
    await setupChrome()
    const puppeteerOptions = {
      headless: true,
      ...options,
    }

    if (!process.env.LOCAL) {
      puppeteerOptions.executablePath = config.executablePath
      puppeteerOptions.args = config.launchOptionForLambda
    }

    browser = await puppeteer.launch(puppeteerOptions)
  }
  return browser
}
