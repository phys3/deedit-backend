# deedit-backend

# TODO - finish writing generic setup instructions (currently horrible)

Table of Contents
-----------------

- [Steps to run](#steps-to-run)
- [Start project](#start-project)
- [Deployment](#deployment)

## Steps to run

1. Install docker [DOCKER](https://docs.docker.com/install/)
2. Install 10.x.x version of [Node](https://nodejs.org/en/). We used Node v10.14.1
3. Install 6.x.x version of [NPM](https://www.npmjs.com/). We used NPM 6.4.1

### Install dependency packages through npm
```
npm install
npm install -g typeorm
```

### Setup database

```
docker pull postgres

docker run --rm --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

- Connect to docker and add a **deedit** database
- Add postgress container connection params to an .env file. Use .env.default as reference

```
npm run migration:run
```

## Start project

```
npm run start
```

## Deployment
