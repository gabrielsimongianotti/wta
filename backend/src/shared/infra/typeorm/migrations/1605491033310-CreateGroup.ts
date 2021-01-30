import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGroup1605491033310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_first_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_secund_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_third_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_fourth_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_fifth_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_sixth_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_seventh_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_master_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'weekday',
            type: 'varchar',
          },
          {
            name: 'initialHours',
            type: 'varchar',
          },
          {
            name: 'endHours',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'user_first_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_first_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_secund_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_secund_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_third_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_third_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_fourth_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_fourth_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_fifth_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_fifth_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_sixth_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_sixth_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_seventh_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_seventh_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'user_master_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_master_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('group');
  }
}
