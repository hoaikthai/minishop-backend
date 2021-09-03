import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductMedia } from '../entities/product-media.entity';
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

  @Get(':id')
  async findOne(
    @Query('productId') productId: number,
    @Param('id') id: number,
  ): Promise<ProductMedia> {
    return await this.productMediaService.findById(productId, id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<ProductMedia> {
    return await this.productMediaService.create(createDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Query('productId') _productId: number,
    @Param('id') id: number,
  ): Promise<null> {
    await this.productMediaService.delete(id);
    return null;
  }
}
