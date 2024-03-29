import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateDto } from './dtos/create.dto';
import { UpdateDto } from './dtos/update.dto';
import { ProductMediaRepository } from './product-media/product-media.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private productMediaRepository: ProductMediaRepository,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return await this.productsRepository.findOne({ id });
  }

  async getAvailableUUID(): Promise<string> {
    let count = 1;
    let uuid: string;
    while (count != 0) {
      uuid = uuidv4();
      count = await (await this.productsRepository.find({ where: { uuid } }))
        .length;
    }
    return uuid;
  }

  async create(createDto: CreateDto): Promise<Product> {
    const product = await this.productsRepository.create(createDto);
    await this.productMediaRepository.update(
      { uuid: product.uuid },
      { productId: product.id },
    );
    return await this.productsRepository.save(createDto);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Product> {
    const product = await this.productsRepository.findOne({ id });
    const toUpdate = Object.assign(product, updateDto);
    return await this.productsRepository.save(toUpdate);
  }

  async delete(id: number) {
    return await this.productsRepository.softDelete(id);
  }
}
