// Cree una función llamada aplicarImpuestos que:
// Reciba un array de objetos (productos con nombre y precio).
// Filtre los productos con precio mayor a 50.
// Aumente el precio de los productos filtrados agregando un 10% de impuesto.
// Retorne el nuevo array modificado.

const aplicarImpuestos = (productos) => {
    const productosFiltrados = productos.filter(producto => producto.precio > 50);
    const productosConImpuestos = productosFiltrados.map(producto => {
        return {
            ...producto,
            precio: producto.precio * 1.1
        }
    });
    return productosConImpuestos;
};



const productos = [

    { nombre: 'Notebook', precio: 80 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Monitor', precio: 120 }];

    console.log(aplicarImpuestos(productos)); // Debería mostrar [{ nombre: 'Monitor', precio: 132 }, { nombre: 'Impresora', precio: 220 }] 