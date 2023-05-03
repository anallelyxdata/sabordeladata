// gráfica de chiles frescos 

  // set the dimensions and margins of the graph
    const marginS = {top: 0, right: 0, bottom: 0, left: 0},
        widthS = 1200 - marginS.left - marginS.right,
        height = 1200 - marginS.top - marginS.bottom,
        innerRadius = 350,
        outerRadius = Math.min(widthS, height) / 2;   // the outerRadius goes from the middle of the svgS area to the border

  // append the svgS object
    const svgS = d3.select("#graficaChilesSecos")
      .append("svg")
        .attr("width", widthS + marginS.left + marginS.right)
        .attr("height", height + marginS.top + marginS.bottom)
        // .style('background', '#eaeaea')
      .append("g")
        .attr("transform", `translate(${widthS/2+marginS.left}, ${height/2+marginS.top})`)
        .style('font-family','sans-serif')
        .style('font-weight', 'thin');
      svgS.append("image")
          .attr('xlink:href', 'img/chile seco.png')
          .attr('class','chilerosa')
          .attr('width', widthF/7)
          .attr('height', widthF/7)
          .attr("x", -widthF/14)
          .attr("y", -heightF/14);

  d3.csv("secos.csv").then( function(data) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Country)); // The domain of the X axis is the list of states.
      const y = d3.scaleRadial()
          .range([innerRadius, outerRadius])   // Domain will be define later.
          .domain([0, 600000000]); // Domain of Y is from 0 to the max seen in the data

    // Circulo grande fake
      svgS.append("circle")
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r',290)
        .style('fill','none')
        .style('stroke','#ee8785')

      widthInternoS = 800;
      heightInternoS = 800;
      innerRadiusInternoS = 170;
      outerRadiusInternoS = 200;

    // Circulo grande fake
      const radioInternoS = 170;
      svgS.append("circle")
        .attr('class','gInters')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', radioInternoS)
        .style('fill','none')
        // .style('stroke','darkorange')
        .append("g")
          .attr("transform", `translate(${widthInternoS/2}, ${heightInternoS/2})`)
          .style('font-family','sans-serif')
          .style('font-weight', 'thin');

    // Empieza grafica interna
      d3.csv("data.csv").then( function(data) {

        // Scales
        const xInternoS = d3.scaleBand()
            .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
            .align(0)                  // This does nothing
            .domain(data.map(d => d.Country)); // The domain of the X axis is the list of states.
        const yInternoS = d3.scaleRadial()
            .range([innerRadiusInternoS, outerRadiusInternoS])   // Domain will be define later.
            // .domain([0, 1000]); // Domain of Y is from 0 to the max seen in the data

        // Circulo grande fake
        svgS.append("circle")
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r',innerRadiusInternoS)
          .style('fill','none')
          .style('stroke','teal')


        // Add the circles
        let nodeTreeInterno = svgS.append("g")
          .attr('class','gChicoS')
          .selectAll("circle")
          .data(data)
          .join("g")
            .attr("class", "nodeInternoS")
            // .attr("id", function(d){return("textInternoS"+d.Value)})
            .append("circle")
            .attr('class','circleTreeS')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', function(d) {
                if(d.Value>0){
                  return d.Value*1.9
                }
                else{
                  return 6
                }
            })
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country)  + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; })
            .style('fill', function(d) {
                if(d.Value>0){
                  return "url(#" + "patternI"+d.Nombre +")";
                }
                else{
                  return "beige"
                }
            })
            .style('stroke', function(d) {
                if(d.Value==0){
                  return "teal";
                }
            })
            
            
            // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodeInternoS')
            .append("defs")
            .append("pattern")
            .attr("id", function(d){
                return "patternI"+d.Nombre
            })//set the id here
            .attr("height", 1)
            .attr("width", 1)
            // .attr("patternUnits","userSpaceOnUse")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", 1)
            .attr("width", 1)
            .attr('x',0)
            .attr('y',0)
            .attr("xlink:href", "circulo-verde.png")
          
          var naranjaPicoPajaro = d3.selectAll('.nodeInternoS:nth-of-type(23) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country)-.12 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          var naranjaPasilla = d3.selectAll('.nodeInternoS:nth-of-type(22) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country)-.07 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          var naranjaPiquin = d3.selectAll('.nodeInternoS:nth-of-type(24) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) -.05 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });


        // Texto interior de bubble
        d3.selectAll('.nodeInternoS').append("text")
          .text(function(d){return(d.Country)})
          .attr("font-size", "10px")
          .style("font-family", "circularstd-book")
          .attr("alignment-baseline", "middle")
          .attr("text-anchor","end")
          .attr("class",function(d){return("textInternoS"+d.Nombre)})
          // .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })          
          .attr("transform", function(d) {
              if(d.Value<7){
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)";
              }else if(d.Value<10){
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (150) + ",0)";
              }
              else{
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (135) + ",0)";
              }
          });

          d3.selectAll('.nodeInternoS:nth-child(n+19) text')
          .attr("text-anchor","start")
          .attr("transform", function(d) {
              if(d.Value<7){
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
              }else if(d.Value<10){
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (150) + ",0)scale(-1)";
              }
              else if(d.Value<12){
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (148) + ",0)scale(-1)";
              }
              else{
                return "rotate(" + ((xInternoS(d.Country) + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (135) + ",0)scale(-1)";
              }
          });

          for(i=28; i<34; i++){
            d3.selectAll('.nodeInternoS:nth-of-type('+i+') .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .09 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          
            d3.selectAll('.nodeInternoS:nth-of-type('+i+') text')
            .attr("transform", function(d){
              return "rotate(" + ((xInternoS(d.Country) +.09 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
            });
          }
          
          d3.selectAll('.nodeInternoS:nth-of-type(34) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .05 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(26) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .15 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(27) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; }); 
          d3.selectAll('.nodeInternoS:nth-of-type(25) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .09 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });

          d3.selectAll('.nodeInternoS:nth-of-type(24) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .03 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(23) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(22) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .16 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; }); 
          d3.selectAll('.nodeInternoS:nth-of-type(21) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .23 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(20) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .17 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(19) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(17) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) - .07 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          d3.selectAll('.nodeInternoS:nth-of-type(9) .circleTreeS')
            .attr("transform", function(d) { return "rotate(" + ((xInternoS(d.Country) + .05 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });


          d3.selectAll('.nodeInternoS:nth-of-type(34) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.05 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(32) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.08 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (145) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(26) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.15 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(27) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(25) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.09 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (130) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(24) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.03 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(23) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(22) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.16 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(21) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.23 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(20) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.17 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (134) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(19) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.1 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (152) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(18) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country)  + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (86) + ",0)scale(-1)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(17) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) -.07 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (162) + ",0)";
          });
          d3.selectAll('.nodeInternoS:nth-of-type(9) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoS(d.Country) +.05 + xInternoS.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)";
          });
        });
    //  end grafica de adentro (naranja)

    // Empieza gráfica de árbol
        function nodosTreeS(nombre,treeNodo,width,nthType, height,rotate,nodoX,nodoY, plumaX,plumaY){

          widthNodo=25*width;
          var treemap = d3.tree().size([widthNodo, height]);
          var nodesPluma = d3.hierarchy(treeNodo, d => d.children);
          nodesPluma = treemap(nodesPluma);

          var gTree = d3.selectAll('.nodePadreS:nth-of-type('+nthType+')')
          .append("g")
          .attr('class','nodoTreeS')
          .attr('id',"nodoPadreTreeS"+treeNodo.name)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI -95) + ")"+"translate(" + (290) + ",-"+ widthNodo/2 + ")" })

          var linkS = gTree.selectAll(".linkS"+nombre)
            .data(nodesPluma.descendants().slice(1))
            .enter().append("path")
            .attr("transform","rotate("+rotate+")"+" translate("+nodoX+","+nodoY+")")
            .attr("class", "linkS "+"linkS"+nombre)
            .style("fill", "#ee8785")
            .attr("d", d => {
              return "M" + d.y + "," + d.x 
                + "C" + (d.y + d.parent.y) / 1 + "," + d.x
                + " " + (d.y + d.parent.y) / 200 + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
              });

          var nodeS = gTree.selectAll(".nodeS"+nombre)
            .data(nodesPluma.descendants())
            .enter().append("g")
            // .attr("class",treeNodo.name)
            .attr("class", d => "nodeS "+"nodeS" + nombre + (d.children ? " nodeS--internal"+nombre : " nodeS--leaf"+nombre+" nodeS--leaf"))
            .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

            d3.selectAll('.nodeS--leaf'+nombre).append("text")
              .text(d => d.data.name)
              .attr("alignment-baseline","middle")
              .attr('transform','translate(40,0)')

            d3.selectAll('.nodeS--leaf'+nombre).append("image")
              .attr("class","plumaImg")
              .attr('xlink:href', 'hoja-rosa.png')
              .attr('width', 30)
              .attr('height', 30)
              .style('transform','rotate(-310deg) translate('+plumaX+','+plumaY+')');
        };

    // Add the circles
      let nodeTreeS = svgS.append("g")
        .attr('class','gGrandeS')
        .selectAll("circle")
        .data(data)
        .join("g")
          .attr("class", "nodePadreS")
          .attr('id', function(d) {
              return "nodePadreS"+d.Nombre
          })
          .append("circle")
          .attr('class','circleBubbleS')
          .style('cursor','pointer')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', function(d) {
              if(d.Value>0){
                return d.Value*2
              }
              else{
                return 6
              }
          })
          .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (290) + ",0)"; })
          .style('fill', function(d) {
              if(d.Value>0){
                return "url(#" + "patternPadreE"+d.Nombre +")";
              }
              else{
                return "beige"
              }
          })
          .style('stroke', function(d) {
              if(d.Value==0){
                return "#ee8785";
              }
          });

              // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodePadreS')
              .append("defs")
              .append("pattern")
              .attr("id", function(d){
                  return "patternPadreE"+d.Nombre
              })//set the id here
              .attr("height", 1)
              .attr("width", 1)
              // .attr("patternUnits","userSpaceOnUse")
              .attr("patternContentUnits", "objectBoundingBox")
              .append("image")
              .attr("height", 1)
              .attr("width", 1)
              .attr('x',0)
              .attr('y',0)
              .attr("xlink:href", "circulo-naranja.png");
        
    // Texto interior de bubble
      d3.selectAll('.nodePadreS').append("text")
        .text(function(d){return(d.Country)})
        .attr("font-size", "11px")
        .style("font-family", "circularstd-book")
        .attr("alignment-baseline", "middle")
        .attr("text-anchor","end")
        .style("cursor","pointer")
        .attr("class",function(d){return("textAfueraS"+d.Nombre)})
        // .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })
        .attr("transform", function(d) {
            return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (275) + ",0)";
        });


      d3.selectAll('.nodePadreS:nth-child(n+16) text')
      .attr("text-anchor","start")
      .attr("transform", function(d) {
          return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (275) + ",0)scale(-1)";
      });

      d3.selectAll('.nodePadreS:nth-child(24) text')
      .attr("transform", function(d) {
          return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (248) + ",0)scale(-1)";
      });

      d3.selectAll('.nodePadreS:nth-child(9) text')
      .attr("transform", function(d) {
          return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (268) + ",0)";
      });
      d3.selectAll('.nodePadreS:nth-child(12) text')
      .attr("transform", function(d) {
          return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (268) + ",0)";
      });
      d3.selectAll('.nodePadreS:nth-child(19) text')
      .attr("transform", function(d) {
          return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (268) + ",0)scale(-1)";
      });

      d3.select(".textAfueraScosteñorojo").html("<tspan x='0' dy='0em'>Costeño</tspan><tspan x='0' dy='1.2em'>amarillo y rojo</tspan>");
      d3.select(".textAfueraSpasillaoax").html("<tspan x='0' dy='0em'>Pasilla</tspan><tspan x='0' dy='1.2em'>oaxaqueño</tspan>");

    // Datos
      var treeAncho = {
        "name": "Ancho",
        "value":20,
        "children": [
          {"name" : "Ancho esmeralda", 'value':6},
          {"name" : "Ancho flor", 'value':6},
        ]
      };
      var treeAncho2 = {
        "name": "Ancho2",
        "value":20,
        "children": [
          {"name" : "Chino", 'value':6 },
          {"name" : "Color", 'value':6 },
        ]
      };
      var treeAncho3 = {
        "name": "Ancho3",
        "value":20,
        "children": [
          {"name" : "Colorado", 'value':6 },
          {"name" : "Para guisar", 'value':6 },
        ]
      };
      var treeAncho4 = {
        "name": "Ancho4",
        "value":20,
        "children": [
          {"name" : "Pasilla", 'value':6},
          {"name" : "Verdeño", 'value':6},
        ]
      };
      var treeAncho5 = {
        "name": "Ancho5",
        "value":20,
        "children": [
          {"name" : "Chileancho", 'value':6 },
          {"name" : "Chihuacle", 'value':6 },
          {"name" : "Chilhuaque", 'value':6 },
        ]
      };
      var treeCora = {
        "name": "Cora",
        "value":20,
        "children": [
          {"name" : "Acaponeta", 'value':6},
          {"name" : "Tequilita", 'value':6},
          
        ]
      };
      var treeChilcostle = {
        "name": "Chilcostle",
        "value":20,
        "children": [
          {"name" : "Amarillo", 'value':6},
          {"name" : "Chicoxtle", 'value':6},
          {"name" : "Coxtle", 'value':6},
        ]
      };
       var treeChilhuacle = {
        "name": "Chilhuacle",
        "value":20,
        "children": [
          {"name" : "Güero", 'value':6},
          {"name" : "Ixcatik", 'value':6},
          
        ]
      };

      var treeChipotle = {
        "name": "Chipotle",
        "value":20,
        "children": [
          {"name" : "Ahumado", 'value':6},
          {"name" : "Chilpolcle", 'value':6},
        ]
      };
      var treeChipotle2 = {
        "name": "Chipotle2",
        "value":20,
        "children": [
          {"name" : "Chipoctle", 'value':6},
          {"name" : "Chipote", 'value':6},
        ]
      };
      var treeChipotle3 = {
        "name": "Chipotle3",
        "value":20,
        "children": [
          {"name" : "De mole", 'value':6},
          
        ]
      };

      var treeColorado = {
        "name": "Colorado",
        "value":20,
        "children": [
          {"name" : "Anaheim", 'value':6},
          {"name" : "Chilacate", 'value':6},
        ]
      };
      var treeColorado2 = {
        "name": "Colorado2",
        "value":20,
        "children": [
          {"name" : "Colorado de tierra", 'value':6},
          {"name" : "Deta la tierra", 'value':6},
        ]
      };
      var treeColorado3 = {
        "name": "Colorado3",
        "value":20,
        "children": [
          {"name" : "De sarta", 'value':6},
          {"name" : "Largo colorado", 'value':6},
        ]
      };
      var treeColorado4 = {
        "name": "Colorado4",
        "value":20,
        "children": [
          {"name" : "Magdalena", 'value':6},
          {"name" : "Seco colorado", 'value':6},
        ]
      };
      var treeColorado5 = {
        "name": "Colorado5",
        "value":20,
        "children": [
          {"name" : "Seco del norte", 'value':6},
          {"name" : "Verde del norte", 'value':6},
        ]
      };
      var treeCosteño = {
        "name": "Costeño",
        "value":20,
        "children": [
          {"name" : "Bandeño", 'value':6},
          
        ]
      };
       var treeDeArbol = {
        "name": "DeArbol",
        "value":20,
        "children": [
          {"name" : "Bravo", 'value':6},
          
        ]
      };
       var treeDeOnza = {
        "name": "DeOnza",
        "value":20,
        "children": [
          {"name" : "De onza amarillo", 'value':6},
          
        ]
      };
      var treeGuajillo = {
        "name": "Guajillo",
        "value":20,
        "children": [
          {"name" : "Tres venas", 'value':6},
          {"name" : "Travieso", 'value':6},
        ]
      };
      var treeGuajillo2 = {
        "name": "Guajillo2",
        "value":20,
        "children": [
          {"name" : "Mirasol", 'value':6},
          {"name" : "Guajío", 'value':6},
        ]
      };
      var treeGuajillo3 = {
        "name": "Guajillo3",
        "value":20,
        "children": [
          {"name" : "Guajillo que no pica", 'value':6},
          {"name" : "Guajillo dulce", 'value':6},
          
        ]
      };
      var treeGuajillo4 = {
        "name": "Guajillo4",
        "value":20,
        "children": [
          {"name" : "Cuachalero", 'value':6},
          {"name" : "Chilaca roja anda", 'value':6},
          {"name" : "Cascabel", 'value':6},
        ]
      };
       var treeMeco = {
        "name": "Meco",
        "value":20,
        "children": [
          {"name" : "Seco", 'value':6},
          
        ]
      };
      var treeMora = {
        "name": "Mora",
        "value":20,
        "children": [
          {"name" : "Chipotle mora", 'value':6},
          
        ]
      };
       var treeMulato = {
        "name": "Mulato",
        "value":20,
        "children": [
          {"name" : "Ancho negro", 'value':6},
          
        ]
      };
      var treePasilla = {
        "name": "Pasilla",
        "value":20,
        "children": [
          {"name" : "Prieto", 'value':6},
          {"name" : "Pasilla mexicano", 'value':6},
        ]
      };
      var treePasilla2 = {
        "name": "Pasilla2",
        "value":20,
        "children": [
          {"name" : "Pasilla de México", 'value':6},
          {"name" : "Negro", 'value':6},
        ]
      };
      var treePasilla3 = {
        "name": "Pasilla3",
        "value":20,
        "children": [
          {"name" : "Achocolatado", 'value':6},
        ]
      };
      var treePasillaO = {
        "name": "PasillaO",
        "value":20,
        "children": [
          {"name" : "Mixe", 'value':6},
          
        ]
      };
      
      var treePiquin0 = {
        "name": "Piquin0",
        "value":20,
        "children": [
          {"name" : "Amomo", 'value':6},
          {"name" : "Chiapas", 'value':6},
        ]
      };
      var treePiquin1 = {
        "name": "Piquin1",
        "value":20,
        "children": [
          {"name" : "Chilpaya", 'value':6},
          {"name" : "Chiltepin", 'value':6},
        ]
      };
      var treePiquin2 = {
        "name": "Piquin2",
        "value":20,
        "children": [
          {"name" : "Monte", 'value':6},
          {"name" : "Diente de tlacuache", 'value':6},
        ]
      };
      var treePiquin3 = {
        "name": "Piquin3",
        "value":20,
        "children": [
          {"name" : "Gachupin", 'value':6},
          {"name" : "Pájaro", 'value':6},
        ]
      };
      var treePiquin4 = {
        "name": "Piquin4",
        "value":20,
        "children": [
          {"name" : "Quimiche", 'value':6},
          {"name" : "Silvestre", 'value':6},
        ]
      };
      var treePiquin5 = {
        "name": "Piquin5",
        "value":20,
        "children": [
          {"name" : "Timpinchile", 'value':6},
          {"name" : "Tuxtla", 'value':6},
        ]
      };
      var treePiquin6 = {
        "name": "Piquin6",
        "value":20,
        "children": [
          {"name" : "Xigole", 'value':6},
          {"name" : "Kokori", 'value':6},
        ]
      };
      var treePiquin7 = {
        "name": "Piquin7",
        "value":20,
        "children": [
          {"name" : "Tilchili", 'value':6},
        ]
      };
      var treePiquin8 = {
        "name": "Piquin8",
        "value":20,
        "children": [
          {"name" : "Ansaucho", 'value':6},
          {"name" : "Chigole", 'value':6},
        ]
      };
      var treePiquin9 = {
        "name": "Piquin9",
        "value":20,
        "children": [
          {"name" : "Chiltepec", 'value':6},
          {"name" : "Criollo", 'value':6},
        ]
      };
      var treePiquin10 = {
        "name": "Piquin10",
        "value":20,
        "children": [
          {"name" : "Perro", 'value':6},
          {"name" : "Enano", 'value':6},
        ]
      };
      var treePiquin11 = {
        "name": "Piquin11",
        "value":20,
        "children": [
          {"name" : "Mosquito", 'value':6},
          {"name" : "Pulga", 'value':6},
        ]
      };
      var treePiquin12 = {
        "name": "Piquin12",
        "value":20,
        "children": [
          {"name" : "Siete caídos", 'value':6},
          {"name" : "Ticushi", 'value':6},
        ]
      };
      var treePiquin13 = {
        "name": "Piquin13",
        "value":20,
        "children": [
          {"name" : "Totocuitlatl", 'value':6},
          {"name" : "Ulute", 'value':6},
        ]
      };
      var treePiquin14 = {
        "name": "Piquin14",
        "value":20,
        "children": [
          {"name" : "Kokoim", 'value':6},
          {"name" : "Kookol", 'value':6},
        ]
      };


      var treePuya = {
        "name": "puya",
        "value":20,
        "children": [
          {"name" : "Amarillo", 'value':6},
          {"name" : "Chicoxtle", 'value':6},
          {"name" : "Coxtle", 'value':6},
        ]
      };
      var treeXojchile = {
        "name": "xojchile",
        "value":20,
        "children": [
          {"name" : "Rayado", 'value':6},
          
        ]
      };
      var treeSecoYuca = {
        "name": "SecoYuca",
        "value":20,
        "children": [
          {"name" : "Seco", 'value':6},
          
        ]
      };

    // Inicializar árboles
      // (nombre,treeNodo, width,nthType, height,rotate,nodoX,nodoY, plumaX,plumaY){
      nodosTreeS("ancho",treeAncho,1.8,1,110,-50,-20,-9,0,0);
      nodosTreeS("ancho2",treeAncho2,1.8,1,118,-26,-10,-2,0,0);
      nodosTreeS("ancho3",treeAncho3,1.8,1,120,-4,0,0,0,0);
      nodosTreeS("ancho4",treeAncho4,1.8,1,120,18,4,0,0,0);
      nodosTreeS("ancho5",treeAncho5,2.4,1,115,44,20,-6,0,0);
      nodosTreeS("cora",treeCora,2,4,130,-15,0,0,0,0);
      nodosTreeS("chilcostle",treeChilcostle,3.4,5,130,-12,-2,0,0,0);
      nodosTreeS("chilhuacle",treeChilhuacle,2,6,110,-17,-4,0,0,0);
      nodosTreeS("chipotle",treeChipotle,1.4,7,90,-30,-8,0,0,0);
      nodosTreeS("chipotle2",treeChipotle2,1.4,7,90,-5,0,0,0,0);
      nodosTreeS("colorado",treeColorado,1.4,8,140,-15,-5,0,0,0);
      nodosTreeS("colorado2",treeColorado2,1.4,8,145,0,-5,0,0,0);
      nodosTreeS("colorado3",treeColorado3,1.4,8,145,15,0,0,0,0);
      nodosTreeS("colorado4",treeColorado4,1.4,8,140,30,5,-2,0,0);
      nodosTreeS("colorado5",treeColorado5,1.4,8,135,45,10,-5,0,0);
      nodosTreeS("costeño",treeCosteño,1.4,10,100,2,0,0,0,0);
      nodosTreeS("dearbol",treeDeArbol,1.4,12,110,2,0,0,0,0);
      nodosTreeS("deonza",treeDeOnza,1.4,13,40,2,0,0,0,0);
      nodosTreeS("guajillo",treeGuajillo,1.8,14,165,-18,-6,0,0,0);
      nodosTreeS("guajillo2",treeGuajillo2,1.8,14,175,-2,-6,0,0,0);
      nodosTreeS("guajillo3",treeGuajillo3,1.8,14,180,14,0,0,0,0);
      nodosTreeS("guajillo4",treeGuajillo4,2.7,14,175,32,14,-4,0,0);
      nodosTreeS("meco",treeMeco,2.7,15,60,32,14,-4,0,0);
      nodosTreeS("mora",treeMora,2.7,17,90,0,0,0,0,0);
      nodosTreeS("mulato",treeMulato,2.7,20,60,0,0,0,0,0);
      nodosTreeS("pasilla",treePasilla,1.5,21,140,-15,-2,0,0,0);
      nodosTreeS("pasilla2",treePasilla2,1.5,21,140,0,-4,0,0,0);
      nodosTreeS("pasilla3",treePasilla3,1.5,21,140,11,0,0,0,0);
      nodosTreeS("pasillao",treePasillaO,1.5,22,40,-30,-5,-2,0,0);
      nodosTreeS("xojchile",treeXojchile,1.5,26,45,20,2,-2,0,0);
      nodosTreeS("secoyuca",treeSecoYuca,1.5,27,45,0,0,0,0,0);
      nodosTreeS("puya",treePuya,2,25,110,35,12,-5,0,0);

      nodosTreeS("piquin0",treePiquin0,1.5,24,120,40,12,-5,0,0);
      nodosTreeS("piquin1",treePiquin1,1.5,24,116,24,12,-5,0,0);
      nodosTreeS("piquin2",treePiquin2,1.5,24,112,7,12,-5,0,0);
      nodosTreeS("piquin3",treePiquin3,1.5,24,100,-10,12,-5,0,0);
      nodosTreeS("piquin4",treePiquin4,1.5,24,95,-29,12,-5,0,0);
      nodosTreeS("piquin5",treePiquin5,1.5,24,90,-48,12,-5,0,0);
      nodosTreeS("piquin6",treePiquin6,1.5,24,90,-68,12,-5,0,0);
      nodosTreeS("piquin7",treePiquin7,1.5,24,85,-84,12,-5,0,0);
      nodosTreeS("piquin8",treePiquin8,2.5,24,200,35,12,-5,0,0);
      nodosTreeS("piquin9",treePiquin9,2.5,24,195,20,12,-5,0,0);
      nodosTreeS("piquin10",treePiquin10,2.6,24,190,3,12,-5,0,0);
      nodosTreeS("piquin11",treePiquin11,2.6,24,180,-16,12,-5,0,0);
      nodosTreeS("piquin12",treePiquin12,2.7,24,170,-36,12,-5,0,0);
      nodosTreeS("piquin13",treePiquin13,2.7,24,165,-54,0,-10,0,0);
      nodosTreeS("piquin14",treePiquin14,1.8,24,140,-72,0,-10,0,0);

      // Acomodar hojas una por una :(
        d3.select('#nodoPadreTreeSPiquin0 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(80deg)translate(70px,35px)');
        d3.select('#nodoPadreTreeSPiquin0 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(70deg)translate(32px,26px)');
        d3.select('.nodeSpiquin0:nth-child(4) text')
          .style('transform','rotate(45deg)translate(100px,90px)scale(-1)');
        d3.select('.nodeSpiquin0:nth-child(5) text')
          .style('transform','rotate(35deg)translate(75px,60px)scale(-1)');


        d3.select('#nodoPadreTreeSPiquin1 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(65deg)translate(36px,22px)');
        d3.select('#nodoPadreTreeSPiquin1 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(55deg)translate(5px,4px)');
        d3.select('.nodeSpiquin1:nth-child(4) text')
          .style('transform','rotate(30deg)translate(85px,58px)scale(-1)');
        d3.select('.nodeSpiquin1:nth-child(5) text')
          .style('transform','rotate(20deg)translate(70px,26px)scale(-1)');


        d3.select('#nodoPadreTreeSPiquin2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(45deg)translate(8px, 1px)');
        d3.select('#nodoPadreTreeSPiquin2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(35deg)translate(-18px, -25px)');
        d3.select('.nodeSpiquin2:nth-child(4) text')
          .style('transform','rotate(10deg)translate(60px,28px)scale(-1)');
        d3.select('.nodeSpiquin2:nth-child(5) text')
          .style('transform','rotate(5deg)translate(120px,-12px)scale(-1)');


        d3.select('#nodoPadreTreeSPiquin3 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(25deg)translate(-10px, -25px)');
        d3.select('#nodoPadreTreeSPiquin3 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(15deg)translate(-24px, -57px)');
        d3.select('.nodeSpiquin3:nth-child(4) text')
          .style('transform','rotate(-7deg)translate(80px,-7px)scale(-1)');
        d3.select('.nodeSpiquin3:nth-child(5) text')
          .style('transform','rotate(-15deg)translate(68px,-42px)scale(-1)');


        d3.select('#nodoPadreTreeSPiquin4 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(10deg)translate(-20px, -53px)');
        d3.select('#nodoPadreTreeSPiquin4 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(0deg)translate(-25px, -85px)');
        d3.select('.nodeSpiquin4:nth-child(4) text')
          .style('transform','rotate(-25deg)translate(85px,-36px)scale(-1)');
        d3.select('.nodeSpiquin4:nth-child(5) text')
          .style('transform','rotate(-35deg)translate(95px,-64px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin5 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(-10deg)translate(-15px, -81px)');
        d3.select('#nodoPadreTreeSPiquin5 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-20deg)translate(-5px, -111px)');
        d3.select('.nodeSpiquin5:nth-child(4) text')
          .style('transform','rotate(-45deg)translate(115px,-56px)scale(-1)');
        d3.select('.nodeSpiquin5:nth-child(5) text')
          .style('transform','rotate(-55deg)translate(118px,-73px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin6 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(-30deg)translate(0px, -108px)');
        d3.select('#nodoPadreTreeSPiquin6 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-40deg)translate(24px, -137px)');
        d3.select('.nodeSpiquin6:nth-child(4) text')
          .style('transform','rotate(-65deg)translate(118px,-70px)scale(-1)');
        d3.select('.nodeSpiquin6:nth-child(5) text')
          .style('transform','rotate(-70deg)translate(145px,-88px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin7 .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(-50deg)translate(32px, -135px)');
        d3.select('.nodeSpiquin7:nth-child(3) text')
          .style('transform','rotate(-80deg)translate(155px,-83px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin8 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(70deg)translate(100px, 79px)');
        d3.select('#nodoPadreTreeSPiquin8 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(60deg)translate(40px, 55px)');
        d3.select('.nodeSpiquin8:nth-child(4) text')
          .style('transform','rotate(40deg)translate(122px,140px)scale(-1)');
        d3.select('.nodeSpiquin8:nth-child(5) text')
          .style('transform','rotate(35deg)translate(82px,85px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin9 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(60deg)translate(55px, 47px)');
        d3.select('#nodoPadreTreeSPiquin9 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(50deg)translate(5px, 11px)');
        d3.select('.nodeSpiquin9:nth-child(4) text')
          .style('transform','rotate(25deg)translate(93px,90px)scale(-1)');
        d3.select('.nodeSpiquin9:nth-child(5) text')
          .style('transform','rotate(20deg)translate(60px,32px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin10 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(40deg)translate(10px, 11px)');
        d3.select('#nodoPadreTreeSPiquin10 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(30deg)translate(-25px, -40px)');
        d3.select('.nodeSpiquin10:nth-child(4) text')
          .style('transform','rotate(10deg)translate(55px,35px)scale(-1)');
        d3.select('.nodeSpiquin10:nth-child(5) text')
          .style('transform','rotate(0deg)translate(54px,-30px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin11 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(20deg)translate(-18px, -42px)');
        d3.select('#nodoPadreTreeSPiquin11 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(10deg)translate(-35px, -100px)');
        d3.select('.nodeSpiquin11:nth-child(4) text')
          .style('transform','rotate(-5deg)translate(78px,-30px)scale(-1)');
        d3.select('.nodeSpiquin11:nth-child(5) text')
          .style('transform','rotate(-20deg)translate(76px,-85px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin12 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(0deg)translate(-25px, -95px)');
        d3.select('#nodoPadreTreeSPiquin12 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-10deg)translate(-15px, -159px)');
        d3.select('.nodeSpiquin12:nth-child(4) text')
          .style('transform','rotate(-35deg)translate(122px,-70px)scale(-1)');
        d3.select('.nodeSpiquin12:nth-child(5) text')
          .style('transform','rotate(-42deg)translate(133px,-122px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin13 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(-15deg)translate(-20px, -145px)');
        d3.select('#nodoPadreTreeSPiquin13 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-25deg)translate(0px, -202px)');
        d3.select('.nodeSpiquin13:nth-child(4) text')
          .style('transform','rotate(-50deg)translate(148px,-110px)scale(-1)');
        d3.select('.nodeSpiquin13:nth-child(5) text')
          .style('transform','rotate(-65deg)translate(180px,-130px)scale(-1)');

        d3.select('#nodoPadreTreeSPiquin14 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(-35deg)translate(13px, -177px)');
        d3.select('#nodoPadreTreeSPiquin14 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-45deg)translate(30px, -198px)');
        d3.select('.nodeSpiquin14:nth-child(4) text')
          .style('transform','rotate(-65deg)translate(165px,-125px)scale(-1)');
        d3.select('.nodeSpiquin14:nth-child(5) text')
          .style('transform','rotate(-75deg)translate(190px,-138px)scale(-1)');


        d3.select('#nodoPadreTreeSAncho .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(-25deg)translate(-25px,-111px)');
        d3.select('#nodoPadreTreeSAncho .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(-15deg)translate(-20px,-112px)');
        d3.select('.nodeSancho:nth-child(4) text')
          .style('transform','rotate(-54deg)translate(144px,-88px)scale(-1)');
        d3.select('.nodeSancho:nth-child(5) text')
          .style('transform','rotate(-45deg)translate(115px,-84px)scale(-1)');

        d3.select('#nodoPadreTreeSAncho2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(0deg)translate(-35px,-65px)');
        d3.select('#nodoPadreTreeSAncho2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(15deg)translate(-38px,-63px)');

        d3.select('.nodeSancho2:nth-child(4) text')
          .style('transform','rotate(-30deg)translate(58px,-52px)scale(-1)');
        d3.select('.nodeSancho2:nth-child(5) text')
          .style('transform','rotate(-25deg)translate(62px,-48px)scale(-1)');
        d3.select('#nodoPadreTreeSAncho3 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(28deg)translate(-21px,-20px)');
        d3.select('#nodoPadreTreeSAncho3 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(35deg)translate(-22px,-21px)');
        d3.select('.nodeSancho3:nth-child(4) text')
          .style('transform','rotate(-10deg)translate(65px,-5px)scale(-1)');
        d3.select('.nodeSancho3:nth-child(5) text')
          .style('transform','rotate(0deg)translate(18px,-7px)');
        d3.select('#nodoPadreTreeSAncho4 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(50deg)translate(10px,14px)');
        d3.select('#nodoPadreTreeSAncho4 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(60deg)translate(9px,16px)');
        d3.select('.nodeSancho4:nth-child(4) text')
          .style('transform','rotate(10deg)translate(22px,42px)');
        d3.select('.nodeSancho4:nth-child(5) text')
          .style('transform','rotate(20deg)translate(20px,44px)');
        d3.select('#nodoPadreTreeSAncho5 .nodeS:nth-child(6) .plumaImg')
          .style('transform','rotate(65deg)translate(36px,31px)');
        d3.select('#nodoPadreTreeSAncho5 .nodeS:nth-child(7) .plumaImg')
          .style('transform','rotate(78deg)translate(35px,33px)');
        d3.select('#nodoPadreTreeSAncho5 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(85deg)translate(90px,46px)');
        d3.select('.nodeSancho5:nth-child(5) text')
          .style('transform','rotate(30deg)translate(45px,88px)');
        d3.select('.nodeSancho5:nth-child(6) text')
          .style('transform','rotate(45deg)translate(50px,85px)');
        d3.select('.nodeSancho5:nth-child(7) text')
          .style('transform','rotate(55deg)translate(48px,84px)');
        d3.select('#nodoPadreTreeSCora .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(16deg)translate(-25px,-48px)');
        d3.select('#nodoPadreTreeSCora .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(22deg)translate(-25px,-49px)');
        d3.select('.nodeScora:nth-child(4) text')
          .style('transform','rotate(-15deg)translate(30px,-32px)');
        d3.select('.nodeScora:nth-child(5) text')
          .style('transform','rotate(-10deg)translate(30px,-33px)');
        d3.select('#nodoPadreTreeSChilcostle .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(8deg)translate(-25px,-40px)');
        d3.select('#nodoPadreTreeSChilcostle .nodeS:nth-child(6) .plumaImg')
          .style('transform','rotate(20deg)translate(-25px,-40px)');
        d3.select('#nodoPadreTreeSChilcostle .nodeS:nth-child(7) .plumaImg')
          .style('transform','rotate(31deg)translate(-30px,-40px)');
        d3.select('.nodeSchilcostle:nth-child(5) text')
          .style('transform','rotate(-25deg)translate(28px,-25px)');
        d3.select('.nodeSchilcostle:nth-child(6) text')
          .style('transform','rotate(-15deg)translate(27px,-22px)');
        d3.select('.nodeSchilcostle:nth-child(7) text')
          .style('transform','rotate(-5deg)translate(23px,-24px)');

        d3.select('#nodoPadreTreeSChilhuacle .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(10deg)translate(-25px,-46px)');
        d3.select('#nodoPadreTreeSChilhuacle .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(25deg)translate(-30px,-44px)');
        d3.select('.nodeSchilhuacle:nth-child(4) text')
          .style('transform','rotate(-25deg)translate(30px,-28px)');
        d3.select('.nodeSchilhuacle:nth-child(5) text')
          .style('transform','rotate(-10deg)translate(25px,-29px)');

        d3.select('#nodoPadreTreeSChipotle .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(0deg)translate(-25px,-60px)');
        d3.select('#nodoPadreTreeSChipotle .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(5deg)translate(-25px,-60px)');
        d3.select('.nodeSchipotle:nth-child(4) text')
          .style('transform','rotate(-36deg)translate(37px,-40px)');
        d3.select('.nodeSchipotle:nth-child(5) text')
          .style('transform','rotate(-30deg)translate(36px,-38px)');

        d3.select('#nodoPadreTreeSChipotle2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(20deg)translate(-20px,-22px)');
        d3.select('#nodoPadreTreeSChipotle2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(30deg)translate(-20px,-23px)');
        d3.select('.nodeSchipotle2:nth-child(4) text')
          .style('transform','rotate(-10deg)translate(20px,-6px)');
        d3.select('.nodeSchipotle2:nth-child(5) text')
          .style('transform','rotate(-5deg)translate(22px,-5px)');

        d3.select('#nodoPadreTreeSColorado .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(15deg)translate(-40px,-42px)');
        d3.select('#nodoPadreTreeSColorado .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(20deg)translate(-40px,-43px)');
        d3.select('.nodeScolorado:nth-child(4) text')
          .style('transform','rotate(-20deg)translate(18px,-34px)');
        d3.select('.nodeScolorado:nth-child(5) text')
          .style('transform','rotate(-12deg)translate(18px,-35px)');

        d3.select('#nodoPadreTreeSColorado2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(30deg)translate(-30px,-6px)');
        d3.select('#nodoPadreTreeSColorado2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(35deg)translate(-25px,-10px)');
        d3.select('.nodeScolorado2:nth-child(4) text')
          .style('transform','rotate(-8deg)translate(8px,2px)');
        d3.select('.nodeScolorado2:nth-child(5) text')
          .style('transform','rotate(0deg)translate(11px,2px)');

        d3.select('#nodoPadreTreeSColorado3 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(45deg)translate(0px,20px)');
        d3.select('#nodoPadreTreeSColorado3 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(50deg)translate(0px,20px)');
        d3.select('.nodeScolorado3:nth-child(4) text')
          .style('transform','rotate(8deg)translate(16px,40px)');
        d3.select('.nodeScolorado3:nth-child(5) text')
          .style('transform','rotate(15deg)translate(17px,42px)');

        d3.select('#nodoPadreTreeSColorado4 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(60deg)translate(35px,36px)');
        d3.select('#nodoPadreTreeSColorado4 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(70deg)translate(40px,34px)');
        d3.select('.nodeScolorado4:nth-child(4) text')
          .style('transform','rotate(25deg)translate(36px,75px)');
        d3.select('.nodeScolorado4:nth-child(5) text')
          .style('transform','rotate(35deg)translate(42px,75px)');

        d3.select('#nodoPadreTreeSColorado5 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(80deg)translate(70px,39px)');
        d3.select('#nodoPadreTreeSColorado5 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(85deg)translate(62px,47px)');
        d3.select('.nodeScolorado5:nth-child(4) text')
          .style('transform','rotate(46deg)translate(68px,95px)');
        d3.select('.nodeScolorado5:nth-child(5) text')
          .style('transform','rotate(52deg)translate(60px,100px)');

        d3.select('#nodoPadreTreeSCosteño .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(30deg)translate(-10px,-16px)');
        d3.select('.nodeScosteño:nth-child(3) text')
          .style('transform','rotate(0deg)translate(25px,2px)');

        d3.select('#nodoPadreTreeSDeArbol .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(30deg)translate(-10px,-16px)');
        d3.select('.nodeSdearbol:nth-child(3) text')
          .style('transform','rotate(0deg)translate(25px,4px)');

        d3.select('#nodoPadreTreeSDeOnza .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(30deg)translate(-10px,-18px)');
        d3.select('.nodeSdeonza:nth-child(3) text')
          .style('transform','rotate(0deg)translate(30px,2px)');

        d3.select('#nodoPadreTreeSGuajillo .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(15deg)translate(-40px,-59px)');
        d3.select('.nodeSguajillo:nth-child(4) text')
          .style('transform','rotate(-18deg)translate(28px,-48px)');
        d3.select('#nodoPadreTreeSGuajillo .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(15deg)translate(-35px,-63px)');
        d3.select('.nodeSguajillo:nth-child(5) text')
          .style('transform','rotate(-18deg)translate(38px,-48px)');

        d3.select('#nodoPadreTreeSGuajillo2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(30deg)translate(-26px,-16px)');
        d3.select('.nodeSguajillo2:nth-child(4) text')
          .style('transform','rotate(-10deg)translate(18px,-2px)');
        d3.select('#nodoPadreTreeSGuajillo2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(35deg)translate(-22px,-17px)');
        d3.select('.nodeSguajillo2:nth-child(5) text')
          .style('transform','rotate(-2deg)translate(18px,-4px)');

        d3.select('#nodoPadreTreeSGuajillo3 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(40deg)translate(5px,23px)');
        d3.select('.nodeSguajillo3:nth-child(4) text')
          .style('transform','rotate(10deg)translate(22px,43px)');
        d3.select('#nodoPadreTreeSGuajillo3 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(52deg)translate(10px,22px)');
        d3.select('.nodeSguajillo3:nth-child(5) text')
          .style('transform','rotate(16deg)translate(26px,48px)');

        d3.select('#nodoPadreTreeSGuajillo4 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(60deg)translate(55px,50px)');
        d3.select('#nodoPadreTreeSGuajillo4 .nodeS:nth-child(6) .plumaImg')
          .style('transform','rotate(65deg)translate(50px,53px)');
        d3.select('#nodoPadreTreeSGuajillo4 .nodeS:nth-child(7) .plumaImg')
          .style('transform','rotate(70deg)translate(45px,59px)');
        d3.select('.nodeSguajillo4:nth-child(5) text')
          .style('transform','rotate(28deg)translate(53px,95px)');
        d3.select('.nodeSguajillo4:nth-child(6) text')
          .style('transform','rotate(35deg)translate(48px,95px)');
        d3.select('.nodeSguajillo4:nth-child(7) text')
          .style('transform','rotate(40deg)translate(42px,95px)');

        d3.select('#nodoPadreTreeSMeco .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(65deg)translate(5px,10px)');
        d3.select('.nodeSmeco:nth-child(3) text')
          .style('transform','rotate(40deg)translate(30px,30px)');

        d3.select('#nodoPadreTreeSMora .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(35deg)translate(-15px,-15px)');
        d3.select('.nodeSmora:nth-child(3) text')
          .style('transform','rotate(0deg)translate(90px,0px)scale(-1)');

        d3.select('#nodoPadreTreeSMulato .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(35deg)translate(-15px,-15px)');
        d3.select('.nodeSmulato:nth-child(3) text')
          .style('transform','rotate(0deg)translate(84px,0px)scale(-1)');

        d3.select('#nodoPadreTreeSPasilla .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(15deg)translate(-30px,-48px)');
        d3.select('.nodeSpasilla:nth-child(4) text')
          .style('transform','rotate(-20deg)translate(60px,-36px)scale(-1)');
        d3.select('#nodoPadreTreeSPasilla .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(20deg)translate(-25px,-52px)');
        d3.select('.nodeSpasilla:nth-child(5) text')
          .style('transform','rotate(-15deg)translate(116px,-34px)scale(-1)');

        d3.select('#nodoPadreTreeSPasilla2 .nodeS:nth-child(4) .plumaImg')
          .style('transform','rotate(26deg)translate(-10px,-20px)');
        d3.select('.nodeSpasilla2:nth-child(4) text')
          .style('transform','rotate(-8deg)translate(112px,0px)scale(-1)');
        d3.select('#nodoPadreTreeSPasilla2 .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(35deg)translate(-10px,-19px)');
        d3.select('.nodeSpasilla2:nth-child(5) text')
          .style('transform','rotate(-5deg)translate(60px,4px)scale(-1)');

        d3.select('#nodoPadreTreeSPasilla3 .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(45deg)translate(10px,1px)');
        d3.select('.nodeSpasilla3:nth-child(3) text')
          .style('transform','rotate(5deg)translate(100px,31px)scale(-1)');

        d3.select('#nodoPadreTreeSPasillaO .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(10deg)translate(-15px,-39px)');
        d3.select('.nodeSpasillao:nth-child(3) text')
          .style('transform','rotate(-30deg)translate(60px,-16px)scale(-1)');

        d3.select('#nodoPadreTreeSxojchile .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(50deg)translate(0px,-9px)');
        d3.select('.nodeSxojchile:nth-child(3) text')
          .style('transform','rotate(20deg)translate(70px,14px)scale(-1)');

        d3.select('#nodoPadreTreeSSecoYuca .nodeS:nth-child(3) .plumaImg')
          .style('transform','rotate(30deg)translate(-15px,-17px)');
        d3.select('.nodeSsecoyuca:nth-child(3) text')
          .style('transform','rotate(0deg)translate(47px,0px)scale(-1)');
        
        d3.select('#nodoPadreTreeSpuya .nodeS:nth-child(5) .plumaImg')
          .style('transform','rotate(60deg)translate(35px,26px)');
        d3.select('#nodoPadreTreeSpuya .nodeS:nth-child(6) .plumaImg')
          .style('transform','rotate(70deg)translate(35px,26px)');
        d3.select('#nodoPadreTreeSpuya .nodeS:nth-child(7) .plumaImg')
          .style('transform','rotate(80deg)translate(35px,28px)');
        d3.select('.nodeSpuya:nth-child(5) text')
          .style('transform','rotate(30deg)translate(43px,62px)');
        d3.select('.nodeSpuya:nth-child(6) text')
          .style('transform','rotate(40deg)translate(45px,62px)');
        d3.select('.nodeSpuya:nth-child(7) text')
          .style('transform','rotate(45deg)translate(40px,67px)');

        // d3.select('#nodoPadreTreeSGuajillo4 .nodeS:nth-child(5) .plumaImg')
        //   .style('transform','rotate(52deg)translate(10px,22px)');
        // d3.select('.nodeSguajillo4:nth-child(5) text')
        //   .style('transform','rotate(16deg)translate(26px,48px)');

    // Add the circles
      let nodeTree2 = svgS.append("g")
        .attr('class','gGrandeS')
        .selectAll("circle")
        .data(data)
        .join("g")
          .attr("class", "nodePadreS")
          .attr('id', function(d) {
              return "nodePadreS"+d.Nombre
          })
          .append("circle")
          .attr('class','circleBubbleS')
          .style('cursor','pointer')
          .attr('id', function(d) {
              return "circleBubbleS"+d.Nombre
          })
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', function(d) {
              if(d.Value>0){
                return d.Value*2
              }
              else{
                return 6
              }
          })
          .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (290) + ",0)"; })
          .style('fill', function(d) {
              if(d.Value>0){
                return "url(#" + "patternPadreE"+d.Nombre +")";
              }
              else{
                return "beige"
              }
          })
          .style('stroke', function(d) {
              if(d.Value==0){
                return "#ee8785";
              }
          });

              // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodePadre')
              .append("defs")
              .append("pattern")
              .attr("id", function(d){
                  return "patternPadreE"+d.Nombre
              })//set the id here
              .attr("height", 1)
              .attr("width", 1)
              // .attr("patternUnits","userSpaceOnUse")
              .attr("patternContentUnits", "objectBoundingBox")
              .append("image")
              .attr("height", 1)
              .attr("width", 1)
              .attr('x',0)
              .attr('y',0)
              .attr("xlink:href", "circulo-naranja.png");
    
    // Clic y rotar
      function resetClicS(){
        d3.selectAll('.nodoTreeS').attr('opacity','.2');
        d3.selectAll('.nodePadreS text').attr('opacity','.2');
        d3.selectAll('.nodeInternoS text').attr('opacity','.2');
        d3.selectAll('.nodeInternoS text').attr('font-size','11px');
        d3.selectAll('.nodeInternoS text').attr('font-weight','normal');
        d3.selectAll('.nodePadreS text').attr('font-weight','normal');
        d3.selectAll('.nodePadreS text').attr('font-size','11px');
      }
      function opacity1S(){
        d3.selectAll('.nodoTreeS').attr('opacity','1');
        d3.selectAll('.nodePadreS text').attr('opacity','1');
        d3.selectAll('.nodeInternoS text').attr('opacity','1');
        d3.selectAll('.nodeInternoS text').attr('font-size','11px');
        d3.selectAll('.nodeInternoS text').attr('font-weight','normal');
        d3.selectAll('.nodePadreS text').attr('font-weight','normal');
        d3.selectAll('.nodePadreS text').attr('font-size','11px');
      }

      function opacitySoloS(nombre){
        d3.selectAll('.nodoTreeS').attr('opacity','.2');
        d3.selectAll('.nodePadreS text').attr('opacity','.2');
        d3.selectAll('.textAfueraS'+nombre).attr('opacity','1');
        d3.selectAll('.textAfueraS'+nombre).attr('font-size','16px');
        d3.selectAll('.textAfueraS'+nombre).attr('font-weight','bold');
        d3.selectAll('.nodeInternoS text').attr('opacity','.2');
      }
      function opacityTreeS(nombre){
        d3.selectAll('.nodoTreeS').attr('opacity','.2');
        d3.selectAll('#nodePadreS'+nombre+' .nodoTreeS').attr('opacity','1');
        d3.selectAll('.nodePadreS text').attr('opacity','.2');
        d3.selectAll('.textAfueraS'+nombre).attr('opacity','1');
        d3.selectAll('.nodeInternoS text').attr('opacity','.2');
        d3.selectAll('#nodePadreS'+nombre+' .nodoTreeS text').attr('opacity','1');
        d3.selectAll('.textAfueraS'+nombre).attr('font-size','16px');
        d3.selectAll('.textAfueraS'+nombre).attr('font-weight','bold');
      }

    // rotacion, nombreexterno, nombreinterno
      function girarS(rotacion,nombreexterno,nombreinterno){
          resetClicS();

          d3.select(".gChicoS").style("transform", "rotate("+rotacion+"deg)");
          d3.selectAll('#nodePadreS'+nombreexterno+' .nodoTreeS').attr('opacity','1');
          d3.selectAll('#nodePadreS'+nombreexterno+' .nodoTreeS text').attr('opacity','1');
          d3.select(".textAfueraS"+nombreexterno).attr('font-weight','bold');
          d3.select(".textAfueraS"+nombreexterno).attr('opacity','1');
          d3.select(".textAfueraS"+nombreexterno).attr('font-size','16px');
          d3.select(".textAfueraS"+nombreexterno).attr('letter-spacing','1px');

          d3.select(".textInternoS"+nombreinterno).attr('font-weight','bold');
          d3.select(".textInternoS"+nombreinterno).attr('opacity','1');
          d3.select(".textInternoS"+nombreinterno).attr('font-size','16px');
          d3.select(".textInternoS"+nombreinterno).attr('letter-spacing','1px');
      }


      d3.select('#circleBubbleSancho').on("mouseover", function(){
        girarS("83","ancho","poblano");
      });
      d3.select('.textAfueraSancho').on("mouseover", function(){
        girarS("83","ancho","poblano");
      });
      d3.select('#circleBubbleScascabel').on("mouseover", function(){
        girarS("-23","cascabel","bola");
      });
      d3.select('.textAfueraScascabel').on("mouseover", function(){
        girarS("-23","cascabel","bola");
      });
      d3.select('#circleBubbleSchipotle').on("mouseover", function(){
        girarS("-124","chipotle","jalapeño");
      });
      d3.select('.textAfueraSchipotle').on("mouseover", function(){
        girarS("-124","chipotle","jalapeño");
      });
      d3.select('#circleBubbleScolorado').on("mouseover", function(){
        girarS("113","colorado","verdedelnorte");
      });
      d3.select('.textAfueraScolorado').on("mouseover", function(){
        girarS("113","colorado","verdedelnorte");
      });
      d3.select('#circleBubbleScomapeño').on("mouseover", function(){
        girarS("-8","comapeño","comapeño");
      });
      d3.select('.textAfueraScomapeño').on("mouseover", function(){
        girarS("-8","comapeño","comapeño");
      });
      d3.select('#circleBubbleScosteño').on("mouseover", function(){
        girarS("-4","costeño","costeño");
      });
      d3.select('.textAfueraScosteño').on("mouseover", function(){
        girarS("-4","costeño","costeño");
      });
      d3.select('#circleBubbleSdearbol').on("mouseover", function(){
        girarS("-11","dearbol","dearbol");
      });
      d3.select('.textAfueraSdearbol').on("mouseover", function(){
        girarS("-11","dearbol","dearbol");
      });
      d3.select('#circleBubbleSguajillo').on("mouseover", function(){
        girarS("-69","guajillo","mirasol");
      });
      d3.select('.textAfueraSguajillo').on("mouseover", function(){
        girarS("-69","guajillo","mirasol");
      });
      d3.select('#circleBubbleSmorelia').on("mouseover", function(){
        girarS("-60","morelia","poblano");
      });
      d3.select('.textAfueraSmorelia').on("mouseover", function(){
        girarS("-60","morelia","poblano");
      });
      d3.select('#circleBubbleSmulato').on("mouseover", function(){
        girarS("-33","mulato","poblano");
      });
      d3.select('.textAfueraSmulato').on("mouseover", function(){
        girarS("-33","mulato","poblano");
      });
      d3.select('#circleBubbleSpasilla').on("mouseover", function(){
        girarS("-194","pasilla","chilaca");
      });
      d3.select('.textAfueraSpasilla').on("mouseover", function(){
        girarS("-194","pasilla","chilaca");
      });
      d3.select('#circleBubbleSpicodepajaro').on("mouseover", function(){
        girarS("-2","picodepajaro","serrano");
      });
      d3.select('.textAfueraSpicodepajaro').on("mouseover", function(){
        girarS("-2","picodepajaro","serrano");
      });
      d3.select('#circleBubbleSsecoyuca').on("mouseover", function(){
        girarS("-14","secoyuca","verdeyucateco");
      });
      d3.select('.textAfueraSsecoyuca').on("mouseover", function(){
        girarS("-14","secoyuca","verdeyucateco");
      });
      d3.select('#circleBubbleStabiche').on("mouseover", function(){
        girarS("31","tabicheseco","tabiche");
      });
      d3.select('.textAfueraStabiche').on("mouseover", function(){
        girarS("31","tabiche","tabiche");
      });
      d3.select('#circleBubbleSpiquin').on("mouseover", function(){
        girarS("31","piquin","piquinfresco");
      });
      d3.select('.textAfueraSpiquin').on("mouseover", function(){
        girarS("31","piquin","piquinfresco");
      });

      d3.selectAll('.circleBubbleS').on("mouseout", function(){
        opacity1S()
      });
      d3.selectAll('.nodePadreS text').on("mouseout", function(){
        opacity1S()
      });

    // Opacity para los sin par beige
      d3.select('#circleBubbleScatarina').on("mouseover", function(){
        opacitySoloS("catarina")
      });
      d3.select('#circleBubbleScosteñorojo').on("mouseover", function(){
        opacitySoloS("costeñorojo")
      });
      d3.select('#circleBubbleSmiahuateco').on("mouseover", function(){
        opacitySoloS("miahuateco")
      });
      d3.select('#circleBubbleSmorelia').on("mouseover", function(){
        opacitySoloS("morelia")
      });
      d3.select('#circleBubbleSmorita').on("mouseover", function(){
        opacitySoloS("morita")
      });

    // opacity en hover text
      d3.select('.textAfueraScatarina').on("mouseover", function(){
        opacitySoloS("catarina")
      });
      d3.select('.textAfueraScosteñorojo').on("mouseover", function(){
        opacitySoloS("costeñorojo")
      });
      d3.select('.textAfueraSmiahuateco').on("mouseover", function(){
        opacitySoloS("miahuateco")
      });
      d3.select('.textAfueraSmorita').on("mouseover", function(){
        opacitySoloS("morita")
      });

    // Opacity para tree
      d3.select('#circleBubbleScora').on("mouseover", function(){
        opacityTreeS("cora")
      });
      d3.select('#circleBubbleSchilcostle').on("mouseover", function(){
        opacityTreeS("chilcostle")
      });
      d3.select('#circleBubbleSchilhuacle').on("mouseover", function(){
        opacityTreeS("chilhuacle")
      });
      d3.select('#circleBubbleSdeonza').on("mouseover", function(){
        opacityTreeS("deonza")
      });
      d3.select('#circleBubbleSmeco').on("mouseover", function(){
        opacityTreeS("meco")
      });
      d3.select('#circleBubbleSmora').on("mouseover", function(){
        opacityTreeS("mora")
      });
      d3.select('#circleBubbleSpasillaoax').on("mouseover", function(){
        opacityTreeS("pasillaoax")
      });
      d3.select('#circleBubbleSpuya').on("mouseover", function(){
        opacityTreeS("puya")
      });
      d3.select('#circleBubbleSxojchile').on("mouseover", function(){
        opacityTreeS("xojchile")
      });
      
    // Opacity tree en texto
      d3.select('.textAfueraScora').on("mouseover", function(){
        opacityTreeS("cora")
      });
      d3.select('.textAfueraSchilcostle').on("mouseover", function(){
        opacityTreeS("chilcostle")
      });
      d3.select('.textAfueraSchilhuacle').on("mouseover", function(){
        opacityTreeS("chilhuacle")
      });
      d3.select('.textAfueraSdeonza').on("mouseover", function(){
        opacityTreeS("deonza")
      });
      d3.select('.textAfueraSmeco').on("mouseover", function(){
        opacityTreeS("meco")
      });
      d3.select('.textAfueraSmora').on("mouseover", function(){
        opacityTreeS("mora")
      });
      d3.select('.textAfueraSpasillaoax').on("mouseover", function(){
        opacityTreeS("pasillaoax")
      });
      d3.select('.textAfueraSpuya').on("mouseover", function(){
        opacityTreeS("puya")
      });
      d3.select('.textAfueraSxojchile').on("mouseover", function(){
        opacityTreeS("xojchile")
      });
  });









  


