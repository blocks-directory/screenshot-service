## Puppeteer AWS Lambda screenshot service
![Deploy Latest Master](https://github.com/EugeneDraitsev/screenshot-service/workflows/Deploy%20Latest%20Master/badge.svg)

Screenshot service running Headless-Chrome by [Puppeteer](https://github.com/GoogleChrome/puppeteer) on AWS Lambda.

AWS Lambda has a limitation for package size - 50Mb. Because of that we should use puppeteer without bundled binary.
In this repo I used headless_shell-67.0.3361.0.tar.gz as chrome binary for puppeteer for deployment
For local development puppeteer will be downloaded with binaries.

Demo available [here](https://iv9yprrg22.execute-api.eu-central-1.amazonaws.com/prod?url=http://google.com&width=1024&height=768)

![4zANq1zfq06J29.jpg](https://s3.eu-central-1.amazonaws.com/bb-image-drai/prod.png)


Please use: 
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 yarn
```
to skip Puppeteer downloading
