require("dotenv/config");

const devConfig= [{
  "type": "postgres",
  "host": "localhost",
  "port": "5432",
  "username": "postgres",
  "password": "docker",
  "database": "contratado",
  "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}]

const prodConfig = [{
  "type": "postgres",
  "host": process.env.POSTGRES_HOST,
  "port": process.env.POSTGRES_PORT,
  "username": process.env.POSTGRES_USERNAME,
  "password": process.env.POSTGRES_PASSWORD,
  "database": process.env.POSTGRES_DATABASE,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": ["./dist/modules/**/infra/typeorm/entities/*.js"],
  "migrations": ["./dist/shared/infra/typeorm/migrations/*.js"],
  "cli": {
    "migrationsDir": "./shared/infra/typeorm/migrations"
  }
}]

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;