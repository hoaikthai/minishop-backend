import { ProductMedia } from 'entity/ProductMedia';
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

@Entity()
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

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => ProductMedia, (productMedia) => productMedia.product)
  productMedia: ProductMedia[];
}
