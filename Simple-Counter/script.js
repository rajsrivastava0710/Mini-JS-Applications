var input = document.querySelector('input');
var current= document.querySelector('#current');
var previous = document.querySelector('#previous');
var stop = document.querySelector('#stop');
var start = document.querySelector('#start');
var refersh = document.querySelector('#refersh');
var timer;
var count = 0;

start.addEventListener('click',function(){

clearInterval(timer);
count=0;
current.innerHTML = 0;
previous.innerHTML = 0;

timer = setInterval(counterIncrement,1000);
})

stop.addEventListener('click',function(){
	clearInterval(timer);
	count=0;
})		

refresh.addEventListener('click',function(){
	clearInterval(timer);
	count=0;
	current.innerHTML = 0;
	previous.innerHTML = 0;
	input.value=0;
})

function counterIncrement(){
	var maxCount = input.value;
	if(maxCount == '' || count >= maxCount){
		clearInterval(timer)
	}else{
		current.innerHTML = ++count;
		previous.innerHTML = count;
		['downup','animate'].map(item => current.classList.toggle(item));
		['updown','animate'].map(item => previous.classList.toggle(item));
	}
}