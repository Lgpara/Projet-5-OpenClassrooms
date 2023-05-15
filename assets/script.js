const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Constante et variables 

const right = document.querySelectorAll(".arrow_right")
const left = document.querySelectorAll(".arrow_left")

const dotsContainer = document.querySelector(".dots");

let background_slide = 0;
let taille_tab = (slides.length - 1) 

//Fonctions

function changeBG(background_slide) {
	let slideSelector = document.querySelector (".banner-img")
	let slideIndex = slides[background_slide]
	let imageSelect = slideIndex.image
	slideSelector.src = (`./assets/images/slideshow/${imageSelect}`)
	document.getElementById("tag_line").innerHTML = slides[background_slide].tagLine
}

function selectedDot(background_slide) {
		for (let i = 0; i < dotsContainer.children.length; i++) {
		if (i == background_slide) {
			dotsContainer.children[i].classList.add('dot_selected');
		}
		if (i !== background_slide) {
			dotsContainer.children[i].classList.remove('dot_selected');			
		}
	}
}

// Event Listener For Navigation Arrows

right.forEach(right => {
	right.addEventListener('click', () => {
		if (background_slide >= taille_tab) {
			background_slide = 0
		}
		else {
			background_slide++
		}
		selectedDot(background_slide)
		changeBG(background_slide)
	});
});

left.forEach(left => {
	left.addEventListener('click', () => {
		if (background_slide <= 0) {
			background_slide = taille_tab
		}
		else {
			background_slide--
		}
		selectedDot(background_slide)
		changeBG(background_slide)
	});
});

//Boucles

for (let i = slides.length; i !== 0; i--){
	const dotdiv = document.createElement("div");
	dotdiv.className ="dot";
	dotsContainer.appendChild(dotdiv)
}

//Fonction appellée pour pouvoir avoir la class dot selected sur le premier dot

selectedDot(background_slide)

























// console.log(slides[0]["image"]);




