import { EntityRepository, Repository } from 'typeorm';
import { ProductMedia } from '@entity/product-media.entity';

@EntityRepository(ProductMedia)
export class ProductMediaRepository extends Repository<ProductMedia> {}
