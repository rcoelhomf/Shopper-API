import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693955359261 implements MigrationInterface {
    name = 'InitialMigration1693955359261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`packs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`qty\` int NOT NULL, \`packCode\` int NULL, \`productCode\` int NULL, UNIQUE INDEX \`REL_47ed656524d8bbf3eb96d55aba\` (\`productCode\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Products\` (\`code\` int NOT NULL, \`name\` varchar(100) NOT NULL, \`cost_price\` decimal(9,2) NOT NULL, \`sales_price\` decimal(9,2) NOT NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`packs\` ADD CONSTRAINT \`FK_a19bb2944a4bc67e367264c5a3a\` FOREIGN KEY (\`packCode\`) REFERENCES \`Products\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`packs\` ADD CONSTRAINT \`FK_47ed656524d8bbf3eb96d55aba8\` FOREIGN KEY (\`productCode\`) REFERENCES \`Products\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`INSERT INTO products VALUES (16,'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',18.44,20.49)`);
        await queryRunner.query(`INSERT INTO products VALUES (18,'BEBIDA ENERGÉTICA VIBE 2L',8.09,8.99)`);
        await queryRunner.query(`INSERT INTO products VALUES (19,'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',6.56,7.29)`);
        await queryRunner.query(`INSERT INTO products VALUES (20,'ENERGÉTICO RED BULL ENERGY DRINK 355ML',9.71,10.79)`);
        await queryRunner.query(`INSERT INTO products VALUES (21,'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML',10.71,11.71)`);
        await queryRunner.query(`INSERT INTO products VALUES (22,'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',6.74,7.49)`);
        await queryRunner.query(`INSERT INTO products VALUES (23,'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L',2.15,2.39)`);
        await queryRunner.query(`INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99)`);
        await queryRunner.query(`INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M',5.21,5.79)`);
        await queryRunner.query(`INSERT INTO products VALUES (1000,'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',48.54,53.94)`);
        await queryRunner.query(`INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78)`);
        await queryRunner.query(`INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00)`);
        await queryRunner.query(`INSERT INTO packs (packCode,productCode, qty) VALUES (1000,18,6)`);
        await queryRunner.query(`INSERT INTO packs (packCode,productCode, qty) VALUES (1010,24,1)`);
        await queryRunner.query(`INSERT INTO packs (packCode,productCode, qty) VALUES (1010,26,1)`);
        await queryRunner.query(`INSERT INTO packs (packCode,productCode, qty) VALUES (1020,19,3)`);
        await queryRunner.query(`INSERT INTO packs (packCode,productCode, qty) VALUES (1020,21,3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`packs\` DROP FOREIGN KEY \`FK_47ed656524d8bbf3eb96d55aba8\``);
        await queryRunner.query(`ALTER TABLE \`packs\` DROP FOREIGN KEY \`FK_a19bb2944a4bc67e367264c5a3a\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
        await queryRunner.query(`DROP INDEX \`REL_47ed656524d8bbf3eb96d55aba\` ON \`packs\``);
        await queryRunner.query(`DROP TABLE \`packs\``);
    }

}
