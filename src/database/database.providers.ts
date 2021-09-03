import { createConnection } from 'typeorm';
import connectionOptions from './ormconfig';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(connectionOptions),
  },
];
