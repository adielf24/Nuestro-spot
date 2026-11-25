
// Elementos principales
const escenario = document.getElementById("escenario");
const ventana = document.getElementById("ventana");
const tituloMensaje = document.getElementById("titulo-mensaje");
const textoMensaje = document.getElementById("texto-mensaje");

// Función para mostrar mensajes
function mostrarMensaje(titulo, texto) {
    tituloMensaje.textContent = titulo;
    textoMensaje.textContent = texto;
    ventana.hidden = false;
}


// Primer corazón — El sol
document.getElementById("corazon1").addEventListener("click", function () {
    mostrarMensaje(
        "Nuestro sol ♡",
        "El sol representa lo grande y brillante que es nuestro amor, que sin importar cuántos años pasen, seguirá brillando sin bajarle nunca."
    );
});

// Segundo corazón — El abrazo
document.getElementById("corazon2").addEventListener("click", function () {
    mostrarMensaje(
        "Nuestro abrazo ♡",
        "Este soy yo, que sin ti no sería nada. Por eso te tengo abrazada viendo el atardecer, porque así pienso estar contigo algún día."
    );
});

// Tercer corazón — El mar
document.getElementById("corazon3").addEventListener("click", function () {
    mostrarMensaje(
        "Nuestro mar ♡",
        "El mar es mi amor por ti, difícil de controlar porque es inmenso. No se acaba por más que quieras. También representa la paz que me haces sentir internamente, y lo comparo con la paz, ya que en la vida real el mar me calma, al igual que tú."
    );
});

// Carta romántica final
document.getElementById("carta").addEventListener("click", function () {
    mostrarMensaje(
        "Para mi Allyson ♡",
        "Allyson, mi amore, mi cosita, mi todo... Realmente no tengo más palabras para expresar lo que siento por ti. Creo que ya es más que evidente por todo lo que hago.\n\nTú eres mi reina, tú eres la única que me controla y sacas lo mejor de mí.\n\nI love you so fucking bad. I could do anything for you, even die for you, like The Weeknd sang.\n\nYo siempre seré tuyo, pa' siempre...\n\nCon amor, Adi ♡"
    );
});


// Cerrar los mensajes
document.getElementById("cerrar").addEventListener("click", function () {
    ventana.hidden = true;
});

// Cambiar el atardecer por la noche
let noche = false;

const botonAnochecer = document.getElementById("anochecer");
const cieloSuperior = document.getElementById("cielo-superior");
const cieloInferior = document.getElementById("cielo-inferior");
const sol = document.getElementById("sol");
const mar = document.getElementById("mar");

botonAnochecer.addEventListener("click", function () {

    noche = !noche;

    if (noche) {

        escenario.classList.add("noche");

        cieloSuperior.setAttribute("stop-color", "#28324e");
        cieloInferior.setAttribute("stop-color", "#777d9b");

        sol.setAttribute("r", "25");
        sol.setAttribute("fill", "#fff9e8");

        mar.setAttribute("fill", "#536b85");

        botonAnochecer.textContent = "☀ Atardecer";

    } else {

        escenario.classList.remove("noche");

        cieloSuperior.setAttribute("stop-color", "#ce929c");
        cieloInferior.setAttribute("stop-color", "#ffe0ac");

        sol.setAttribute("r", "45");
        sol.setAttribute("fill", "#fff0c1");

        mar.setAttribute("fill", "#92adb4");

        botonAnochecer.textContent = "☾ Anochecer";
    }
});

// Reproductor de música
const botonMusica = document.getElementById("musica");
const reproductor = document.getElementById("reproductor");

botonMusica.addEventListener("click", function () {

    reproductor.hidden = !reproductor.hidden;

    if (reproductor.hidden) {
        botonMusica.textContent = "♫ Ocean";
    } else {
        botonMusica.textContent = "Ocultar reproductor";
    }

});
