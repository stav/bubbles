import * as am4core from '@amcharts/amcharts4/core'
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import animatedTheme from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(animatedTheme)

// Chart
const chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree)

// Data series
const series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
// Data source
series.dataSource.url = 'data.json'
// Data fields
series.dataFields.id = 'id'
series.dataFields.name = 'name'
series.dataFields.color = 'color'
series.dataFields.value = 'value'
series.dataFields.linkWith = 'link'
series.dataFields.children = 'children'
series.dataFields.collapsed = 'off'
// Appearance
series.fontSize = 10
series.maxLevels = 2
series.minRadius = 30
series.maxRadius = 100
// Nodes
series.nodes.template.expandAll = false
series.nodes.template.label.text = '{id}\n{name}\n{generation}'
series.nodes.template.tooltipText = "{info}"
series.nodes.template.fillOpacity = 1
series.colors.list = [am4core.color("#9785ff")]
