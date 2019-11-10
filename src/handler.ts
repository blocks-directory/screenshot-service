import chromium from 'chrome-aws-lambda'

import { getPuppeteer } from './puppeteer.util'

export default async (event: any) => {
  const puppeteer = getPuppeteer()
  try {
    const { url = '', width = 1500, height = 900 } = event.queryStringParameters || {}

    if (!url || !url.startsWith('http')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ massage: 'you should specify page URL' }),
      }
    }

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
    })

    const page = await browser.newPage()
    page.setViewport({ width: Number(width), height: Number(height) })
    await page.goto(url)
    const imageBuffer = await page.screenshot()

    return {
      statusCode: 200,
      body: imageBuffer.toString('base64'),
      isBase64Encoded: true,
      headers: { 'Content-Type': 'image/png' },
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ massage: 'Something going wrong on backend side' }),
    }
  }
}
