import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.providers';
import connectionOptions from './ormconfig';

@Module({
  providers: [...databaseProviders],
  imports: [TypeOrmModule.forRoot(connectionOptions)],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
