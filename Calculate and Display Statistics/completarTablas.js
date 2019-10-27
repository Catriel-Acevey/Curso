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
    promedio=promedio.toFixed([2]);
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

function tablearFilaGlance(array) {
    var caja = "<tr><td>" + obtenerPartido(array) + "</td><td>" + (array.length) + "</td><td>" + promedioDeVotosConPartido(array) + "%" + "</tr>";
    return caja;
}

document.getElementById("tablaSenateGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(senadores);

console.log(senadores);

function ordenarMissed(array) {
    array.sort(function(a, b){
        return ((a.missed_votes)-(b.missed_votes));
    });
}

ordenarMissed(senadores);

function getName(string) {
    if (string != null) {
        return string;
    } else {
        return ("");
    }
}

function tablear10ColumnaLeastEngaged(array){
    var elements=document.createElement("tr");
    var fila;
    for(i=0; i<10; i++){
        //var caja= "<tr><td>" + getName(array[i].first_name) + " " + getName(array[i].middle_name) + " " + getName(array[i].last_name) + "</tr>"
        //return caja;
        fila=document.createElement("td")
        elements.append(getName(array[i].first_name) + " " + getName(array[i].middle_name) + " " + getName(array[i].last_name), fila);
    }
    tablaLeastEngaged.append(elements);
}

//document.getElementById("tablaLeastEngaged").innerHTML = tablearColumnaLeastEngaged(democratas);

tablear10ColumnaLeastEngaged(senadores);