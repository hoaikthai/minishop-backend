import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductMediaModule } from './product-media/product-media.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [ProductMediaModule]
})
export class ProductsModule {}
