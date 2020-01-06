const config = require('./config')

const {
  db: {
    username,
    password,
    database,
    host,
    port
  }
} = config

module.exports = {
  type: 'postgres',
  username,
  password,
  database,
  host,
  port,
  synchronize: false,
  migrationsRun: true,
  entities: ['dist/db/entity/*.js', 'dist/db/entity/*.ts'],
  migrations: ['dist/db/migrations/*.js', 'dist/db/migrations/*.ts'],
  cli: {
    migrationsDir: 'db/migrations'
  }
}
