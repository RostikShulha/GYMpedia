const headerEl = document.getElementById('header')

window.addEventListener('scroll', function () {
	const scrollPos = window.scrollY

	if (scrollPos > 60) {
		headerEl.classList.add('header_mini')
	} else {
		headerEl.classList.remove('header_mini')
	}
})

function hoverOnBreast() {
	document.getElementById('breast').classList.add('active')
}
function hoverOffBreast() {
	document.getElementById('breast').classList.remove('active')
}

function hoverOnWidest() {
	document.getElementById('widest').classList.add('active')
}
function hoverOffWidest() {
	document.getElementById('widest').classList.remove('active')
}

function hoverOnDelta() {
	document.getElementById('shoulders').classList.add('active')
}
function hoverOffDelta() {
	document.getElementById('shoulders').classList.remove('active')
}
