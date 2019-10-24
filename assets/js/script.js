$('.owl-carousel').owlCarousel({
  loop: true,
  items: 1,
  autoplay: true,
  nav: true
});

const bounds = null;

const map_3f3901e7b2c14558bf4bf95d9246f404 = L.map(
  'map_3f3901e7b2c14558bf4bf95d9246f404',
  {
    center: [41.760038, 44.7549107],
    zoom: 12,
    maxBounds: bounds,
    layers: [],
    worldCopyJump: false,
    crs: L.CRS.EPSG3857,
    zoomControl: true
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

const marker_273c3d67cadd418e8554ab6cc8a7505e = L.marker(
  [41.710038, 44.754758],
  {
    icon: new L.Icon.Default()
  }
).addTo(map_3f3901e7b2c14558bf4bf95d9246f404);

const popup_b1a84c64927348b7a09301a5c8dfc9b8 = L.popup({ maxWidth: '300' });

const html_9b1f9ddbd2fd42d5b2a3b187f54c9c92 = $(
  `<div id="html_9b1f9ddbd2fd42d5b2a3b187f54c9c92" style="width: 100.0%; height: 100.0%;"><strong>Intertechnics LTD office</strong></div>`
)[0];
popup_b1a84c64927348b7a09301a5c8dfc9b8.setContent(
  html_9b1f9ddbd2fd42d5b2a3b187f54c9c92
);

marker_273c3d67cadd418e8554ab6cc8a7505e.bindPopup(
  popup_b1a84c64927348b7a09301a5c8dfc9b8
);

marker_273c3d67cadd418e8554ab6cc8a7505e.bindTooltip(
  `<div>` + `Click for More` + `</div>`,
  { sticky: true }
);

const marker_221ae48bdc474aa1a91653d2056909a0 = L.marker(
  [41.790404, 44.755072],
  {
    icon: new L.Icon.Default()
  }
).addTo(map_3f3901e7b2c14558bf4bf95d9246f404);

const popup_5847d5d500c246d6b6558c78ea888c99 = L.popup({ maxWidth: '300' });

const html_7446223a69b94d38a76ffb54ca73d2c1 = $(
  `<div id="html_7446223a69b94d38a76ffb54ca73d2c1" style="width: 100.0%; height: 100.0%;"><strong>Intertechnics Parts Shop</strong></div>`
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
