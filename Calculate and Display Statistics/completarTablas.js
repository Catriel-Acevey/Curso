function obtenerSenadores(array, party) {
    var senadores = [];
    var cantSenadores = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].party == party) {
            senadores[cantSenadores] = array[i];
            cantSenadores++;

        }
    }
    if (senadores.length == 0){
        return null;
    }
    return senadores;
}

function promedioDeVotosConPartido(array) {
    promedio = 0;
    for (i = 0; i < array.length; i++) {
        promedio += array[i].votes_with_party_pct;
    }
    promedio = promedio / (array.length + 1);
    promedio = promedio.toFixed([2]);
    return promedio;
}

function obtenerPartido(array) {
    if(array.length == 0) return "";
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

function ordenarMissed(array) {
    array.sort(function (a, b) {
        return ((a.missed_votes) - (b.missed_votes));
    });
}

function getName(string) {
    if (string != null) {
        return string;
    } else {
        return ("");
    }
}

function tablearColumnaMostEngaged(array) {
    var caja = "";
    for (i = 0; i < (array.length * 0.1); i++) {
        caja += ("<tr><td>" + getName(array[i].first_name) + " " + getName(array[i].middle_name) + " " + getName(array[i].last_name) + "</td><td>" + array[i].missed_votes + "</td><td>" + array[i].missed_votes_pct + "</tr>");
    }
    document.getElementById("tablaSenateMostEngaged").innerHTML = caja;
}

function tablearColumnaLeastEngaged(array) {
    var caja = "";
    for (i = 0; i < (array.length * 0.1); i++) {
        caja += ("<tr><td>" + getName(array[array.length - i - 1].first_name) + " " + getName(array[array.length - i - 1].middle_name) + " " + getName(array[array.length - i - 1].last_name) + "</td><td>" + array[array.length - i - 1].missed_votes + "</td><td>" + array[array.length - i - 1].missed_votes_pct + "</tr>");
    }
    document.getElementById("tablaSenateLeastEngaged").innerHTML = caja;
}

if (estoyenhouse) {
    senadoresH = dataHouse.results[0].members;
    console.log(senadoresH);

    var democratasH = obtenerSenadores(senadoresH, "D");

    var independientesH = obtenerSenadores(senadoresH, "I");
    
    var republicanosH = obtenerSenadores(senadoresH, "R");
    console.log(independientesH);
    document.getElementById("tablaHouseGlance").innerHTML = tablearFilaGlance(democratasH) + tablearFilaGlance(republicanosH) + (independientesH)?tablearFilaGlance(independientesH):"" + tablearFilaGlance(senadoresH);

    ordenarMissed(senadoresH);

    tablearColumnaMostEngaged(senadoresH);

    tablearColumnaLeastEngaged(senadoresH);
} else {
    senadores = dataSenate.results[0].members;
    console.log(senadores);

    var democratas = obtenerSenadores(senadores, "D");
    var independientes = obtenerSenadores(senadores, "I");
    var republicanos = obtenerSenadores(senadores, "R");

    document.getElementById("tablaSenateGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(senadores);

    ordenarMissed(senadores);

    tablearColumnaMostEngaged(senadores);

    tablearColumnaLeastEngaged(senadores);
}
