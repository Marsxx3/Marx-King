let carrito = [];

function añadirAlCarrito(nombre, precio, imagen) {
    // Añadir el artículo al carrito
    carrito.push({ nombre, precio, imagen });

    // Actualizar el contador de productos en el carrito
    document.getElementById('carritoCount').textContent = carrito.length;
    
    // Opcional: Mostrar un mensaje de éxito o actualizar la vista del carrito
    alert(`${nombre} ha sido añadido al carrito.`);
}
