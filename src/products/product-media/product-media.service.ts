import { Injectable } from '@nestjs/common';
import { ProductMedia } from '@entity/product-media.entity';
import { CreateDto } from './dtos/create.dto';
import { ProductMediaRepository } from './product-media.repository';

@Injectable()
export class ProductMediaService {
  constructor(private productMediaRepository: ProductMediaRepository) {}

  async findAll(productId: number): Promise<ProductMedia[]> {
    return await this.productMediaRepository.find({ productId });
  }

  async findById(productId, id: number): Promise<ProductMedia> {
    return await this.productMediaRepository.findOne({ productId, id });
  }

  async create(createDto: CreateDto): Promise<ProductMedia> {
    const productMedia = await this.productMediaRepository.create(createDto);
    return await this.productMediaRepository.save(productMedia);
  }

  async delete(id: number) {
    return await this.productMediaRepository.delete(id);
  }
}
