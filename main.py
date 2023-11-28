def opcion_usuari():
    opcio_usuari = game.ask_for_number("""1- Cel a Far | 2- Far a Cel | 0- Salir""", 1) 
    return opcio_usuari

def num_a_convertir():
    num = game.ask_for_number("Numero a convertir:")
    return num

cerrar = False

def Main(opcio):
    if (opcio== 1):
        num_convertir = num_a_convertir()
        convertido = (num_convertir * 9/5) + 32
        game.show_long_text(str(Math.round_with_precision(convertido, 2)) + "°C", DialogLayout.BOTTOM)
    elif(opcio == 2):
        num_convertir = num_a_convertir()
        convertido = (num_convertir - 32) * 5/9
        game.show_long_text(str(Math.round_with_precision(convertido, 2)) + "°F", DialogLayout.BOTTOM)
    else:
        game.show_long_text("No existe esa opción", DialogLayout.TOP)


def intro():
    game.set_dialog_text_color(2)
    game.show_long_text("Conversor de temperatura", DialogLayout.TOP)
    game.set_dialog_text_color(12)
intro()
while(True):
    opcion = opcion_usuari()
    if(opcion == 0):
        intro()
    else:
        Main(opcion)
