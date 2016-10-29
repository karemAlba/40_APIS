function dragstart(caja, evento) {
    event.dataTransfer.setData('Data', caja.id);// el elemento a arrastrar
}

function drop(target, evento) {
    var caja = event.dataTransfer.getData('Data');// obtenemos los datos
    target.appendChild(document.getElementById(caja));// agregamos el elemento de arrastre al contenedor
}