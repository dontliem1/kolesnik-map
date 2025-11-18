import {createCityMap} from '/kolesnik-map/lib/ymaps.js'

	createCityMap({
		longitude: '60.597474',
		latitude: '56.838011',
		zoom: '13',
		features: [
				{
					id: 'vajnera-151',
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [59.96188, 56.908463],
					},
					properties: {
						status: 'done',
						size: 'small',
						title: 'Вайнера, 15/1',
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
		],
	});