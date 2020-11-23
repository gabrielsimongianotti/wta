import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddFlawIdToSheetSecondEdition1606091193078
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'flaw_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'sheetSecondEditionFlaw',
        columnNames: ['flaw_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'flaw',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'sheetSecondEditionFlaw',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'flaw_id');
  }
}
