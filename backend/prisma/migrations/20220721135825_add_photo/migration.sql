/*
  Warnings:

  - Added the required column `photo` to the `destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destination` ADD COLUMN `photo` VARCHAR(1000) NOT NULL;
