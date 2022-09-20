import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662652885054 implements MigrationInterface {
    name = 'default1662652885054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "senha" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "senha" character varying NOT NULL`);
    }

}
