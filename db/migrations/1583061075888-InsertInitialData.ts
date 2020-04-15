import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertInitialData1583061075888 implements MigrationInterface {
    name = 'InsertInitialData1583061075888'

    public async up(queryRunner: QueryRunner): Promise<any> {
        // Insert admin role
        await queryRunner.query(`
            INSERT INTO "UserRole" VALUES (
                'af3bc853-e93c-4c49-9b69-4421294d3efe',
                'admin'
            );`
        , undefined);
        
        // Insert user role
        await queryRunner.query(`
            INSERT INTO "UserRole" VALUES (
                'ddb3d8c4-8e3d-4806-8570-bd63bac830b0',
                'user'
            );`
        , undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM "UserRole";`, undefined);
    }

}
