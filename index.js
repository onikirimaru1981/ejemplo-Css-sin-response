
const cambioPanel = (index) => {
    console.log(index);

    const respuesta = "faq__respuesta faq__respuesta--cerrada";
    const elemento = document.getElementsByClassName('faq__respuesta')[index];
    const elementoAbierto = document.getElementsByClassName("faq__respuesta faq__respuesta--abierta")[0];
    const svg = document.getElementsByClassName("svg-pequeño")[index];


    if (elemento.className == respuesta) {


        if (document.getElementsByClassName("faq__respuesta faq__respuesta--abierta")[0]) {

            elementoAbierto.className = "faq__respuesta faq__respuesta--cerrada"
        }

        elemento.className = "faq__respuesta faq__respuesta--abierta"
        svg.className.baseVal = "svg-pequeño"

    } else {

        elemento.className = "faq__respuesta faq__respuesta--cerrada"
        svg.className.baseVal = "svg-pequeño svg-pequeño--panel-cerrado"

    }


}