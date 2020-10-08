Feature: Ingresar a la pagina del buscador de google y realizar una compra en falabella
    Scenario: Ingresar a google y buscar la pagina de falabella
        Given Ingreso a la pagina de google
        And Realizar la busqueda de la pagina falabella.cl
        And Hacer click en boton Buscar con google y en falabella.cl
        When Visualizar consola Nintendo Switch
        Then Se agrega a la bolsa de compra
        And Selecciona garantia extendida
        And Agregar 2 consolas
        And Ingresar Ir a comprar