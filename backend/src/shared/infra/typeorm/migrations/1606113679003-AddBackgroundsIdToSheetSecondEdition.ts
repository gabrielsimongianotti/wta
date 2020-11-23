import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddBackgroundsIdToSheetSecondEdition1606113679003
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'backgrounds_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'sheetSecondEditionBackgrounds',
        columnNames: ['backgrounds_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'backgrounds',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'sheetSecondEditionBackgrounds',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'backgrounds_id');
  }
}
