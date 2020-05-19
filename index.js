//UNIDADES
function unidades(a) {
    let u = 0;

    try {
        u = parseInt(a);
    } catch (error) {
        return a
    }

    switch (u) {
        case 0:
            return "CERO"
            break;

        
        case 1:
            return "UNO"
            break;

        case 2:
            return "DOS"
            break;

        
        case 3:
            return "TRES"
            break;
        
        case 4:
            return "CUATRO"
            break;

        
        case 5:
            return "CINCO"
            break;

        case 6:
            return "SEIS"
            break;

        
        case 7:
            return "SIETE"
            break;

        case 8:
            return "OCHO"
            break;

        
        case 9:
            return "NUEVE"
            break;
    
        default:
            return a
            break;
    }
}

//ESPECIALES
function especiales(a) {
    let u = 0;

    try {
        u = parseInt(a);
    } catch (error) {
        return a
    }

    switch (u) {
        case 11:
            return "ONCE"
            break;

        
        case 12:
            return "DOCE"
            break;

        case 13:
            return "TRECE"
            break;

        
        case 14:
            return "CATORCE"
            break;
        
        case 15:
            return "QUINCE"
            break;

        
        case 16:
            return "DIECISEIS"
            break;

        case 17:
            return "DIECISIETE"
            break;

        
        case 18:
            return "DIECIOCHO"
            break;

        case 19:
            return "DIECINUEVE"
            break;

        
        case 21:
            return "VEINTIUNO"
            break;

        
        case 22:
            return "VEINTIDOS"
            break;

        case 23:
            return "VEINTITRES"
            break;

        
        case 24:
            return "VEINTICUATRO"
            break;
        
        case 25:
            return "VEINTICINCO"
            break;

        
        case 26:
            return "VEINTISEIS"
            break;

        case 27:
            return "VEINTISIETE"
            break;

        
        case 28:
            return "VEINTIOCHO"
            break;

        case 29:
            return "VEINTINUEVE"
            break;
    
        default:
            return a
            break;
    }
}

//decenas
function decenas(a) {
    let u = 0;

    try {
        u = parseInt(parseInt(a)/10);
    } catch (error) {
        return a
    }

    switch (u) {        
        case 1:
            return "DIEZ"
            break;

        case 2:
            return "VEINTE"
            break;

        
        case 3:
            return "TREINTA"
            break;
        
        case 4:
            return "CUARENTA"
            break;

        
        case 5:
            return "CINCUENTA"
            break;

        case 6:
            return "SESENTA"
            break;

        
        case 7:
            return "SETENTA"
            break;

        case 8:
            return "OCHENTA"
            break;

        
        case 9:
            return "NOVENTA"
            break;
    
        default:
            return a
            break;
    }
}

//centenas
function centenas(a) {
    let u = 0;

    try {
        u = parseInt(parseInt(a)/100);
    } catch (error) {
        return a
    }

    switch (u) {        
        case 1:
            return "CIEN"
            break;

        case 2:
            return "DOSCIENTOS"
            break;

        
        case 3:
            return "TRESCIENTOS"
            break;
        
        case 4:
            return "CUATROCIENTOS"
            break;

        
        case 5:
            return "QUINIENTOS"
            break;

        case 6:
            return "SEISCIENTOS"
            break;

        
        case 7:
            return "SETECIENTOS"
            break;

        case 8:
            return "OCHOCIENTOS"
            break;

        
        case 9:
            return "NOVECIENTOS"
            break;
    
        default:
            return a
            break;
    }
}



//CONVERTIR

function entero(a) {

    let n = parseInt(a);

    if (n<1000000000000) {
        if (n<1000000) {
            if (n<1000) {
                if (n<100) {
                    if (n<10) {
                        return unidades(n);
                    }else if (n%10 == 0) {
                        return decenas(n);
                    }else if (n < 30) {
                        return especiales(n);
                    }else{
                        return decenas(n) + " Y " + unidades(n-parseInt(parseInt(n/10)*10) );
                    }
                }else{
                    if (n%100 == 0) {
                        return centenas(n);
                    }else if(parseInt(n/100) == 1){
                        return "CIENTO " + entero(n-parseInt(parseInt(n/100)*100));
                    }else{
                        return centenas(n) + " " + entero(n-parseInt(parseInt(n/100)*100));
                    }
                }        
            } else {
                if(n==1000){
                    return "MIL"
                }else if(n%1000 == 0){
                    return entero(parseInt(n/1000)) + " MIL";
                }else{
                    return entero(parseInt(parseInt(n/1000)*1000)) + " " + entero(n-parseInt(parseInt(n/1000)*1000));
                }
            }        
        } else {
            
            if(n==1000000){
                return "UN MILLON"
            }else if(n%1000000 == 0){
                return entero(parseInt(n/1000000)) + " MILLONES";
            }else{
                return entero(parseInt(parseInt(n/1000000)*1000000)) + " " + entero(n-parseInt(parseInt(n/1000000)*1000000));
            }
        }        
    } else {
        if(n==1000000000000){
            return "UN BILLON"
        }else if(n%1000000000000 == 0){
            return entero(parseInt(n/1000000000000)) + " BILLONES";
        }else{
            return entero(parseInt(parseInt(n/1000000000000)*1000000000000)) + " " + entero(n-parseInt(parseInt(n/1000000000000)*1000000000000));
        }
    }
}

function numero_letras(n,nombrar_decimal=false,nominal="",decimal="") {
    let x = (""+n).replace(",",".").split(".");

    if (x.length < 2) {
        return entero(x[0]) + nominal;
    } else {
        let d = x[1].split("");

        if (!nombrar_decimal) {
            let ds = "";

            for (let i = 0; i < d.length; i++) {
                ds += " " + unidades(d[i]);
            }

            return entero(x[0]) + " PUNTO " + entero(x[1]);
        } else {
            return entero(x[0]) + nominal + " CON " + entero(x[1]) + decimal;
        }
    }
}

//EXPORTANDO PARA NPM
module.exports.numero_letras = numero_letras;