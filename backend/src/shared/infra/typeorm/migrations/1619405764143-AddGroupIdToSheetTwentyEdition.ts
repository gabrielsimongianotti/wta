import { MigrationInterface, QueryRunner, TableForeignKey, TableColumn } from "typeorm";

export class AddGroupIdToSheetTwentyEdition1619405764143 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'sheetTwentyEdition',
      new TableColumn({
        name: 'group_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'sheetTwentyEdition',
      new TableForeignKey({
        name: 'sheetTwentyEditionGroup',
        columnNames: ['group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'group',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey(
      'sheetTwentyEdition',
      'sheetTwentyEditionGroup',
    );
    await queryRunner.dropColumn('sheetTwentyEdition', 'group_id');
  }

}
