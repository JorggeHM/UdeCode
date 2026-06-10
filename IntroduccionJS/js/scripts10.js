const pago = 'a';

switch(pago){
    case 'tarjeta':
        console.log('Pago con tarjeta');
        break;

    case 'efectivo':
        console.log('Pago con efectivo');
        break;

    case 'transferencia':
        console.log('Pago con transferencia');
        break;

    default: 
        console.log('Pago no relizado');
        break;

    break;
}

