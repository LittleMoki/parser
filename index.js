const enter = [
	['name', 'joni'],
	['age', 8],
	['job', 'fullstack'],
]

const pam = new Map(enter)

const array = [...pam]
const pamObj = Object.fromEntries(pam.entries())
console.log(pamObj)
