senadores = dataSenate.results[0].members;

function obtenerSenadores(array, party) {
    var senadores = [];
    var cantSenadores = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].party == party) {
            senadores[cantSenadores] = array[i];
            cantSenadores++;

        }
    }
    return senadores;
}

var democratas = obtenerSenadores(senadores, "D");
var independientes = obtenerSenadores(senadores, "I");
var republicanos = obtenerSenadores(senadores, "R");

function promedioDeVotosConPartido(array) {
    promedio = 0;
    for (i = 0; i < array.length; i++) {
        promedio = promedio + array[i].votes_with_party_pct;
    }
    promedio = promedio / (array.length + 1);
    return promedio;
}

function obtenerPartido(array) {
    for (i = 0; i < array.length; i++) {
        if (array[0].party != array[i].party) return "Todos";
    }
    if (array[0].party == "D") return "Democratas";
    if (array[0].party == "R") return "Republicanos";
    return "Independientes";
}

function tablearColumnaGlance(array) {
    var caja = "<tr><td>" + obtenerPartido(array) + "</td><td>" + (array.length) + "</td><td>" + promedioDeVotosConPartido(array) + "</tr>";
    return caja;
}

document.getElementById("tablaSenateGlance").innerHTML = tablearColumnaGlance(democratas) + tablearColumnaGlance(republicanos) + tablearColumnaGlance(independientes) + tablearColumnaGlance(senadores);


function ordenarMissed(array) {
    array.sort();
}