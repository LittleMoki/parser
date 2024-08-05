import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertData() {
	try {
		await prisma.$executeRaw`
INSERT INTO t_exchange (id, title, name, symbol, exchange_rate, primary_valuta) VALUES
(1, 'Рубль', 'rub', '₽', 93, true),
(2, 'Сум', 'som', 'Сум', 12450, false),
(3, 'Евро', 'euro', '€', 1.06, false);

`
		console.log('Данные успешно вставлены в базу данных')
	} catch (error) {
		console.error('Ошибка вставки данных:', error)
	} finally {
		await prisma.$disconnect()
	}
}

insertData()
