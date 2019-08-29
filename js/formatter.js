
function imprimeFila(obj, f)
{
    for(var k in obj) {
        if(obj[k] instanceof Object) {
                imprimeFila(obj[k], f);        
        } else {
            f.innerHTML +=('<td>' + obj[k] + '</td>');
        };
    }
}

function imprimeTabla(obj, tID) {
    for(var i=0; i<obj.length; i++) 
    {
        var fila = document.createElement('tr');
        imprimeFila(obj[i],fila);
        document.getElementById(tID).appendChild(fila) ;
    }
}

function imprimeHeader(arr, tID)
{
    var cabecera = document.createElement('tr');
    imprimeFila(Object.keys(arr[1]),cabecera);
    document.getElementById(tID).appendChild(cabecera) ;
}


function exportarCSV(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll('table tr');
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], 
			cols = rows[i].querySelectorAll('td, th');
		
        for (var j = 0; j < cols.length; j++) 
            row.push('"' + cols[j].innerText + '"');
        
		csv.push(row.join(";"));		
	}

    // Descargar CSV
	var blob = new Blob([csv.join('\n')],
                        {type: 'text/csv'});
                        saveAs(blob, filename + '.csv');
}

//Hecha para testear si esta trayendo todos los sub arrays
function mostrarValor(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            mostrarValor(obj[k]);
            document.write("<br>");
        } else {
            document.write(k+":"+obj[k]+" ");
        };
    }
};
