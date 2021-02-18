import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Get()
  async findOne(id: number): Promise<Product> {
    return await this.productsService.findById(id);
  }

  @Get()
  async getAvailableProductUUID(): Promise<string> {
    return await this.productsService.getAvailableUUID();
  }

  @Post()
  async create(createDto: CreateDto): Promise<Product> {
    return await this.productsService.create(createDto);
  }

  @Put()
  async update(updateDto: UpdateDto): Promise<Product> {
    return await this.productsService.update(updateDto);
  }

  @Delete()
  async delete(id: number): Promise<null> {
    await this.productsService.delete(id);
    return null;
  }
}
