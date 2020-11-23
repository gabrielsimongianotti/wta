import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSheetSecondEdition1605497434681
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sheetSecondEdition',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'player',
            type: 'varchar',
          },
          {
            name: 'augurio',
            type: 'varchar',
          },
          {
            name: 'garou_name',
            type: 'varchar',
          },
          {
            name: 'rage',
            type: 'int',
          },
          {
            name: 'spendingRage',
            type: 'int',
          },
          {
            name: 'gnosis',
            type: 'int',
          },
          {
            name: 'spendingGnosis',
            type: 'int',
          },
          {
            name: 'willpower',
            type: 'int',
          },
          {
            name: 'spendingWillpower',
            type: 'int',
          },
          {
            name: 'glory',
            type: 'int',
          },
          {
            name: 'spendingGlory',
            type: 'int',
          },
          {
            name: 'honor',
            type: 'int',
          },
          {
            name: 'spendingHonor',
            type: 'int',
          },
          {
            name: 'wisdom',
            type: 'int',
          },
          {
            name: 'spendingWisdom',
            type: 'int',
          },
          {
            name: 'Rank',
            type: 'varchar',
          },
          {
            name: 'experience',
            type: 'int',
          },
          {
            name: 'strength',
            type: 'int',
          },
          {
            name: 'dexterity',
            type: 'int',
          },
          {
            name: 'stamina',
            type: 'int',
          },
          {
            name: 'charisma',
            type: 'int',
          },
          {
            name: 'manipulation',
            type: 'int',
          },
          {
            name: 'appearance',
            type: 'int',
          },
          {
            name: 'perception',
            type: 'int',
          },
          {
            name: 'intelligence',
            type: 'int',
          },
          {
            name: 'wits',
            type: 'int',
          },
          {
            name: 'alertness',
            type: 'int',
          },
          {
            name: 'athletics',
            type: 'int',
          },
          {
            name: 'brawl',
            type: 'int',
          },

          {
            name: 'empathy',
            type: 'int',
          },
          {
            name: 'expression',
            type: 'int',
          },
          {
            name: 'intimidation',
            type: 'int',
          },
          {
            name: 'leadership',
            type: 'int',
          },
          {
            name: 'primal_urge',
            type: 'int',
          },
          {
            name: 'streetwise',
            type: 'int',
          },
          {
            name: 'subterfuge',
            type: 'int',
          },

          {
            name: 'animal_ken',
            type: 'int',
          },
          {
            name: 'crafts',
            type: 'int',
          },
          {
            name: 'drive',
            type: 'int',
          },
          {
            name: 'etiquette',
            type: 'int',
          },
          {
            name: 'firearms',
            type: 'int',
          },
          {
            name: 'larceny',
            type: 'int',
          },
          {
            name: 'melee',
            type: 'int',
          },
          {
            name: 'performance',
            type: 'int',
          },
          {
            name: 'stealth',
            type: 'int',
          },
          {
            name: 'survival',
            type: 'int',
          },

          {
            name: 'academics',
            type: 'int',
          },
          {
            name: 'computer',
            type: 'int',
          },
          {
            name: 'enigmas',
            type: 'int',
          },
          {
            name: 'investigation',
            type: 'int',
          },
          {
            name: 'law',
            type: 'int',
          },
          {
            name: 'medicine',
            type: 'int',
          },
          {
            name: 'occult',
            type: 'int',
          },
          {
            name: 'rituals',
            type: 'int',
          },
          {
            name: 'science',
            type: 'int',
          },
          {
            name: 'technology',
            type: 'int',
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
            name: 'user',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
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
