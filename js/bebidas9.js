// gráfica de chiles frescos 
  // set the dimensions and margins of the graph
    const marginBeb = {top: 0, right: 0, bottom: 0, left: 0},
        widthBeb = 1100 - marginBeb.left - marginBeb.right,
        heightBeb = 1100 - marginBeb.top - marginBeb.bottom,
        innerRadiusBeb = 350,
        outerRadiusFBeb = Math.min(widthBeb, heightBeb) / 2;   // the outerRadiusFBeb goes from the middle of the SVG area to the border

  // append the svg object
    const svgBeb = d3.select("#graficaBebidas")
      .append("svg")
        .attr('class','mainsvg')
        // .attr("width", widthBeb + marginBeb.left + marginBeb.right)
        // .attr("height", heightBeb + marginBeb.top + marginBeb.bottom)
        .attr("viewBox", '0 0 1200 1200')
        // .style('background', 'transparent')
      .append("g")
        .attr("transform", `translate(${widthBeb/2+marginBeb.left}, ${heightBeb/2+marginBeb.top})`)
        .style('font-family','sans-serif')
        .style('font-weight', 'thin');
      svgBeb.append("image")
          .attr('xlink:href', 'img/jarron-220w.png')
          .attr('class','chileverde')
          .attr('width', widthBeb/6)
          .attr('height', widthBeb/6)
          .attr("x", -widthBeb/12)
          .attr("y", -heightBeb/12);

  d3.csv("dataB.csv").then( function(data) {

    // Scales
      const xBeb = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Platillo)); // The domain of the X axis is the list of platillos.

    // Circulo 0
      // Add the circles
        let nodeTreeF = svgBeb.append("g")
          .attr('class','gGrandeBeb')
          .selectAll("circle")
          .data(data)
          .join("g")
            .attr("class", "nodePadreBeb")
            .attr('id', function(d) {
                return "nodePadreBeb"+d.Platillo
            })
            .append("circle")
            .attr('class','circleBubbleBeb')
            .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5.5)
            .attr("transform", function(d) { return "rotate(" + ((xBeb(d.Platillo) + xBeb.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (290) + ",0)"; })
            .style('fill', '#000')
           
        
           
      // Texto interior de bubble grande
        d3.selectAll('.nodePadreBeb').append("text")
          .text(function(d){return(d.Platillo)})
          .attr("font-size", "11px")
          .style("font-family", "circularstd-book")
          .attr("alignment-baseline", "middle")
          .attr("text-anchor","end")
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr("class",function(d){return("textAfueraBeb textAfueraBeb"+d.Num)})
          // .attr("transform", function(d) { return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })
          .attr("transform", function(d) {
              return "rotate(" + ((xBeb(d.Platillo) + xBeb.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)";
          });


        d3.selectAll('.nodePadreBeb:nth-child(n+38) text')
        .attr("text-anchor","start")
        .attr("transform", function(d) {
              return "rotate(" + ((xBeb(d.Platillo) + xBeb.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)scale(-1)";
        });

        d3.selectAll('.circleBubbleBeb')
          .on('mouseenter', function(e,d){
            console.log("o");
            d3.selectAll('.textAfueraBeb')
               .style("font-weight", 'normal')
              .style("font-size", '11px')
              .style("opacity", '0.2')
              .style("letter-spacing", '0')
              .style("opacity", '.2')            
            d3.selectAll('.textAfueraBeb'+ (d.Num))
            .style("font-weight", 'bold')
            .style("font-size", '16px')
            .style("opacity", '1')
            .style("letter-spacing", '.5px');
          });

        d3.selectAll('.circleBubbleBeb')
          .on('mouseout', function(){
            d3.selectAll('.textAfueraBeb')
            .style("font-weight", 'normal')
            .style("font-size", '11px')
            .style("opacity", '1')
            .style("letter-spacing", '.5px');
          });

    d3.selectAll('#graficaBebidas')
      .data(data)
      .append("div")
      .attr("class", "tooltipB");

      

  });

  

d3.csv("1B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (310) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
       if(d.Platillo  != "X"){
         d3.selectAll('.textAfueraBeb')
           .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       }
       
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("2B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("3B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("4B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("5B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("6B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
       if(d.Platillo  != "X"){
         d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
       }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("7B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("8B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("9B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("10B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (490) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
        }
       
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("11B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (510) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("12B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (530) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("13B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (550) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("14B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (570) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
        if(d.Platillo != "X"){
          d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
        }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("15B.csv").then( function(data) {

  d3.csv("dataB.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreeF = svgBeb.append("g")
        .attr('class','circleNumBeb')
        .selectAll("circleNumBeb")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1Beb")
          .append("circle")
          .attr('class','circles1Beb')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (590) + ",0)"; })
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
    d3.selectAll('.circles1Beb')
      .on('mouseenter', function (e,d) {
       if(d.Platillo  != "X"){
         d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraBeb'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipB')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", ((event.clientX)-450) + "px")
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
       
       }
    });
    d3.selectAll('.circles1Beb')
    .on('mouseout', function () {
      d3.selectAll('.tooltipB')
        .style("opacity", 0);
      d3.selectAll('.textAfueraBeb')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});




