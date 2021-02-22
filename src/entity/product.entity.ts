import { ProductMedia } from './product-media.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

export enum ProductStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.INACTIVE,
  })
  status: ProductStatus;

  @Column()
  uuid: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @OneToMany(() => ProductMedia, (productMedia) => productMedia.product)
  productMedia: ProductMedia[];
}
