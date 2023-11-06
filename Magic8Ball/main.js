const btn8ball = document.querySelector('img')
const question = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
	'Tak.',
	'Raczej, nie inaczej.',
	'Bez dwóch zdań!',
	'Może tak, może nie...',
	'Nie chcesz tego wiedzieć...',
	'Skup się i zapytaj ponownie.',
	'Nie.',
	'Wszechświat mówi stanowcze nie!',
	'Nie licz na to.'
]

const showAnswer = () => {
	const num = Math.floor(Math.random() * answers.length)
	answer.innerHTML = `<span>Odpowiedź: </span> ${answers[num]}`
}

const checkQuestion = () => {
	let ques = question.value

	if (ques !== '' && ques.slice(-1) === '?' ) {
        showAnswer()
        error.textContent = ''
        btn8ball.classList.remove('shake-animation')
	} else if (ques !== '' && ques.slice(-1) !== '?') {
		error.textContent = 'Nie wiedzę "?"'
        answer.textContent = ''
        btn8ball.classList.remove('shake-animation')
	} else {
		error.textContent = 'Bez pytania nie ma odpowiedzi.'
        answer.textContent = ''
	}
}

const shakeBall = () => {
	btn8ball.classList.add('shake-animation')
    setTimeout(checkQuestion, 1000) 
}

btn8ball.addEventListener('click', shakeBall)
