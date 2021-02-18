import { ProductMedia } from '@entity/ProductMedia';
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDto } from './dtos/create.dto';
import { ProductMediaService } from './product-media.service';

@Controller('products/:productId/productMedia')
export class ProductMediaController {
  constructor(private productMediaService: ProductMediaService) {}

  @Get()
  async findAll(
    @Param('productId') productId: number,
  ): Promise<ProductMedia[]> {
    return await this.productMediaService.findAll(productId);
  }

  @Get()
  async findOne(
    @Param('productId') productId: number,
    id: number,
  ): Promise<ProductMedia> {
    return await this.productMediaService.findById(productId, id);
  }

  @Post()
  async create(
    @Param('productId') productId: number,
    createDto: CreateDto,
  ): Promise<ProductMedia> {
    return await this.productMediaService.create(productId, createDto);
  }

  @Delete()
  async delete(
    @Param('productId') _productId: number,
    id: number,
  ): Promise<null> {
    await this.productMediaService.delete(id);
    return null;
  }
}
