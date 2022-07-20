/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `objet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `objet_nom_key` ON `objet`(`nom`);
