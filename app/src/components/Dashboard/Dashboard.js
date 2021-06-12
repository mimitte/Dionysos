import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import filterColorbottles from '../../utils/filterColorBottles';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import spinner from '../../utils/spinner';
am4core.useTheme(am4themes_animated);

class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded:false

    }
  }

  componentDidMount(){
    //const spinner = document.getElementById("spinner");
    //spinner.removeAttribute('hidden');
    fetch("http://localhost:5000/api/bottle?")
      .then(response => response.json())
        .then(
          (bouteilles) => {
            this.setState({
              isLoaded:true
            })
          const colorRouge ="#ac1e44";
          const colorRose = "#ffe6ff";
          const colorBlanc = "#fff0b3";
          // appel à la fonction filterColorbottles qui contient les méthodes pour filtrer les bouteilles par couleurs les bouteilles 
          const {red, white,pink} = filterColorbottles(bouteilles);
          //spinner.setAttribute('hidden','');
          let data = [{
              "country": "Vin rouge",
              "disabled": true,
              "litres": red,
              "color": am4core.color(colorRouge),
              "opacity": 1,
              "strokeDasharray": "4,4"
          }, {
              "country": "Rosé",
              "litres": pink,
              "color": am4core.color(colorRose),
              "opacity": 1,
              "strokeDasharray": "4,4"
          }, {
              "country": "Vin blanc",
              "litres":  white,
              "color": am4core.color(colorBlanc),
              "opacity": 1,
              "strokeDasharray": "4,4"
          }]
          // cointainer to hold both charts
          let container = am4core.create("chartdiv", am4core.Container);
          container.width = am4core.percent(100);
          container.height = am4core.percent(100);
          container.layout = "horizontal";
          container.events.on("maxsizechanged", function () {
              chart1.zIndex = 0;
              // separatorLine.zIndex = 1;
              // dragText.zIndex = 2;
          })
          let chart1 = container.createChild(am4charts.PieChart);
          chart1.fontSize = 11;
          chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect
          chart1.data = data;
          chart1.radius = am4core.percent(70);
          chart1.innerRadius = am4core.percent(40);
          chart1.zIndex = 1;

          let series1 = chart1.series.push(new am4charts.PieSeries());
          series1.dataFields.value = "litres";
          series1.dataFields.category = "country";
          series1.colors.step = 2;
          series1.alignLabels = false;
          series1.labels.template.bent = true;
          series1.labels.template.radius = 3;
          series1.labels.template.padding(0,0,0,0);

          let sliceTemplate1 = series1.slices.template;
          sliceTemplate1.cornerRadius = 5;
          sliceTemplate1.draggable = false;
          sliceTemplate1.inert = true;
          sliceTemplate1.propertyFields.fill = "color";
          sliceTemplate1.propertyFields.fillOpacity = "opacity";
          sliceTemplate1.propertyFields.stroke = "color";
          sliceTemplate1.propertyFields.strokeDasharray = "strokeDasharray";
          sliceTemplate1.strokeWidth = 1;
          sliceTemplate1.strokeOpacity = 1;

          let zIndex = 5;

          sliceTemplate1.events.on("down", function (event) {
              event.target.toFront();
              // also put chart to front
              let series = event.target.dataItem.component;
              series.chart.zIndex = zIndex++;
          })

          series1.ticks.template.disabled = true;

          sliceTemplate1.states.getKey("active").properties.shiftRadius = 0;

          let dragText = container.createChild(am4core.Label);
          // dragText.text = "Drag slices over the line";
          dragText.rotation = 90;
          dragText.valign = "middle";
          dragText.align = "center";
          dragText.paddingBottom = 5;
      });
  }

  componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  render() {

    return (
      <>
        <h2>Bienvenue sur Dionysos !</h2>
        {/* <div hidden id="spinner"></div> */}
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        <DashboardMenu/>
        {spinner(this.state.isLoaded)}
        {/* <this.spinner/> */}
      </>
    );
  }
}

export default (Dashboard);
