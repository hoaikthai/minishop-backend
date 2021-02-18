import { ProductMedia } from '@entity/ProductMedia';
import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateDto } from './dtos/create.dto';
import { ProductMediaService } from './product-media.service';

@Controller('productMedia')
export class ProductMediaController {
  constructor(private productMediaService: ProductMediaService) {}

  @Get()
  async findAll(
    @Query('productId') productId: number,
  ): Promise<ProductMedia[]> {
    return await this.productMediaService.findAll(productId);
  }

  @Get()
  async findOne(
    @Query('productId') productId: number,
    id: number,
  ): Promise<ProductMedia> {
    return await this.productMediaService.findById(productId, id);
  }

  @Post()
  async create(
    createDto: CreateDto,
  ): Promise<ProductMedia> {
    return await this.productMediaService.create(createDto);
  }

  @Delete()
  async delete(
    @Query('productId') _productId: number,
    id: number,
  ): Promise<null> {
    await this.productMediaService.delete(id);
    return null;
  }
}
