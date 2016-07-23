class GraficoCliclogix{
	constructor()
	{
		this.iniciarGrafico();
	}
	iniciarGrafico(){
		
			$('#grafico').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: ['transformacion', 'audiencia', 'contenido', 'monetizacion'],
				labels: {
					color: '#0097D9',
					x: 5,
					useHTML: true,
					formatter: function () {
						console.log(this);
						return {
							'transformacion': '<i class="icon-grafico fa fa-line-chart"></i>',
							'audiencia': '<i class="icon-grafico fa fa-users"></i>',
							'contenido': '<i class="icon-grafico fa fa-cloud"></i>',
							'monetizacion': '<i class="icon-grafico fa fa-money"></i>',
						}[this.value]; //'<img class="" src="http://dummyimage.com/60x60/ff6600/ffffff"/>';
					}
				},
			},
			yAxis: {
				title: {
					text: null
				}
			},
			legend: {
				enabled: false
				},
			credits: {
				enabled: false
			},
			series: [{
				name: 'John',
				data: [5, 3, 4, 7]
			}, {
				name: 'Jan',
				data: [2, 2, 3, 2]
			}]
		});

	}
}
