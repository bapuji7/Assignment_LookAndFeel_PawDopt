
// Dummy data for type distribution
const typeData = {
    labels: ['Dogs', 'Cats', 'Birds', 'Others'],
    datasets: [{
      label: 'Type Distribution',
      data: [40, 30, 20, 10], // Dummy data, replace with actual data
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  // Dummy data for gender distribution
  const genderData = {
    labels: ['Male', 'Female'],
    datasets: [{
      label: 'Gender Distribution',
      data: [60, 40], // Dummy data, replace with actual data
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  // Dummy data for success rate
  const successRateData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Adoption Success Rate',
      data: [70, 75, 80, 75, 70, 95], // Dummy data, replace with actual data
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  
  // Dummy data for location adoption
  const locationData = {
    labels: ['Florida', 'California', 'New York', 'Texas', 'Illinois'],
    datasets: [{
      label: 'Adoption Count by Location',
      data: [300, 250, 200, 180, 200], // Dummy data, replace with actual data
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  // Initialize type distribution chart
  var typeDistributionChart = new Chart(document.getElementById('typeDistributionChart').getContext('2d'), {
    type: 'bar',
    data: typeData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  // Initialize gender distribution chart
  var genderDistributionChart = new Chart(document.getElementById('genderDistributionChart').getContext('2d'), {
    type: 'doughnut',
    data: genderData,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  
  // Initialize success rate chart
  var successRateChart = new Chart(document.getElementById('successRateChart').getContext('2d'), {
    type: 'line',
    data: successRateData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  // Initialize location adoption chart
  var locationAdoptionChart = new Chart(document.getElementById('locationAdoptionChart').getContext('2d'), {
    type: 'bar',
    data: locationData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  