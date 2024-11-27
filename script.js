// Función para añadir productos al carrito
function añadirAlCarrito(nombre, precio, imagen) {
    // Obtener carrito desde el almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Añadir el nuevo producto
    carrito.push({ nombre, precio, imagen });
    
    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador de productos en el carrito flotante
    const carritoCount = document.getElementById('carritoCount');
    carritoCount.textContent = carrito.length;

    alert('Producto añadido al carrito');
    window.scrollTo({
        top: document.getElementById('carrito').offsetTop,
        behavior: 'smooth'
    });
}

// Función para actualizar el carrito en la página del carrito
function actualizarCarrito() {
    const carritoItems = document.getElementById('carritoItems');
    carritoItems.innerHTML = '';

    // Obtener carrito desde el almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoItems.innerHTML = '<li>Tu carrito está vacío</li>';
    } else {
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" width="50">
                <strong>${item.nombre}</strong> - $${item.precio}
            `;
            carritoItems.appendChild(li);
        });
    }

    // Actualizar el contador de productos en el carrito flotante
    const carritoCount = document.getElementById('carritoCount');
    carritoCount.textContent = carrito.length;
}

// Si se accede a la página del carrito, actualizar el carrito visualmente
document.addEventListener('DOMContentLoaded', actualizarCarrito);

// Función para continuar comprando
function continuarCompra() {
    window.location.href = 'index.html';
}
