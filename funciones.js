function menu(){
	document.getElementById('menu').classList.toggle('visible');
	let e=document.querySelectorAll('.contenedor');
	let t=e.length;
	for(i=t-1; i>=0;i--){
		e[i].classList.toggle('size');
	}
}