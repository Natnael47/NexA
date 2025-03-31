/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Elevator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Elevator_title_key` ON `Elevator`(`title`);
