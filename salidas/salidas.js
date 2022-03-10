const labels = [
    'STILA FRESA',
    'Emperador Nuez WL 109GRX',
    'HABANERA INTGL FU RG',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Stock por producto',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
            'rgb(250, 90, 130)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
        ],
        borderWidth: 3,
        data: [7, 6, 15],
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