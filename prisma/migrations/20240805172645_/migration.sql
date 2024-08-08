/*
  Warnings:

  - You are about to drop the column `oldPrice` on the `t_tour` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `t_tour` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `t_tour` table. All the data in the column will be lost.
  - Added the required column `oldprice` to the `t_tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `t_tour` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "t_tour" DROP CONSTRAINT "t_tour_teamId_fkey";

-- DropForeignKey
ALTER TABLE "t_tour" DROP CONSTRAINT "t_tour_typeId_fkey";

-- AlterTable
ALTER TABLE "t_tour" DROP COLUMN "oldPrice",
DROP COLUMN "teamId",
DROP COLUMN "typeId",
ADD COLUMN     "oldprice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "type_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "t_tour" ADD CONSTRAINT "t_tour_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "t_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
