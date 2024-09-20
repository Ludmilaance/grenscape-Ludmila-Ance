function handleFormSubmit(event) {
    event.preventDefault();

    const checkbox = document.getElementById("agreement");
    if (!checkbox.checked) {
        alert("Por favor, acepta los términos y condiciones.");
        return;
    }

    const dateInput = document.getElementById("date");
    const dateStatus = document.getElementById("date-status");
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    
//zona horaria de Argentina
    const timezoneOffset = -3 * 60; 
    currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset() - timezoneOffset);

    if (!dateInput.value) {
        dateStatus.textContent = "Por favor selecciona una fecha.";
        return;
    }

    if (selectedDate < currentDate) {
        dateStatus.textContent = "La fecha seleccionada ya pasó.";
        dateStatus.style.color = "red";
    } else if (selectedDate > currentDate) {
        dateStatus.textContent = "La fecha seleccionada es futura.";
        dateStatus.style.color = "green";
    } else {
        dateStatus.textContent = "La fecha seleccionada es hoy.";
        dateStatus.style.color = "blue";
    }

    // Mostrar mensaje de éxito después de 3 segundos
    setTimeout(function () {
        alert("¡Gracias por ponerte en contacto con nosotros!");
        window.location.href = "index (1).html";
    }, 3000);
}

// Actualizar el estado de la fecha cuando cambie el valor del input
document.getElementById("date").addEventListener("change", () => {
    const dateInput = document.getElementById("date");
    const dateStatus = document.getElementById("date-status");
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    
    // Establecer la zona horaria de Argentina
    const timezoneOffset = -3 * 60; 
    currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset() - timezoneOffset);

    if (!dateInput.value) {
        dateStatus.textContent = "Por favor selecciona una fecha.";
        return;
    }

    if (selectedDate < currentDate) {
        dateStatus.textContent = "La fecha seleccionada ya pasó.";
        dateStatus.style.color = "red";
    } else if (selectedDate > currentDate) {
        dateStatus.textContent = "La fecha seleccionada es futura.";
        dateStatus.style.color = "green";
    } else {
        dateStatus.textContent = "La fecha seleccionada es hoy.";
        dateStatus.style.color = "blue";
    }
});
          

document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json") 
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar los productos:', error));
});
function mostrarProductos(productos) {
    console.log(productos); 
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
             <img class="img-card" src="${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Stock: ${producto.stock}</p>
            <p class="price">$${producto.precio}</p>
            <button>Agregar al Carrito</button>
        `;
        contenedor.appendChild(card);
    });
}

//  formulario de inicio de sesión
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");
    const loginForm = document.getElementById("loginForm");


    loginBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        
        const userRole = prompt("Introduce tu rol (admin, usuario):").toLowerCase();

        switch (userRole) {
            case "admin":
                window.location.href = "admin.html"; 
            case "usuario":
                window.location.href = "usuario.html";
                break;
            default:
                alert("Rol no reconocido. Por favor, ingresa un rol válido.");
                break;
        }

        
        modal.style.display = "none";
    });




    
});

    //COKIE
    document.addEventListener("DOMContentLoaded", () => {
        const cookieBanner = document.getElementById("cookieBanner");
        const acceptCookiesBtn = document.getElementById("acceptCookies");
    
        let cookiesAccepted = false;
    
        
        if (localStorage.getItem("cookiesAccepted") === "true") {
            cookiesAccepted = true;
            cookieBanner.style.display = "none";
        } else {
            
            cookieBanner.style.display = "block";
        }
    
        
        acceptCookiesBtn.addEventListener("click", () => {
            cookiesAccepted = true;
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
            enableScrolling();
        });
    
        
        function disableScrolling() {
            document.body.style.overflow = "hidden";
        }
    
        
        function enableScrolling() {
            document.body.style.overflow = "";
        }
    
       
        window.addEventListener("scroll", () => {
            if (!cookiesAccepted) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;
                if (scrollPosition > pageHeight / 2) {
                    disableScrolling();
                }
            }
        });
    });
    // Mostrar la pantalla de carga
    
    window.addEventListener('load', () => {
        
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            
            const content = document.getElementById('content');
            content.style.display = 'block';
        }, 1000); 
    });
    
    // Función para mostrar el contenido al hacer clic en el botón
    document.getElementById('showContentButton')?.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.style.display = 'block';
    });

// Mostrar el popup después de 3 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'flex';
    }, 3000); 
});


document.addEventListener('click', (event) => {
    if (event.target.matches('.popup-close') || event.target.matches('.popup-close-button')) {
        document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    alert('Buscando: ' + query);
});
  