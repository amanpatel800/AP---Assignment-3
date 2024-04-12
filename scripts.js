// Function to hide all popups
function hideAllPopups() {
    popupContainerPenn.style.display = "none";
    popupContainerfifth.style.display = "none";
    popupContainerqueens.style.display = "none";
    popupContaineribx.style.display = "none";
    popupContainercap.style.display = "none";
}

// Button code for Penn Station
var popupContainerPenn = document.getElementById("popupContainerpenn");
var pennButton = document.getElementById("pennButton");
pennButton.onclick = function () {
    if (popupContainerPenn.style.display === "block") {
        popupContainerPenn.style.display = "none";
    } else {
        hideAllPopups();
        popupContainerPenn.style.display = "block";
        startermap.flyTo({ center: [-73.9935, 40.7506], zoom: 16 });
    }
}

// Button code for Fifth Station
var popupContainerfifth = document.getElementById("popupContainerfifth");
var fifthButton = document.getElementById("fifthButton");
fifthButton.onclick = function () {
    if (popupContainerfifth.style.display === "block") {
        popupContainerfifth.style.display = "none";
    } else {
        hideAllPopups();
        popupContainerfifth.style.display = "block";
        startermap.flyTo({ center: [-73.97692, 40.75914], zoom: 15 });
    }
}

// Button code for Queens Station
var popupContainerqueens = document.getElementById("popupContainerqueens");
var queensButton = document.getElementById("queensButton");
queensButton.onclick = function () {
    if (popupContainerqueens.style.display === "block") {
        popupContainerqueens.style.display = "none";
    } else {
        hideAllPopups();
        popupContainerqueens.style.display = "block";
        startermap.flyTo({ center: [-73.92766, 40.76057], zoom: 13 });
    }
}

// Button code for IBX Station
var popupContaineribx = document.getElementById("popupContaineribx");
var ibxButton = document.getElementById("ibxButton");
ibxButton.onclick = function () {
    if (popupContaineribx.style.display === "block") {
        popupContaineribx.style.display = "none";
    } else {
        hideAllPopups();
        popupContaineribx.style.display = "block";
        startermap.flyTo({ center: [-73.91380, 40.72405], zoom: 12 });
    }
}

// Button code for Capstone Station
var popupContainercap = document.getElementById("popupContainercap");
var capButton = document.getElementById("capButton");
capButton.onclick = function () {
    if (popupContainercap.style.display === "block") {
        popupContainercap.style.display = "none";
    } else {
        hideAllPopups();
        popupContainercap.style.display = "block";
        startermap.flyTo({ center: [-74.00859, 40.70829], zoom: 18 });
    }
}
