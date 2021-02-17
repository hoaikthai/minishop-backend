import { Injectable } from '@nestjs/common';
import { Product } from '@entity/Product';
import { ProductsRepository } from './repositories/productsRepository';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return await this.productsRepository.findOne({ id });
  }

  async create(createDto: CreateDto): Promise<Product> {
    return await this.productsRepository.create(createDto);
  }

  async update(updateDto: UpdateDto): Promise<Product> {
    const product = await this.productsRepository.findOne({ id: updateDto.id });
    const toUpdate = Object.assign(product, updateDto);
    return await this.productsRepository.save(toUpdate);
  }

  async delete(id: number) {
    return await this.productsRepository.softDelete(id);
  }
}