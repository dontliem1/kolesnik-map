import {createCityMap} from '/kolesnik-map/lib/ymaps.js'

	createCityMap({
		longitude: '92.852572',
		latitude: '56.010569',
		zoom: '13',
		features: [
				{
					id: 'yamskaya-76',
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [65.566793, 57.162342],
					},
					properties: {
						status: 'in_progress',
						size: 'small',
						title: 'Ямская, 76',
					},
				},
				{
					id: 'vodoprovodnaya-14',
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [65.544299, 57.157915],
					},
					properties: {
						status: 'done',
						size: 'normal',
						title: 'Водопроводная, 14',
					},
				},
				{
					id: 'vodoprovodnaya-15',
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [65.544919, 57.157974],
					},
					properties: {
						status: 'done',
						size: 'small',
						title: 'Водопроводная, 15',
					},
				},
		],
	});