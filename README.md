## Puppeteer AWS Lambda screenshot service

Screenshot service running Headless-Chrome by [Puppeteer](https://github.com/GoogleChrome/puppeteer) on AWS Lambda.

AWS Lambda has a limitation for package size - 50Mb. Because of that we should use puppeteer without bundled binary.
In this repo I used headless_shell-67.0.3361.0.tar.gz as chrome binary for puppeteer for deployment
For local development puppeteer will be downloaded with binaries.

Demo available [here](https://cnuzre0zkf.execute-api.eu-central-1.amazonaws.com/prod?url=http://google.com&width=1024&height=768)
