const searchInput = document.querySelector('.search')
const li = document.querySelectorAll('li')

const search = e => {
	const text = e.target.value.toLowerCase()

	li.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

searchInput.addEventListener('keyup', search)
