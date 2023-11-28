let opcion: number;
function opcion_usuari(): number {
    let opcio_usuari = game.askForNumber("1- Cel a Far | 2- Far a Cel | 0- Salir", 1)
    return opcio_usuari
}

function num_a_convertir(): number {
    let num = game.askForNumber("Temperatura:")
    return num
}

let cerrar = false
function Main(opcio: number) {
    let num_convertir: number;
    let convertido: number;
    if (opcio == 1) {
        num_convertir = num_a_convertir()
        convertido = num_convertir * 9 / 5 + 32
        game.showLongText("" + Math.roundWithPrecision(convertido, 2) + "°F", DialogLayout.Bottom)
    } else if (opcio == 2) {
        num_convertir = num_a_convertir()
        convertido = (num_convertir - 32) * 5 / 9
        game.showLongText("" + Math.roundWithPrecision(convertido, 2) + "°C", DialogLayout.Bottom)
    } else {
        game.showLongText("No existe esa opción", DialogLayout.Top)
    }
    
}

function intro() {
    game.setDialogTextColor(2)
    game.showLongText("Conversor de temperatura", DialogLayout.Top)
    game.setDialogTextColor(12)
}

intro()
while (true) {
    opcion = opcion_usuari()
    if (opcion == 0) {
        intro()
    } else {
        Main(opcion)
    }
    
}
