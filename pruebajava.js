function main(){
  //-- Variables
  uno = document.getElementById('uno')
  uno.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "1"
  }
  dos = document.getElementById('dos')
  dos.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "2"
  }
  tres = document.getElementById('tres')
  tres.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "3"
  }
  cuatro = document.getElementById('cuatro')
  cuatro.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "4"
  }
  cinco = document.getElementById('cinco')
  cinco.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "5"
  }
  seis = document.getElementById('seis')
  seis.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "6"
  }
  siete = document.getElementById('siete')
  siete.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "7"
  }
  ocho = document.getElementById('ocho')
  ocho.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "8"
  }
  nueve = document.getElementById('nueve')
  nueve.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "9"
  }
  cero = document.getElementById('cero')
  cero.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML = "0"
  }
  //-- Operaciones
  var gui = {
    display: document.getElementById('display'),
    sumar: document.getElementById('suma'),
    restar: document.getElementById('resta'),
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
