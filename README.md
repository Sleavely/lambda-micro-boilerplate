# lambda-micro-boilerplate [![Build Status](https://travis-ci.org/Sleavely/lambda-micro-boilerplate.svg?branch=master)](https://travis-ci.org/Sleavely/lambda-micro-boilerplate)

[Github](https://github.com/Sleavely/lambda-micro-boilerplate) | NPM | Travis


* [About](#about)
* [Install](#install)
* [Quick Start](#quick-start)
* [License](#license)

---

## About

_lambda-micro-boilerplate_ provides a simple template with a minimal dependency footprint for AWS Lambda projects. It uses [`lambda-api`](https://github.com/jeremydaly/lambda-api) to manage routing.

---

## Install

```bash
DIRECTORY="my-lamda-api"
git clone --depth=1 git@github.com:Sleavely/lambda-micro-boilerplate.git $DIRECTORY
cd $DIRECTORY
rm -rf .git/
npm install
```

---

## Quick Start

1. Modify routes in `api.js`
1. Run `node local.js` to start your API locally
1. ???
1. Deploy!

## Bootstrap Checklist

The slightly longer version:

- Change or update the [LICENSE](./LICENSE)
- Update [package.json](./package.json):
  - `name`
  - `description`
  - `repository`
  - `keywords`
  - `author`
  - `license`
- `git init`
- Replace this README with something useful.


---

## License

The license declaration can be found in [LICENSE](./LICENSE). (It's **MIT**)
