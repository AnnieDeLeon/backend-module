function goToSuperMarket(callback) {
    console.log('Yendo al supermercado')
    setTimeout(() => {

        callback(null, 'Hola, ya llegué al supermercado')
    },5000)
}

goToSuperMarket((error, message) => {
    if(error) {
        console.log('A ocurrido algo:', error)
        return //retorna undefined, detiene la función (salidas tempranas o salidas condicionales)
        //alternativa para detenerlo
        //if(error){}else{}
    }
    console.log(message)
})

function payThings(callback){
    console.log('Haciendo fila para pagar...')
    setTimeout(() => {
        callback('Se me olvidó el monedero', null)
        },2000)
}

goToSuperMarket((error, message) => {
    if(error) {
        console.log(message)
        
      
})


function goTosuoerMarket(callback) {
    console.log('Llegando al supermercado')
    setTimeout(() => {
        // Se ejecuta l callback
        callback(null, 'Hola ya llegue al super mercado')
    },5000)
}

function payThings(callback) {
    console.log('aciendo fila para pagar');
    setTimeout(() => {
        callback(null, 'Hola, ya pague la despensa');
    }, 3000);
}

function arriveHome (callback) {
    console.log('Llegando a casa');
    setTimeout(() => {
        callback(null, 'Hola, ya estoy en casa');
    }, 2000);
}

goTosuoerMarket((error, mensaje) => {
    if (error) {
        console.log('Ah sucedido algo: ', error);
        return // salida temprana
    }
    console.log(mensaje);

    payThings((error, message) => {
        if(error) {
            console.log('Error', error);
            return
        }
        console.log(mensaje);


        arriveHome((errorArrive, messageHome) => {
            if(errorArriveHome) {
                console.log('Error', errorArriveHome);
                return
            }            

            console.log(messageArrival);
        })
        
    })
})


const inscriptionKodemiaCin = {
    name: 'Cin',
    isInterviewed: false, // true
    hasOffer: false,
    inInscript: false,
    canTakeClass: false,
}

//callback y luego cambiar a true

if (isInterviewed) {
    false
} else {
    true
}

function isFalse(callback) {
    console.log(true)
    setTimeout(() => {
        callback(false,)
    }5000)
}

isFalse((error, false) => {
    if(error) {
        console.log(false,error)
        return
    }
    console.log(true)
})






















