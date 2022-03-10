const labels = [
    'STILA FRESA',
    'Emperador Nuez WL 109GRX',
    'HABANERA INTGL FU RG',
    'ANIMALITOS RG 1000GRX6X1',
    '3 MINUTOS BOLSA RG 250GR',
    'STILA MORAS RG 25GRX84X1',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Stock por producto',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(250, 90, 130)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 3,
        data: [35, 25, 10, 96, 84, 16, 6],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);