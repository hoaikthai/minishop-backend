import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUUIDToProductMediaAndProducts1613634613652
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'uuid',
        type: 'varchar',
      }),
    );
    await queryRunner.addColumn(
      'product_media',
      new TableColumn({
        name: 'uuid',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'uuid');
    await queryRunner.dropColumn('product_media', 'uuid');
  }
}
