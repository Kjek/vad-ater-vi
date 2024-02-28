/*
  Warnings:

  - You are about to drop the column `name` on the `restaurant` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "restaurant_name_key";

-- AlterTable
ALTER TABLE "restaurant" DROP COLUMN "name";
