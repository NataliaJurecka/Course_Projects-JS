const settingBtn = document.querySelector('.settings-btn')
const countName = document.querySelector('.event')
const image = document.querySelector('.image-section')
const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const settingPanel = document.querySelector('.setting')
const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImage = document.querySelector('#event-image')
const saveBtn = document.querySelector('.save')

let usersTime

const setTime = () => {
	const currentTime = new Date()
	const result = usersTime - currentTime

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60
	const seconds = Math.floor(result / 1000) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
	secondsCount.textContent = seconds
}

const appUpdate = () => {
	countName.textContent = eventName.value
	usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
	image.style.backgroundImage = `url('${eventImage.value}')`
	setTime()
}

appUpdate()
setInterval(setTime, 1000)

settingBtn.addEventListener('click', () => {
	settingPanel.classList.toggle('active')
})
saveBtn.addEventListener('click', appUpdate)
