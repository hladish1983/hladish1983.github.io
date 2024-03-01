require([
      "esri/widgets/Sketch",
      "esri/Map",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/widgets/Home"
    ], (Sketch, Map, GraphicsLayer, MapView, Home) => {
      const graphicsLayer = new GraphicsLayer();

      const map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 5,
        center: [90, 45]
      });

      view.when(() => {
        const sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
               creationMode: "update"
        });

        view.ui.add(sketch, "top-right");
      });
      let homeWidget = new Home({
   view: view
});

view.ui.add(homeWidget, "top-left");
    });