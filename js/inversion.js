
function calcular_inversion(cantidad, plazos) {
  
cantidad = parseFloat(cantidad);
  plazos = parseInt(plazos);
  
  let inversion_final = 0;

//PORCENTAJE DE INTERES DEPENDIENDO A CADA PLAZO//

  if (plazos == 1 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1126)
    return inversion_final
  }

  else if (plazos == 2 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1131)
    return inversion_final
  }

  else if (plazos == 3 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1135)
    return inversion_final
  }

  else if (plazos == 4 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1138)
    return inversion_final
  }

    else if (plazos == 5 && cantidad > 0) {
  inversion_final = cantidad + (cantidad * 0.1140)
  return inversion_final
  }

  else if (plazos == 6 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1145)
    return inversion_final
  }

  else if (plazos == 7 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1149)
    return inversion_final
  }

  else if (plazos == 8 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1160)
    return inversion_final
  }

  else if (plazos == 9 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1165)
    return inversion_final
  }

  else if (plazos == 10 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1172)
    return inversion_final
  }

  else if (plazos == 11 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * 0.1191)
    return inversion_final
  }

  else if (plazos == 12 && cantidad > 0) {
    inversion_final = cantidad + (cantidad * .12)
    return inversion_final
  }


}

//FUNCION DE BENEFICIO AL TENER CUENTA//

function beneficio(prestamo, tiene_cuenta) {
  
  if (tiene_cuenta == "si") {
    let beneficio_socio = prestamo + (prestamo * 0.003);
    return beneficio_socio
  }

  else {
    return 0
  }
}

//INVERSION//

console.log("Bienvenid@s a la forma segura de ser inversionista -Inversiones MON-");

let cantidad = 0;

while (cantidad != "cerrar") {
  
  cantidad = prompt("ingrese la cantidad que desea invertir o escriba cerrar para terminar la solicitud");
  if (cantidad != "cerrar") {
    let plazos = prompt("ingrese el numero de meses que desea invertir 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 y 12");
    let tiene_cuenta = prompt("Es socio: si o no"); // modificar //
    let resultado_de_la_inversion = calcular_inversion( cantidad , plazos );
    let resultado_del_beneficio = beneficio( resultado_de_la_inversion , tiene_cuenta );
    
    console.log("Invertiste: ", cantidad);
    console.log("Plazos: ", plazos);
    console.log("Obtienes al final: ", resultado_de_la_inversion);

    if (resultado_del_beneficio != 0) {
      console.log(".03% de beneficio por tener cuenta, obtienes:", resultado_del_beneficio)
    }
  }

}