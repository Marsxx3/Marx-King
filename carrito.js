// Obtener el carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const carritoItems = document.getElementById('carritoItems');
const totalPriceElement = document.getElementById('totalPrice');

// Función para actualizar el carrito visualmente
function actualizarCarrito() {
    carritoItems.innerHTML = '';  // Limpiar la lista de productos
    let total = 0;

    // Si el carrito está vacío
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
            total += item.precio; // Sumar el precio total
        });
    }

    // Actualizar el precio total
    totalPriceElement.textContent = total.toFixed(2);
}

// Función para realizar el pedido
function realizarPedido() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de realizar un pedido.");
    } else {
        // Simular el proceso de "enviar" el pedido
        alert("¡Gracias por tu compra! Tu pedido ha sido transmitido correctamente.");
        
        // Limpiar el carrito
        localStorage.removeItem('carrito');
        carrito.length = 0;  // Limpiar la variable del carrito

        // Redirigir al usuario a la página de inicio o a una página de confirmación
        window.location.href = 'index.html';
    }
}

// Función para continuar comprando
function continuarCompra() {
    window.location.href = 'index.html';
}

// Actualizar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', actualizarCarrito);


