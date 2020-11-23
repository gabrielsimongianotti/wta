import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddRitesIdToSheetSecondEdition1606087895484
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sheetSecondEdition',
      new TableColumn({
        name: 'rite_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetSecondEdition',
      new TableForeignKey({
        name: 'sheetSecondEditionRites',
        columnNames: ['rite_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rites',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'sheetSecondEdition',
      'sheetSecondEditionRites',
    );
    await queryRunner.dropColumn('sheetSecondEdition', 'rite_id');
  }
}
