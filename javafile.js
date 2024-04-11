mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbnBhdGVsODAwIiwiYSI6ImNsdXVma3Y2eDA5aTYyaXJ1cG9paWxkeXkifQ.W3N3M_9eewZA6lABLZL3Pw';
        const startermap = new mapboxgl.Map({
            container: 'startermap',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [-73.935242, 40.730610],
            zoom: 11
        });

document.addEventListener('DOMContentLoaded', function() {
    var pennButton = document.getElementById('pennButton');
    pennButton.addEventListener('click', function() {
        startermap.flyTo({center: [-70, 41], zoom: 9});;
    });
});
