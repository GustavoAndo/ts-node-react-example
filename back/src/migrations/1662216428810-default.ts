import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662216428810 implements MigrationInterface {
    name = 'default1662216428810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "dinheiro" numeric(10,2) NOT NULL DEFAULT '0', "nro_jogos" integer NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
