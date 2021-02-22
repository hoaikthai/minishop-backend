import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Product } from '@entity/product.entity';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('availableUUID')
  async getAvailableProductUUID(): Promise<string> {
    return await this.productsService.getAvailableUUID();
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productsService.findById(id);
  }


  @Post()
  async create(@Body() createDto: CreateDto): Promise<Product> {
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
