import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddIndexToUUID1613645833488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'products',
      new TableIndex({
        name: 'IDX_PRODUCT_UUID',
        columnNames: ['uuid'],
      }),
    );
    await queryRunner.createIndex(
      'product_media',
      new TableIndex({
        name: 'IDX_PRODUCT_MEDIA_UUID',
        columnNames: ['uuid'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('products', 'IDX_PRODUCT_UUID');
    await queryRunner.dropIndex('product_media', 'IDX_PRODUCT_MEDIA_UUID');
  }
}
