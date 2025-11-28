/*
  Warnings:

  - A unique constraint covering the columns `[barcode]` on the table `FoodItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FoodItem" ADD COLUMN "barcode" TEXT;
ALTER TABLE "FoodItem" ADD COLUMN "brand" TEXT;
ALTER TABLE "FoodItem" ADD COLUMN "nameEs" TEXT;

-- CreateTable
CREATE TABLE "ProgressLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "weight" REAL NOT NULL,
    "waistSize" REAL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProgressLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "height" REAL NOT NULL,
    "weight" REAL NOT NULL,
    "activityLevel" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "likedFoods" TEXT NOT NULL DEFAULT '',
    "dailyMeals" INTEGER NOT NULL DEFAULT 4,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("activityLevel", "birthDate", "createdAt", "gender", "goal", "height", "id", "likedFoods", "updatedAt", "userId", "weight") SELECT "activityLevel", "birthDate", "createdAt", "gender", "goal", "height", "id", "likedFoods", "updatedAt", "userId", "weight" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "FoodItem_barcode_key" ON "FoodItem"("barcode");
