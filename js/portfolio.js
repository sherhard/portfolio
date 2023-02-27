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


// finde id 
let headLeftBtn=document.getElementById('head-left-btn');
let headRightBtn=document.getElementById('head-rigth-btn');
let headSliderImage=document.getElementById('slider-image');

//create event
headLeftBtn.addEventListener('click',showLeftImage);
headRightBtn.addEventListener('click',showRigthImage);

headArrayImage=['img/1.jpg','img/2.jpg','img/3.jpg'];
let showSliderHead=0;
headSliderImage.src=headArrayImage[showSliderHead];

headLeftBtn.disabled=true;

// functions 

function showLeftImage(){
	showSliderHead--;
	headSliderImage.src=headArrayImage[showSliderHead];
	headRightBtn.disabled=false;
	if(showSliderHead===0){
		headLeftBtn.disabled=true;
	}
}


function showRigthImage(){
	showSliderHead++;
	headSliderImage.src=headArrayImage[showSliderHead];
	headLeftBtn.disabled=false;
	if(showSliderHead==headArrayImage.length-1){
		headRightBtn.disabled=true;
	}

}

