-- DropForeignKey
ALTER TABLE `destination` DROP FOREIGN KEY `destination_objId_fkey`;

-- AddForeignKey
ALTER TABLE `destination` ADD CONSTRAINT `destination_objId_fkey` FOREIGN KEY (`objId`) REFERENCES `objet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
