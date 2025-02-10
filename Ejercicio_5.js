// Ejercicio 5: Reporte de Ventas
// Descripción
// Cree una función llamada generarReporte que:
// Reciba un array de objetos de ventas con producto y monto.
// Retorne un objeto con:
// totalVentas: suma de todos los montos.
// promedio: monto promedio por transacción.
// cantidadTransacciones: número total de ventas


const generarReporte = (ventas) => {
    let totalVentas = 0;
    ventas.forEach((venta) => {
        totalVentas += venta.monto;
    });
    return {
        totalVentas,
        promedio: totalVentas / ventas.length,
        cantidadTransacciones: ventas.length
    };
};

const ventas = [ 
    { producto: 'manzana', monto: 5 },
    { producto: 'pera', monto: 3 }, 
    { producto: 'uva', monto: 10 },  
    { producto: 'sandia', monto: 15 }  ];

console.log(generarReporte(ventas)); // { totalVentas: 33, promedio: 8.25, cantidadTransacciones: 4 }