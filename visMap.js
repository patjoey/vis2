var map = "https://raw.githubusercontent.com/patjoey/vis2/refs/heads/main/map.vg.json";
vegaEmbed("#map", map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
