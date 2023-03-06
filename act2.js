'use strict'
debugger
function isLeapYear(year1, year2){
    year1 = parseInt(year1) //Quito los decimales en caso de que los tenga
    year2 = parseInt(year2) //Quito los decimales en caso de que los tenga
    let leapYears = [] //Creo una lista para agregar los años bisiestos
    if (isANumber(year1, year2) && beetween(year1, year2) && diference(year1, year2)){ //Compruebo si se van cumpliendo las condiciones
        for (let x = year1; x <= year2; x++){       //Creo un bucle for que empieze en el año de inicio y termine en el año de fin
            if (divisibleByFour(x) || divisibleByOneHundred(x)){    //Si es divisible por 4 o por 100 cuando tambien lo sea por 400 es bisiesto
                leapYears.push(x) //Añado los años bisiestos a la lista
            }
        }
        document.write(leapYears) //Imprime los años
    }
    
};

function isANumber(year1, year2){
    if (Number.isSafeInteger(year1) && Number.isSafeInteger(year2)){ //Compruebo si son numeros
    return true;
}
else{
    return false;
}
};

function beetween(year1, year2){
if(year1 >= 2001 && year1 <= 2500 && year2 >= 2001 && year2 <= 2500){ //Compruebo si estan entre 2001 y 2500
    return true;
}
else{
    return false;
}
}

function diference(year1, year2){ //Compruebo que el segundo año es mayor que el primero
    if(year2 > year1){
        return true
    }
    else return false

}

function divisibleByFour(x){ //Compruebo si es divisible por 4
if (x % 4 == 0){
return true
}
else return false

};



function divisibleByOneHundred(x){ //Compruebo si divisible por 100 cuando tambien lo sea por 400 es bisiesto
    if(x % 100 == 0 && x % 400 == 0){
        return true
    }
};



isLeapYear(2001, 2400) //Llamo a la funcion y le agrego años de ejemplo
