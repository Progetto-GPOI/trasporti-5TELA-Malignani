function moltiplicaElemento(node, count, deep){
    for(var i=0, copy; i < count-1; i++){
        copy = node.cloneNode(deep)
        node.parentNode.insertBefrore(copy, node)
    }
}

moltiplicaElemento(document.getElementById('lista'), 5, true)

//non funziona


//da fare script per visualizzare prezzo