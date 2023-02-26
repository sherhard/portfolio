let headLogoBtn=document.getElementById('heade-logo-btn');

	headLogoBtn.addEventListener('click',showMenu);


function showMenu(){
	let headMenu=document.getElementById('headMenu')
	if(headMenu.style.display=='none'){
		headMenu.style.display='block';

	} else{
		headMenu.style.display='none'
	}
}