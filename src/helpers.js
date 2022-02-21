// obtiene la diferencia de años
export const obtenerDiferenciaYear = year => {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar según la marca
export const calculcarMarca = marca => {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;            
            break;
        case 'americano':
            incremento = 1.15;            
            break;
        case 'asiatico':
            incremento = 1.05;            
            break;
    
        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de seguro
export const calcularPlan = plan => {
    return ( plan === 'basico') ?  1.20 : 1.50;
}

// muestra la primer letra mayuscula
export const primerMayus = texto => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}