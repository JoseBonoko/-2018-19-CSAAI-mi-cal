function main(){
  //-- Variables
var uno = document.getElementById('uno')
var dos = document.getElementById('dos')
var tres = document.getElementById('tres')
var cuatro = document.getElementById('cuatro')
var cinco = document.getElementById('cinco')
var seis = document.getElementById('seis')
var siete = document.getElementById('siete')
var ocho = document.getElementById('ocho')
var nueve = document.getElementById('nueve')
var cero = document.getElementById('cero')
var sumar = document.getElementById('sumar')
var restar = document.getElementById('restar')
var multiplicar = document.getElementById('multiplicar')
var dividir = document.getElementById('dividir')
var valor1 = 0;
var valor2 = 0;
var resultado = 0;

  //--Acciones
  uno.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="1"
  }
  dos.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "2"
  }
  tres.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "3"
  }
  cuatro.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "4"
  }
  cinco.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "5"
  }
  seis.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "6"
  }
  siete.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "7"
  }
  ocho.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "8"
  }
  nueve.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "9"
  }
  cero.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "0"
  }
  sumar.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "+"
  }
  restar.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "-"
  }
  multiplicar.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "*"
  }
  dividir.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "/"
  }
  //-- Operaciones

  function suma(){
    valor1 = display.innerHTML
  }
  
  var gui = {
    display: document.getElementById('display'),
    sumar: document.getElementById('sumar'),
    restar: document.getElementById('restar'),
    multiplicar: document.getElementById('multilicar'),
    dividir: document.getElementById('dividir')
  }
  var counter = {
    valor: 0,
    inc: function(value) {
      this.valor += value;
      gui.display.innerHTML = this.valor;
    }
  };
}
