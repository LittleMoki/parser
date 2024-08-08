import { compare } from 'bcrypt'

const hashedPassword =
	// $2b$07$YfgcHn1GDFBfOagsEmfQZ.nHh9lcNNBjOAC0VS.8dF9agw89CZK4W
	'$2b$07$cejkrFhfrV.kzA8CIvFEGOmiy.VAgW0amEtp4E0u5NO.l0RyWSIS6'
const passwordToCheck = 'eshonipir63'

compare(passwordToCheck, hashedPassword, (err, result) => {
	if (result) {
		console.log('Пароль совпадает!')
	} else {
		console.log('Пароль неверный.')
	}
})
