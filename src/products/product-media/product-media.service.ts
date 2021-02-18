import { ProductMedia } from '@entity/ProductMedia';
import { Injectable } from '@nestjs/common';
import { CreateDto } from './dtos/create.dto';
import { ProductMediaRepository } from './productMediaRepository';

@Injectable()
export class ProductMediaService {
  constructor(private productMediaRepository: ProductMediaRepository) {}

  async findAll(productId: number): Promise<ProductMedia[]> {
    return await this.productMediaRepository.find({ productId });
  }

  async findById(productId, id: number): Promise<ProductMedia> {
    return await this.productMediaRepository.findOne({ productId, id });
  }

  async create(productId: number, createDto: CreateDto): Promise<ProductMedia> {
    return await this.productMediaRepository.create({ productId, ...createDto});
  }

  async delete(id: number) {
    return await this.productMediaRepository.delete(id);
  }
}
