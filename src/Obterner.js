/*Metodo o funcion utilizando tdd con el nombre de obterner Accion
 que permita calcular la accion a seguir dependiendo de los valores de las siquiente tablas
 variable, Tipo, Valores Posibles
 esObligatorio, String ,si-no
 esDocente,Booleano, true-false
 esExterno,Booleano, true-false
 tipoPersonaDestino, String, estudiante-docente-externo
 estadoRegistro, String, porConfirmar,Vigente

resultado:
    Actualizar,Mtricular, Registrar
reglas
si es obligatorio y es docente devolver : actualizar
si no  es obligatorio y es docente devolver: matricular
si es externo y estado registro por confirmar entonces: actualizar
si es externo y destinatario externo entonces: registrar
si es externo y estado de registro vigente :matricular
*/

export function obternerAccion(esObligatorio, esDocente, esExterno, tipoPersonaDestino, estadoRegistro) {
    var accion =""
    if (esObligatorio == "si" && esDocente == true) {
        accion = "Actualizar"
    }
    if (esObligatorio == "no" && esDocente == true) {
        accion = "Matricular"
    }
    if (esExterno == true && estadoRegistro == "porConfirmar") {
        accion = "Actualizar"
    }
    if (esExterno == true && tipoPersonaDestino == "externo") {
        accion = "Registrar"
    }
    if (esExterno == true && estadoRegistro == "Vigente") {
        accion = "Matricular"
    }
    return accion
}





