import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductMediaModule } from './product-media/product-media.module';
import { ProductsRepository } from './products.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsRepository]),
    ProductMediaModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
