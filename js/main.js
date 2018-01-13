window.addEventListener('keydown', (e) => {
	// get the keyCode, 'Y' and 'Z' keys play the same sample
	let keycode = (e.keyCode == 90) ? 89 : e.keyCode,
			key = document.querySelector(`.drum-element[data-key="${keycode}"]`);
	
	if (!key) return;
	
	// check if key was released
	if (!key.classList.contains('hold')) play(e);
	
	key.classList.add('hold');
});


window.addEventListener('keyup', (e) => {
	let keycode = (e.keyCode == 90) ? 89 : e.keyCode,
			key = document.querySelector(`.drum-element[data-key="${keycode}"]`);
	
	if (!key) return;
	
	key.classList.remove('hold');
});


const keys = document.querySelectorAll('.drum-element');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
	key.addEventListener('mousedown', play);
});


function play(e) {
	// 'Y' and 'Z' key control the same sample
	let keycode = (e.keyCode == 90) ? 89 : e.keyCode;
	
	if (e.type == 'mousedown') {
		keycode = e.currentTarget.attributes['data-key'].value;
	}
	
	let audio = document.querySelector(`audio[data-key="${keycode}"]`),
				key = document.querySelector(`.drum-element[data-key="${keycode}"]`);
	
	if (!audio)	return;
	audio.currentTime = 0;
	audio.play();
	
	if (!key) return;
	key.classList.add('playing');
}


function removeTransition(e) {
	this.classList.remove('playing');
} 
