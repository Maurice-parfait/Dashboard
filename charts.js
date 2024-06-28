const chart1 = document.getElementById('chart1');

new Chart(chart1, {
  type: 'line',
  data: {
    labels: ['jav', 'fer', 'mars', 'avriel', 'main', 'juin', 'jullet', 'aut', 'sep', 'oct', 'nov', 'dec'],
    datasets: [{
      label: '# of Votes',
      data: [127, 197, 300, 500, 200, 900],
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
    labels: ['jav', 'fer', 'mars'],
    datasets: [{
      label: '# of Votes',
      data: [127, 197, 300,],
      borderWidth: 1
    }]
  },
  options: {
    reponsive : true
  }
});