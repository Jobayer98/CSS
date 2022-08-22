const btn_left = document.querySelectorAll('.btn-left')
const btn_right = document.querySelectorAll('.btn-right')


btn_left.forEach((bleft) =>{
	bleft.addEventListener('click', function(){
		console.log('clicked')
	})
})

btn_right.forEach((bright) =>{
	bright.addEventListener('click', function(){
		console.log('right btn clicked')
	})
})