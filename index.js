
const ctx = document.getElementById('grafico1')

const labels = ['Subway', 'Mcdonalds', 'Burger King', 'Taco Bell', 'Arbys', 'Sonic', 'Dairy Quenn', 'Chick Fil-A']

const data = {
    labels,
    datasets:[{
        data: [2910.0, 2297.0, 2071.0, 2003.0, 1609.0, 1547.0, 1043.0, 856.0],
        label: "Menu mais saudável",
        fill: true,
        backgroundColor: [
            '#acd0e7',
            '#82b9db',
            '#59a1cf',
            '#236892',
            '#184562',
            '#3E759A',
            '#1F7FBF',
            '#045992'
        ],
    }]
};

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                beginAtZero: true,
                gridLines: {
                    display: false
                }
            }]
        } 
    }
  };

const grafico1 = new Chart(ctx, config)


const ctx2 = document.getElementById('grafico2')


const data2 = {
        labels: ['Subway', 'Mcdonalds', 'Burger King', 'Taco Bell', 'Arbys', 'Sonic', 'Dairy Quenn', 'Chick Fil-A'],
        datasets: [{
          label: 'Item mais calórico',
          data: [1160, 2430, 1550,880,1003,1350,1260,970],
          backgroundColor: [
            '#acd0e7',
            '#82b9db',
            '#59a1cf',
            '#236892',
            '#184562',
            '#3E759A',
            '#1F7FBF',
            '#045992'
        ],
          hoverOffset: 4
        }]
      };

const config2 = {
        type: 'doughnut',
        data: data2,
      };

const grafico2 = new Chart(ctx2, config2)


const container = document.querySelector('#tabela');


fetch('src/img/csvjson.json')
  .then(response => response.json())
  .then(data => {
    const headers = ['', 'Restaurante', 'Item', 'Calorias', 'Cal_Gordura', 'Gordura Total', 'Gordura Saturada','Gordura Trans','Colesterol',
                     'Sódio','Carboidrato Total','Fibra','Açúcar','Proteína','Vit_A','Vit_C', 'Cálcio'];
    const hot = new Handsontable(container, {
      data: data,
      rowHeaders: false,
      colHeaders: headers,
      maxCols: '17',
      stretchH: 'all', 
      height: '425px',
      filters: true,
      dropdownMenu: true,
      readOnly: true,
      licenseKey: 'non-commercial-and-evaluation'
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo', error));