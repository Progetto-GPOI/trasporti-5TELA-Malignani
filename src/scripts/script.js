function moltiplicaElemento(node, count, deep){
    for(var i=0, copy; i < count-1; i++){
        copy = node.cloneNode(deep)
        node.parentNode.insertBefore(copy, node)
    }
}

moltiplicaElemento(document.getElementById('listaResults'), 9, true)
moltiplicaElemento(document.getElementById('listaCircDx'), 8, true)
moltiplicaElemento(document.getElementById('listaCircSx'), 8, true)
moltiplicaElemento(document.getElementById('listaFermate'), 6, true)

function toggleMenu() {
    let x = document.getElementById("menu-mobile");
    let y = document.getElementById("body")
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.overflow = "scroll"
    } else {
      x.style.display = "flex";
      y.style.overflow = "hidden";
    }
  }


function togglePrezzo(){
    let x = document.getElementById("compra");
    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
}

function selectDot1(){
    console.log("Ciao")
    document.getElementById('dot1').style.background="#a8dadc"
    document.getElementById('dot2').style.background="#457b9d"
    document.getElementById('dot3').style.background="#457b9d"
    document.getElementById('pagina1').style.display="block"
    document.getElementById('pagina2').style.display="none"
    document.getElementById('pagina3').style.display="none"
}

function selectDot2(){
    document.getElementById('dot1').style.background="#457b9d"
    document.getElementById('dot2').style.background="#a8dadc"
    document.getElementById('dot3').style.background="#457b9d"
    document.getElementById('pagina1').style.display="none"
    document.getElementById('pagina2').style.display="block"
    document.getElementById('pagina3').style.display="none"
}

function selectDot3(){
    document.getElementById('dot1').style.background="#457b9d"
    document.getElementById('dot2').style.background="#457b9d"
    document.getElementById('dot3').style.background="#a8dadc"
    document.getElementById('pagina1').style.display="none"
    document.getElementById('pagina2').style.display="none"
    document.getElementById('pagina3').style.display="block"
}

//da fare script per visualizzare prezzo