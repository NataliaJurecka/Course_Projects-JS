const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const timeWatch = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalBtn = document.querySelector('.modal')
const modalShadowBtn = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0

const handleStart = () => {
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

startBtn.addEventListener('click', handleStart)
