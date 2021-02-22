import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('product_media')
export class ProductMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ name: 'product_id' })
  productId: number;

  @Column()
  uuid: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne(() => Product, (product) => product.productMedia)
  product: Product;
}
