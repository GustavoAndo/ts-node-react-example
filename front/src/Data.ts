import Highcharts from "highcharts";

export const lineChartOptions: Highcharts.Options = {
  title: {
    text: "Quantidade de Frutas Compradas",
    style: {fontSize: '250%'}
  },
  subtitle: {
    text: "(por pessoa)",
    style: {fontSize: '125%'}
  },
  tooltip: {
    backgroundColor: '#FCFFC5',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3
},
  yAxis: [{
    title: {
        text: 'Frutas',
        style: {fontSize: '125%'}
    }
  }], 
  xAxis: {
    title: {
      text: "Frutas",
      style: {fontSize: '125%'}
    },
    categories: ['Maçãs', 'Bananas', 'Laranjas', 'Açaí', 'Melancias', 'Cacau'],
  },
  series: [
    {
      type: "column",
      data: [{y: 1, color: 'red'}, {y: 2, color: 'yellow'}, {y: 3, color:'orange'}, {y: 8, color: 'purple'}, {y: 4, color: 'green'}, {y: 7, color: 'brown'}],
      name: "quantidade",
    }
  ],
  legend: {enabled: false}
};
