var stream = "stream.vg.json";
vegaEmbed("#stream", stream,{"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);