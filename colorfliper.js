// Selecciona el botón del DOM
const colorButton = document.getElementById('colorButton');

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color de fondo
function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Agrega un event listener al botón
colorButton.addEventListener('click', changeBackgroundColor);
