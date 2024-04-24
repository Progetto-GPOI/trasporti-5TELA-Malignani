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

function toggleFermate(){
  let x = document.getElementById("fermate")
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.getElementById("triggerMobile").style.marginBottom="50px";
    document.getElementById("triggerMobile").style.borderBottomRightRadius="20px";
    document.getElementById("triggerMobile").style.borderBottomLeftRadius="20px";
  } else {
    x.style.display = "flex";
    document.getElementById("triggerMobile").style.marginBottom="0";
    document.getElementById("triggerMobile").style.borderBottomRightRadius="0";
    document.getElementById("triggerMobile").style.borderBottomLeftRadius="0";
    document.getElementById("fermataPartenza").style.borderTopLeftRadius="0";
    document.getElementById("fermataPartenza").style.borderTopRightRadius="0";
  }
}

function selectDot1(){
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

function prezzoTotale(){
  let prezzoBiglietto = 3.05;
  let nBigletti = document.getElementById('nBiglietti').value;
  let prezzoTotale = prezzoBiglietto * nBigletti;
  if(nBigletti>=30){
    let sconto10=(prezzoTotale/100)*10;
    prezzoTotale = prezzoTotale - sconto10;
    document.getElementById('sconto5').style.color='#70e000';
    document.getElementById('sconto10').style.color='#70e000';
  }
  if(nBigletti>=10 && nBigletti<30){
    let sconto5=(prezzoTotale/100)*5;
    prezzoTotale = prezzoTotale - sconto5;
    document.getElementById('sconto5').style.color='#70e000';
    document.getElementById('sconto10').style.color='##d9d9d9';
    console.log(sconto5);
  }
  if(nBigletti<10){
    document.getElementById('sconto5').style.color='#d9d9d9';
    document.getElementById('sconto10').style.color='#d9d9d9';
  }
  prezzoTotale=prezzoTotale.toFixed(2);
  document.getElementById("prezzoTotale").textContent=prezzoTotale+"$";
}