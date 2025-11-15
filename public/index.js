import {YMap, YMapZoomControl, YMapControls, YMapDefaultMarker, YMapDefaultFeaturesLayer, GRAY_SKIN} from './lib/ymaps.js'
// Иницилиазируем карту
const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.body,
    // Передаём параметры инициализации карты
    {
        behaviors: ["drag", "pinchZoom", "dblClick", "magnifier", "oneFingerZoom", "mouseRotate", "mouseTilt", "pinchRotate", "panTilt"],
        location: { // Координаты центра карты
            center: [65.567697, 57.143386],
            // Уровень масштабирования
            zoom: 15
        }
    },
    [
        GRAY_SKIN,
        new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})),
        new YMapDefaultFeaturesLayer()
    ]
);


const marker = new YMapDefaultMarker(
    {
        coordinates: [65.567697, 57.143386],
        title: 'Водопроводная, 14',
        staticHint: false,
        size: 'normal',
        color: {day: '#FAF9F9', night: '#FAF9F9'},
    },
);
map.addChild(marker);

// const marker = (feature) => {
//     const markerContainerElement = document.createElement('div');
//     markerContainerElement.classList.add('marker-container');

//     const markerText = document.createElement('div');
//     markerText.id = feature.id;
//     markerText.classList.add('marker-text', 'hidden');
//     markerText.innerText = 'Водопроводная, 14';

//     markerContainerElement.onmouseover = () => {
//         markerText.classList.replace('hidden', 'visible');
//     };

//     markerContainerElement.onmouseout = () => {
//         markerText.classList.replace('visible', 'hidden');
//     };

//     const markerElement = document.createElement('div');
//     markerElement.classList.add('marker');

//     const markerImage = document.createElement('img');
//     markerImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAkUlEQVQYV2P8z8AARAjwBMjkB2JeJLFbQDZjG1BhJbJKLGwjkEJ2oMJTQIYeDsUgQzpACoH4P0jRRSwKTwDFbIH4D0yhCpBxG4vC3UAxd5BJIIUsQPoAkGGNw+oUoPhckMIyoMJOAp5RBilED57PaEEDMuMwukKQIg0grgXiDDRbUExMBUrOAWJQgIMCWQxJMQAuPSHtA94OzwAAAABJRU5ErkJggg==';
//     markerImage.classList.add('image');

//     markerElement.appendChild(markerImage);

//     markerContainerElement.appendChild(markerText);
//     markerContainerElement.appendChild(markerElement);

//     return new YMapDefaultMarker(
//         {
//             coordinates: feature.geometry.coordinates,
//             title: 'Водопроводная, 14',
//             size: 'normal',
//             color: {day: '#FAF9F9', night: '#FAF9F9'},
//             popup: {content: 'hi', position: 'top'}
//         },
//         markerContainerElement
//     );
// };


// const textPopup = new YMapPopupMarker({coordinates: [65.567697, 57.143386], draggable: false, content: 'Привет, мир!', position: 'bottom'});

// const cluster = (coordinates, features) =>
//     new YMapMarker(
//         {
//             coordinates,
//             // onClick() {
//             //     const bounds = getBounds(features.map((feature: ExpandedFeature) => feature.geometry.coordinates));
//             //     map.update({location: {bounds, ...COMMON_LOCATION_PARAMS}});
//             // }
//         },
//         circle(features.length).cloneNode(true)
//     );

// function circle(count) {
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
//     circle.innerHTML = `
//               <div class="circle-content">
//                   <span class="circle-text">${count}</span>
//               </div>
//           `;
//     return circle;
// }

// Generating random coordinates of a point [lng, lat] in a given boundary
// const getRandomPointCoordinates = (bounds) => [
//     bounds[0][0] + (bounds[1][0] - bounds[0][0]),
//     bounds[1][1] + (bounds[0][1] - bounds[1][1])
// ];

// export const getRandomPoints = (bounds) => {
//     return Array.from({length: 1}, (_, index) => ({
//         type: 'Feature',
//         id: index.toString(),
//         geometry: {type: 'Point', coordinates: getRandomPointCoordinates(bounds)},
//         properties: {
//             name: 'marker',
//             description: ''
//         }
//     }));
// };
// export const BOUNDS = [
//     [65.567695, 57.143385],
//     [65.567699, 57.143389]
// ];

/* We create a clusterer object and add it to the map object.
As parameters, we pass the clustering method, an array of features, the functions for rendering markers and clusters.
For the clustering method, we will pass the size of the grid division in pixels. */
// const clusterer = new YMapClusterer({
//     method: clusterByGrid({gridSize: 64}),
//     features: getRandomPoints(BOUNDS),
//     marker,
//     cluster
// });

// map.addChild(clusterer);