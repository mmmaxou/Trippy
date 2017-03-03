Template.charts.onRendered(function () {
    Chart.defaults.global.scaleBeginAtZero = true;
    // get graphics context of canvas elements
    // and call global methods on the server
    // for data aggregation
    let ct = Template.currentData().name.replace(/ /g, "-");
    console.log("currentData = ",Template.currentData().name.replace(/ /g, "-"));
    console.log("parrentData = ",Template.parentData(1).name.replace(/ /g, "-"));
    let ctx = $("#myChart").get(0).getContext("2d");
    Meteor.call("getWeatherData", ct, (err, result) => {
        let data = {
        labels: [],
        datasets: []
      };
      data.datasets.push({
          label: "temp",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: []
      });
      data.datasets.push({
          label: "temp min",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: []
      });
      data.datasets.push({
          label: "temp max",
          fillColor: "rgba(255,187,205,0.2)",
          strokeColor: "rgba(255,187,205,1)",
          pointColor: "rgba(255,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(255,187,205,1)",
          data: []
      });
      for (let d of result.list) {
        data.labels.push(d.dt_txt);
        data.datasets[0].data.push(d.main.temp);
        data.datasets[1].data.push(d.main.temp_min);
        data.datasets[2].data.push(d.main.temp_max);
      }
      new Chart(ctx).Line(data, Chart.defaults.global);
    });

  });
