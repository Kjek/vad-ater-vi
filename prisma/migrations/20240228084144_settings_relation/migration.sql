/*
  Warnings:

  - A unique constraint covering the columns `[restaurantId]` on the table `restaurant_setting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurantId` to the `restaurant_setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurant_setting" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_setting_restaurantId_key" ON "restaurant_setting"("restaurantId");

-- AddForeignKey
ALTER TABLE "restaurant_setting" ADD CONSTRAINT "restaurant_setting_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
