import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMediaController } from './product-media.controller';
import { ProductMediaService } from './product-media.service';
import { ProductMediaRepository } from './product-media.repository';

@Module({
  controllers: [ProductMediaController],
  imports: [TypeOrmModule.forFeature([ProductMediaRepository])],
  exports: [TypeOrmModule],
  providers: [ProductMediaService],
})
export class ProductMediaModule {}
