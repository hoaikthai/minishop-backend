import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Product } from '../entity/Product';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productsService.findById(id);
  }

  @Get('availableUUID')
  async getAvailableProductUUID(): Promise<string> {
    return await this.productsService.getAvailableUUID();
  }

  @Post()
  async create(createDto: CreateDto): Promise<Product> {
    return await this.productsService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, updateDto: UpdateDto): Promise<Product> {
    return await this.productsService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<null> {
    await this.productsService.delete(id);
    return null;
  }
}
