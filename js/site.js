// Your map's TileJSON url. Define your map layers here.



  // Declare variables
  var map, interaction;
  // Set initial map layer
  var layer = 'hackomaha.all-building-violations';
  // Static part of the map url
  var urlBase = 'http://api.tiles.mapbox.com/v3/hackomaha.map-uum4ismv,';
  // Full map url
  var url = urlBase + layer + '.jsonp';

  wax.tilejson(url, function(tilejson) {
    // Set minimum zoom limit
    tilejson.minzoom = 10;
    // Set maximum zoom limit
    tilejson.maxzoom = 16;

    map = new MM.Map('mymap', new wax.mm.connector(tilejson), null, [new MM.DragHandler(map), new MM.DoubleClickHandler(map)]);
	wax.mm.legend(map, tilejson).appendTo(map.parent);
    wax.mm.zoomer(map, tilejson).appendTo(map.parent);
    interaction = wax.mm.interaction()
        .map(map)
        .tilejson(tilejson)
        .on(wax.movetip().parent(map.parent).events());

    map.setCenterZoom({ lat: 41.20139, lon: -96.026001 }, 11);
  });
  