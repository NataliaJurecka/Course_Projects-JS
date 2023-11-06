const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if(input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa się z min. ${min} znaków`) 
	}
}

const checkPass = (pass1, pass2) => {
	if(pass1.value !== pass2.value ) {
		showError(pass2, 'Hasła nie są takie same')
	}
}

const checkEmail = email => {
	const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!email.value.match(mailformat)) {
		showError(email, "Nieprawidłowy format adresu e-mail")
	} else {
		return mailformat.test(String(email).toLowerCase())
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault();
	checkForm([username, pass, pass2, email])
	checkLength(username, 3)
	checkLength(pass, 8)
	checkPass(pass, pass2)
	checkEmail(email)
})

clearBtn.addEventListener('click', e => {
	e.preventDefault();
	[username, pass, pass2, email].forEach(el => {
		el.value = ''
        clearError(el)
	})
})
