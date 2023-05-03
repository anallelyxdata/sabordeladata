// gráfica de chiles frescos 

  // set the dimensions and margins of the graph
    const marginF = {top: 0, right: 0, bottom: 0, left: 0},
        widthF = 1200 - marginF.left - marginF.right,
        heightF = 1200 - marginF.top - marginF.bottom,
        innerRadiusF = 350,
        outerRadiusF = Math.min(widthF, heightF) / 2;   // the outerRadiusF goes from the middle of the SVG area to the border

  // append the svg object
    const svgF = d3.select("#graficaChilesFrescos")
      .append("svg")
        .attr("width", widthF + marginF.left + marginF.right)
        .attr("height", heightF + marginF.top + marginF.bottom)
        // .style('background', '#eaeaea')
      .append("g")
        .attr("transform", `translate(${widthF/2+marginF.left}, ${heightF/2+marginF.top})`)
        .style('font-family','sans-serif')
        .style('font-weight', 'thin');
      svgF.append("image")
          .attr('xlink:href', 'img/Chile fresco.png')
          .attr('class','chileverde')
          .attr('width', widthF/8)
          .attr('height', widthF/8)
          .attr("x", -widthF/16)
          .attr("y", -heightF/16);
          // .style('transform',"translate(0px,0)");

  d3.csv("data.csv").then( function(data) {

    // Scales
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
          .align(0)                  // This does nothing
          .domain(data.map(d => d.Country)); // The domain of the X axis is the list of states.
      const y = d3.scaleRadial()
          .range([innerRadiusF, outerRadiusF])   // Domain will be define later.
          .domain([0, 600000000]); // Domain of Y is from 0 to the max seen in the data

    // Circulo grande fake
      svgF.append("circle")
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r',290)
        .style('fill','none')
        .style('stroke','cadetblue')

    widthInternoF = 800;
    heightInternoF = 800;
    innerRadiusInternoF = 170;
    outerRadiusInternoF = 200;

    // Circulo grande fake
      const radioInternoF = 170;
      svgF.append("circle")
        .attr('class','gInterF')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', radioInternoF)
        .style('fill','none')
        // .style('stroke','darkorange')
        .append("g")
          .attr("transform", `translate(${widthInternoF/2}, ${heightInternoF/2})`)
          .style('font-family','sans-serif')
          .style('font-weight', 'thin');

    // Empieza grafica interna
      d3.csv("secos.csv").then( function(data) {

        // Scales
        const xInternoF = d3.scaleBand()
            .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
            .align(0)                  // This does nothing
            .domain(data.map(d => d.Country)); // The domain of the X axis is the list of states.
        const yInternoF = d3.scaleRadial()
            .range([innerRadiusInternoF, outerRadiusInternoF])   // Domain will be define later.
            // .domain([0, 1000]); // Domain of Y is from 0 to the max seen in the data

        // Circulo grande fake
        svgF.append("circle")
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r',innerRadiusInternoF)
          .style('fill','none')
          .style('stroke','#ee8785')


        // Add the circles
        let nodeTreeInternoF = svgF.append("g")
          .attr('class','gChicoF')
          .selectAll("circle")
          .data(data)
          .join("g")
            .attr("class", "nodeInternoF")
            // .attr("id", function(d){return("textInternoF"+d.Value)})
            .append("circle")
            .attr('class','circleTreeF')
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
            .attr("transform", function(d) { return "rotate(" + ((xInternoF(d.Country)  + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; })
            .style('fill', function(d) {
                if(d.Value>0){
                  return "url(#" + "pattern"+d.Nombre +")";
                }
                else{
                  return "beige"
                }
            })
            .style('stroke', function(d) {
                if(d.Value==0){
                  return "#ee8785";
                }
            })
            
            
            // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodeInternoF')
            .append("defs")
            .append("pattern")
            .attr("id", function(d){
                return "pattern"+d.Nombre
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
            .attr("xlink:href", "circulo-naranja.png")
          
          var naranjaPicoPajaro = d3.selectAll('.nodeInternoF:nth-of-type(23) .circleTreeF')
            .attr("transform", function(d) { return "rotate(" + ((xInternoF(d.Country)-.12 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          var naranjaPasilla = d3.selectAll('.nodeInternoF:nth-of-type(22) .circleTreeF')
            .attr("transform", function(d) { return "rotate(" + ((xInternoF(d.Country)-.07 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });
          var naranjaPiquin = d3.selectAll('.nodeInternoF:nth-of-type(24) .circleTreeF')
            .attr("transform", function(d) { return "rotate(" + ((xInternoF(d.Country) -.05 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (170) + ",0)"; });


        // Texto interior de bubble
        d3.selectAll('.nodeInternoF').append("text")
          .text(function(d){return(d.Country)})
          .attr("font-size", "10px")
          .style("font-family", "circularstd-book")
          .attr("alignment-baseline", "middle")
          .attr("text-anchor","end")
          .attr("class",function(d){return("textInternoF"+d.Nombre)})
          // .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })          
          .attr("transform", function(d) {
              if(d.Value<7){
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)";
              }else if(d.Value<10){
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (150) + ",0)";
              }
              else{
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)";
              }
          });

          d3.selectAll('.nodeInternoF:nth-child(n+16) text')
          .attr("text-anchor","start")
          .attr("transform", function(d) {
              if(d.Value<7){
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
              }else if(d.Value<10){
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (150) + ",0)scale(-1)";
              }
              else{
                return "rotate(" + ((xInternoF(d.Country) + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
              }
          });


          var textoNaranjaPicoPajaro = d3.selectAll('.nodeInternoF:nth-of-type(23) text')
          .attr("transform", function(d){
            return "rotate(" + ((xInternoF(d.Country) -.12 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
          });
          var textoNaranjaPasilla = d3.selectAll('.nodeInternoF:nth-of-type(22) text')
            .attr("transform", function(d){
              return "rotate(" + ((xInternoF(d.Country) -.07 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (155) + ",0)scale(-1)";
            });
          var textoNaranjaPiquin = d3.selectAll('.nodeInternoF:nth-of-type(24) text')
            .attr("transform", function(d){
              return "rotate(" + ((xInternoF(d.Country) -.05 + xInternoF.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (125) + ",0)scale(-1)";
          });


      });
    //  end grafica de adentro (naranja)

    // Empieza gráfica de árbol
        function nodosTreeF(nombre,treeNodo,width,nthType, height,rotate,nodoX,nodoY, plumaX,plumaY){

          widthNodo=25*width;
          var treemap = d3.tree().size([widthNodo, height]);
          var nodesPluma = d3.hierarchy(treeNodo, d => d.children);
          nodesPluma = treemap(nodesPluma);

          var gTree = d3.selectAll('.nodePadreF:nth-of-type('+nthType+')')
          .append("g")
          .attr('class','nodoTreeF')
          .attr('id',"nodoPadreTree"+treeNodo.name)
          .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI -95) + ")"+"translate(" + (290) + ",-"+ widthNodo/2 + ")" })
          // .on('mouseover', function (d, i) {
          //      d3.selectAll('.nodoTreeF').attr('opacity',0);
          //      // d3.selectAll(this).attr('opacity',1);
          //      d3.select(this.parentNode).selectAll(".nodoTreeF").attr('opacity','1')
          //      // d3.select('circleBubbleF').siblings().attr('opacity','0');
          //      console.log(this);
          // })
          // .on('mouseout', function (d, i) {
          //   d3.select(this).transition()in
          //        d3.selectAll('.nodoTreeF').attr('opacity',1);
          // });


          var linkF = gTree.selectAll(".linkF"+nombre)
            .data(nodesPluma.descendants().slice(1))
            .enter().append("path")
            .attr("transform","rotate("+rotate+")"+" translate("+nodoX+","+nodoY+")")
            .attr("class", "linkF "+"linkF"+nombre)
            .style("fill", "#1ca0c3")
            .attr("d", d => {
              return "M" + d.y + "," + d.x 
                + "C" + (d.y + d.parent.y) / 1 + "," + d.x
                + " " + (d.y + d.parent.y) / 200 + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
              });

          var nodeF = gTree.selectAll(".nodeF"+nombre)
            .data(nodesPluma.descendants())
            .enter().append("g")
            // .attr("class",treeNodo.name)
            .attr("class", d => "nodeF "+"nodeF" + nombre + (d.children ? " nodeF--internal"+nombre : " nodeF--leaf"+nombre+" nodeF--leaf"))
            .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

            d3.selectAll('.nodeF--leaf'+nombre).append("text")
              .text(d => d.data.name)
              .attr("alignment-baseline","middle")
              .attr('transform','translate(40,0)')

            d3.selectAll('.nodeF--leaf'+nombre).append("image")
              .attr("class","plumaImg")
              .attr('xlink:href', 'hoja-grafica.png')
              .attr('width', 30)
              .attr('height', 30)
              .style('transform','rotate(-310deg) translate('+plumaX+','+plumaY+')');
        };

    // Add the circles
      let nodeTreeF = svgF.append("g")
        .attr('class','gGrandeF')
        .selectAll("circle")
        .data(data)
        .join("g")
          .attr("class", "nodePadreF")
          .attr('id', function(d) {
              return "nodePadreF"+d.Nombre
          })
          .append("circle")
          .attr('class','circleBubbleF')
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
                return "url(#" + "patternPadre"+d.Nombre +")";
              }
              else{
                return "beige"
              }
          })
          .style('stroke', function(d) {
              if(d.Value==0){
                return "teal";
              }
          });

              // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodePadreF')
              .append("defs")
              .append("pattern")
              .attr("id", function(d){
                  return "patternPadre"+d.Nombre
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
              .attr("xlink:href", "circulo-verde.png");

    // Texto interior de bubble
      d3.selectAll('.nodePadreF').append("text")
        .text(function(d){return(d.Country)})
        .attr("font-size", "11px")
        .style("font-family", "circularstd-book")
        .attr("alignment-baseline", "middle")
        .attr("text-anchor","end")
        .style("cursor","pointer")
        .attr("class",function(d){return("textAfueraF"+d.Nombre)})
        // .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (290) + ",0)"; })
        .attr("transform", function(d) {
            if(d.Value<9){
              return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)";
            }else if(d.Value==11){
              return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (260) + ",0)";
            }
            else if(d.Value<18){
              return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (250) + ",0)";
            }
            else{
              return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (240) + ",0)";
            }
        });


      d3.selectAll('.nodePadreF:nth-child(n+20) text')
      .attr("text-anchor","start")
      .attr("transform", function(d) {
          if(d.Value<9){
            return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (270) + ",0)scale(-1)";
          }else if(d.Value==11){
            return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (260) + ",0)scale(-1)";
          }
          else if(d.Value<18){
            return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (245) + ",0)scale(-1)";
          }
          else{
            return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 95) + ")"+"translate(" + (245) + ",0)scale(-1)";
          }
      });

    //  Datos
        var treeAmaxito = {
          "name": "Amaxito",
          "value":20,
          "children": [
            {"name" : "Amachito", 'value':6},
            {"name" : "Max", 'value':6 }
          ]
        };
        var treeAmaxito2 = {
          "name": "Amaxito2",
          "value":20,
          "children": [
            {"name" : "Amash", 'value':6 },
            {"name" : "Macho", 'value':6 },
          ]
        };
        var treeAmaxito3 = {
          "name": "Amaxito3",
          "value":20,
          "children": [
            {"name" : "Amashito", 'value':6 },
            {"name" : "Machito", 'value':6 },
          ]
        };
        var treeAmaxito4 = {
          "name": "Amaxito4",
          "value":20,
          "children": [
            {"name" : "Amax", 'value':6 },
            {"name" : "Amaxito", 'value':6 },
          ]
        };
        var treeBola = {
          "name": "Bola",
          "value":20,
          "children": [
            {
              "name": "Bolita",
            },
            {
              "name": "Boludo",
            },
            {
              "name": "Trompita",
            },

          ]
        };
        var treeBravo = {
          "name": "Bravo",
          "value":20,
          "children": [
            {
              "name": "Parado",
            },
          ]
        };
        var treeCaribe = {
          "name": "Caribe",
          "value":20,
          "children": [
            {
              "name": "Caloro",
            },
            {
              "name": "Fresno",
            },
            {
              "name": "Húngaro",
            },
          ]
        };
        var treeCarricillo = {
          "name": "Carricillo",
          "value":20,
          "children": [
            {
              "name": "Güero",
            },
            {
              "name": "Largo",
            },
          ]
        };
        var treeChilaca = {
          "name": "Chilaca",
          "value":20,
          "children": [
            {
              "name": "Cuernillo",
            },
            {
              "name": "Chile para deshebrar",
            },
          ]
        };
        var treeChimborote = {
          "name": "Chimborote",
          "value":20,
          "children": [
            {
              "name": "Chamborote",
            },
            {
              "name": "Chilemborote",
            },
            {
              "name": "Chimborete",
            },
          ]
        };
        var treeCosteño = {
          "name": "Costeño",
          "value":20,
          "children": [
            {
              "name": "Bofo",
            },
            {
              "name": "Chilpete",
            },
            {
              "name": "Colorado",
            },
            {
              "name": "Serrano",
            },
          ]
        };
        var treeDeArbol = {
          "name": "DeArbol",
          "value":20,
          "children": [
            {
              "name": "Bravo",
            },
            {
              "name": "Cola de rata",
            },
          ]
        };
        var treeDeChorro = {
          "name": "DeChorro",
          "value":20,
          "children": [
            {
              "name": "Ancho",
            },
            {
              "name": "Verde",
            },
          ]
        };
        var treeJalapeño = {
          "name": "Jalapeño",
          "value":20,
          "children": [
            {
              "name": "Acorchado",
            },
            {
              "name": "San Andrés",
            },
          ]
        };
        var treeJalapeño2 = {
          "name": "Jalapeño2",
          "value":20,
          "children": [
            {
              "name": "Alegría",
            },
            {
              "name": "Pinalteco",
            }
          ]
        };
        var treeJalapeño3 = {
          "name": "Jalapeño3",
          "value":20,
          "children": [
            {
              "name": "Cuaresmeño",
            },
            {
              "name": "Peludo",
            }
          ]
        };
        var treeJalapeño4 = {
          "name": "Jalapeño4",
          "value":20,
          "children": [
            {
              "name": "Espinalteco",
            },
            {
              "name": "Jarocho",
            }
          ]
        };
        var treeManzano = {
          "name": "Manzano",
          "value":20,
          "children": [
            {
              "name": "Canario",
            },
            {
              "name": "Caribe",
            },
            {
              "name": "Cera",
            },
            {
              "name": "Perón",
            },
          ]
        };
        var treeMirasol = {
          "name": "Mirasol",
          "value":20,
          "children": [
            {
              "name": "Húngaro",
            },
            {
              "name": "Mira pa'l cielo",
            },
            {
              "name": "Miracielo",
            },
            {
              "name": "Parado",
            },
            {
              "name": "Puya",
            },
            {
              "name": "Real ",
            },
          ]
        };
        var treePiquin = {
          "name": "Piquin",
          "value":20,
          "children": [
            {"name" : "Amomo", 'value':6},
            {"name" : "Chiapas", 'value':6 },
            {"name" : "Chilpaya", 'value':6 },
            {"name" : "Chiltepin", 'value':6 },

          ]
        };
        var treePiquin2 = {
          "name": "Piquin2",
          "value":20,
          "children": [
            {"name" : "Monte", 'value':6},
            {"name" : "Diente de tlacuache", 'value':6 },
            {"name" : "Gachupin", 'value':6 },
            // {"name" : "Pájaro", 'value':6 },
            // {"name" : "Quimiche", 'value':6 },
            // {"name" : "Silvestre", 'value':6 },
            // {"name" : "Timpinchile", 'value':6},
            // {"name" : "Tuxtla", 'value':6 },
            // {"name" : "Xigole", 'value':6 },
            // {"name" : "Kokori", 'value':6 },
          ]
        };
        var treePiquin3 = {
          "name": "Piquin3",
          "value":20,
          "children": [
            {"name" : "Pájaro", 'value':6 },
            {"name" : "Quimiche", 'value':6 },
            {"name" : "Silvestre", 'value':6 },
          ]
        };
        var treePiquin4 = {
          "name": "Piquin4",
          "value":20,
          "children": [
            {"name" : "Timpinchile", 'value':6},
            {"name" : "Tuxtla", 'value':6 },
            {"name" : "Xigole", 'value':6 },
            {"name" : "Kokori", 'value':6 },
          ]
        };
        var treePiquin5 = {
          "name": "Piquin5",
          "value":20,
          "children": [
            {"name" : "Tlilchilli", 'value':6 },
          ]
        };
        var treePiquin6 = {
          "name": "Piquin6",
          "value":20,
          "children": [
            {"name" : "Diente de tlacuache", 'value':6 },
            // {"name" : "Gachupin", 'value':6 },
            // {"name" : "Pájaro", 'value':6 },
            // {"name" : "Quimiche", 'value':6 },
            {"name" : "Silvestre", 'value':6 },
          ]
        };
        var treePiquin7 = {
          "name": "Piquin7",
          "value":20,
          "children": [
            {"name" : "Gachupin", 'value':6 },
            {"name" : "Pájaro", 'value':6 },
            {"name" : "Quimiche", 'value':6 },
          ]
        };
        var treePiquin8 = {
          "name": "Piquin8",
          "value":20,
          "children": [
            {"name" : "Ansaucho", 'value':6 },
            {"name" : "Chigole", 'value':6 },
            {"name" : "Chiltepec", 'value':6 },
            {"name" : "Criollo", 'value':6 },
          ]
        };
        var treePiquin9 = {
          "name": "Piquin9",
          "value":20,
          "children": [
            {"name" : "Perro", 'value':6 },
            {"name" : "Enano", 'value':6 },
          ]
        };
        var treePiquin10 = {
          "name": "Piquin10",
          "value":20,
          "children": [
            {"name" : "Pulga", 'value':6 },
            {"name" : "Siete caídos", 'value':6 },
          ]
        };
        var treePiquin11 = {
          "name": "Piquin11",
          "value":20,
          "children": [
            {"name" : "Ticushi", 'value':6 },
            {"name" : "Totocuitlatl", 'value':6 },
            {"name" : "Ulute", 'value':6 },
            // {"name" : "Kokoim", 'value':6 },
            // {"name" : "Kookol", 'value':6 },
          ]
        };
        var treePiquin12 = {
          "name": "Piquin12",
          "value":20,
          "children": [
            {"name" : "Kokoim", 'value':6 },
            {"name" : "Kookol", 'value':6 },
          ]
        };
        var treePoblano = {
          "name": "Poblano",
          "value":20,
          "children": [
            {"name" : "Ancho"},
            {"name" : "Gordo" },
            {"name" : "Joto" },
            {"name" : "Para rellenar" },
            {"name" : "Pasilla verde" },
          ]
        };
        var treePoblano2 = {
          "name": "Poblano2",
          "value":20,
          "children": [
            {"name" : "Esmeralda" },
            {"name" : "Jaral" },
            {"name" : "Miahuateco" },
            {"name" : "Pasilla fresco" },
            {"name" : "Verdeño" },
          ]
        };
        var treeSerrano = {
          "name": "Serrano",
          "value":20,
          "children": [
            {"name" : "Altamira"},
            {"name" : "Panuco" },
            {"name" : "Tampiqueño" },
          ]
        };
        var treeSerrano2 = {
          "name": "Serrano2",
          "value":20,
          "children": [
            {"name" : "Costeño" },
            {"name" : "Serrano tampiqueño" },
            {"name" : "Verde" },
          ]
        };
        var treeVerdeDelNorte = {
          "name": "VerdeDelNorte",
          "value":20,
          "children": [
            {"name" : "Californio Chili Pepper"},
            {"name" : "Anaheim" },
            {"name" : "California" },
            {"name" : "Clifornian" },
            {"name" : "Magdalena" },
            {"name" : "Verde" },
          ]
        };
        var treeXcaltic = {
          "name": "Xcaltic",
          "value":20,
          "children": [
            {"name" : "Güero", 'value':6},
            {"name" : "X-cat-ik", 'value':6 },
          ]
        };

    // Inicializar árboles
      // function nodosTreeF(nombre,treeNodo,width,nthType, height,rotate, plumaR, plumaX,plumaY){
      nodosTreeF("amaxito",treeAmaxito,11,2,55,0,0,0,"-12px","-27px");
      nodosTreeF("amaxito2",treeAmaxito2,10,2,80,0,0,0,"-12px","-27px");
      nodosTreeF("amaxito3",treeAmaxito3,7,2,95,0,0,0,"-12px","-27px");
      nodosTreeF("amaxito4",treeAmaxito4,2.5,2,110,0,0,0,"-12px","-27px");
      nodosTreeF("bola",treeBola,2.4,4,95,5,0,0,"-8px","-20px");
      nodosTreeF("bravo",treeBravo,1,5,50,0,0,0,"-12px","-27px");
      nodosTreeF("caribe",treeCaribe,3,6,95,0,0,0,"-12px","-27px");
      nodosTreeF("carricillo",treeCarricillo,1.8,7,75,0,0,0,"-12px","-27px");
      nodosTreeF("chilaca",treeChilaca,2,9,75,-18,0,0,"-12px","-27px");
      nodosTreeF("chimborote",treeChimborote,3,10,85,0,0,0,"-12px","-27px");
      nodosTreeF("costeño",treeCosteño,4,12,95,0,0,0,"-12px","-27px");
      nodosTreeF("dearbol",treeDeArbol,2,15,70,0,0,0,"-12px","-27px");
      nodosTreeF("dechorro",treeDeChorro,2,16,70,0,0,0,"-12px","-27px");
      nodosTreeF("jalapeno",treeJalapeño,12,19,130,-8,-14,0,"-29px","-45px");
      nodosTreeF("jalapeno2",treeJalapeño2,9,19,160,-8,-14,0,"-29px","-45px");
      nodosTreeF("jalapeno3",treeJalapeño3,6,19,180,-8,-14,0,"-29px","-45px");
      nodosTreeF("jalapeno4",treeJalapeño4,2,19,200,-8,-14,0,"-29px","-45px");
      nodosTreeF("manzano",treeManzano,1.6,20,30,20,30,0,"2px","-34px");
      nodosTreeF("mirasol",treeMirasol,5,22,160,-15,-20,0,"-50px","-50px");

      nodosTreeF("piquin",treePiquin,2.6,25,95,31,30,-2,"-35px","-67px");
      nodosTreeF("piquin2",treePiquin2,1.8,25,100,2,15,5,"-35px","-67px");
      nodosTreeF("piquin3",treePiquin3,2,25,95,-26,10,10,"-35px","-67px");
      nodosTreeF("piquin4",treePiquin4,3,25,100,-60,-30,2,"-35px","-67px");
      // nodosTreeF("piquin5",treePiquin5,6,25,120,-15,-35,-10,"-35px","-67px");
      // nodosTreeF("piquin6",treePiquin6,4,25,110,-15,-10,-10,"-35px","-67px");
      // nodosTreeF("piquin7",treePiquin7,1.5,25,150,-15,-35,-10,"-35px","-67px");
      nodosTreeF("piquin8",treePiquin8,4,25,180,28,20,-5,"-35px","-67px");
      nodosTreeF("piquin9",treePiquin9,2,25,170,2,10,5,"-35px","-67px");
      nodosTreeF("piquin10",treePiquin10,2,25,160,-16,5,8,"-35px","-67px");
      nodosTreeF("piquin11",treePiquin11,3,25,140,-40,-5,8,"-35px","-67px");
      nodosTreeF("piquin12",treePiquin12,2,25,120,-65,-5,8,"-35px","-67px");

      nodosTreeF("poblano",treePoblano,3.5,26,100,49,32,-16,"-12px","-27px");
      nodosTreeF("poblano2",treePoblano2,6.2,26,180,45.5,55,-26,"-12px","-27px");
      nodosTreeF("serrano",treeSerrano,1.8,27,110,71,20,-16,"-12px","-27px");
      nodosTreeF("serrano2",treeSerrano2,3.5,27,210,66,35,-26,"-12px","-27px");
      nodosTreeF("verdedelnorte",treeVerdeDelNorte,5,32,100,0,0,0,"-12px","-27px");
      nodosTreeF("xcaltic",treeXcaltic,1.2,34,45,-18,0,0,"-12px","-27px");

    // Acomodar hojas una por una :(
      d3.select('#nodoPadreTreeAmaxito .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(5deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(115deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito2 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(20deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito2 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(100deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito3 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(40deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito3 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(85deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito4 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(50deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeAmaxito4 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(75deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeBola .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(55deg)translate(-4px,-20px)');
      d3.select('#nodoPadreTreeBola .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(65deg)translate(-4px,-20px)');
      d3.select('#nodoPadreTreeBola .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(75deg)translate(-4px,-18px)');
      d3.select('#nodoPadreTreeBravo .nodeF:nth-child(3) .plumaImg')
        .style('transform','rotate(65deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCaribe .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(50deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCaribe .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(60deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCaribe .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(75deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCarricillo .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(55deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCarricillo .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(70deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeChilaca .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(35deg)translate(-26px,-40px)');
      d3.select('#nodoPadreTreeChilaca .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(50deg)translate(-31px,-36px)');
      d3.select('#nodoPadreTreeChimborote .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(45deg)translate(-13px,-20px)');
      d3.select('#nodoPadreTreeChimborote .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(55deg)translate(-13px,-20px)');
      d3.select('#nodoPadreTreeChimborote .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(75deg)translate(-13px,-18px)');
      d3.select('#nodoPadreTreeCosteño .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(38deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeCosteño .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(55deg)translate(-14px,-20px)');
      d3.select('#nodoPadreTreeCosteño .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(65deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeCosteño .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(75deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeDeArbol .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(50deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeDeArbol .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(70deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeDeChorro .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(50deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeDeChorro .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(70deg)translate(-14px,-18px)');
      d3.select('#nodoPadreTreeJalapeño .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(25deg)translate(-25px,-30px)');
      d3.select('#nodoPadreTreeJalapeño .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(85deg)translate(-33px,-30px)');
      d3.select('#nodoPadreTreeJalapeño2 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(35deg)translate(-36px,-25px)');
      d3.select('#nodoPadreTreeJalapeño2 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(75deg)translate(-36px,-25px)');
      d3.select('#nodoPadreTreeJalapeño3 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(45deg)translate(-40px,-20px)');
      d3.select('#nodoPadreTreeJalapeño3 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(70deg)translate(-36px,-25px)');
      d3.select('#nodoPadreTreeJalapeño4 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(55deg)translate(-44px,-18px)');
      d3.select('#nodoPadreTreeJalapeño4 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(65deg)translate(-40px,-20px)');
      d3.select('#nodoPadreTreeManzano .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(50deg)translate(20px,-29px)');
      d3.select('#nodoPadreTreeManzano .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(65deg)translate(16px,-34px)');
      d3.select('#nodoPadreTreeManzano .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(95deg)translate(6px,-42px)');
      d3.select('#nodoPadreTreeManzano .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(115deg)translate(-1px,-40px)');

      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(30deg)translate(-50px,-40px)');
      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(35deg)translate(-46px,-45px)');
      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(10) .plumaImg')
        .style('transform','rotate(40deg)translate(-44px,-45px)');
      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(11) .plumaImg')
        .style('transform','rotate(45deg)translate(-43px,-45px)');
      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(12) .plumaImg')
        .style('transform','rotate(54deg)translate(-45px,-42px)');
      d3.select('#nodoPadreTreeMirasol .nodeF:nth-child(13) .plumaImg')
        .style('transform','rotate(62deg)translate(-47px,-40px)');

      d3.select('#nodoPadreTreeSerrano .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(140deg)translate(132px,-55px)');
      d3.select('#nodoPadreTreeSerrano .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(135deg)translate(112px,-40px)');
      d3.select('#nodoPadreTreeSerrano .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(130deg)translate(88px,-25px)');
      d3.select('#nodoPadreTreeSerrano2 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(135deg)translate(258px,-75px)');
      d3.select('#nodoPadreTreeSerrano2 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(126deg)translate(214px,-28px)');
      d3.select('#nodoPadreTreeSerrano2 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(120deg)translate(163px,-5px)');
      d3.select('#nodoPadreTreePoblano .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(125deg)translate(130px,-45px)');
      d3.select('#nodoPadreTreePoblano .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(125deg)translate(100px,-43px)');
      d3.select('#nodoPadreTreePoblano .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(115deg)translate(71px,-25px)');
      d3.select('#nodoPadreTreePoblano .nodeF:nth-child(10) .plumaImg')
        .style('transform','rotate(100deg)translate(37px,-10px)');
      d3.select('#nodoPadreTreePoblano .nodeF:nth-child(11) .plumaImg')
        .style('transform','rotate(95deg)translate(4px,-12px)');
      d3.select('#nodoPadreTreePoblano2 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(125deg)translate(235px,-80px)');
      d3.select('#nodoPadreTreePoblano2 .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(115deg)translate(182px,-30px)');
      d3.select('#nodoPadreTreePoblano2 .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(115deg)translate(126px,-31px)');
      d3.select('#nodoPadreTreePoblano2 .nodeF:nth-child(10) .plumaImg')
        .style('transform','rotate(100deg)translate(37px,-10px)');
      d3.select('#nodoPadreTreePoblano2 .nodeF:nth-child(11) .plumaImg')
        .style('transform','rotate(105deg)translate(38px,-5px)');
      d3.select('#nodoPadreTreeXcaltic .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(55deg)translate(-22px,-34px)');
      d3.select('#nodoPadreTreeXcaltic .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(35deg)translate(-20px,-34px)');
      d3.select('#nodoPadreTreePiquin .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(108deg)translate(87px,-30px)');
      d3.select('#nodoPadreTreePiquin .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(100deg)translate(57px,-20px)');
      d3.select('#nodoPadreTreePiquin .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(90deg)translate(28px,-15px)');
      d3.select('#nodoPadreTreePiquin .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(80deg)translate(-3px,-20px)');
      d3.select('#nodoPadreTreePiquin2 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(68deg)translate(20px,-5px)');
      d3.select('#nodoPadreTreePiquin2 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(64deg)translate(-5px,-15px)');
      d3.select('#nodoPadreTreePiquin2 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(54deg)translate(-29px,-30px)');
      d3.select('#nodoPadreTreePiquin3 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(43deg)translate(-11px,-25px)');
      d3.select('#nodoPadreTreePiquin3 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(39deg)translate(-33px,-45px)');
      d3.select('#nodoPadreTreePiquin3 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(26deg)translate(-45px,-72px)');
      d3.select('#nodoPadreTreePiquin4 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(15deg)translate(-35px,-45px)');
      d3.select('#nodoPadreTreePiquin4 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(10deg)translate(-48px,-75px)');
      d3.select('#nodoPadreTreePiquin4 .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(-5deg)translate(-45px,-110px)');
      d3.select('#nodoPadreTreePiquin4 .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(-10deg)translate(-50px,-140px)');
      d3.select('#nodoPadreTreePiquin8 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(100deg)translate(149px,-10px)');
      d3.select('#nodoPadreTreePiquin8 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(100deg)translate(99px,-10px)');
      d3.select('#nodoPadreTreePiquin8 .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(80deg)translate(45px,6px)');
      d3.select('#nodoPadreTreePiquin8 .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(72deg)translate(-3px,-8px)');
      d3.select('#nodoPadreTreePiquin9 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(68deg)translate(20px,-8px)');
      d3.select('#nodoPadreTreePiquin9 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(68deg)translate(-25px,-28px)');
      d3.select('#nodoPadreTreePiquin10 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(50deg)translate(-20px,-28px)');
      d3.select('#nodoPadreTreePiquin10 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(45deg)translate(-56px,-62px)');
      d3.select('#nodoPadreTreePiquin11 .nodeF:nth-child(6) .plumaImg')
        .style('transform','rotate(35deg)translate(-48px,-76px)');
      d3.select('#nodoPadreTreePiquin11 .nodeF:nth-child(7) .plumaImg')
        .style('transform','rotate(25deg)translate(-70px,-116px)');
      d3.select('#nodoPadreTreePiquin11 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(-5deg)translate(-80px,-115px)');
      d3.select('#nodoPadreTreePiquin12 .nodeF:nth-child(4) .plumaImg')
        .style('transform','rotate(15deg)translate(-46px,-100px)');
      d3.select('#nodoPadreTreePiquin12 .nodeF:nth-child(5) .plumaImg')
        .style('transform','rotate(0deg)translate(-45px,-140px)');

      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(8) .plumaImg')
        .style('transform','rotate(28deg)translate(-13px,-20px)');
      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(9) .plumaImg')
        .style('transform','rotate(40deg)translate(-10px,-25px)');
      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(10) .plumaImg')
        .style('transform','rotate(50deg)translate(-10px,-25px)');
      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(11) .plumaImg')
        .style('transform','rotate(65deg)translate(-10px,-25px)');
      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(12) .plumaImg')
        .style('transform','rotate(85deg)translate(-10px,-25px)');
      d3.select('#nodoPadreTreeVerdeDelNorte .nodeF:nth-child(13) .plumaImg')
        .style('transform','rotate(100deg)translate(-15px,-15px)');

    // Acomodar textos:(
      d3.select('.nodeFamaxito:nth-child(4) text')
        .style('transform','rotate(-50deg)translate(22px,-2px)');
      d3.select('.nodeFamaxito:nth-child(5) text')
        .style('transform','rotate(50deg)translate(22px,0px)');
      d3.select('.nodeFamaxito2:nth-child(4) text')
        .style('transform','rotate(-40deg)translate(22px,0px)');
      d3.select('.nodeFamaxito2:nth-child(5) text')
        .style('transform','rotate(40deg)translate(22px,0px)');
      d3.select('.nodeFamaxito3:nth-child(4) text')
        .style('transform','rotate(-26deg)translate(22px,0px)');
      d3.select('.nodeFamaxito3:nth-child(5) text')
        .style('transform','rotate(26deg)translate(22px,0px)');
      d3.select('.nodeFamaxito4:nth-child(4) text')
        .style('transform','rotate(-10deg)translate(22px,0px)');
      d3.select('.nodeFamaxito4:nth-child(5) text')
        .style('transform','rotate(10deg)translate(22px,0px)');
      d3.select('.nodeFbola:nth-child(5) text')
        .style('transform','rotate(-5deg)translate(28px,7px)');
      d3.select('.nodeFbola:nth-child(6) text')
        .style('transform','rotate(1deg)translate(28px,9px)');
      d3.select('.nodeFbola:nth-child(7) text')
        .style('transform','rotate(10deg)translate(26px,10px)');
      d3.select('.nodeFbravo:nth-child(3) text')
        .style('transform','rotate(0deg)translate(21px,2px)');
      d3.select('.nodeFcaribe:nth-child(5) text')
        .style('transform','rotate(-10deg)translate(21px,1px)');
      d3.select('.nodeFcaribe:nth-child(6) text')
        .style('transform','rotate(1deg)translate(21px,1px)');
      d3.select('.nodeFcaribe:nth-child(7) text')
        .style('transform','rotate(10deg)translate(21px,1px)');
      d3.select('.nodeFcarricillo:nth-child(4) text')
        .style('transform','rotate(0deg)translate(21px,-1px)');
      d3.select('.nodeFcarricillo:nth-child(5) text')
        .style('transform','rotate(10deg)translate(21px,-1px)');

      d3.select('.nodeFchilaca:nth-child(4) text')
        .style('transform','rotate(-25deg)translate(34px,-22px)');
      d3.select('.nodeFchilaca:nth-child(5) text')
        .style('transform','rotate(-10deg)translate(29px,-23px)');

      d3.select('.nodeFchimborote:nth-child(5) text')
        .style('transform','rotate(-15deg)translate(22px,-1px)');
      d3.select('.nodeFchimborote:nth-child(6) text')
        .style('transform','rotate(0deg)translate(22px,0px)');
      d3.select('.nodeFchimborote:nth-child(7) text')
        .style('transform','rotate(17deg)translate(21px,2px)');

      d3.select('.nodeFcosteño:nth-child(6) text')
        .style('transform','rotate(-20deg)translate(23px,-2px)');
      d3.select('.nodeFcosteño:nth-child(7) text')
        .style('transform','rotate(0deg)translate(23px,-2px)');
      d3.select('.nodeFcosteño:nth-child(8) text')
        .style('transform','rotate(10deg)translate(23px,-2px)');
      d3.select('.nodeFcosteño:nth-child(9) text')
        .style('transform','rotate(20deg)translate(23px,0px)');

      d3.select('.nodeFdearbol:nth-child(4) text')
        .style('transform','rotate(-5deg)translate(21px,0px)');
      d3.select('.nodeFdearbol:nth-child(5) text')
        .style('transform','rotate(15deg)translate(23px,0px)');

      d3.select('.nodeFdechorro:nth-child(4) text')
        .style('transform','rotate(-5deg)translate(21px,0px)');
      d3.select('.nodeFdechorro:nth-child(5) text')
        .style('transform','rotate(5deg)translate(23px,0px)');

      d3.select('.nodeFjalapeno:nth-child(4) text')
        .style('transform','rotate(-40deg)translate(80px,-14px)scale(-1)');
      d3.select('.nodeFjalapeno:nth-child(5) text')
        .style('transform','rotate(26deg)translate(78px,-22px)scale(-1)');
      d3.select('.nodeFjalapeno2:nth-child(4) text')
        .style('transform','rotate(-30deg)translate(52px,-22px)scale(-1)');
      d3.select('.nodeFjalapeno2:nth-child(5) text')
        .style('transform','rotate(15deg)translate(60px,-22px)scale(-1)');
      d3.select('.nodeFjalapeno3:nth-child(4) text')
        .style('transform','rotate(-20deg)translate(72px,-23px)scale(-1)');
      d3.select('.nodeFjalapeno3:nth-child(5) text')
        .style('transform','rotate(5deg)translate(52px,-22px)scale(-1)');
      d3.select('.nodeFjalapeno4:nth-child(4) text')
        .style('transform','rotate(-12deg)translate(64px,-27px)scale(-1)');
      d3.select('.nodeFjalapeno4:nth-child(5) text')
        .style('transform','rotate(-5deg)translate(50px,-26px)scale(-1)');

      d3.select('.nodeFmanzano:nth-child(6) text')
        .style('transform','rotate(50deg)translate(105px,22px)scale(-1)');
      d3.select('.nodeFmanzano:nth-child(7) text')
        .style('transform','rotate(30deg)translate(88px,15px)scale(-1)');
      d3.select('.nodeFmanzano:nth-child(8) text')
        .style('transform','rotate(5deg)translate(72px,7px)scale(-1)');
      d3.select('.nodeFmanzano:nth-child(9) text')
        .style('transform','rotate(-15deg)translate(82px,-3px)scale(-1)');

      d3.select('.nodeFmirasol:nth-child(8) text')
        .style('transform','rotate(0deg)translate(68px,64px)scale(-1)');
      d3.select('.nodeFmirasol:nth-child(9) text')
        .style('transform','rotate(-5deg)translate(88px,20px)scale(-1)');
      d3.select('.nodeFmirasol:nth-child(10) text')
        .style('transform','rotate(-15deg)translate(70px,-20px)scale(-1)');
      d3.select('.nodeFmirasol:nth-child(11) text')
        .style('transform','rotate(-25deg)translate(78px,-58px)scale(-1)');
      d3.select('.nodeFmirasol:nth-child(12) text')
        .style('transform','rotate(-30deg)translate(88px,-95px)scale(-1)');
      d3.select('.nodeFmirasol:nth-child(13) text')
        .style('transform','rotate(-35deg)translate(108px,-128px)scale(-1)');

      d3.select('.nodeFserrano:nth-child(5) text')
        .style('transform','rotate(80deg)translate(165px,108px)scale(-1)');
      d3.select('.nodeFserrano:nth-child(6) text')
        .style('transform','rotate(72deg)translate(136px,100px)scale(-1)');
      d3.select('.nodeFserrano:nth-child(7) text')
        .style('transform','rotate(64deg)translate(130px,88px)scale(-1)');
      d3.select('.nodeFserrano2:nth-child(5) text')
        .style('transform','rotate(80deg)translate(264px,188px)scale(-1)');
      d3.select('.nodeFserrano2:nth-child(6) text')
        .style('transform','rotate(65deg)translate(240px,194px)scale(-1)');
      d3.select('.nodeFserrano2:nth-child(7) text')
        .style('transform','rotate(64deg)translate(138px,150px)scale(-1)');

      d3.select('.nodeFpoblano:nth-child(7) text')
        .style('transform','rotate(70deg)translate(155px,102px)scale(-1)');
      d3.select('.nodeFpoblano:nth-child(8) text')
        .style('transform','rotate(60deg)translate(122px,92px)scale(-1)');
      d3.select('.nodeFpoblano:nth-child(9) text')
        .style('transform','rotate(45deg)translate(77px,80px)scale(-1)');
      d3.select('.nodeFpoblano:nth-child(10) text')
        .style('transform','rotate(40deg)translate(99px,48px)scale(-1)');
      d3.select('.nodeFpoblano:nth-child(11) text')
        .style('transform','rotate(34deg)translate(84px,15px)scale(-1)');

      d3.select('.nodeFpoblano2:nth-child(7) text')
        .style('transform','rotate(70deg)translate(263px,165px)scale(-1)');
      d3.select('.nodeFpoblano2:nth-child(8) text')
        .style('transform','rotate(60deg)translate(165px,151px)scale(-1)');
      d3.select('.nodeFpoblano2:nth-child(9) text')
        .style('transform','rotate(48deg)translate(145px,125px)scale(-1)');
      d3.select('.nodeFpoblano2:nth-child(10) text')
        .style('transform','rotate(36deg)translate(110px,78px)scale(-1)');
      d3.select('.nodeFpoblano2:nth-child(11) text')
        .style('transform','rotate(30deg)translate(56px,22px)scale(-1)');

      d3.select('.nodeFpiquin:nth-child(6) text')
        .style('transform','rotate(45deg)translate(116px,83px)scale(-1)');
      d3.select('.nodeFpiquin:nth-child(7) text')
        .style('transform','rotate(38deg)translate(95px,60px)scale(-1)');
      d3.select('.nodeFpiquin:nth-child(8) text')
        .style('transform','rotate(25deg)translate(78px,40px)scale(-1)');
      d3.select('.nodeFpiquin:nth-child(9) text')
        .style('transform','rotate(20deg)translate(70px,8px)scale(-1)');
      d3.select('.nodeFpiquin2:nth-child(5) text')
        .style('transform','rotate(10deg)translate(62px,35px)scale(-1)');
      d3.select('.nodeFpiquin2:nth-child(6) text')
        .style('transform','rotate(-75deg)translate(188px,-78px)scale(-1)');
      d3.select('.nodeFpiquin2:nth-child(7) text')
        .style('transform','rotate(0deg)translate(68px,-6px)scale(-1)');
      d3.select('.nodeFpiquin3:nth-child(5) text')
        .style('transform','rotate(-8deg)translate(56px,12px)scale(-1)');
      d3.select('.nodeFpiquin3:nth-child(6) text')
        .style('transform','rotate(-15deg)translate(78px,-18px)scale(-1)');
      d3.select('.nodeFpiquin3:nth-child(7) text')
        .style('transform','rotate(-25deg)translate(82px,-44px)scale(-1)');
      d3.select('.nodeFpiquin4:nth-child(6) text')
        .style('transform','rotate(-35deg)translate(78px,-20px)scale(-1)');
      d3.select('.nodeFpiquin4:nth-child(7) text')
        .style('transform','rotate(-45deg)translate(75px,-46px)scale(-1)');
      d3.select('.nodeFpiquin4:nth-child(8) text')
        .style('transform','rotate(-55deg)translate(102px,-66px)scale(-1)');
      d3.select('.nodeFpiquin4:nth-child(9) text')
        .style('transform','rotate(-65deg)translate(135px,-82px)scale(-1)');

      d3.select('.nodeFpiquin8:nth-child(6) text')
        .style('transform','rotate(35deg)translate(130px,150px)scale(-1)');
      d3.select('.nodeFpiquin8:nth-child(7) text')
        .style('transform','rotate(35deg)translate(98px,104px)scale(-1)');
      d3.select('.nodeFpiquin8:nth-child(8) text')
        .style('transform','rotate(25deg)translate(80px,58px)scale(-1)');
      d3.select('.nodeFpiquin8:nth-child(9) text')
        .style('transform','rotate(15deg)translate(50px,12px)scale(-1)');
      d3.select('.nodeFpiquin9:nth-child(4) text')
        .style('transform','rotate(2deg)translate(52px,35px)scale(-1)');
      d3.select('.nodeFpiquin9:nth-child(5) text')
        .style('transform','rotate(0deg)translate(54px,-15px)scale(-1)');
      d3.select('.nodeFpiquin10:nth-child(4) text')
        .style('transform','rotate(-10deg)translate(53px,-13px)scale(-1)');
      d3.select('.nodeFpiquin10:nth-child(5) text')
        .style('transform','rotate(-25deg)translate(105px,-55px)scale(-1)');
      d3.select('.nodeFpiquin11:nth-child(5) text')
        .style('transform','rotate(-35deg)translate(82px,-30px)scale(-1)');
      d3.select('.nodeFpiquin11:nth-child(6) text')
        .style('transform','rotate(-45deg)translate(130px,-67px)scale(-1)');
      d3.select('.nodeFpiquin11:nth-child(7) text')
        .style('transform','rotate(-50deg)translate(124px,-103px)scale(-1)');
      d3.select('.nodeFpiquin12:nth-child(4) text')
        .style('transform','rotate(-65deg)translate(132px,-68px)scale(-1)');
      d3.select('.nodeFpiquin12:nth-child(5) text')
        .style('transform','rotate(-70deg)translate(158px,-96px)scale(-1)');

      d3.select('.nodeFverdedelnorte:nth-child(8) text')
        .style('transform','rotate(30deg)translate(180px,92px)scale(-1)');
      d3.select('.nodeFverdedelnorte:nth-child(9) text')
        .style('transform','rotate(25deg)translate(100px,56px)scale(-1)');
      d3.select('.nodeFverdedelnorte:nth-child(10) text')
        .style('transform','rotate(10deg)translate(80px,18px)scale(-1)');
      d3.select('.nodeFverdedelnorte:nth-child(11) text')
        .style('transform','rotate(0deg)translate(74px,-24px)scale(-1)');
      d3.select('.nodeFverdedelnorte:nth-child(12) text')
        .style('transform','rotate(-20deg)translate(104px,-60px)scale(-1)');
      d3.select('.nodeFverdedelnorte:nth-child(13) text')
        .style('transform','rotate(-25deg)translate(95px,-100px)scale(-1)');

      d3.select('.nodeFxcaltic:nth-child(4) text')
        .style('transform','rotate(-10deg)translate(60px,3px)scale(-1)');
      d3.select('.nodeFxcaltic:nth-child(5) text')
        .style('transform','rotate(-25deg)translate(74px,-29px)scale(-1)');
    
    // Add the circles
      let nodeTree2F = svgF.append("g")
        .attr('class','gGrandeF')
        .selectAll("circle")
        .data(data)
        .join("g")
          .attr("class", "nodePadreF")
          .attr('id', function(d) {
              return "nodePadreF"+d.Nombre
          })
          .append("circle")
          .attr('class','circleBubbleF')
          .style('cursor','pointer')
          .attr('id', function(d) {
              return "circleBubbleF"+d.Nombre
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
                return "url(#" + "patternPadre"+d.Nombre +")";
              }
              else{
                return "beige"
              }
          })
          .style('stroke', function(d) {
              if(d.Value==0){
                return "teal";
              }
          });

              // .attr('fill',"url('circulo-naranja.png')")

          d3.selectAll('.nodePadreF')
              .append("defs")
              .append("pattern")
              .attr("id", function(d){
                  return "patternPadre"+d.Nombre
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
              .attr("xlink:href", "circulo-verde.png");

    // Clic y rotar
      function resetClicF(){
        d3.selectAll('.nodoTreeF').attr('opacity','.2');
        d3.selectAll('.nodePadreF text').attr('opacity','.2');
        d3.selectAll('.nodeInternoF text').attr('opacity','.2');
        d3.selectAll('.nodeInternoF text').attr('font-size','11px');
        d3.selectAll('.nodeInternoF text').attr('font-weight','normal');
        d3.selectAll('.nodePadreF text').attr('font-weight','normal');
        d3.selectAll('.nodePadreF text').attr('font-size','11px');
      }
      function opacity1F(){
        d3.selectAll('.nodoTreeF').attr('opacity','1');
        d3.selectAll('.nodePadreF text').attr('opacity','1');
        d3.selectAll('.nodeInternoF text').attr('opacity','1');
        d3.selectAll('.nodeInternoF text').attr('font-size','11px');
        d3.selectAll('.nodeInternoF text').attr('font-weight','normal');
        d3.selectAll('.nodePadreF text').attr('font-weight','normal');
        d3.selectAll('.nodePadreF text').attr('font-size','11px');
      }

      function opacitySoloF(nombre){
        d3.selectAll('.nodoTreeF').attr('opacity','.2');
        d3.selectAll('.nodePadreF text').attr('opacity','.2');
        d3.selectAll('.textAfueraF'+nombre).attr('opacity','1');
        d3.selectAll('.textAfueraF'+nombre).attr('font-size','16px');
        d3.selectAll('.textAfueraF'+nombre).attr('font-weight','bold');
        d3.selectAll('.nodeInternoF text').attr('opacity','.2');
      }
      function opacityTreeF(nombre){
        d3.selectAll('.nodoTreeF').attr('opacity','.2');
        d3.selectAll('#nodePadreF'+nombre+' .nodoTreeF').attr('opacity','1');
        d3.selectAll('.nodePadreF text').attr('opacity','.2');
        d3.selectAll('.textAfueraF'+nombre).attr('opacity','1');
        d3.selectAll('.nodeInternoF text').attr('opacity','.2');
        d3.selectAll('#nodePadreF'+nombre+' .nodoTreeF text').attr('opacity','1');
        d3.selectAll('.textAfueraF'+nombre).attr('font-size','16px');
        d3.selectAll('.textAfueraF'+nombre).attr('font-weight','bold');
      }

    // rotacion, nombreexterno, nombreinterno
      function girarF(rotacion,nombreexterno,nombreinterno){
          resetClicF();

          d3.select(".gChicoF").style("transform", "rotate("+rotacion+"deg)");
          d3.selectAll('#nodePadreF'+nombreexterno+' .nodoTreeF').attr('opacity','1');
          d3.selectAll('#nodePadreF'+nombreexterno+' .nodoTreeF text').attr('opacity','1');
          d3.select(".textAfueraF"+nombreexterno).attr('font-weight','bold');
          d3.select(".textAfueraF"+nombreexterno).attr('opacity','1');
          d3.select(".textAfueraF"+nombreexterno).attr('font-size','16px');
          d3.select(".textAfueraF"+nombreexterno).attr('letter-spacing','1px');

          d3.select(".textInternoF"+nombreinterno).attr('font-weight','bold');
          d3.select(".textInternoF"+nombreinterno).attr('opacity','1');
          d3.select(".textInternoF"+nombreinterno).attr('font-size','16px');
          d3.select(".textInternoF"+nombreinterno).attr('letter-spacing','1px');
      }


      d3.select('#circleBubbleFpoblano').on("mouseover", function(){
        girarF("-101","poblano","ancho");
      });
      d3.select('.textAfueraFpoblano').on("mouseover", function(){
        girarF("-101","poblano","ancho");
      });
      d3.select('#circleBubbleFbola').on("mouseover", function(){
        girarF("12","bola","cascabel");
      });
      d3.select('.textAfueraFbola').on("mouseover", function(){
        girarF("12","bola","cascabel");
      });
      d3.select('#circleBubbleFjalapeño').on("mouseover", function(){
        girarF("108","jalapeño","chipotle");
      });
      d3.select('.textAfueraFjalapeño').on("mouseover", function(){
        girarF("108","jalapeño","chipotle");
      });
      d3.select('#circleBubbleFverdedelnorte').on("mouseover", function(){
        girarF("-128","verdedelnorte","colorado");
      });
      d3.select('.textAfueraFverdedelnorte').on("mouseover", function(){
        girarF("-128","verdedelnorte","colorado");
      });
      d3.select('#circleBubbleFdearbol').on("mouseover", function(){
        girarF("0","dearbol","dearbol");
      });
      d3.select('.textAfueraFdearbol').on("mouseover", function(){
        girarF("0","dearbol","dearbol");
      });
      d3.select('#circleBubbleFmirasol').on("mouseover", function(){
        girarF("49","mirasol","guajillo");
      });
      d3.select('.textAfueraFmirasol').on("mouseover", function(){
        girarF("49","mirasol","guajillo");
      });
      d3.select('#circleBubbleFchilaca').on("mouseover", function(){
        girarF("180","chilaca","pasilla");
      });
      d3.select('.textAfueraFchilaca').on("mouseover", function(){
        girarF("180","chilaca","pasilla");
      });
      d3.select('#circleBubbleFserrano').on("mouseover", function(){
        girarF("-8","serrano","picodepajaro");
      });
      d3.select('.textAfueraFserrano').on("mouseover", function(){
        girarF("-8","serrano","picodepajaro");
      });
      d3.select('#circleBubbleFverdeyucateco').on("mouseover", function(){
        girarF("-2","verdeyucateco","secoyuca");
      });
      d3.select('.textAfueraFverdeyucateco').on("mouseover", function(){
        girarF("-2","verdeyucateco","secoyuca");
      });
      d3.select('#circleBubbleFtabiche').on("mouseover", function(){
        girarF("-46","tabiche","tabiche");
      });
      d3.select('.textAfueraFtabiche').on("mouseover", function(){
        girarF("-46","tabiche","tabiche");
      });
      d3.select('#circleBubbleFpiquinfresco').on("mouseover", function(){
        girarF("-46","piquinfresco","piquin");
      });
      d3.select('.textAfueraFpiquinfresco').on("mouseover", function(){
        girarF("-46","piquinfresco","piquin");
      });

      d3.select('#circleBubbleFcosteño').on("mouseover", function(){
        girarF("-5","costeño","costeño");
      });
      d3.select('.textAfueraFcosteño').on("mouseover", function(){
        girarF("-5","costeño","costeño");
      });

      d3.select('#circleBubbleFcomapeño').on("mouseover", function(){
        girarF("-4","comapeño","comapeño");
      });
      d3.select('.textAfueraFcomapeño').on("mouseover", function(){
        girarF("-4","comapeño","comapeño");
      });
     
      d3.selectAll('.circleBubbleF').on("mouseout", function(){
        opacity1F()
      });
      d3.selectAll('.nodePadreF text').on("mouseout", function(){
        opacity1F()
      });

      d3.select(".textAfueraFverdedelnorte").html("<tspan x='0' dy='0em'>Verde del</tspan><tspan x='0' dy='1.2em'>norte</tspan>");
      d3.select(".textAfueraFverdeyucateco").html("<tspan x='0' dy='0em'>Verde</tspan><tspan x='0' dy='1.2em'>yucateco</tspan>");
      d3.select(".textAfueraFpicodepaloma").html("<tspan x='0' dy='0em'>Pico</tspan><tspan x='0' dy='1.2em'>de paloma</tspan>");

    // opacidad para los que no tienen par
      d3.select('#circleBubbleFamarillento').on("mouseover", function(){
        opacitySoloF("amarillento")
      });
      d3.select('#circleBubbleFatekayote').on("mouseover", function(){
        opacitySoloF("atekayote")
      });
      d3.select('#circleBubbleFcera').on("mouseover", function(){
        opacitySoloF("cera")
      });
      d3.select('#circleBubbleFcuerudo').on("mouseover", function(){
        opacitySoloF("cuerudo")
      });
      d3.select('#circleBubbleFdeagua').on("mouseover", function(){
        opacitySoloF("deagua")
      });
      d3.select('#circleBubbleFdulce').on("mouseover", function(){
        opacitySoloF("dulce")
      });
      d3.select('#circleBubbleFhabanero').on("mouseover", function(){
        opacitySoloF("habanero")
      });
      d3.select('#circleBubbleFmilkahual').on("mouseover", function(){
        opacitySoloF("milkahual")
      });
      d3.select('#circleBubbleFpastor').on("mouseover", function(){
        opacitySoloF("pastor")
      });
      d3.select('#circleBubbleFpicodepaloma').on("mouseover", function(){
        opacitySoloF("picodepaloma")
      });
      d3.select('#circleBubbleFsimojovel').on("mouseover", function(){
        opacitySoloF("simojovel")
      });
      d3.select('#circleBubbleFsolterito').on("mouseover", function(){
        opacitySoloF("solterito")
      });
      d3.select('#circleBubbleFtuxta').on("mouseover", function(){
        opacitySoloF("tuxta")
      });

    // opacity en hover text
      d3.select('.textAfueraFamarillento').on("mouseover", function(){
        opacitySoloF("amarillento")
      });
      
      d3.select('.textAfueraFatekayote').on("mouseover", function(){
        opacitySoloF("atekayote")
      });
      d3.select('.textAfueraFcera').on("mouseover", function(){
        opacitySoloF("cera")
      });
      d3.select('.textAfueraFcuerudo').on("mouseover", function(){
        opacitySoloF("cuerudo")
      });
      d3.select('.textAfueraFdeagua').on("mouseover", function(){
        opacitySoloF("deagua")
      });
      d3.select('.textAfueraFdulce').on("mouseover", function(){
        opacitySoloF("dulce")
      });
      d3.select('.textAfueraFhabanero').on("mouseover", function(){
        opacitySoloF("habanero")
      });
      d3.select('.textAfueraFmilkahual').on("mouseover", function(){
        opacitySoloF("milkahual")
      });
      d3.select('.textAfueraFpastor').on("mouseover", function(){
        opacitySoloF("pastor")
      });
      d3.select('.textAfueraFpicodepaloma').on("mouseover", function(){
        opacitySoloF("picodepaloma")
      });
      d3.select('.textAfueraFsimojovel').on("mouseover", function(){
        opacitySoloF("simojovel")
      });
      d3.select('.textAfueraFsolterito').on("mouseover", function(){
        opacitySoloF("solterito")
      });
      d3.select('.textAfueraFtuxta').on("mouseover", function(){
        opacitySoloF("tuxta")
      });
      

    // Opacity para tree
      d3.select('#circleBubbleFamaxito').on("mouseover", function(){
        opacityTreeF("amaxito")
      });
      d3.select('#circleBubbleFbravo').on("mouseover", function(){
        opacityTreeF("bravo")
      });
      d3.select('#circleBubbleFcaribe').on("mouseover", function(){
        opacityTreeF("caribe")
      });
      d3.select('#circleBubbleFcarricillo').on("mouseover", function(){
        opacityTreeF("carricillo")
      });
     
      d3.select('#circleBubbleFchimborote').on("mouseover", function(){
        opacityTreeF("chimborote")
      });
      d3.select('#circleBubbleFdechorro').on("mouseover", function(){
        opacityTreeF("dechorro")
      });
      d3.select('#circleBubbleFmanzano').on("mouseover", function(){
        opacityTreeF("manzano")
      });
     
      d3.select('#circleBubbleFpiquin').on("mouseover", function(){
        opacityTreeF("piquin")
      });
     
      
      d3.select('#circleBubbleFxcatik').on("mouseover", function(){
        opacityTreeF("xcatik")
      });


    // Opacity tree en texto
      d3.select('.textAfueraFamaxito').on("mouseover", function(){
        opacityTreeF("amaxito")
      });
      d3.select('.textAfueraFbravo').on("mouseover", function(){
        opacityTreeF("bravo")
      });
      d3.select('.textAfueraFcaribe').on("mouseover", function(){
        opacityTreeF("caribe")
      });
      d3.select('.textAfueraFcarricillo').on("mouseover", function(){
        opacityTreeF("carricillo")
      });
      
      d3.select('.textAfueraFchimborote').on("mouseover", function(){
        opacityTreeF("chimborote")
      });
      d3.select('.textAfueraFdechorro').on("mouseover", function(){
        opacityTreeF("dechorro")
      });
      d3.select('.textAfueraFmanzano').on("mouseover", function(){
        opacityTreeF("manzano")
      });
    
      d3.select('.textAfueraFpiquin').on("mouseover", function(){
        opacityTreeF("piquin")
      });
      
     
      d3.select('.textAfueraFxcatik').on("mouseover", function(){
        opacityTreeF("xcatik")
      });



  });










  


