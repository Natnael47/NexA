-- CreateTable
CREATE TABLE `Project_Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `googleMapLink` TEXT NOT NULL,
    `images` JSON NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'Ongoing',
    `startDate` DATETIME(3) NULL,
    `completionDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Project_Data_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
