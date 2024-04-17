function llenarRueda(rueda, inicio, limite) {
    let ruedaReloj = document.getElementById(rueda);
    cadena = '';

    for( let i = inicio; i < 10; i++) {
        cadena = cadena + '<div class="card c' + i + '">'
        if(i <= limite) cadena = cadena + i;
        cadena = cadena + '</div>'
    }

    for( let i = 0; i < inicio; i++) {
        cadena = cadena + '<div class="card c' + i + '">'
        if(i <= limite) cadena = cadena + i;
        cadena = cadena + '</div>'
    }
}