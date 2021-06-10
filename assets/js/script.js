// Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  items: 1,
  autoplay: true,
  nav: true
});

// Leaflet Map
(function() {
  const bounds = null;

  const map_3f3901e7b2c14558bf4bf95d9246f404 = L.map(
    'map_3f3901e7b2c14558bf4bf95d9246f404',
    {
      center: [41.790404, 44.755072],
      zoom: 14,
      maxBounds: bounds,
      layers: [],
      worldCopyJump: false,
      crs: L.CRS.EPSG3857,
      zoomControl: true,
      scrollWheelZoom: false
    }
  );

  const tile_layer_3e6b3f730017464fbec41e52f54e57c0 = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: null,
      detectRetina: false,
      maxNativeZoom: 18,
      maxZoom: 18,
      minZoom: 0,
      noWrap: false,
      opacity: 1,
      subdomains: 'abc',
      tms: false
    }
  ).addTo(map_3f3901e7b2c14558bf4bf95d9246f404);

  const marker_221ae48bdc474aa1a91653d2056909a0 = L.marker(
    [41.790404, 44.755072],
    {
      icon: new L.Icon.Default()
    }
  ).addTo(map_3f3901e7b2c14558bf4bf95d9246f404);

  const popup_5847d5d500c246d6b6558c78ea888c99 = L.popup({ maxWidth: '300' });

  const html_7446223a69b94d38a76ffb54ca73d2c1 = $(
    `<div id="html_7446223a69b94d38a76ffb54ca73d2c1" style="width: 100.0%; height: 100.0%;"><strong>Intertechnics LTD</strong></div>`
  )[0];
  popup_5847d5d500c246d6b6558c78ea888c99.setContent(
    html_7446223a69b94d38a76ffb54ca73d2c1
  );

  marker_221ae48bdc474aa1a91653d2056909a0.bindPopup(
    popup_5847d5d500c246d6b6558c78ea888c99
  );

  marker_221ae48bdc474aa1a91653d2056909a0.bindTooltip(
    `<div>` + `Click for More` + `</div>`,
    { sticky: true }
  );
})();

// Update footer current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;
