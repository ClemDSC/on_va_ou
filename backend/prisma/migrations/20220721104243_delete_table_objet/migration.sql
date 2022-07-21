/*
  Warnings:

  - You are about to drop the column `objId` on the `destination` table. All the data in the column will be lost.
  - You are about to drop the `objet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `objcategorie` to the `destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objnom` to the `destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `destination` DROP FOREIGN KEY `destination_objId_fkey`;

-- AlterTable
ALTER TABLE `destination` DROP COLUMN `objId`,
    ADD COLUMN `objcategorie` VARCHAR(255) NOT NULL,
    ADD COLUMN `objnom` VARCHAR(255) NOT NULL,
    ADD COLUMN `objsaisonnier` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `objet`;
