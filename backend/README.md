
### micration

```sh
$ yarn typeorm migration:run
```

### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 5432, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
docker run --name contratado -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=postgres -e POSTGRES_DB=contratado -p 5432:5432 -d postgres
```
```sh
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd wta/backend
$ yarn
$ yarn dev:server
```
