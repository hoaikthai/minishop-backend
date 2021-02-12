import { EntityRepository, Repository } from 'typeorm';
import { Product } from '@entity/Product';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {}
