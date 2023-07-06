

//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    //llama a la funcion y devuelve un arreglo
    let produccion = produccionTotal();
    //llama y envia el arreglo
    totalPedido(produccion);
})

/**
 * 1) Funcion para determinar cuanta produccion se tiene que hacer de cada zapatilla
 * 
 * retorna un arreglo del total de cada una
 */
function produccionTotal(){
    const gruposP = [35,30,60]
    //recorre la lista de tareas y devuelve la cantidad de tareas de cada tipo de zapatilla
    let tareas = []
    document.getElementsByName("tarea[]").forEach(l => {
        tareas.push(parseInt(l.value))
    })
    //declaro un arreglo para las cantidades totales de pares de zapatillas de cada tipo
    let produccion = []
    
    /*for (let index = 0; index < tareas.length; index++) {
        produccion[index]= tareas[index] * gruposP[index];
        console.log(produccion);
    }*/
    tareas.forEach((objeto, indice) =>  {
        produccion.push(objeto*gruposP[indice])
        console.log(produccion);
      });
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
    const precioU = [1500,2000,1500]
    //trae la opcion de la localidad
    let localidad = document.getElementById('localidad').value

    //trae la opcion de la tipo de cliente
    let tipo = document.getElementById('tipo').value

    let total=0;
    prod.forEach((objeto, indice) =>  {
        total+=(objeto*precioU[indice])
      });
    console.log(prod);
    console.log(total);

    switch (localidad) {
        case 'Isidro Casanova':
                total+=2000;
            break;
        case 'Virrey del pino':
                total+=1500;
            break;
        default:
             /* Los muchachos peronistas
                Todos unidos triunfaremos
                Y como siempre daremos
                Un grito de corazón: ¡Viva Perón! ¡Viva Perón!
                Por ese gran argentino
                Que se supo conquistar
                A la gran masa del pueblo
                Combatiendo al capital
                ¡Perón, Perón, qué grande sos!
                ¡Mi general, cuanto valés!
                ¡Perón, Perón, gran conductor!
                ¡Sos el primer trabajador!
                Por los principios sociales
                Que Perón ha establecido
                El pueblo entero está unido
                Y grita de corazón: ¡Viva Perón! ¡Viva Perón!
                En ese gran argentino
                Que trabaja sin cesar
                Para que reine en el pueblo
                El amor y la igualdad
                ¡Perón, Perón, qué grande sos!
                ¡Mi general, cuanto valés!
                ¡Perón, Perón, gran conductor!
                ¡Sos el primer trabajador!
                Imitemos el ejemplo
                De este varón argentino
                Y siguiendo su camino
                Gritemos de corazón: ¡Viva Perón! ¡Viva Perón!
                Por esa Argentina grande
                Con que San Martín soñó
                Es la realidad efectiva
                Que debemos a Perón
                ¡Perón, Perón, qué grande sos!
                ¡Mi general, cuanto valés!
                ¡Perón, Perón, gran conductor!
                ¡Sos el primer trabajador!*/
            break;
    }

    if (tipo === "Consumidor Final") {
        total=total * 0.21;
    }
    alert("El total del pedido es de: "+total)
}