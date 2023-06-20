// Obtener datos del usuario almacenados en el localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Rellenar los campos correspondientes en el perfil
document.getElementById('nombre').textContent = userData.nombre;
document.getElementById('email').textContent = userData.email;
document.getElementById('direccion').textContent = userData.direccion;
document.getElementById('ingresosMensuales').textContent = '$' + getRandomNumber(2000, 5000);
document.getElementById('gastosMensuales').textContent = '$' + getRandomNumber(1500, 4000);
document.getElementById('ahorroMensual').textContent = '$' + getRandomNumber(500, 2000);
document.getElementById('deudas').textContent = '$' + getRandomNumber(5000, 15000);

// Generar datos aleatorios para el gráfico de barras (gastos e ingresos mensuales)
const monthlyData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Ingresos',
      data: getRandomArray(12, 2000, 4000),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      label: 'Gastos',
      data: getRandomArray(12, 1500, 3000),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

// Configuración del gráfico de barras
const monthlyConfig = {
  type: 'bar',
  data: monthlyData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Crear el gráfico de barras
const monthlyChart = new Chart(document.getElementById('monthlyChart'), monthlyConfig);

// Generar datos aleatorios para el diagrama de pastel (proporción de ahorro)
const savingsData = {
  labels: ['Ingresos', 'Gastos', 'Ahorro'],
  datasets: [
    {
      data: getRandomArray(3, 1000, 5000),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

// Configuración del diagrama de pastel
const savingsConfig = {
  type: 'pie',
  data: savingsData
};

// Crear el diagrama de pastel
const savingsChart = new Chart(document.getElementById('savingsChart'), savingsConfig);

// Función para generar un número aleatorio en un rango específico
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un array de números aleatorios en un rango específico
function getRandomArray(length, min, max) {
  return Array.from({ length }, () => getRandomNumber(min, max));
}
