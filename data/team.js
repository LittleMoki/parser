import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertData() {
	try {
		await prisma.$executeRaw`
			INSERT INTO t_team (id, name, photo) VALUES
(1, 'Minzifa Travel', ''),
(2, 'Aksai Travel', ''),
(3, 'InterPersia', ''),
(4, 'Azam ', '');
    `
		console.log('Данные успешно вставлены в базу данных')
	} catch (error) {
		console.error('Ошибка вставки данных:', error)
	} finally {
		await prisma.$disconnect()
	}
}

insertData()
