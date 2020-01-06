import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1578335519065 implements MigrationInterface {
    name = 'InitialMigration1578335519065'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "UserRole" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, CONSTRAINT "UQ_8e689953af1d13b6964230defe2" UNIQUE ("name"), CONSTRAINT "PK_83fd6b024a41173978f5b2b9b79" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_00bd1ec314f664289873394731a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Like" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "postId" uuid NOT NULL, "vote" smallint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_20ede1755cb694ecf15674c8ba1" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "postId" uuid NOT NULL, "content" character varying(2000) NOT NULL, "isEdited" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_fe8d6bf0fcb531dfa75f3fd5bdb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "title" character varying(255) NOT NULL, "content" text NOT NULL, "isEdited" boolean NOT NULL DEFAULT false, "isBlocked" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_c4d3b3dcd73db0b0129ea829f9f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userRoleId" uuid NOT NULL, "username" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "passwordHash" character varying(255) NOT NULL, "settings" json NOT NULL DEFAULT '{}', "isBlocked" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_29a05908a0fa0728526d2833657" UNIQUE ("username"), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "UserToAchievement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "achievementId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "comment" character varying(2000), CONSTRAINT "PK_d2a104dd269cf18aac97c9ea721" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Achievement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(2000) NOT NULL, "condition" json NOT NULL DEFAULT '{}', CONSTRAINT "UQ_52b363ef51eeff95391204b4ab8" UNIQUE ("name"), CONSTRAINT "PK_a71fcfebac220bdb07847d293d2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "Tag" ADD CONSTRAINT "FK_5e581721885681fea6a4c311236" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Like" ADD CONSTRAINT "FK_e1ac421f1e6a1da63df580c62e4" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Like" ADD CONSTRAINT "FK_51278e86acf3099776701f86201" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_4c827119c9554affb8018d4da82" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_fb770b565e79f3a4a2ecef894a7" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Post" ADD CONSTRAINT "FK_97e81bcb59530bfb061e48aee6a" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_3f888f20ff261725ca74d9b2edb" FOREIGN KEY ("userRoleId") REFERENCES "UserRole"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "UserToAchievement" ADD CONSTRAINT "FK_7ac2232de3a16e62c20c60712fc" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "UserToAchievement" ADD CONSTRAINT "FK_ee8051c9f4850c79ed103db41da" FOREIGN KEY ("achievementId") REFERENCES "Achievement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "UserToAchievement" DROP CONSTRAINT "FK_ee8051c9f4850c79ed103db41da"`, undefined);
        await queryRunner.query(`ALTER TABLE "UserToAchievement" DROP CONSTRAINT "FK_7ac2232de3a16e62c20c60712fc"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_3f888f20ff261725ca74d9b2edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "Post" DROP CONSTRAINT "FK_97e81bcb59530bfb061e48aee6a"`, undefined);
        await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_fb770b565e79f3a4a2ecef894a7"`, undefined);
        await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_4c827119c9554affb8018d4da82"`, undefined);
        await queryRunner.query(`ALTER TABLE "Like" DROP CONSTRAINT "FK_51278e86acf3099776701f86201"`, undefined);
        await queryRunner.query(`ALTER TABLE "Like" DROP CONSTRAINT "FK_e1ac421f1e6a1da63df580c62e4"`, undefined);
        await queryRunner.query(`ALTER TABLE "Tag" DROP CONSTRAINT "FK_5e581721885681fea6a4c311236"`, undefined);
        await queryRunner.query(`DROP TABLE "Achievement"`, undefined);
        await queryRunner.query(`DROP TABLE "UserToAchievement"`, undefined);
        await queryRunner.query(`DROP TABLE "User"`, undefined);
        await queryRunner.query(`DROP TABLE "Post"`, undefined);
        await queryRunner.query(`DROP TABLE "Comment"`, undefined);
        await queryRunner.query(`DROP TABLE "Like"`, undefined);
        await queryRunner.query(`DROP TABLE "Tag"`, undefined);
        await queryRunner.query(`DROP TABLE "UserRole"`, undefined);
    }

}
