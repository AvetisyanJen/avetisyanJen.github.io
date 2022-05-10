function random(a){
	return Math.round(Math.random()*a)
}
function randomColor(){
	return `rgb(${random(255)},${random(255)},${random(255)})`
}
let action=["*","/","-","+"]
const start=document.querySelector(".start")
const test=document.querySelector(".test")
start.addEventListener("click",A1)
function A1(){
	this.removeEventListener("click",A1)
	
	for(let i=0;i<5;i++){
		const div=document.createElement("div")
		const p=document.createElement("p")
		const inp=document.createElement("input")
		p.innerHTML=`${random(100)} ${action[random(action.length-1)]} ${random(100)}`
		div.classList.add("item")
		div.append(p,inp)
		test.append(div)
	}
	const btn=document.createElement("button")
	btn.innerHTML="check"
	btn.addEventListener('click',check)
	test.append(btn)
}
function check(){
	this.removeEventListener("click",check)
   //alert ()
   let items=document.querySelectorAll(".item")
   let miavor=0
   for(i=0;i<items.length;i++){
   	let question=items[i].querySelector("p").innerHTML
   	let answer=items[i].querySelector("input").value
   	if(eval(question)==answer){
   		items[i].querySelector('input').style.border="2px solid green"
   		miavor+=2
   	}
   	else{
   		items[i].querySelector('input').style.border="2px solid red"
   		let b=document.createElement("b")
   		b.style.color="green"
   		b.innerHTML=eval(question)
   		items[i].querySelector("input").after(b)
   	}
   }
   const h1=document.createElement("h1")
   h1.innerHTML=miavor+" "+"points"


   test.append(h1)
}

