import { EntityRepository, Repository } from 'typeorm';
import { ProductMedia } from '../entities/product-media.entity';

@EntityRepository(ProductMedia)
export class ProductMediaRepository extends Repository<ProductMedia> {}
