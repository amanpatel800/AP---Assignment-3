
//button code for Penn Station
var popupContainerPenn = document.getElementById("popupContainerpenn");
var popupContentPenn = document.getElementById("popupContentpenn");
var pennButton = document.getElementById("pennButton");
pennButton.onclick = function() {
  if (popupContainerPenn.style.display === "block") {
    popupContainerPenn.style.display = "none";
  } else {
    popupContainerPenn.style.display = "block";
    startermap.flyTo({center: [-73.9935, 40.7506], zoom: 16});;
  }
}

//button code for fifth Station
var popupContainerfifth = document.getElementById("popupContainerfifth");
var popupContentfifth = document.getElementById("popupContentfifth");
var fifthButton = document.getElementById("fifthButton");
fifthButton.onclick = function() {
  if (popupContainerfifth.style.display === "block") {
    popupContainerfifth.style.display = "none";
  } else {
    popupContainerfifth.style.display = "block";
    startermap.flyTo({center: [-73.97692, 40.75914], zoom: 15});;
  }
}


//button code for queens Station
var popupContainerqueens = document.getElementById("popupContainerqueens");
var popupContentqueens = document.getElementById("popupContentqueens");
var queensButton = document.getElementById("queensButton");
queensButton.onclick = function() {
  if (popupContainerqueens.style.display === "block") {
    popupContainerqueens.style.display = "none";
  } else {
    popupContainerqueens.style.display = "block";
    startermap.flyTo({center: [-73.92766, 40.76057], zoom: 13});;
  }
}


//button code for ibx Station
var popupContaineribx = document.getElementById("popupContaineribx");
var popupContentibx = document.getElementById("popupContentibx");
var ibxButton = document.getElementById("ibxButton");
ibxButton.onclick = function() {
  if (popupContaineribx.style.display === "block") {
    popupContaineribx.style.display = "none";
  } else {
    popupContaineribx.style.display = "block";
    startermap.flyTo({center: [-73.91380, 40.72405], zoom: 12});;
  }
}


//button code for capstone Station
var popupContainercap = document.getElementById("popupContainercap");
var popupContentcap = document.getElementById("popupContentcap");
var capButton = document.getElementById("capButton");
capButton.onclick = function() {
  if (popupContainercap.style.display === "block") {
    popupContainercap.style.display = "none";
  } else {
    popupContainercap.style.display = "block";
    startermap.flyTo({center: [-74.00859, 40.70829], zoom: 18});;
  }
}


