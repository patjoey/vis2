{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://raw.githubusercontent.com/patjoey/vis2/refs/heads/main/new_building.csv"
  },
  "params": [
    {
      "name": "State_selection",
      "bind": {
        "input": "select",
        "options": [
          null,
          "New South Wales",
          "Victoria",
          "Queensland",
          "South Australia",
          "Western Australia",
          "Tasmania",
          "Northern Territory",
          "Australian Capital Territory"
        ],
        "labels": [
          "Show All",
          "New South Wales",
          "Victoria",
          "Queensland",
          "South Australia",
          "Western Australia",
          "Tasmania",
          "Northern Territory",
          "Australian Capital Territory"
        ],
        "name": "Continent Selection: "
      }
    }
  ],
  "transform": [
    {
      "filter": "State_selection == null || datum.State == State_selection"
    }
  ],
  "vconcat": [
    {
      "width": "container",
      "height": 200,
      "mark": "area",
      "encoding": {
        "x": {
          "timeUnit": "yearquarter", "field": "Date",
          "scale": {"domain": {"param": "brush"}},
          "axis": {"domain": false, "format": "%Y", "tickSize": 0}
        },
        "y": {
          "aggregate": "sum", "field": "Building_pop",
          "axis": null,
          "stack": "center"
        },
        "color": {"field":"State", "scale":{"scheme": "tableau10"},"legend":{"orient":"top", "legendX":200}}
      }
    },
    {
      "width": "container",
      "height": 100,
      "mark": "line",
      "params": [
        {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
      ],
      "encoding": {
        "x": {
          "timeUnit": "yearmonth", "field": "Date",
          "axis": {"domain": false, "format": "%Y", "tickSize": 0}
        },
        "y": {
          "aggregate": "sum", "field": "Building_pop"
        }
      }
    }
  ]
}
