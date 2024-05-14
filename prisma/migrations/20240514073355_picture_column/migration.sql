/*
  Warnings:

  - Added the required column `picture` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` ADD COLUMN `picture` VARCHAR(255) NOT NULL;
