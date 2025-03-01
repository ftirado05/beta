// Función para navegar a una sección específica
function navigateToSection(sectionId) {
  // Oculta todos los contenidos
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  // Muestra la sección seleccionada
  document.getElementById(sectionId).style.display = 'block';
}


// Mostrar el contenido inicial (Dashboard)
document.getElementById('dashboard').style.display = 'block';

// Verificar si hay un usuario en sessionStorage
const currentUser = sessionStorage.getItem('currentUser');

if (!currentUser) {
  // Si no hay usuario, redirigir a login.html
  window.location.href = 'login.html';
} else {
  // Mostrar el nombre del usuario
  document.getElementById('username').textContent = currentUser;
}

// Función para cerrar sesión
function logout() {
  // Eliminar el usuario de sessionStorage
  sessionStorage.removeItem('currentUser');
  // Redirigir a login.html
  window.location.href = 'login.html';
}

// Manejar la navegación
const links = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);

    // Oculta todos los contenidos
    contents.forEach(content => {
      content.style.display = 'none';
    });

    // Muestra el contenido seleccionado
    document.getElementById(target).style.display = 'block';
  });
});

// Mostrar el contenido inicial (Dashboard)
document.getElementById('dashboard').style.display = 'block';

// Mostrar formulario de registro
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  }
  
  // Mostrar formulario de inicio de sesión
  function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  // Función para registrar un nuevo usuario
  function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    if (username && password) {
      // Guardar el usuario en localStorage
      const user = { username, password };
      localStorage.setItem(username, JSON.stringify(user));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      showLoginForm();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  
  // Función para iniciar sesión
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    if (username && password) {
      // Verificar si el usuario existe en localStorage
      const user = JSON.parse(localStorage.getItem(username));
  
      if (user && user.password === password) {
        // Guardar el usuario actual en sessionStorage
        sessionStorage.setItem('currentUser', username);
        // Redirigir a index.html
        window.location.href = 'index.html';
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  
  // Mostrar el formulario de inicio de sesión por defecto
  showLoginForm();

  document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});