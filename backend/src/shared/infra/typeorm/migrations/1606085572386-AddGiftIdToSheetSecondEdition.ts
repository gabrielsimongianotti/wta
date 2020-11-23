import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddGiftIdToSheetSecondEdition1606085572386
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'gift_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'SheetSecondEditionGift',
        columnNames: ['gift_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gift',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'SheetSecondEditionGift',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'gift_id');
  }
}
