var sueldo_mes = 1100000
var bonifi_mes = 50000

function total_sueldo_anio(sueldo_mes ){
    bonif_mes = sueldo_mes % 5;
    total_bofn_anual = bonif_mes * 12;
    sueldo_anual_tot = sueldo_mes * 12;
    suel_neto_anual = suel_neto_anual + total_bofn_anual; 
}

console.log(total_sueldo_anio);