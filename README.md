
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
