import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664126509906 implements MigrationInterface {
    name = 'default1664126509906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."usuarios_perfil_enum" AS ENUM('administrador', 'gestor', 'colaborador')`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "perfil" "public"."usuarios_perfil_enum" NOT NULL DEFAULT 'colaborador'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "perfil"`);
        await queryRunner.query(`DROP TYPE "public"."usuarios_perfil_enum"`);
    }

}
