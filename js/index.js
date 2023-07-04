

//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    //llama a la funcion y devuelve un arreglo
    let produccion = produccionTotal()
    //llama y envia el arreglo
    totalPedido(produccion)
})

/**
 * 1) Funcion para determinar cuanta produccion se tiene que hacer de cada zapatilla
 * 
 * retorna un arreglo del total de cada una
 */
function produccionTotal(){
    //recorre la lista de tareas y devuelve la cantidad de tareas de cada tipo de zapatilla
    let tareas = []
    document.getElementsByName("tarea[]").forEach(l => {
        tareas.push(parseInt(l.value))
    })

    //declaro un arreglo para las cantidades totales de pares de zapatillas de cada tipo
    let produccion = [0, 0 , 0]

    //en ambos arreglos quedan
    //pos 0 => jordan 
    //pos 1 => ardidas 
    //pos 2 => naiki 

    return produccion
}

/**
 * 2) Funcion para calcular el total del pedido
 * 
 * recibe el arreglo de producion en prod
 */
function totalPedido(prod){
    //trae la opcion de la localidad
    let localidad = document.getElementById('localidad').value

    //trae la opcion de la tipo de cliente
    let tipo = document.getElementById('tipo').value

    let total=0; 

    alert("El total del pedido es de: "+total)
}