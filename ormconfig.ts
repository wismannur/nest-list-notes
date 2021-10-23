import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import 'dotenv/config';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  extra: {
    connectionLimit: 100,
  },
};

export default config;
