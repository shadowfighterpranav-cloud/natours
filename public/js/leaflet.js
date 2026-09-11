/* eslint-disable */
export const displayMap = (locations) => {
  const map = L.map('map', { zoomControl: false });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const points = [];

  locations.forEach((loc) => {
    const pointsArray = [loc.coordinates[1], loc.coordinates[0]];
    points.push(pointsArray);

    const myIcon = L.icon({
      iconUrl: '/img/pin.png',
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
    });

    L.marker(pointsArray, { icon: myIcon })
      .addTo(map)
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false,
        className: 'mapPopup',
      })
      .openPopup();
  });

  const bounds = L.latLngBounds(points).pad(0.5);
  map.fitBounds(bounds);
};
