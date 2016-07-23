'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraficoCliclogix = function () {
	function GraficoCliclogix() {
		_classCallCheck(this, GraficoCliclogix);

		this.iniciarGrafico();
	}

	_createClass(GraficoCliclogix, [{
		key: 'iniciarGrafico',
		value: function iniciarGrafico() {

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
						formatter: function formatter() {
							console.log(this);
							return {
								'transformacion': '<i class="icon-grafico fa fa-line-chart"></i>',
								'audiencia': '<i class="icon-grafico fa fa-users"></i>',
								'contenido': '<i class="icon-grafico fa fa-cloud"></i>',
								'monetizacion': '<i class="icon-grafico fa fa-money"></i>'
							}[this.value]; //'<img class="" src="http://dummyimage.com/60x60/ff6600/ffffff"/>';
						}
					}
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
	}]);

	return GraficoCliclogix;
}();