console.log('Hi');

window.addEventListener('keydown', play);

const keys = document.querySelectorAll('.drum-element');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
	key.addEventListener('mousedown', play);
});


function play(e) {
	let keycode = e.keyCode;
	
	if (e.type === 'mousedown') {
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