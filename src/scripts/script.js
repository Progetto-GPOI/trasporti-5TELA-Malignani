function moltiplicaElemento(node, count, deep){
    for(var i=0, copy; i < count-1; i++){
        copy = node.cloneNode(deep)
        node.parentNode.insertBefore(copy, node)
    }
}

moltiplicaElemento(document.getElementById('listaResults'), 9, true)
moltiplicaElemento(document.getElementById('listaCircDx'), 8, true)
moltiplicaElemento(document.getElementById('listaCircSx'), 8, true)

function toggleMenu() {
    var x = document.getElementById("menu-mobile");
    var y = document.getElementById("body")
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.overflow = "scroll"
    } else {
      x.style.display = "flex";
      y.style.overflow = "hidden";
    }
  }

/*

function selectDot1(){
    document.getElementById('Dot1').style.color="#a8dadc"
    document.getElementById('Dot2').style.color="#457b9d"
    document.getElementById('Dot3').style.color="#457b9d"
    document.getElementById('nome').style.display="flex"
    document.getElementById('cognome').style.display="flex"
    document.getElementById('dataDiNascita').style.display="flex"
}

function selectDot2(){
    document.getElementById('Dot1').style.color="#457b9d"
    document.getElementById('Dot2').style.color="#a8dadc"
    document.getElementById('Dot3').style.color="#457b9d"
    document.getElementById('nome').style.display="none"
    document.getElementById('cognome').style.display="none"
    document.getElementById('dataDiNascita').style.display="none"
}

function selectDot3(){
    document.getElementById('Dot1').style.color="#457b9d"
    document.getElementById('Dot2').style.color="#457b9d"
    document.getElementById('Dot3').style.color="#a8dadc"
    document.getElementById('nome').style.display="none"
    document.getElementById('cognome').style.display="none"
    document.getElementById('dataDiNascita').style.display="none"
}

function selectDotNext(){
    let i = 1;
    i + 1;
    if(i=4){
        i - 3;
    }
    if(i=1){
        selectDot1()
    }
    if(i=2){
        selectDot2()
    }
    if(i=3){
        selectDot3()
    }
}

*/

//da fare script per visualizzare prezzo