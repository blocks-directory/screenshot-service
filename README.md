## Puppeteer AWS Lambda screenshot service
![Deploy Latest Master](https://github.com/EugeneDraitsev/screenshot-service/workflows/Deploy%20Latest%20Master/badge.svg)

Screenshot service running Headless-Chrome by [Puppeteer](https://github.com/GoogleChrome/puppeteer) on AWS Lambda.

Locally service works with `puppeteer`, packaged version contains uses `puppeteer-core` instead. With this workaround service able to work locally on any environment and at the same time have acceptable build size (~38Mb)

Demo available [here](https://iv9yprrg22.execute-api.eu-central-1.amazonaws.com/prod?url=http://google.com&width=1024&height=768)

![4zANq1zfq06J29.jpg](https://s3.eu-central-1.amazonaws.com/bb-image-drai/prod.png)

