const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const timeWatch = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopWatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopWatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopWatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	timeWatch.innerHTML = `Ostatni czas: ${stopWatch.textContent}`

	if (stopWatch.textContent !== '0:00') {
		timeWatch.style.visibility = 'visible'
		timesArr.push(stopWatch.textContent)
	}

	clearStuff()
}

const handleReset = () => {
	timeWatch.style.visibility = 'hidden'
	timesArr = []
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	stopWatch.textContent = `0:00`
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const showHistory = () => {

    timeList.textContent = ''

	timesArr.forEach(time => {
        const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr X <span>${time}</span>`
        timeList.appendChild(newTime)
    })
}

const showModal = () => {
    
    if (!(modalShadow.style.display === 'block') ) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }
    modalShadow.classList.toggle('.modal-animation')
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)