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
const right = document.querySelectorAll(".arrow_right")
const left = document.querySelectorAll(".arrow_left")
let background_slide = 0;
let taille_tab = (slides.length - 1) 

right.forEach(right => {
	right.addEventListener('click', (event) => {
		if (background_slide >= taille_tab) {
			background_slide = 0
		}
		else {
			background_slide++
		}
		console.log(background_slide)
	});
});

left.forEach(left => {
	left.addEventListener('click', (event) => {
		if (background_slide <= 0) {
			background_slide = taille_tab
		}
		else {
			background_slide--
		}
		console.log(background_slide)
	});
});



// console.log(slides[0]["image"]);




