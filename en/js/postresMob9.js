// gráfica de chiles frescos 
  // set the dimensions and margins of the graph
    const marginPosMob = {top: 0, right: 0, bottom: 0, left: 0},
        widthPosMob = 1100 - marginPosMob.left - marginPosMob.right,
        heightPosMob = 1100 - marginPosMob.top - marginPosMob.bottom,
        innerRadiusPosMob = 350,
        outerRadiusPosMob = Math.min(widthPosMob, heightPosMob) / 2;   // the outerRadiusPosMob goes from the middle of the SVG area to the border

  // append the svg object
    const svgPosMob = d3.select("#graficaPostresMob")
      .append("svg")
        .attr('class','mainsvgP')
        // .attr("width", widthPosMob + marginPosMob.left + marginPosMob.right)
        // .attr("height", heightPosMob + marginPosMob.top + marginPosMob.bottom)
        .attr("viewBox", '0 0 1200 1200')
        // .style('background', 'transparent')
      .append("g")
        .attr("transform", `translate(${widthPosMob/2+marginPosMob.left}, ${heightPosMob/2+marginPosMob.top})`)
        .style('font-family','sans-serif')
        .style('font-weight', 'thin');
      svgPosMob.append("image")
          .attr('xlink:href', 'img/pepitoria-220w.png')
          .attr('class','chileverde')
          .attr('width', widthPosMob/6)
          .attr('height', widthPosMob/6)
          .attr("x", -widthPosMob/12)
          .attr("y", -heightPosMob/12);

  d3.csv("dataP.csv").then( function(data) {

    // Scales
      const xPos = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Platillo)); // The domain of the X axis is the list of platillos.

    // Circulo 0
      // Add the circles
        let nodeTreePos = svgPosMob.append("g")
          .attr('class','gGrandePosMob')
          .selectAll("circle")
          .data(data)
          .join("g")
            .attr("class", "nodePadrePosMob")
            .attr('id', function(d) {
                return "nodePadrePosMob"+d.Platillo
            })
            .append("circle")
            .attr('class','circleBubblePosMob')
            .style('cursor','pointer')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5.5)
            .attr("transform", function(d) { return "rotate(" + ((xPos(d.Platillo) + xPos.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (290) + ",0)"; })
            .style('fill', '#000')
           
      
           
      // Texto interior de bubble grande
        d3.selectAll('.nodePadrePosMob').append("text")
          .text(function(d){return(d.Platillo)})
          .attr("font-size", "11px")
          .style("font-family", "circularstd-book")
          .attr("alignment-baseline", "middle")
          .attr("text-anchor","end")
          .style("cursor","pointer")
          .attr("class",function(d){return("textAfueraPosMob textAfueraPosMob"+d.Num)})
          // .attr("transform", function(d) { return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })
          .attr("transform", function(d) {
              return "rotate(" + ((xPos(d.Platillo) + xPos.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)";
          });


        d3.selectAll('.nodePadrePosMob:nth-child(n+38) text')
        .attr("text-anchor","start")
        .attr("transform", function(d) {
              return "rotate(" + ((xPos(d.Platillo) + xPos.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)scale(-1)";
        });

       d3.selectAll('.circleBubblePosMob')
         .on('mouseenter', function(e,d){
           console.log("o");
           d3.selectAll('.textAfueraPosMob')
              .style("font-weight", 'normal')
             .style("font-size", '11px')
             .style("opacity", '0.2')
             .style("letter-spacing", '0')
             .style("opacity", '.2')            
           d3.selectAll('.textAfueraPosMob'+ (d.Num))
           .style("font-weight", 'bold')
           .style("font-size", '16px')
           .style("opacity", '1')
           .style("letter-spacing", '.5px');
         });

       d3.selectAll('.circleBubblePosMob')
         .on('mouseout', function(){
           d3.selectAll('.textAfueraPosMob')
           .style("font-weight", 'normal')
           .style("font-size", '11px')
           .style("opacity", '1')
           .style("letter-spacing", '.5px');
         });

    d3.selectAll('#graficaPostresMob')
      .data(data)
      .append("div")
      .attr("class", "tooltipPosMob");

      

  });

  

d3.csv("1P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const xPos = d3.scaleBand()
          .range([0, 2 * Math.PI])    // xPos axPosis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the xPos axPosis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((xPos(d.Num) + xPos.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (310) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
           .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("2P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (330) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("3P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (350) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("4P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (370) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("5P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (390) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("6P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (410) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("7P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (430) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("8P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (450) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("9P.csv").then( function(data) {

  d3.csv("dataP.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePos = svgPosMob.append("g")
        .attr('class','circleNumPosMob')
        .selectAll("circleNumPosMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Pos")
          .append("circle")
          .attr('class','circles1Pos')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (470) + ",0)"; })
          .attr('fill', function(d) {
              if(d.Color=="morado"){
                return "#AC95DF"
              }
              else if(d.Color=="rosa"){
                return "#EFB6C2"
              }
              else if(d.Color=="naranja"){
                return "#EE8031"
              }
              else if(d.Color=="rojo"){
                return "#D54622"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#C4D180"
              }
              else if(d.Color=="azul"){
                return "#2D69AE"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
   
    // Hover
    d3.selectAll('.circles1Pos')
      .on('mouseenter', function (e,d) {
        d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPosMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPosMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15) + "px")
          .style('background-color', function() {
              if(d.Color=="morado"){
                return "#C8BDED"
              }
              else if(d.Color=="rosa"){
                return "#EBBCC8"
              }
              else if(d.Color=="naranja"){
                return "#E8B689"
              }
              else if(d.Color=="rojo"){
                return "#E89B9B"
              }
              else if(d.Color=="amarillo"){
                return "#EDD79C"
              }
              else if(d.Color=="verde"){
                return "#DADEA0"
              }
              else if(d.Color=="azul"){
                return "#B8D0E6"
              }
              else{
                return "transparent"
              } if(d.Platillo=="X"){
                return "transparent"
              }
            })
       
    });
    d3.selectAll('.circles1Pos')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPosMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPosMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


