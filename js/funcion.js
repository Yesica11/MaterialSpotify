
let sonido = document.getElementById("audio");
let isDragging = false;

function play (){
    sonido.play();
}

function pause (){
    sonido.pause();
}

/* termina los botones*/

function barra (){
    document.querySelector("audio"). addEventListener("timeupdate", function(){
        document.getElementById("progreso").style.left=(this.currentTime * 94 /this.duration) + "%"
    })
}

window.addEventListener ("load", barra, false)

/* Empieza modificar el cambio de la posicion del circulo*/

const bar = document.getElementById ("barra");

function click(event){
    const posicion = event.clientX - bar.getBoundingClientRect().left;
    sonido.currentTime = (posicion / bar.clientWidth) * sonido.duration;
    console.log(posicion)
}
bar.addEventListener("click" ,click)

const barraVolum = document.getElementById("volum")
function volum(event){
    const posicion = event.clientX - barraVolum.getBoundingClientRect().left;
    sonido.volume = posicion / barraVolum.clientWidth;
    document.querySelector(".punto-volum").style.left = (posicion -10) + "px"
}
barraVolum.addEventListener("click", volum)


/* Animacion barra de reproducion*/
function dragBar(event) {
	if (isDragging) {
		const posicion = event.clientX - bar.getBoundingClientRect().left;
		sonido.currentTime = (posicion / bar.clientWidth) * sonido.duration;
	}
}

bar.addEventListener("mousemove", dragBar)
bar.addEventListener("mousedown", () => {
	isDragging = true
})
bar.addEventListener("mouseup", () => {
	if (isDragging) {
		isDragging = false;
	}
})

/* Animacion barra de volumen*/

function dragVolum(event) {
	if (isDragging) {
		const posicion = event.clientX - barraVolum.getBoundingClientRect().left;
		sonido.volume = posicion /  barrraVolum.clientWidth;
		document.querySelector(".punto-volum").style.left = `${sonido.volume * 80}%`;
    }
}

barraVolum.addEventListener("mousemove", dragVolum)
barravolum.addEventListener("mousedown", () => {
    isDragging =true;
})

barraVolum.addEventListener("mouseup", () => {
    if (isDragging){
        isDragging = false
    }
})
