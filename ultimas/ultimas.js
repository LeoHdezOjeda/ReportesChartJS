const labels = [
    'STILA FRESA',
    'Emperador Nuez WL 109GRX',
    'HABANERA INTGL FU RG',
    'ANIMALITOS RG 1000GRX6X1',
    '3 MINUTOS BOLSA RG 250GR',
    'STILA MORAS RG 25GRX84X1',
];

const data = {
    labels: [
        'STILA FRESA',
        'Emperador Nuez WL 109GRX',
        'HABANERA INTGL FU RG',
        'ANIMALITOS RG 1000GRX6X1',
        '3 MINUTOS BOLSA RG 250GR',
        'STILA MORAS RG 25GRX84X1',
    ],
    datasets: [{
        label: 'Ultimas mercancias',
        data: [250, 300, 50, 20, 560, 98],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 100, 158)',
            'rgb(71, 26, 65)',
            'rgb(99, 99, 99)'
        ],
        hoverOffset: 4
    }],
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

const config = {
    type: 'bar',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);