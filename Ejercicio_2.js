// Ejercicio 2: Actualizar Stock por ID
// Descripción
// Cre3 una función llamada actualizarStock que:
// Reciba un array de productos (objetos con id, nombre, y stock), un id, y un nuevoStock.
// Busque el producto con el id especificado.
// Si existe, actualice su propiedad stock con el nuevoStock.
// Retorne el array modificado. Si el producto no existe, retorna null.

const ActualizarStock = (productos, id, nuevoStock) => {
    const producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.stock = nuevoStock;
        return productos;
    }
    return null;
}

const productos = [ 
        { id: 1, nombre: 'manzana', stock: 5 },   
        { id: 2, nombre: 'pera', stock: 3 },   
        { id: 3, nombre: 'uva', stock: 10 },    
        
    ];

console.log(ActualizarStock(productos, 2, 10));         
// [{ id    : 1, nombre: 'manzana', stock: 5 }, { id: 