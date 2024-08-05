/*
  Warnings:

  - You are about to drop the `check` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "check";

-- CreateTable
CREATE TABLE "test" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);
