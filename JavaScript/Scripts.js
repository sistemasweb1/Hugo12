
function myFunction() {
	var esp = "La Guerra esencial consiste en la lucha entre los partidarios de le materia ";
	var esp2 = "contra los partidarios del espiritu.";

    document.getElementById("demo").innerHTML = esp + "<br>" + esp2;
}


var disqus_config = function () {
this.page.url = 'https://buenasabiduria.disqus.com/embed.js' ;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = 'https://buenasabiduria.disqus.com/embed.js'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://buenasabiduria.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}