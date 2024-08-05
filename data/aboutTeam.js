import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertData() {
	await prisma.$executeRaw`
INSERT INTO t_about (id, name, position, employment, body, publick, order_number, photo) VALUES
(1, 'Тимур Алимов', 'CEO Minzifa Travel', 'Управляет всем что есть в офисе и вне офиса', '', 1, 1, '20211028160059.jpg'),
(4, 'Анна Смирнова', 'Туроператор', 'Эксперт по индивидуальным турам и MICE туризму', '<div><a href=\"mailto:travel@minzifatravel.com\" target=\"_blank\"> travel@minzifatravel.com</a></div>\r\n<div><a href=\"https://wa.me/998936203300\" target=\"_blank\" role=\"button\"> <span style=\"color: rgb(51, 51, 51);\">+998936203300</span></a></div>', 1, 5, '20200228060156.jpg'),
(9, 'Шохумар Нарзибаев', 'Транспорт Менеджер ', 'Организация транспорта по Самарканду', '', 0, 0, '20171121072354.jpg'),
(11, 'Тимур Ашуров', 'Маркет-контент менеджер', 'Ответственный за продвижение рекламы', '', 0, 0, '20180927045212.jpg'),
(12, 'Тимур Джаббаров', 'Маркет-контент менеджер', 'Ответственный за продвижение рекламы', '', 0, 0, '20180927045747.jpg'),
(14, 'Лолита Бурнашева', 'Старший Тревел менеджер', 'Менеджер по работе с корпоративными турами и B2B', '', 1, 2, '20211103104953.jpg'),
(15, 'Ойбек Муратов', 'Тревел менеджер', 'Тревел эксперт & Тур лидер', '<p><a href=\"mailto:admin01@minzifatravel.com\" target=\"_blank\"><span style=\"color: rgb(0, 0, 0);\">admin01@minzifatravel.com</span></a></p>', 0, 6, '20200228060620.jpg'),
(16, 'Мадина Хамраева', 'Тревел менеджер', 'Тревел Менеджер по работе с VIP группами', '<a class=\"btn btn-link text-dark\" href=\"https://wa.me/998936203300\" target=\"_blank\"><i class=\"fab fa-whatsapp\"></i> Связаться по Whatsapp</a>\r\n                        <a class=\"btn btn-link text-dark\" href=\"https://t.me/+998936203300\" target=\"_blank\"><i class=\"fab fa-telegram-plane\"></i> Связаться по Telegram</a>', 1, 3, '20230203121416.jpg'),
(18, 'Малика Курбанова', 'Тревел менеджер', 'Менеджер по работе с групповыми турами', '<p><a class=\"btn btn-link text-dark\" href=\"https://wa.me/998910841107\" target=\"_blank\"><i class=\"fab fa-whatsapp\"></i> Связаться по Whatsapp</a> <a class=\"btn btn-link text-dark\" href=\"https://t.me/+998910841107\" target=\"_blank\"><i class=\"fab fa-telegram-plane\"></i> Связаться по Telegram</a></p>', 1, 4, '20230203122130.jpg'),
(19, 'Камилла Джаббарова', 'Тревел менеджер', 'Тревел эксперт по Шелковому Пути', '', 1, 6, '20230203125055.jpg'),
(20, 'Дильдора Бахрамова', 'Тревел менеджер', 'Менеджер по работе с групповыми турами', '<a class=\"btn btn-link text-dark\" href=\"https://wa.me/79362404677\" target=\"_blank\"><i class=\"fab fa-whatsapp\"></i> Связаться по Whatsapp</a>\r\n<a class=\"btn btn-link text-dark\" href=\"https://t.me/bakhramovadildora\" target=\"_blank\"><i class=\"fab fa-telegram-plane\"></i> Связаться по Telegram</a>', 0, 7, '20230203125119.jpg');

  `
	console.log('Данные успешно вставлены в базу данных')
	await prisma.$disconnect()
}

insertData()
