import { EntityRepository, Repository } from 'typeorm';
import { Product } from '@entity/Product';
import { ProductMedia } from '@entity/ProductMedia';

@EntityRepository(Product)
export class ProductMediaRepository extends Repository<ProductMedia> {}
