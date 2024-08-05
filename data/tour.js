import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertData() {
	try {
		await prisma.$executeRaw`
			INSERT INTO t_tour (id, type_id, main_title, name, name2, price, oldprice, sales, body, map, url, photo, metakeywords, metadescription, ftext, ftext2, intop, intop2, intop3, types, include, exclude, places, transport, travellers, archive, solo_price, single_price, guaranted, new_type, transfer_price) VALUES

    `
		console.log('Данные успешно вставлены в базу данных')
	} catch (error) {
		console.error('Ошибка вставки данных:', error)
	} finally {
		await prisma.$disconnect()
	}
}

insertData()
