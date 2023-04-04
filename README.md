
  

<p  align="center">

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo"  /></a>

</p>

  

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  

<p  align="center">A progressive <a  href="http://nodejs.org"  target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p  align="center">

<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/v/@nestjs/core.svg"  alt="NPM Version"  /></a>

<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/l/@nestjs/core.svg"  alt="Package License"  /></a>

<a  href="https://www.npmjs.com/~nestjscore"  target="_blank"><img  src="https://img.shields.io/npm/dm/@nestjs/common.svg"  alt="NPM Downloads"  /></a>

<a  href="https://circleci.com/gh/nestjs/nest"  target="_blank"><img  src="https://img.shields.io/circleci/build/github/nestjs/nest/master"  alt="CircleCI"  /></a>

<a  href="https://coveralls.io/github/nestjs/nest?branch=master"  target="_blank"><img  src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9"  alt="Coverage"  /></a>

<a  href="https://discord.gg/G7Qnnhy"  target="_blank"><img  src="https://img.shields.io/badge/discord-online-brightgreen.svg"  alt="Discord"/></a>

<a  href="https://opencollective.com/nest#backer"  target="_blank"><img  src="https://opencollective.com/nest/backers/badge.svg"  alt="Backers on Open Collective"  /></a>

<a  href="https://opencollective.com/nest#sponsor"  target="_blank"><img  src="https://opencollective.com/nest/sponsors/badge.svg"  alt="Sponsors on Open Collective"  /></a>

<a  href="https://paypal.me/kamilmysliwiec"  target="_blank"><img  src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>

<a  href="https://opencollective.com/nest#sponsor"  target="_blank"><img  src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg"  alt="Support us"></a>

<a  href="https://twitter.com/nestframework"  target="_blank"><img  src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>

</p>

<!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  

## Description

  

Weather API is a very simple API for querying and persisting weather forecasts

  
  

### Dependencies

- NodeJS

- Yarn

- PostgreSQL 15

  

### Setup

  

#### Environment Variables

Project depends on 3 environment variables

````

PORT - tells API what port to listen for incoming HTTP requests

OPEN_WEATHER_API_KEY - API key for querying data from OpenWeatherAPI

DATABASE - postgres connection string

````

  

You will find `.env.example` in root directory. You can use that a sample for creating `.env` file, which must be placed in the root directory as well.

  

#### Migrations

  

TypeORM will do automatic sync of the database table(s)

  

#### Installing dependencies

In the root folder of this project, simply run

  

````

yarn install

````

  

#### Running

After setting up environment variables and installing dependencies, you can run project by running following command in root directory:

````

yarn start

````

or run it in watch mode

````

yarn start:dev

````


#### Swagger
Swagger is available on `/docs` url - e.g. if you're running API on `api.yourdomain.com`, Swagger will be available on `api.yourdomain.com/docs` 