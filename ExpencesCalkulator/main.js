const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const btnCount = document.querySelector('.count')
const info = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (people.value < 1 || price.value == '' || tip.value == '0') {
		error.textContent = 'Uzupełnij poprawnie pola'
        info.style.display = 'none'
	} else {
		splitBill()
		error.textContent = ''
	}
}

const splitBill = () => {
	const billValue = parseFloat(price.value)
	const peopleValue = parseInt(people.value)
	const tipValue = parseFloat(billValue * tip.value)
	let sum = (billValue + tipValue) / peopleValue

	console.log(billValue)
	console.log(tipValue)
	console.log(peopleValue)
	console.log(sum)

	info.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}
 
btnCount.addEventListener('click', showBill)
