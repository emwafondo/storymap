// Create the Leaflet map
const map = L.map("map").setView([30.0444, 31.2357], 5);

// Add a tile layer with OpenStreetMap as the base map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data © OpenStreetMap contributors",
  maxZoom: 18,
}).addTo(map);

// Define an array of locations with their coordinates and information
const locations = [
  {
    name: "nigeria",
    description: "Ancient burial site and one of the seven wonders of the ancient world.",
    coordinates: [9.0820, 8.6753],
  },
  {
    name: "south africa",
    description: "Home to some of the world's most spectacular wildlife and the Maasai people.",
    coordinates: [30.5595,22.9375],
  },
  {
    name: "kenya",
    description: "A vibrant city with stunning beaches and the iconic Table Mountain.",
    coordinates: [0.0236, 37.9062],
  },
  {
    name: "Marrakech",
    description: "A bustling city with a rich history and culture, famous for its markets and spices.",
    coordinates: [31.6295, -7.9811],
  },
];

// Add markers for each location on the map
locations.forEach((location) => {
  const marker = L.marker(location.coordinates).addTo(map);
  marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
  
  // Show more information about the location when clicked
  marker.on("click", () => {
    const info = document.querySelector("#info");
    info.innerHTML = `<h2>${location.name}</h2><p>${location.description}</p>`;
  });
});
