// mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbnBhdGVsODAwIiwiYSI6ImNsdXVma3Y2eDA5aTYyaXJ1cG9paWxkeXkifQ.W3N3M_9eewZA6lABLZL3Pw';
//         const startermap = new mapboxgl.Map({
//             container: 'startermap',
//             style: 'mapbox://styles/mapbox/navigation-night-v1',
//             center: [-73.935242, 40.730610],
//             zoom: 11
//         })
// Get the popup container and its content
var popupContainer = document.getElementById("popupContainer");
var popupContent = document.getElementById("popupContent");

// Get the Penn Station button
var pennButton = document.getElementById("pennButton");

// When the user clicks the Penn Station button, get to popup to display
pennButton.onclick = function() {
  if (popupContainer.style.display === "block") {
    popupContainer.style.display = "none";
  } else {
    popupContainer.style.display = "block";
    // startermap.flyTo({center: [-70, 41], zoom: 9});;
  }
}

