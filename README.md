# Tonitrus
> API Skeleton for Node.js using Express, Jest, Supertest, Circle CI and Vercel

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/rafaelcamargo/tonitrus/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rafaelcamargo/tonitrus/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/rafaelcamargo/tonitrus/badge.svg?branch=main)](https://coveralls.io/github/rafaelcamargo/tonitrus?branch=main)

## Contributing

1. Install [Node](https://nodejs.org/en/) 22.x (Use of [NVM](https://github.com/nvm-sh/nvm) is recommended)

2. Clone the repo:
``` bash
git clone git@github.com:rafaelcamargo/tonitrus.git
```

3. Go to the project directory
``` bash
cd tonitrus
```

4. Install the project dependencies
``` bash
npm install
```

5. Check your changes by running the command below and accessing `http://localhost:4000`:
``` bash
npm run start
```

## Format

In case you have changed the codebase, run the following command to ensure it is properly formatted:
``` bash
npm run format
```

## Tests

In case you have changed the API behavior, ensure that all changes are covered with automated tests:
``` bash
npm run test
```

You can optionally generate a coverage report while running tests:
``` bash
npm run test -- --coverage
```
