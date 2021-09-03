import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/../**/entities/*.entity{.ts,.js}`],
  synchronize: false,
  logging: ['warn', 'error'],
  migrations: [`${__dirname}/../**/database/migrations/*.ts`],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default connectionOptions;
