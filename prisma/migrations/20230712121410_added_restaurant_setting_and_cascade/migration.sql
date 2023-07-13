-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "weekly_special" DROP CONSTRAINT "weekly_special_restaurantId_fkey";

-- CreateTable
CREATE TABLE "restaurant_setting" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "homeUrl" TEXT NOT NULL,
    "lunchUrl" TEXT NOT NULL,
    "regex" TEXT,

    CONSTRAINT "restaurant_setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_setting_name_key" ON "restaurant_setting"("name");

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_special" ADD CONSTRAINT "weekly_special_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
