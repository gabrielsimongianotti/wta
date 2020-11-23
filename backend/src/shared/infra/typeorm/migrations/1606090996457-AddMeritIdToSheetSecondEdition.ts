import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddMeritIdToSheetSecondEdition1606090996457
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'merit_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'sheetSecondEditionMerit',
        columnNames: ['merit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'merit',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'sheetSecondEditionMerit',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'merit_id');
  }
}
