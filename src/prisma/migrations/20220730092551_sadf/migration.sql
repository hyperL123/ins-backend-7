/*
  Warnings:

  - You are about to drop the column `hashTag` on the `HashTag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `HashTag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `HashTag` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "HashTag_hashTag_key";

-- AlterTable
ALTER TABLE "HashTag" DROP COLUMN "hashTag",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HashTag_name_key" ON "HashTag"("name");
