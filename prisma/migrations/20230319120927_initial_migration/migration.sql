-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "day" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeeklySpecial" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,

    CONSTRAINT "WeeklySpecial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_name_key" ON "Restaurant"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_restaurantId_day_key" ON "Menu"("restaurantId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "WeeklySpecial_restaurantId_type_key" ON "WeeklySpecial"("restaurantId", "type");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklySpecial" ADD CONSTRAINT "WeeklySpecial_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
