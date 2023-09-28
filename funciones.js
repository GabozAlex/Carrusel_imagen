let foto = ["img/carro1.jpeg","img/carro2.jpeg","img/carro3.jpeg","img/carro4.jpeg"]
let n_fto = 0;

let back =document.querySelector("#back");
let next =document.querySelector("#next");
let imagen =document.querySelector("img");

function next_foto(argument) {
n_fto++;
	if(n_fto>3){
		n_fto=0;
	}
imagen.src=foto[n_fto];
}

function back_foto(argument) {
n_fto--;
	if(n_fto<0){
		n_fto=3;
	}
imagen.src=foto[n_fto];
}

next.addEventListener("click",next_foto);
back.addEventListener("click",back_foto);