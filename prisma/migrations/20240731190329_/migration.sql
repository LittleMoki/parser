/*
  Warnings:

  - The primary key for the `test` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "test" DROP CONSTRAINT "test_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "test_pkey" PRIMARY KEY ("id");
