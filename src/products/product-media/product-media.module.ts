import { Module } from '@nestjs/common';
import { ProductMediaController } from './product-media.controller';
import { ProductMediaService } from './product-media.service';

@Module({
  controllers: [ProductMediaController],
  providers: [ProductMediaService]
})
export class ProductMediaModule {}
