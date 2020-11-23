import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddFetichesIdToSheetSecondEdition1606086681946
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'fetiches_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'sheetSecondEditionFetiches',
        columnNames: ['fetiches_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fetiches',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'sheetSecondEditionFetiches',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'fetiches_id');
  }
}
