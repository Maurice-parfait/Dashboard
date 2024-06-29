const chart1 = document.getElementById('chart1');

new Chart(chart1, {
  type: 'line',
  data: {
    labels: ['jav', 'fer', 'mars', 'avriel', 'main', 'juin', 'jullet', 'aut', 'sep', 'oct', 'nov', 'dec'],
    datasets: [{
      label: '# of Votes',
      data: [1270, 400, 800, 1000, 800, 400, 700, 600, 1000, 1200, 900, 700],
      borderWidth: 1
    }]
  },
  options: {
    reponsive : true
  }
});

// le deuxieme graphique 

const chart2 = document.getElementById('chart2');

new Chart(chart2, {
  type: 'doughnut',
  data: {
    labels: ['jav', 'fer', 'mars', 'avril', 'main', 'juin'],
    datasets: [{
      label: '# of Votes',
      data: [197, 300, 400, 200],
      borderWidth: 1
    }]
  },
  options: {
    reponsive : true
  }
});