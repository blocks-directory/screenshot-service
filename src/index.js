const setup = require('./browser/setup')

exports.handler = async (event) => {
  try {
    const { url, width = 1500, height = 900 } = event.queryStringParameters

    if (!url) {
      return {
        statusCode: 400,
        body: { massage: 'you should specify page URL' },
      }
    }

    const browser = await setup.getBrowser({ headless: true })
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
    return {
      statusCode: 500,
      body: { massage: 'Something going wrong on backend side' },
    }
  }
}
