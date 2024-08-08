/*
  Warnings:

  - You are about to drop the column `date` on the `t_tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_tour" DROP COLUMN "date",
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name2" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "sales" DROP NOT NULL,
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "photo" DROP NOT NULL,
ALTER COLUMN "metakeywords" DROP NOT NULL,
ALTER COLUMN "metadescription" DROP NOT NULL,
ALTER COLUMN "intop" DROP NOT NULL,
ALTER COLUMN "intop2" DROP NOT NULL,
ALTER COLUMN "intop3" DROP NOT NULL,
ALTER COLUMN "travellers" DROP NOT NULL,
ALTER COLUMN "archive" DROP NOT NULL,
ALTER COLUMN "solo_price" DROP NOT NULL,
ALTER COLUMN "single_price" DROP NOT NULL,
ALTER COLUMN "guaranted" DROP NOT NULL,
ALTER COLUMN "new_type" DROP NOT NULL,
ALTER COLUMN "oldprice" DROP NOT NULL,
ALTER COLUMN "transfer_price" DROP NOT NULL;
