/*
  Warnings:

  - Added the required column `transfer_price` to the `t_tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_tour" ADD COLUMN     "transfer_price" TEXT NOT NULL;
