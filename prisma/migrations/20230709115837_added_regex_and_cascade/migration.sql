-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "weekly_special" DROP CONSTRAINT "weekly_special_restaurantId_fkey";

-- CreateTable
CREATE TABLE "restaurant_regex" (
    "id" TEXT NOT NULL,
    "regex" TEXT,
    "restaurantId" TEXT NOT NULL,

    CONSTRAINT "restaurant_regex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_regex_restaurantId_key" ON "restaurant_regex"("restaurantId");

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_special" ADD CONSTRAINT "weekly_special_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_regex" ADD CONSTRAINT "restaurant_regex_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
