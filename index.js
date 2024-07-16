import axios from 'axios'
import Cheerio from 'cheerio'
import fs from 'fs'

const baseUrl = 'https://turi-uzbekistana.ru/tour'

const data = []

// Функция для получения HTML по URL
const getHtml = async url => {
	try {
		const { data: html } = await axios.get(url)
		return html
	} catch (error) {
		console.error(`Error fetching URL ${url}:`, error)
		return null
	}
}

// Функция для парсинга данных тура
const parseTour = async url => {
	const html = await getHtml(url)
	if (!html) return
	const $ = Cheerio.load(html)
	const root = 'main>div.container-fluid'
	const name = $(`${root}>.tour-header>.tour-title-block>h1`).text().trim()
	const price = $(
		`${root}>.tour-header>.tour-price-block>.tour-actual-price>#header-menu-price`
	)
		.text()
		.trim()

	// Извлечение главного изображения тура
	const photo = $(
		`${root}>.tour-second-block>.tour-img>.swiper>.swiper-wrapper>.swiper-slide>img`
	)
		.attr('src')
		?.split('/')
		.splice(3, 1)
		.join('/') // Правильное форматирование URL изображения

	// Извлечение всех изображений тура
	const photos = $(
		`${root}>.tour-second-block>.tour-img>#tourThumbSlider>.swiper-wrapper>.swiper-slide>img`
	)
		.map((i, el) => $(el).attr('src'))
		.get()
		.map(src => src.split('/').splice(3, 1).join('/')) // Форматирование URL изображений

	// Удаление главного изображения из массива всех изображений
	const uniquePhotos = photos.filter(p => p !== photo)

	const name2 = $(
		`${root}>.tour-second-block>.tour-info-wrapper>h2.tour-info-title`
	)
		.text()
		.trim()

	data.push({
		name,
		price,
		photo,
		photos: uniquePhotos,
		name2,
	})

	fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
		if (err) throw err
	})
}

// Функция для парсинга списка туров и получения ссылок на детальные страницы
const parseTourUrl = async () => {
	const html = await getHtml(baseUrl)
	if (!html) return

	const $ = Cheerio.load(html)
	const tourLinks = $('.tours>.tour-card>.tour-box>a')
		.map((i, el) => $(el).attr('href'))
		.get()

	for (const link of tourLinks) {
		const fullUrl = `${baseUrl}${link}`
		await parseTour(fullUrl)
	}
}

// Запуск функции для парсинга списка туров
parseTourUrl()
