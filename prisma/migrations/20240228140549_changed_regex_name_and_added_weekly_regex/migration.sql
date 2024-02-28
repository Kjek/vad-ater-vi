/*
  Warnings:

  - You are about to drop the column `regex` on the `restaurant_setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "restaurant_setting" DROP COLUMN "regex",
ADD COLUMN     "lunchRegex" TEXT,
ADD COLUMN     "weeklyRegex" TEXT;
