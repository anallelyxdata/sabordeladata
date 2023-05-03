// gráfica de chiles frescos 
  // set the dimensions and margins of the graph
    const marginPlMob = {top: 0, right: 0, bottom: 0, left: 0},
        widthPlMob = 1400 - marginPlMob.left - marginPlMob.right,
        heightPlMob = 1400 - marginPlMob.top - marginPlMob.bottom,
        innerRadiusPlMob = 350,
        outerRadiusPlMob = Math.min(widthPlMob, heightPlMob) / 2;   // the outerRadiusPlMob goes from the middle of the SVG area to the border

  // append the svg object
    const outerRadiusPlMobMob = d3.select("#graficaPlatillosMob")
      .append("svg")
        .attr('class','mainsvg')
        .attr("viewBox", '0 0 1500 1500')
        // .attr("width", widthPlMob + marginPlMob.left + marginPlMob.right)
        // .attr("height", heightPlMob + marginPlMob.top + marginPlMob.bottom)
        // .style('background', 'transparent')
      .append("g")
        .attr("transform", `translate(${widthPlMob/2+marginPlMob.left}, ${heightPlMob/2+marginPlMob.top})`)
        .style('font-family','sans-serif')
        .style('font-weight', 'thin');
      outerRadiusPlMobMob.append("image")
          .attr('xlink:href', 'img/cazuela-220w.png')
          .attr('class','chileverde')
          .attr('width', widthPlMob/6)
          .attr('height', widthPlMob/6)
          .attr("x", -widthPlMob/12)
          .attr("y", -heightPlMob/12);

  d3.csv("dataPlatillos.csv").then( function(data) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Platillo)); // The domain of the X axis is the list of platillos.

    // Circulo 0
      // Add the circles
        let nodeTreePl = outerRadiusPlMobMob.append("g")
          .attr('class','gGrandeFMob')
          .selectAll("circle")
          .data(data)
          .join("g")
            .attr("class", "nodePadreFMob")
            .attr('id', function(d) {
                return "nodePadreFMob"+d.Platillo
            })
            .append("circle")
            .attr('class','circleBubblePlMob')
            .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5.5)
            .attr("transform", function(d) { return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (290) + ",0)"; })
            .style('fill', '#000')

        // Texto interior de bubble grande
          d3.selectAll('.nodePadreFMob').append("text")
            .text(function(d){return(d.Platillo)})
            .attr("font-size", "11px")
            .style("font-family", "circularstd-book")
            .attr("alignment-baseline", "middle")
            .attr("text-anchor","end")
            .style("cursor","pointer")
            .attr("class",function(d){return("textAfueraPlMob textAfueraPlMob"+d.Num)})
            // .attr("transform", function(d) { return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })
            .attr("transform", function(d) {
                return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)";
            });


          d3.selectAll('.nodePadreFMob:nth-child(n+38) text')
          .attr("text-anchor","start")
          .attr("transform", function(d) {
                return "rotate(" + ((x(d.Platillo) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)scale(-1)";
          });
           
        d3.selectAll('.circleBubblePlMob')
          .on('mouseenter', function(e,d){
            console.log("o");
            d3.selectAll('.textAfueraPlMob')
               .style("font-weight", 'normal')
              .style("font-size", '11px')
              .style("opacity", '0.2')
              .style("letter-spacing", '0')
              .style("opacity", '.2')            
            d3.selectAll('.textAfueraPlMob'+ (d.Num))
            .style("font-weight", 'bold')
            .style("font-size", '16px')
            .style("opacity", '1')
            .style("letter-spacing", '.5px');
          });

        d3.selectAll('.circleBubblePlMob')
          .on('mouseout', function(){
            d3.selectAll('.textAfueraPlMob')
            .style("font-weight", 'normal')
            .style("font-size", '11px')
            .style("opacity", '1')
            .style("letter-spacing", '.5px');
          });

        d3.selectAll('.textAfueraPlMob')
          .on('mousenter', function (e,d) {
            console.log("o");
            //  d3.selectAll('.textAfueraPlMob')
            //    .style("font-weight", 'normal')
            //   .style("font-size", '11px')
            //   .style("opacity", '0.2')
            //   .style("letter-spacing", '0')
            //   .style("opacity", '.2')            
            // d3.selectAll('.textAfueraPlMob'+ (d.Num))
            // .style("font-weight", 'bold')
            // .style("font-size", '16px')
            // .style("opacity", '1')
            // .style("letter-spacing", '.5px');
          });

        d3.selectAll('.textAfueraPlMob')
        .on('mouseout', function () {
          d3.selectAll('.textAfueraPlMob')
            .style("opacity", 1)
            .style("font-weight", 'normal')
            .style("font-size", '11px');
        });
           
      

        

      d3.selectAll('#graficaPlatillosMob')
        .data(data)
        .append("div")
        .attr("class", "tooltipPlMob");


   

  });

  

d3.csv("1.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          // .style('cursor',function(d){
          //   if(d.Platillo!="X"){
          //     return "pointer"
          //   }
          // })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-10) + "px)")
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("2.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
           d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("3.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("4.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("5.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("6.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
       if(d.Platillo!="X"){
         d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("7.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
       if(d.Platillo!="X"){
         d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("8.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("9.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("10.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("11.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("12.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("13.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("14.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("15.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
       if(d.Platillo!="X"){
         d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("16.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (610) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("17.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (630) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
       if(d.Platillo!="X"){
         d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("18.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (650) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("19.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (670) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("20.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (690) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("21.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (710) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
       if(d.Platillo!="X"){
         d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("22.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (730) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("23.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (750) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});


d3.csv("24.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (770) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          // .style("font-weight", 'normal')
          // .style("font-size", '11px')
          // .style("opacity", '1')
          // .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
          .text(d.Platillo)
          .style("opacity", 1)
          // .style('transform', "translate(" + (event.pageX + 15)+ "px," + ((event.pageY)-1600) + "px)")
          .style("top", event.clientY + "px")
          .style("left", (event.clientX + 15 + 15) + "px")
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
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });
      
  });
});

d3.csv("25.csv").then( function(data) {

  d3.csv("dataPlatillos.csv").then( function(cero) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Num)); // The domain of the X axis is the list of platillos.

    // Add the circles
      let nodeTreePl = outerRadiusPlMobMob.append("g")
        .attr('class','circleNumMob')
        .selectAll("circleNumMob")
        .data(data)
        .join("g")
          .attr("class", "nodePadre1PlMob")
          .append("circle")
          .attr('class','circles1PlMob')
          .style('cursor',function(d){
if(d.Platillo!="X"){
return "pointer"
}
})
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5.5)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Num) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (790) + ",0)"; })
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
    d3.selectAll('.circles1PlMob')
      .on('mouseenter', function (e,d) {
        if(d.Platillo!="X"){
          d3.selectAll('.textAfueraPlMob')
          // .style("font-weight", 'normal')
          // .style("font-size", '11px')
          // .style("opacity", '1')
          // .style("letter-spacing", '0')
          .style("opacity", '.2')
        d3.selectAll('.textAfueraPlMob'+d.Num)
          .style("font-weight", 'bold')
          .style("font-size", '16px')
          .style("opacity", '1')
          .style("letter-spacing", '.5px');
        d3.select('.tooltipPlMob')
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
        }
    });
    d3.selectAll('.circles1PlMob')
    .on('mouseout', function () {
      d3.selectAll('.tooltipPlMob')
        .style("opacity", 0);
      d3.selectAll('.textAfueraPlMob')
          .style("font-weight", 'normal')
          .style("font-size", '11px')
          .style("opacity", '1')
          .style("letter-spacing", '0');
    });

   
      
  });
});

