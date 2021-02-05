import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"

let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree)
let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

// Set up data source
series.dataSource.url = "data.json"

// Set up data fields
series.dataFields.id = "id"
series.dataFields.name = "name"
series.dataFields.value = "value"
series.dataFields.linkWith = "link"
series.dataFields.children = "children"

// Add labels
series.nodes.template.label.text = "({id})\n{name}"
series.fontSize = 10
series.minRadius = 30
series.maxRadius = 40
