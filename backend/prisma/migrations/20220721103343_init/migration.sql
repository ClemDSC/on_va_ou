-- CreateTable
CREATE TABLE `destination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `continent` VARCHAR(255) NOT NULL,
    `pays` VARCHAR(255) NOT NULL,
    `ville` VARCHAR(255) NOT NULL,
    `langue` VARCHAR(255) NOT NULL,
    `devise` VARCHAR(255) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `objId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `objet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `categorie` VARCHAR(255) NOT NULL,
    `saisonnier` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `objet_nom_key`(`nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `destination` ADD CONSTRAINT `destination_objId_fkey` FOREIGN KEY (`objId`) REFERENCES `objet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
