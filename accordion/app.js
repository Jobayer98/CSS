const btn_1 = document.getElementById('btn1')
const btn_2 = document.getElementById('btn2')
const btn_3 = document.getElementById('btn3')

let itemOne = document.getElementById('iOne')
let item_2 = document.getElementById('iTwo')
let item_3 = document.getElementById('iThree')

function doActive(item){
	let active = document.querySelector('.active')
	if(!active){
		item.classList.add('active')
	}else{
		item.classList.remove('active')
	}
}

function removeActive(x, y){
	x.classList.remove('active')
	y.classList.remove('active')

}


btn_1.addEventListener('click', function(){
	removeActive(item_2, item_3)
	doActive(itemOne)

})

btn_2.addEventListener('click', function(){
	removeActive(itemOne, item_3)
	doActive(item_2)

})

btn_3.addEventListener('click', function(){
	removeActive(itemOne, item_2)
	doActive(item_3)
})

