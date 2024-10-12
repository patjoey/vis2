var stream = "https://raw.githubusercontent.com/patjoey/vis2/refs/heads/main/stream.vg.json";
vegaEmbed("#stream", stream).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
