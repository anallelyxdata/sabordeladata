// Some constants controlling the graph appearance
const PADDING_BUBBLE_D = 10 // distance between edge end and bubble_D
const PADDING_LABEL_D = 30 // distance between edge end and engineer name
const PADDING_LABEL_CERO_D = 6 // distance between edge end and engineer name
const BUBBLE_SIZE_MIN_D = 4
const BUBBLE_SIZE_MAX_D = 20

var diameter_D = 900,
    radiusN_D = diameter_D / 2,
    innerRadius_D = radiusN_D - 200; // between center and edge end

// The 'cluster' function takes 1 argument as input. It also has methods (??) like cluster.separation(), cluster.size() and cluster.nodeSize()
var cluster_D = d3.cluster()
    .size([360, innerRadius_D])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : a.parent.parent == b.parent.parent ? 2 : 9); });
    // .separation(function(){
    //     return 5;
    // });

var line_D = d3.radialLine()
    .curve(d3.curveBundle.beta(.25))
    .radius(function (d) { return d.y; })
    .angle(function (d) { return d.x / 180 * Math.PI; });

// d3.select("#graficaMaizDesktop")

var svg_D = d3.select("#graficaMaizDesktop").append("svg")
    // .style("width", diameter_D)
    // .style("height", diameter_D+80)
    // .call(responsivefy)
    // .attr('stroke','none')
    // .call(responsivefy)
    .attr("viewBox", '0 0 1035 1035')
    .append("g")
    .attr('stroke','none')
    .attr("transform", "translate(" + "420" + "," + "440" + ")");
svg_D.append("image")
          .attr('xlink:href', 'img/razasMaiz.png')
          .attr('class','margenDesktop')
          .attr('width', diameter_D+30)
          .attr('height', diameter_D+30)
          .attr("x", 32)
          .attr("y", 28);
svg_D.append("image")
          .attr('xlink:href', 'img/maiz220.png')
          .attr('class','margenDesktop maiz-icon')
          .attr('width', diameter_D/5.5)
          .attr('height', diameter_D/5.5)
          .attr("x", 15)
          .attr("y", diameter_D/2.3);

function responsivefy(svg) {
  // container will be the DOM element
  // that the svg is appended to
  // we then measure the container
  // and find its aspect ratio
  const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style('width'), 10),
      height = parseInt(svg.style('height'), 10),
      aspect = width / height;
 
  // set viewBox attribute to the initial size
  // control scaling with preserveAspectRatio
  // resize svg on inital page load
  svg_D.attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMid')
      .call(resize);
 
  // add a listener so the chart will be resized
  // when the window resizes
  // multiple listeners for the same event type
  // requires a namespace, i.e., 'click.foo'
  // api docs: https://goo.gl/F3ZCFr
  d3.select(window).on(
      'resize.' + container.attr('id'), 
      resize
  );
 
  // this is the code that resizes the chart
  // it will be called on load
  // and in response to window resizes
  // gets the width of the container
  // and resizes the svg to fill it
  // while maintaining a consistent aspect ratio
  function resize() {
      const w = parseInt(container.style('width'));
      svg_D.attr('width', w);
      svg_D.attr('height', Math.round(w / aspect));
  }
}


const arcGenerator1 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(.45)
    .endAngle(.32);
const arcGenerator12 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(.70)
    .endAngle(.45);
const arcGenerator2 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(.70)
    .endAngle(.55);
const arcGenerator21 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(.87)
    .endAngle(.70);
const arcGenerator3 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(1)
    .endAngle(.87);
const arcGenerator31 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(1.2)
    .endAngle(1);
const arcGenerator32 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(1.57)
    .endAngle(1.2);
const arcGenerator4 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(1.8)
    .endAngle(1.57);
const arcGenerator41 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(2)
    .endAngle(1.8);
const arcGenerator42 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(2.23)
    .endAngle(2);
const arcGenerator5 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(2.6)
    .endAngle(2.23);
const arcGenerator51 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(2.7)
    .endAngle(2.6);
const arcGenerator52 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(2.84)
    .endAngle(2.7);
const arcGenerator6 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(3.2)
    .endAngle(2.84);
const arcGenerator61 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(3.45)
    .endAngle(3.2);
const arcGenerator62 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(3.69)
    .endAngle(3.45);
const arcGenerator7 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(3.72)
    .endAngle(3.69);
const arcGenerator71 = d3.arc()
    .outerRadius(400)
    .innerRadius(380)
    .startAngle(3.88)
    .endAngle(3.72);

    svg_D.append("path")
        .attr('d',arcGenerator1())
        .attr('class','arc arcTropicales')
        .attr("fill", "url(#verde)");
    svg_D.append("path")
        .attr('d',arcGenerator12())
        .attr('class','arc arcTropicales2')
        .attr("fill", "url(#verde)");

    svg_D.append("path")
        .attr('d',arcGenerator2())
        .attr('class','arc arcSierra')
        .attr("fill", "url(#verdeazul)");
    svg_D.append("path")
        .attr('d',arcGenerator21())
        .attr('class','arc arcSierra1')
        .attr("fill", "url(#verdeazul)");
    svg_D.append("path")
        .attr('d',arcGenerator3())
        .attr('class','arc arcOcho')
        .attr("fill", "url(#azul)");
    svg_D.append("path")
        .attr('d',arcGenerator31())
        .attr('class','arc arcOcho1')
        .attr("fill", "url(#azul)");
    svg_D.append("path")
        .attr('d',arcGenerator32())
        .attr('class','arc arcOcho2')
        .attr("fill", "url(#azul)");
    svg_D.append("path")
        .attr('d',arcGenerator4())
        .attr('class','arc arcTardia')
        .attr("fill", "url(#morado)");
    svg_D.append("path")
        .attr('d',arcGenerator41())
        .attr('class','arc arcTardia1')
        .attr("fill", "url(#morado)");
    svg_D.append("path")
        .attr('d',arcGenerator42())
        .attr('class','arc arcTardia2')
        .attr("fill", "url(#morado)");
    svg_D.append("path")
        .attr('d',arcGenerator5())
        .attr('class','arc arcDentados')
        .attr("fill", "url(#rosa)");
    svg_D.append("path")
        .attr('d',arcGenerator51())
        .attr('class','arc arcDentados1')
        .attr("fill", "url(#rosa)");
    svg_D.append("path")
        .attr('d',arcGenerator52())
        .attr('class','arc arcDentados2')
        .attr("fill", "url(#rosa)");
    svg_D.append("path")
        .attr('d',arcGenerator6())
        .attr('class','arc arcConico')
        .attr("fill", "url(#naranja)");
    svg_D.append("path")
        .attr('d',arcGenerator61())
        .attr('class','arc arcConico1')
        .attr("fill", "url(#naranja)");
    svg_D.append("path")
        .attr('d',arcGenerator62())
        .attr('class','arc arcConico2')
        .attr("fill", "url(#naranja)");
    svg_D.append("path")
        .attr('d',arcGenerator7())
        .attr('class','arc arcChapalote')
        .attr("fill", "url(#amarillo)");

    svg_D.append("path")
        .attr('d',arcGenerator71())
        .attr('class','arc arcChapalote1')
        .attr("fill", "url(#amarillo)");

    // fondos para Arcs
        svg_D.append('pattern')
            .attr('id', 'verde')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 350)
            .attr('height', 50)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-verde.png')
            .attr("width", 320)
            .attr("height", 50)

        svg_D.append('pattern')
            .attr('id', 'verdeazul')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 150)
            .attr('height', 200)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-verdeazul.png')
            .attr("width", 350)
            .attr("height", 200)

        svg_D.append('pattern')
            .attr('id', 'azul')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 480)
            .attr('height', 70)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-azul.png')
            .attr("width", 480)
            .attr("height", 80)

        svg_D.append('pattern')
            .attr('id', 'morado')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 300)
            .attr('height', 150)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-morado.png')
            .attr("width", 100)
            .attr("height", 200)

        svg_D.append('pattern')
            .attr('id', 'rosa')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 200)
            .attr('height', 50)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-rosa.png')
            .attr("width", 270)
            .attr("height", 120)

        svg_D.append('pattern')
            .attr('id', 'naranja')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 320)
            .attr('height', 250)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-naranja.png')
            .attr("width", 320)
            .attr("height", 200)

        svg_D.append('pattern')
            .attr('id', 'amarillo')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 200)
            .attr('height', 200)
          .append('svg:image')
            .attr('.link_D:href', './img/fondo-amarillo.png')
            .attr("width", 400)
            .attr("height", 200)


    d3.selectAll('.arcTropicales, .arcTropicales2')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(52),.link_D:nth-child(27),.link_D:nth-child(81),.link_D:nth-child(106),.link_D:nth-child(140)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(52),.link_D:nth-child(27),.link_D:nth-child(81),.link_D:nth-child(106),.link_D:nth-child(140)').style('stroke-width','1.5px')
            d3.selectAll('.link_D:nth-child(51),.link_D:nth-child(26),.link_D:nth-child(80),.link_D:nth-child(101),.link_D:nth-child(124)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(51),.link_D:nth-child(26),.link_D:nth-child(80),.link_D:nth-child(101),.link_D:nth-child(124)').style('stroke-width','1.5px')
            d3.selectAll('#label_DConejo, #label_DNal-Tel, #label_DRatón, #label_DZapalotechico, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DFrituras, #label_DGalletas, #label_DBebidas, #label_DForraje').style('opacity','1')
            d3.selectAll('#label_DConejo, #label_DNal-Tel, #label_DRatón, #label_DZapalotechico').style('font-size','12px')
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DFrituras, #label_DGalletas, #label_DBebidas, #label_DForraje').style('font-size','16px')
        })

    d3.selectAll('.arcSierra, .arcSierra1')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(112),.link_D:nth-child(130),.link_D:nth-child(10),.link_D:nth-child(49),.link_D:nth-child(65),.link_D:nth-child(79),.link_D:nth-child(104),.link_D:nth-child(123),.link_D:nth-child(126),.link_D:nth-child(142),.link_D:nth-child(50),.link_D:nth-child(105),.link_D:nth-child(48),.link_D:nth-child(25),.link_D:nth-child(64),.link_D:nth-child(78),.link_D:nth-child(122),.link_D:nth-child(125)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(112),.link_D:nth-child(130),.link_D:nth-child(10),.link_D:nth-child(50),.link_D:nth-child(105),.link_D:nth-child(49),.link_D:nth-child(65),.link_D:nth-child(79),.link_D:nth-child(104),.link_D:nth-child(123),.link_D:nth-child(126),.link_D:nth-child(142),.link_D:nth-child(48),.link_D:nth-child(25),.link_D:nth-child(64),.link_D:nth-child(78),.link_D:nth-child(122),.link_D:nth-child(125)').style('stroke-width','1.5px')

            d3.selectAll('#label_DAmarilloDeMontana, #label_DCristalinoChihuahua, #label_DGordo, #label_DGalletas, #label_DHarina,#label_DCristalinoChihuahua, #label_DPozole,#label_DComplejoSerrano,#label_DApachito,#label_DAzul,#label_DElotes, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DAmarilloDeMontana, #label_DCristalinoChihuahua, #label_DGordo,#label_DCristalinoChihuahua,#label_DComplejoSerrano,#label_DApachito,#label_DAzul').style('font-size','12px')
            d3.selectAll('#label_DGalletas, #label_DHarina,#label_DPozole,#label_DElotes, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DFrituras, #label_DBebidas, #label_DPigmentos').style('font-size','16px')
        })

    d3.selectAll('.arcOcho, .arcOcho1, .arcOcho2')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(2),.link_D:nth-child(74),.link_D:nth-child(3),.link_D:nth-child(75),.link_D:nth-child(109),.link_D:nth-child(118),.link_D:nth-child(40),.link_D:nth-child(119),.link_D:nth-child(4),.link_D:nth-child(21),.link_D:nth-child(60),.link_D:nth-child(76),.link_D:nth-child(5),.link_D:nth-child(6),.link_D:nth-child(41),.link_D:nth-child(77),.link_D:nth-child(110),.link_D:nth-child(7),.link_D:nth-child(22),.link_D:nth-child(42),.link_D:nth-child(111),.link_D:nth-child(137),.link_D:nth-child(8),.link_D:nth-child(138),.link_D:nth-child(43),.link_D:nth-child(61),.link_D:nth-child(23),.link_D:nth-child(44),.link_D:nth-child(120),.link_D:nth-child(9),.link_D:nth-child(24),.link_D:nth-child(45),.link_D:nth-child(121),.link_D:nth-child(46),.link_D:nth-child(62),.link_D:nth-child(103),.link_D:nth-child(47),.link_D:nth-child(63),.link_D:nth-child(139)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(2),.link_D:nth-child(74),.link_D:nth-child(3),.link_D:nth-child(75),.link_D:nth-child(109),.link_D:nth-child(118),.link_D:nth-child(40),.link_D:nth-child(119),.link_D:nth-child(4),.link_D:nth-child(21),.link_D:nth-child(60),.link_D:nth-child(76),.link_D:nth-child(5),.link_D:nth-child(6),.link_D:nth-child(41),.link_D:nth-child(77),.link_D:nth-child(110),.link_D:nth-child(7),.link_D:nth-child(22),.link_D:nth-child(42),.link_D:nth-child(111),.link_D:nth-child(137),.link_D:nth-child(8),.link_D:nth-child(138),.link_D:nth-child(43),.link_D:nth-child(61),.link_D:nth-child(23),.link_D:nth-child(44),.link_D:nth-child(120),.link_D:nth-child(9),.link_D:nth-child(24),.link_D:nth-child(45),.link_D:nth-child(121),.link_D:nth-child(46),.link_D:nth-child(62),.link_D:nth-child(103),.link_D:nth-child(47),.link_D:nth-child(63),.link_D:nth-child(139)').style('stroke-width','1.5px')

            d3.selectAll('#label_DPozole, #label_DAtole, #label_DGalletas, #label_DElotes, #label_DTortilla, #label_DBebidas, #label_DPinole, #label_DForraje, #label_DFrituras ,#label_DAncho,#label_DBlando,#label_DBofo,#label_DBolita,#label_DElotesOccidentales,#label_DHarinosoDeOcho,#label_DJala,#label_DOnaveño,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DTabloncilloPerla,#label_DZamoranoAmarillo').style('opacity', '1');
            d3.selectAll('#label_DAncho,#label_DBlando,#label_DBofo,#label_DBolita,#label_DElotesOccidentales,#label_DHarinosoDeOcho,#label_DJala,#label_DOnaveño,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DTabloncilloPerla,#label_DZamoranoAmarillo').style('font-size','12px')
            d3.selectAll('#label_DPozole, #label_DAtole, #label_DGalletas, #label_DElotes, #label_DTortilla, #label_DBebidas, #label_DPinole, #label_DForraje, #label_DFrituras').style('font-size','16px')
        })
    d3.selectAll('.arcTardia, .arcTardia1, .arcTardia2')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(18),.link_D:nth-child(36),.link_D:nth-child(71),.link_D:nth-child(116),.link_D:nth-child(135),.link_D:nth-child(19),.link_D:nth-child(37),.link_D:nth-child(72),.link_D:nth-child(85),.link_D:nth-child(38),.link_D:nth-child(20),.link_D:nth-child(39),.link_D:nth-child(73),.link_D:nth-child(86),.link_D:nth-child(117),.link_D:nth-child(131),.link_D:nth-child(136)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(18),.link_D:nth-child(36),.link_D:nth-child(71),.link_D:nth-child(116),.link_D:nth-child(135),.link_D:nth-child(19),.link_D:nth-child(37),.link_D:nth-child(72),.link_D:nth-child(85),.link_D:nth-child(38),.link_D:nth-child(20),.link_D:nth-child(39),.link_D:nth-child(73),.link_D:nth-child(86),.link_D:nth-child(117),.link_D:nth-child(131),.link_D:nth-child(136)').style('stroke-width','1.5px')

            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DBebidas,#label_DCombustible, #label_DForraje,#label_DTamales,#label_DDzit-Bacal,#label_DComiteco,#label_DCoscompatepec,#label_DMixteño,#label_DMotozinteco,#label_DNegroChimaltenango,#label_DOlotillo,#label_DOlotón,#label_DQuicheño,#label_DSerrano,#label_DSerranoMixe,#label_DTehua').style('opacity', '1');
            d3.selectAll('#label_DDzit-Bacal,#label_DComiteco,#label_DCoscompatepec,#label_DMixteño,#label_DMotozinteco,#label_DNegroChimaltenango,#label_DOlotillo,#label_DOlotón,#label_DQuicheño,#label_DSerrano,#label_DSerranoMixe,#label_DTehua').style('font-size','12px')
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DBebidas,#label_DCombustible, #label_DForraje,#label_DTamales').style('font-size','16px')
        })
    d3.selectAll('.arcDentados, .arcDentados1, .arcDentados2')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(15),.link_D:nth-child(32),.link_D:nth-child(69),.link_D:nth-child(83),.link_D:nth-child(113),.link_D:nth-child(33),.link_D:nth-child(16),.link_D:nth-child(34),.link_D:nth-child(84),.link_D:nth-child(114),.link_D:nth-child(35),.link_D:nth-child(129),.link_D:nth-child(17),.link_D:nth-child(70),.link_D:nth-child(102),.link_D:nth-child(115)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(15),.link_D:nth-child(32),.link_D:nth-child(69),.link_D:nth-child(83),.link_D:nth-child(113),.link_D:nth-child(33),.link_D:nth-child(16),.link_D:nth-child(34),.link_D:nth-child(84),.link_D:nth-child(114),.link_D:nth-child(35),.link_D:nth-child(129),.link_D:nth-child(17),.link_D:nth-child(70),.link_D:nth-child(102),.link_D:nth-child(115)').style('stroke-width','1.5px')

            d3.selectAll('#label_DCelaya,#label_DChiquito,#label_DChiopaneco,#label_DCubanoAmarillo,#label_DNal-TelAltura,#label_DPepitilla,#label_DTepecintle,#label_DTuxpeño,#label_DTuxpeñonorteño,#label_DVerdeño,#label_DZapalotegrande,#label_DElotes, #label_DTortilla, #label_DAtole, #label_DTepecintle,#label_DBebidas, #label_DForraje,#label_DTamales, #label_DHarina, #label_DFrituras').style('opacity', '1');
            d3.selectAll('#label_DCelaya,#label_DChiquito,#label_DChiopaneco,#label_DCubanoAmarillo,#label_DNal-TelAltura,#label_DPepitilla,#label_DTepecintle,#label_DTuxpeño,#label_DTuxpeñonorteño,#label_DVerdeño,#label_DZapalotegrande').style('font-size','12px')
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole,#label_DBebidas, #label_DForraje,#label_DTamales, #label_DHarina, #label_DFrituras').style('font-size','16px')
        })

    d3.selectAll('.arcConico, .arcConico1, .arcConico2')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(28),.link_D:nth-child(90),.link_D:nth-child(97),.link_D:nth-child(1),.link_D:nth-child(12),.link_D:nth-child(56),.link_D:nth-child(67).link_D:nth-child(108),.link_D:nth-child(127),.link_D:nth-child(29),.link_D:nth-child(57),.link_D:nth-child(82),.link_D:nth-child(91),.link_D:nth-child(133),.link_D:nth-child(13),.link_D:nth-child(30),.link_D:nth-child(92),.link_D:nth-child(134),.link_D:nth-child(14),.link_D:nth-child(58),.link_D:nth-child(89),.link_D:nth-child(59),.link_D:nth-child(68),.link_D:nth-child(93),.link_D:nth-child(141),.link_D:nth-child(31),.link_D:nth-child(94),.link_D:nth-child(98),.link_D:nth-child(99),.link_D:nth-child(100),.link_D:nth-child(128)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(28),.link_D:nth-child(90),.link_D:nth-child(97),.link_D:nth-child(1),.link_D:nth-child(12),.link_D:nth-child(56),.link_D:nth-child(67).link_D:nth-child(108),.link_D:nth-child(127),.link_D:nth-child(29),.link_D:nth-child(57),.link_D:nth-child(82),.link_D:nth-child(91),.link_D:nth-child(133),.link_D:nth-child(13),.link_D:nth-child(30),.link_D:nth-child(92),.link_D:nth-child(134),.link_D:nth-child(14),.link_D:nth-child(58),.link_D:nth-child(89),.link_D:nth-child(59),.link_D:nth-child(68),.link_D:nth-child(93),.link_D:nth-child(141),.link_D:nth-child(31),.link_D:nth-child(94),.link_D:nth-child(98),.link_D:nth-child(99),.link_D:nth-child(100),.link_D:nth-child(128)').style('stroke-width','1.5px')

            d3.selectAll('#label_DAntojitos, #label_DPalomitas,#label_DPozole, #label_DElotes, #label_DPinole, #label_DHarina,#label_DTortilla,#label_DTamales,#label_DForraje,#label_DEsquites,#label_DPigmentos, #label_DAtole, #label_DPalomitas,#label_DHarina,#label_DArrocillo,#label_DCacahuacintle,#label_DChalqueño,#label_DConico,#label_Dmaiznorteño,#label_DDulce,#label_DElotesconicos,#label_DMixteco,#label_DMushito,#label_DMushitoMichoacan,#label_DNegrito,#label_DPalomeroChihuahua,#label_DPalomeroJalisco,#label_DPalomeñoToluqueño,#label_DUruapeño').style('opacity', '1');
            d3.selectAll('#label_DArrocillo,#label_DCacahuacintle,#label_DChalqueño,#label_DConico,#label_Dmaiznorteño,#label_DDulce,#label_DElotesconicos,#label_DMixteco,#label_DMushito,#label_DNegrito,#label_DPalomeroJalisco,#label_DPalomeñoToluqueño,#label_DUruapeño').style('font-size','12px')
            d3.selectAll('#label_DAntojitos, #label_DPalomitas,#label_DPozole, #label_DElotes, #label_DPinole, #label_DHarina,#label_DTortilla,#label_DTamales,#label_DForraje,#label_DEsquites,#label_DPigmentos, #label_DAtole, #label_DPalomitas,#label_DHarina').style('font-size','16px')
        })

    d3.selectAll('.arcChapalote, .arcChapalote1')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(11),.link_D:nth-child(53),.link_D:nth-child(87),.link_D:nth-child(132),.link_D:nth-child(54),.link_D:nth-child(66),.link_D:nth-child(88),.link_D:nth-child(95),.link_D:nth-child(107),.link_D:nth-child(55),.link_D:nth-child(96)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(11),.link_D:nth-child(53),.link_D:nth-child(87),.link_D:nth-child(132),.link_D:nth-child(54),.link_D:nth-child(66),.link_D:nth-child(88),.link_D:nth-child(95),.link_D:nth-child(107),.link_D:nth-child(55),.link_D:nth-child(96)').style('stroke-width','1.5px')

            d3.selectAll('#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje,#label_DAtole,#label_DEsquites,#label_DPalomitas,#label_DGalletas,#label_DDulcilloNoroeste,#label_DEloteroSinaloa,#label_DReventador').style('opacity', '1');
            d3.selectAll('#label_DDulcilloNoroeste,#label_DEloteroSinaloa,#label_DReventador').style('font-size','12px')
            d3.selectAll('#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje,#label_DAtole,#label_DEsquites,#label_DPalomitas,#label_DGalletas').style('font-size','16px')
        })

    d3.selectAll('.arc')
        .on('mouseout', function (l) {
            d3.selectAll('.link_D').style('opacity','0.2')
            d3.selectAll('.label_D').style('opacity','1')
            d3.selectAll('.link_D').style('stroke-width','0.5px')
            d3.selectAll('.label_D').style('font-size','10px')
            d3.selectAll('#label_DPozole, #label_DPinole, #label_DTamales, #label_DEsquites,#label_DAntojitos, #label_DCombustible, #label_DPigmentos, #label_DHarina,#label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DFrituras, #label_DGalletas, #label_DBebidas, #label_DForraje').style('font-size','12.5px')
        })

var link_D = svg_D.append("g").selectAll(".link_D"),
    label_D = svg_D.append("g").selectAll(".label_D"),
    bubble_D = svg_D.append("g").selectAll(".bubble_D");

// Add a scale for bubble_D size
var bubbleSizeScale_D = d3.scaleLinear()
    .domain([0, 100])
    .range([BUBBLE_SIZE_MIN_D, BUBBLE_SIZE_MAX_D]);

// Scale for the bubble size
d3.json("cluster.json", function (error, hierarchicalData) {

    // If wanna see your data
    // console.log(hierarchicalData)

    // Reformat the data
    var root_D = packageHierarchy_D(hierarchicalData)
        //debugger;
        .sum(function (d) { return d.size; });
    // console.log(root_D)

    // Build an object that gives feature of each leaves
    cluster_D(root_D);
    leaves_D = root_D.leaves()
    // console.log(leaves_D.length)

    // leaves_D is an array of Objects. 1 item = one leaf. Provides x and y for leaf position in the svg. Also gives details about its parent.
    link_D = link_D
        .data(packageImports_D(leaves_D))
        .enter().append("path")
        .each(function (d) { d.source = d[0], d.target = d[d.length - 1]; })
        .attr("class", "link_D")
        .attr("d", line_D)
        .attr("fill", "none")
        .attr("stroke-width", ".7px")

    label_D = label_D
        .data(leaves_D)
        .enter().append("text")
        .attr("class", "label_D")
        .attr("stroke", "none")
        .attr('id',function (d) { return "label_D"+d.data.key; })
        .attr("dy", "0.31em")
        // .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_D) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
        .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
        .text(function (d) { return d.data.visible; });

    // Aqui poner el scale -1
    d3.selectAll('.label_D')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D) + ",0)" + ("rotate(0)"); });
    d3.selectAll('.label_D:nth-child(n+50)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D + 20) + ",0)" + ("rotate(0)"); })
        .attr("text-anchor","start");
    d3.selectAll('.label_D:nth-child(n+88)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D + 22) + ",0)" + ("rotate(0)"); })
        .attr("text-anchor","start");


    d3.selectAll('.label_D:nth-child(-n+69)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D ) + ",0)" + ("rotate(180)"); })
        .attr("text-anchor","end");

    // d3.selectAll('.label_D:nth-child(-n+37)')
    //     .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D) + ",0)" + ("rotate(180)"); })
    //     .attr("text-anchor","end");

    // d3.selectAll('.label_D:nth-child(n+88)')
    //     .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D + 22) + ",0)" + ("rotate(0)"); })
    //     .attr("text-anchor","end");

    // d3.selectAll('.label_D:nth-child(n+51)')
    //     .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO_D) + ",0)" + ("rotate(0)"); })
    //     .attr("text-anchor","start");



    


    bubble_D = bubble_D
        .data(leaves_D)
        .enter().append("circle")
        .attr("class", "bubble_D")
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_BUBBLE_D) + ",0)" })
        .attr('r', d => bubbleSizeScale_D(d.value))
        .attr('id',function (d) { return "bubble_D"+d.data.key; })
        // .attr('stroke', 'teal')
        // .attr('fill', 'cyan')
        // .style('opacity', .2)
    d3.selectAll('.bubble_D, .label_D')
         .on('mouseout', function (d) {
            link_D.style('opacity','1')
            link_D.style('stroke-width','.7px')
            d3.selectAll('.label_D').style('opacity','1')
            d3.selectAll('.bubble_D').style('opacity','1')
            d3.selectAll('.label_D').style('font-weight','normal')
            d3.selectAll('.label_D:nth-of-type(n+1)').style('font-size','10px')
            d3.selectAll('.label_D:nth-of-type(n+70)').style('font-size','12.5px')
            d3.selectAll('.label_D').style('letter-spacing', '.5px')
        });
    d3.selectAll('#bubble_DPozole, #label_DPozole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DPozole').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+11)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+10)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DPozole, #label_DCacahuacintle, #label_DAncho, #label_DBofo, #label_DElotesOccidentales, #label_DHarinosoDeOcho, #label_DJala, #label_DOnaveño, #label_DTabloncillo, #label_DCristalinoChihuahua').style('opacity','1')
            // d3.selectAll('#label_DCacahuacintle, #label_DAncho, #label_DBofo, #label_DElotesOccidentales, #label_DHarinosoDeOcho, #label_DJala, #label_DOnaveño, #label_DTabloncillo, #label_DCristalinoChihuahua').style('font-weight','normal')
            d3.selectAll('#label_DCacahuacintle, #label_DAncho, #label_DBofo, #label_DElotesOccidentales, #label_DHarinosoDeOcho, #label_DJala, #label_DOnaveño, #label_DTabloncillo, #label_DCristalinoChihuahua').style('font-size','12.5px')
            // d3.selectAll('#label_DPozole').style('letter-spacing','1.5px')
            d3.selectAll('#label_DPozole').style('font-size','16px')

        })
        
    d3.selectAll('#bubble_DElotes, #label_DElotes')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DElotes').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+28)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+10)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+28)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DElotes, #label_DDulcilloNoroeste, #label_DCacahuacintle, #label_DConico, #label_DDulce, #label_DPepitilla, #label_DZapalotegrande, #label_DComiteco, #label_DCoscompatepec, #label_DOlotón, #label_DElotesOccidentales, #label_DJala, #label_DTablillaDeOcho, #label_DTabloncillo, #label_DApachito, #label_DNal-Tel, #label_DZapalotechico').style('opacity','1')
            // d3.selectAll('#label_DElotes, #label_DDulcilloNoroeste, #label_DCacahuacintle, #label_DConico, #label_DDulce, #label_DPepitilla, #label_DZapalotegrande, #label_DComiteco, #label_DCoscompatepec, #label_DOlotón, #label_DElotesOccidentales, #label_DJala, #label_DTablillaDeOcho, #label_DTabloncillo, #label_DApachito, #label_DNal-Tel, #label_DZapalotechico').style('font-weight','normal')
            d3.selectAll('#label_DElotes, #label_DDulcilloNoroeste, #label_DCacahuacintle, #label_DConico, #label_DDulce, #label_DPepitilla, #label_DZapalotegrande, #label_DComiteco, #label_DCoscompatepec, #label_DOlotón, #label_DElotesOccidentales, #label_DJala, #label_DTablillaDeOcho, #label_DTabloncillo, #label_DApachito, #label_DNal-Tel, #label_DZapalotechico').style('font-size','12.5px')
            // d3.selectAll('#label_DElotes').style('letter-spacing','1.5px')
            d3.selectAll('#label_DElotes').style('font-size','16px')
        })
        
    d3.selectAll('#bubble_DTortilla, #label_DTortilla')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DTortilla').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+52)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+28)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+52)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DTortilla, #label_DChalqueño, #label_DConico, #label_DMushito,#label_DPepitilla, #label_DPepitilla, #label_DTuxpeño, #label_DTuxpeñonorteño,#label_DComiteco, #label_DCoscompatepec,#label_DOlotillo,#label_DOlotón,#label_DBolita,#label_DHarinosoDeOcho,#label_DJala,#label_DOnaveño,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DComplejoSerrano,#label_DNal-Tel').style('opacity','1')
            // d3.selectAll('#label_DTortilla, #label_DChalqueño, #label_DConico, #label_DMushito,#label_DPepitilla, #label_DPepitilla, #label_DTuxpeño, #label_DTuxpeñonorteño,#label_DComiteco, #label_DCoscompatepec,#label_DOlotillo,#label_DOlotón,#label_DBolita,#label_DHarinosoDeOcho,#label_DJala,#label_DOnaveño,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DComplejoSerrano,#label_DNal-Tel').style('font-weight','normal')
            d3.selectAll('#label_DTortilla, #label_DChalqueño, #label_DConico, #label_DMushito,#label_DPepitilla, #label_DPepitilla, #label_DTuxpeño, #label_DTuxpeñonorteño,#label_DComiteco, #label_DCoscompatepec,#label_DOlotillo,#label_DOlotón,#label_DBolita,#label_DHarinosoDeOcho,#label_DJala,#label_DOnaveño,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DComplejoSerrano,#label_DNal-Tel').style('font-size','12.5px')
            // d3.selectAll('#label_DTortilla').style('letter-spacing','1.5px')
            d3.selectAll('#label_DTortilla').style('font-size','16px')
        })
    d3.selectAll('#bubble_DPinole, #label_DPinole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DPinole').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+66)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+52)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+66)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DPinole,#label_DDulcilloNoroeste,#label_DEloteroSinaloa,#label_DReventador,#label_DCacahuacintle,#label_DChalqueño,#label_DDulce,#label_DElotesconicos,#label_DElotesOccidentales,#label_DTablillaDeOcho,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul').style('opacity','1')
            d3.selectAll('#label_DPinole,#label_DDulcilloNoroeste,#label_DEloteroSinaloa,#label_DReventador,#label_DCacahuacintle,#label_DChalqueño,#label_DDulce,#label_DElotesconicos,#label_DElotesOccidentales,#label_DTablillaDeOcho,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul').style('font-size','12.5px')
            // d3.selectAll('#label_DPinole,#label_DDulcilloNoroeste,#label_DEloteroSinaloa,#label_DReventador,#label_DCacahuacintle,#label_DChalqueño,#label_DDulce,#label_DElotesconicos,#label_DElotesOccidentales,#label_DTablillaDeOcho,#label_DTabloncilloPerla,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul').style('font-weight','normal')
            // d3.selectAll('#label_DPinole').style('letter-spacing','1.5px')
            d3.selectAll('#label_DPinole').style('font-size','16px')
        })
    d3.selectAll('#bubble_DAtole, #label_DAtole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DAtole').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+81)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+66)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+81)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DAtole,#label_DCacahuacintle,#label_DElotesconicos,#label_DPepitilla,#label_DZapalotegrande,#label_DComiteco,#label_DCoscompatepec,#label_DOlotón,#label_DBlando,#label_DBofo,#label_DElotesOccidentales,#label_DHarinosoDeOcho,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('opacity','1')
            d3.selectAll('#label_DAtole,#label_DCacahuacintle,#label_DElotesconicos,#label_DPepitilla,#label_DZapalotegrande,#label_DComiteco,#label_DCoscompatepec,#label_DOlotón,#label_DBlando,#label_DBofo,#label_DElotesOccidentales,#label_DHarinosoDeOcho,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('font-size','12.5px')
            // d3.selectAll('#label_DAtole,#label_DCacahuacintle,#label_DElotesconicos,#label_DPepitilla,#label_DZapalotegrande,#label_DComiteco,#label_DCoscompatepec,#label_DOlotón,#label_DBlando,#label_DBofo,#label_DElotesOccidentales,#label_DHarinosoDeOcho,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('font-weight','normal')
            // d3.selectAll('#label_DAtole').style('letter-spacing','1.5px')
            d3.selectAll('#label_DAtole').style('font-size','16px')
        })
    d3.selectAll('#bubble_DTamales, #label_DTamales')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DTamales').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+87)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+81)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+87)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DTamales,#label_DChalqueño,#label_DPepitilla,#label_DTuxpeño,#label_DCoscompatepec,#label_DOlotón').style('opacity','1')
            // d3.selectAll('#label_DTamales,#label_DChalqueño,#label_DPepitilla,#label_DTuxpeño,#label_DCoscompatepec,#label_DOlotón').style('font-weight','normal')
            d3.selectAll('#label_DTamales,#label_DChalqueño,#label_DPepitilla,#label_DTuxpeño,#label_DCoscompatepec,#label_DOlotón').style('font-size','12.5px')
            // d3.selectAll('#label_DTamales').style('letter-spacing','1.5px')
            d3.selectAll('#label_DTamales').style('font-size','16px')
        })
    d3.selectAll('#bubble_DEsquites, #label_DEsquites')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DEsquites').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+90)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+87)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+90)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DEsquites,#label_DEloteroSinaloa,#label_DDulce').style('opacity','1')
            // d3.selectAll('#label_DEsquites,#label_DEloteroSinaloa,#label_DDulce').style('font-weight','normal')
            d3.selectAll('#label_DEsquites,#label_DEloteroSinaloa,#label_DDulce').style('font-size','12.5px')
            // d3.selectAll('#label_DEsquites').style('letter-spacing','1.5px')
            d3.selectAll('#label_DEsquites').style('font-size','16px')
        })
    d3.selectAll('#bubble_DAntojitos, #label_DAntojitos')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DAntojitos').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+95)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+90)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+95)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DAntojitos,#label_DChalqueño,#label_DConico,#label_DElotesconicos,#label_DMushito').style('opacity','1')
            d3.selectAll('#label_DAntojitos,#label_DChalqueño,#label_DConico,#label_DElotesconicos,#label_DMushito').style('font-weight','normal')
            d3.selectAll('#label_DAntojitos,#label_DChalqueño,#label_DConico,#label_DElotesconicos,#label_DMushito').style('font-size','12.5px')
            // d3.selectAll('#label_DAntojitos').style('letter-spacing','1.5px')
            d3.selectAll('#label_DAntojitos').style('font-size','16px')
        })
    d3.selectAll('#bubble_DPalomitas, #label_DPalomitas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DPalomitas').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+102)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+95)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+102)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DPalomitas,#label_DReventador,#label_DArrocillo,#label_DPalomeroChihuahua,#label_DPalomeroJalisco,#label_DPalomeñoToluqueño,#label_DNal-Tel').style('opacity','1')
            d3.selectAll('#label_DPalomitas,#label_DReventador,#label_DArrocillo,#label_DPalomeroChihuahua,#label_DPalomeroJalisco,#label_DPalomeñoToluqueño,#label_DNal-Tel').style('font-weight','normal')
            d3.selectAll('#label_DPalomitas,#label_DReventador,#label_DArrocillo,#label_DPalomeroChihuahua,#label_DPalomeroJalisco,#label_DPalomeñoToluqueño,#label_DNal-Tel').style('font-size','12.5px')
            // d3.selectAll('#label_DPalomitas').style('letter-spacing','1.5px')
            d3.selectAll('#label_DPalomitas').style('font-size','16px')
        })
    d3.selectAll('#bubble_DFrituras, #label_DFrituras')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DFrituras').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+107)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+101)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+107)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DFrituras,#label_DZapalotegrande,#label_DTabloncilloPerla,#label_DAzul,#label_DComplejoSerrano,#label_DZapalotechico').style('opacity','1')
            d3.selectAll('#label_DFrituras,#label_DZapalotegrande,#label_DTabloncilloPerla,#label_DAzul,#label_DComplejoSerrano,#label_DZapalotechico').style('font-weight','normal')
            d3.selectAll('#label_DFrituras,#label_DZapalotegrande,#label_DTabloncilloPerla,#label_DAzul,#label_DComplejoSerrano,#label_DZapalotechico').style('font-size','12.5px')
            // d3.selectAll('#label_DFrituras').style('letter-spacing','1.5px')
            d3.selectAll('#label_DFrituras').style('font-size','16px')
        })
    d3.selectAll('#bubble_DGalletas, #label_DGalletas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DGalletas').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+113)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+106)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+113)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DGalletas,#label_DEloteroSinaloa,#label_DCacahuacintle,#label_DBofo,#label_DHarinosoDeOcho,#label_DJala,#label_DGordo').style('opacity','1')
            d3.selectAll('#label_DGalletas,#label_DEloteroSinaloa,#label_DCacahuacintle,#label_DBofo,#label_DHarinosoDeOcho,#label_DJala,#label_DGordo').style('font-weight','normal')
            d3.selectAll('#label_DGalletas,#label_DEloteroSinaloa,#label_DCacahuacintle,#label_DBofo,#label_DHarinosoDeOcho,#label_DJala,#label_DGordo').style('font-size','12.5px')
            // d3.selectAll('#label_DGalletas').style('letter-spacing','1.5px')
            d3.selectAll('#label_DGalletas').style('font-size','16px')
        })
    d3.selectAll('#bubble_DBebidas, #label_DBebidas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DBebidas').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+127)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+112)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+127)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DBebidas,#label_DTepecintle,#label_DTuxpeño,#label_DZapalotegrande,#label_DComiteco,#label_DOlotón,#label_DBofo,#label_DBolita,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('opacity','1')
            d3.selectAll('#label_DBebidas,#label_DTepecintle,#label_DTuxpeño,#label_DZapalotegrande,#label_DComiteco,#label_DOlotón,#label_DBofo,#label_DBolita,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('font-weight','normal')
            d3.selectAll('#label_DBebidas,#label_DTepecintle,#label_DTuxpeño,#label_DZapalotegrande,#label_DComiteco,#label_DOlotón,#label_DBofo,#label_DBolita,#label_DTablillaDeOcho,#label_DTabloncillo,#label_DApachito,#label_DAzul,#label_DNal-Tel').style('font-size','12.5px')
            // d3.selectAll('#label_DBebidas').style('letter-spacing','1.5px')
            d3.selectAll('#label_DBebidas').style('font-size','16px')
        })
    d3.selectAll('#bubble_DHarina, #label_DHarina')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DHarina').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+131)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+126)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+131)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DHarina,#label_DCacahuacintle,#label_DUruapeño,#label_DVerdeño,#label_DGordo, #label_DVerdeño').style('opacity','1')
            d3.selectAll('#label_DHarina,#label_DCacahuacintle,#label_DUruapeño,#label_DVerdeño,#label_DGordo, #label_DVerdeño').style('font-weight','normal')
            d3.selectAll('#label_DHarina,#label_DCacahuacintle,#label_DUruapeño,#label_DVerdeño,#label_DGordo, #label_DVerdeño').style('font-size','12.5px')
            // d3.selectAll('#label_DHarina').style('letter-spacing','1.5px')
            d3.selectAll('#label_DHarina').style('font-size','16px')
        })
    d3.selectAll('#bubble_DCombustible, #label_DCombustible')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DCombustible').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+132)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+130)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+132)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DCombustible,#label_DOlotón').style('opacity','1')
            d3.selectAll('#label_DCombustible,#label_DOlotón').style('font-weight','normal')
            d3.selectAll('#label_DCombustible,#label_DOlotón').style('font-size','12.5px')
            // d3.selectAll('#label_DCombustible').style('letter-spacing','1.5px')
            d3.selectAll('#label_DCombustible').style('font-size','16px')
        })
    d3.selectAll('#bubble_DForraje, #label_DForraje')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DForraje').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+141)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+131)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+141)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DForraje,#label_DDulcilloNoroeste,#label_DChalqueño,#label_DConico,#label_DComiteco,#label_DOlotón,#label_DJala,#label_DOnaveño,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DZapalotechico').style('opacity','1')
            d3.selectAll('#label_DForraje,#label_DDulcilloNoroeste,#label_DChalqueño,#label_DConico,#label_DComiteco,#label_DOlotón,#label_DJala,#label_DOnaveño,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DZapalotechico').style('font-weight','normal')
            d3.selectAll('#label_DForraje,#label_DDulcilloNoroeste,#label_DChalqueño,#label_DConico,#label_DComiteco,#label_DOlotón,#label_DJala,#label_DOnaveño,#label_DZamoranoAmarillo,#label_DApachito,#label_DAzul,#label_DZapalotechico').style('font-size','12.5px')
            // d3.selectAll('#label_DForraje').style('letter-spacing','1.5px')
            d3.selectAll('#label_DForraje').style('font-size','16px')
        })
    d3.selectAll('#bubble_DPigmentos, #label_DPigmentos')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble_D').style('opacity','0.2')
            d3.selectAll('#bubble_DPigmentos').style('opacity','1')
            d3.selectAll('.link_D:nth-child(n+143)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+140)').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(-n+143)').style('stroke-width','1.5px')
            d3.selectAll('.label_D').style('opacity','0.2')
            d3.selectAll('#label_DPigmentos,#label_DElotesconicos,#label_DAzul').style('opacity','1')
            d3.selectAll('#label_DPigmentos,#label_DElotesconicos,#label_DAzul').style('font-weight','normal')
            d3.selectAll('#label_DPigmentos,#label_DElotesconicos,#label_DAzul').style('font-size','12.5px')
            // d3.selectAll('#label_DPigmentos').style('letter-spacing','1.5px')
            d3.selectAll('#label_DPigmentos').style('font-size','16px')
        })

    // Hover en nombres de maiz
    d3.selectAll('#label_DDulcilloNoroeste')
        .on('mouseover', function (l) {
d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(11),.link_D:nth-child(53),.link_D:nth-child(87),.link_D:nth-child(132)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(11),.link_D:nth-child(53),.link_D:nth-child(87),.link_D:nth-child(132)').style('stroke-width','1.5px')
            d3.selectAll('#label_DDulcilloNoroeste,#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje').style('opacity','1');
            // d3.selectAll('#label_DDulcilloNoroeste,#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje').style('font-weight','normal');
            d3.selectAll('#label_DDulcilloNoroeste').style('font-size','11.5px');
            d3.selectAll('#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje').style('font-size','16px');
            // d3.selectAll('#label_DElotes,#label_DPinole,#label_DEsquites,#label_DForraje').style('letter-spacing','1.5px');

        })
    d3.selectAll('#label_DEloteroSinaloa')
        .on('mouseover', function (l) {
d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(54),.link_D:nth-child(66),.link_D:nth-child(88),.link_D:nth-child(95),.link_D:nth-child(107)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(54),.link_D:nth-child(66),.link_D:nth-child(88),.link_D:nth-child(95),.link_D:nth-child(107)').style('stroke-width','1.5px')
            d3.selectAll('#label_DEloteroSinaloa,#label_DPinole,#label_DAtole,#label_DEsquites,#label_DPalomitas,#label_DGalletas').style('opacity','1');
            // d3.selectAll('#label_DEloteroSinaloa,#label_DPinole,#label_DAtole,#label_DEsquites,#label_DPalomitas,#label_DGalletas').style('font-weight','normal');
            d3.selectAll('#label_DEloteroSinaloa').style('font-size','12.5px');
            d3.selectAll('#label_DPinole,#label_DAtole,#label_DEsquites,#label_DPalomitas,#label_DGalletas').style('font-size','16px');
        })
    d3.selectAll('#label_DReventador')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(55),.link_D:nth-child(96)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(55),.link_D:nth-child(96)').style('stroke-width','1.5px')
            d3.selectAll('#label_DReventador, #label_DPinole, #label_DPalomitas').style('opacity', '1');
            d3.selectAll('#label_DReventador, #label_DPinole, #label_DPalomitas').style('font-weight', 'normal');
            d3.selectAll('#label_DReventador').style('font-size', '12.5px');
            d3.selectAll('#label_DPinole, #label_DPalomitas').style('font-size', '16px');
            // d3.selectAll('').style('opacity', '1');
            // d3.selectAll('').style('font-weight', 'normal');
            // d3.selectAll('').style('font-size', '12.5px');
            // d3.selectAll('').style('font-size', '16px');
        })
    d3.selectAll('#label_DArrocillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(28),.link_D:nth-child(90),.link_D:nth-child(97)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(28),.link_D:nth-child(90),.link_D:nth-child(97)').style('stroke-width','1.5px')
            d3.selectAll('#label_DArrocillo, #label_DAntojitos, #label_DPalomitas').style('opacity', '1');
            d3.selectAll('#label_DArrocillo, #label_DAntojitos, #label_DPalomitas').style('font-weight', 'normal');
            d3.selectAll('#label_DArrocillo').style('font-size', '12.5px');
            d3.selectAll('#label_DAntojitos, #label_DPalomitas').style('font-size', '16px');
        })
    d3.selectAll('#label_DCacahuacintle')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(1),.link_D:nth-child(12),.link_D:nth-child(56),.link_D:nth-child(67).link_D:nth-child(108),.link_D:nth-child(127)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(1),.link_D:nth-child(12),.link_D:nth-child(56),.link_D:nth-child(67).link_D:nth-child(108),.link_D:nth-child(127)').style('stroke-width','1.5px')
            d3.selectAll('#label_DCacahuacintle, #label_DPozole, #label_DElotes, #label_DPinole, #label_DHarina').style('opacity', '1');
            d3.selectAll('#label_DCacahuacintle, #label_DPozole, #label_DElotes, #label_DPinole, #label_DHarina').style('font-weight', 'normal');
            d3.selectAll('#label_DCacahuacintle').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DElotes, #label_DPinole, #label_DHarina').style('font-size', '16px');
        })
    d3.selectAll('#label_DChalqueño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(29),.link_D:nth-child(57),.link_D:nth-child(82),.link_D:nth-child(91),.link_D:nth-child(133)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(29),.link_D:nth-child(57),.link_D:nth-child(82),.link_D:nth-child(91),.link_D:nth-child(133)').style('stroke-width','1.5px')
            d3.selectAll('#label_DChalqueño, #label_DTortilla, #label_DPinole, #label_DTamales, #label_DAntojitos, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DChalqueño, #label_DTortilla, #label_DPinole, #label_DTamales, #label_DAntojitos, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DChalqueño').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DPinole, #label_DTamales, #label_DAntojitos, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DConico')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(13),.link_D:nth-child(30),.link_D:nth-child(92),.link_D:nth-child(134)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(13),.link_D:nth-child(30),.link_D:nth-child(92),.link_D:nth-child(134)').style('stroke-width','1.5px')
            d3.selectAll('#label_DConico, #label_DElotes, #label_DTortilla, #label_DAntojitos, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DConico, #label_DElotes, #label_DTortilla, #label_DAntojitos, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DConico').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAntojitos, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_Dmaiznorteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_Dmaiznorteño').style('opacity', '1');
            d3.selectAll('#label_Dmaiznorteño').style('font-weight', 'normal');
            d3.selectAll('#label_Dmaiznorteño').style('font-size', '12.5px');

        })
    d3.selectAll('#label_DDulce')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(14),.link_D:nth-child(58),.link_D:nth-child(89)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(14),.link_D:nth-child(58),.link_D:nth-child(89)').style('stroke-width','1.5px')
            d3.selectAll('#label_DDulce, #label_DElotes, #label_DPinole, #label_DEsquites').style('opacity', '1');
            d3.selectAll('#label_DDulce, #label_DElotes, #label_DPinole, #label_DEsquites').style('font-weight', 'normal');
            d3.selectAll('#label_DDulce').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DPinole, #label_DEsquites').style('font-size', '16px');
        })
    d3.selectAll('#label_DElotesconicos')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(59),.link_D:nth-child(68),.link_D:nth-child(93),.link_D:nth-child(141)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(59),.link_D:nth-child(68),.link_D:nth-child(93),.link_D:nth-child(141)').style('stroke-width','1.5px')
            d3.selectAll('#label_DElotesconicos, #label_DPinole, #label_DAtole, #label_DAntojitos, #label_DPigmentos').style('opacity', '1');
            d3.selectAll('#label_DElotesconicos, #label_DPinole, #label_DAtole, #label_DAntojitos, #label_DPigmentos').style('font-weight', 'normal');
            d3.selectAll('#label_DElotesconicos').style('font-size', '12.5px');
            d3.selectAll('#label_DPinole, #label_DAtole, #label_DAntojitos, #label_DPigmentos').style('font-size', '16px');
        })
    d3.selectAll('#label_DMixteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DMixteco').style('opacity', '1');
            d3.selectAll('#label_DMixteco').style('font-weight', 'normal');
            d3.selectAll('#label_DMixteco').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DMushito')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(31),.link_D:nth-child(94)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(31),.link_D:nth-child(94)').style('stroke-width','1.5px')
            d3.selectAll('#label_DMushito, #label_DTortilla, #label_DAntojitos').style('opacity', '1');
            d3.selectAll('#label_DMushito, #label_DTortilla, #label_DAntojitos').style('font-weight', 'normal');
            d3.selectAll('#label_DMushito').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DAntojitos').style('font-size', '16px');
        })
    d3.selectAll('#label_DMushitoMichoacan')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DMushitoMichoacan').style('opacity', '1');
            d3.selectAll('#label_DMushitoMichoacan').style('font-weight', 'normal');
        })
    d3.selectAll('#label_DNegrito')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DNegrito').style('opacity', '1');
            d3.selectAll('#label_DNegrito').style('font-weight', 'normal');
            d3.selectAll('#label_DNegrito').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DPalomeroChihuahua')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(98)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(98)').style('stroke-width','1.5px')
            d3.selectAll('#label_DPalomeroChihuahua, #label_DPalomitas').style('opacity', '1');
            d3.selectAll('#label_DPalomeroChihuahua, #label_DPalomitas').style('font-weight', 'normal');
            d3.selectAll('#label_DPalomitas').style('font-size', '16px');
        })
     d3.selectAll('#label_DPalomeroJalisco')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(99)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(99)').style('stroke-width','1.5px')
            d3.selectAll('#label_DPalomeroJalisco,#label_DPalomitas').style('opacity', '1');
            d3.selectAll('#label_DPalomeroJalisco').style('font-size', '12.5px');
            d3.selectAll('#label_DPalomeroJalisco,#label_DPalomitas').style('font-weight', 'normal');
            d3.selectAll('#label_DPalomitas').style('font-size', '16px');
        })
    d3.selectAll('#label_DPalomeñoToluqueño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(100)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(100)').style('stroke-width','1.5px')
            d3.selectAll('#label_DPalomeñoToluqueño, #label_DPalomitas').style('opacity', '1');
            d3.selectAll('#label_DPalomeñoToluqueño').style('font-size', '12px');
            d3.selectAll('#label_DPalomeñoToluqueño, #label_DPalomitas').style('font-weight', 'normal');
            d3.selectAll('#label_DPalomitas').style('font-size', '16px');
        })
    d3.selectAll('#label_DUruapeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(128)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(128)').style('stroke-width','1.5px')
            d3.selectAll('#label_DUruapeño, #label_DHarina').style('opacity', '1');
            d3.selectAll('#label_DUruapeño, #label_DHarina').style('font-weight', 'normal');
            d3.selectAll('#label_DUruapeño').style('font-size', '12.5px');
            d3.selectAll('#label_DHarina').style('font-size', '16px'); 
        })
    d3.selectAll('#label_DCelaya')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DCelaya').style('opacity', '1');
            d3.selectAll('#label_DCelaya').style('font-weight', 'normal');
            d3.selectAll('#label_DCelaya').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DChiquito')
        .on('mouseover', function (l) {
           d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DChiquito').style('opacity', '1');
            d3.selectAll('#label_DChiquito').style('font-weight', 'normal');
            d3.selectAll('#label_DChiquito').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DChiopaneco')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DChiopaneco').style('opacity', '1');
            d3.selectAll('#label_DChiopaneco').style('font-weight', 'normal');
            d3.selectAll('#label_DChiopaneco').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DCubanoAmarillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DCubanoAmarillo').style('opacity', '1');
            d3.selectAll('#label_DCubanoAmarillo').style('font-weight', 'normal');
            d3.selectAll('#label_DCubanoAmarillo').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DNal-TelAltura')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DNal-TelAltura').style('opacity', '1');
            d3.selectAll('#label_DNal-TelAltura').style('font-weight', 'normal');
            d3.selectAll('#label_DNal-TelAltura').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DPepitilla')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(15),.link_D:nth-child(32),.link_D:nth-child(69),.link_D:nth-child(83)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(15),.link_D:nth-child(32),.link_D:nth-child(69),.link_D:nth-child(83)').style('stroke-width','1.5px')
            d3.selectAll('#label_DPepitilla, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('opacity', '1');
            d3.selectAll('#label_DPepitilla, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('font-weight', 'normal');
            d3.selectAll('#label_DPepitilla').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('font-size', '16px');
        })
    d3.selectAll('#label_DTepecintle')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(113),.link_D:nth-child(33)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(113),.link_D:nth-child(33)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTepecintle, #label_DTortilla, #label_DTepecintle').style('opacity', '1');
            d3.selectAll('#label_DTepecintle, #label_DTortilla, #label_DTepecintle').style('font-weight', 'normal');
            d3.selectAll('#label_DTepecintle').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DTepecintle').style('font-size', '16px');
        })
    d3.selectAll('#label_DTuxpeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(16),.link_D:nth-child(34),.link_D:nth-child(84),.link_D:nth-child(114)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(16),.link_D:nth-child(34),.link_D:nth-child(84),.link_D:nth-child(114)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTuxpeño, #label_DElotes, #label_DTortilla, #label_DTamales, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DTuxpeño, #label_DElotes, #label_DTortilla, #label_DTamales, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DTuxpeño').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DTamales, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DTuxpeñonorteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(35)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(35)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTuxpeñonorteño, #label_DTortilla').style('opacity', '1');
            d3.selectAll('#label_DTuxpeñonorteño, #label_DTortilla').style('font-weight', 'normal');
            d3.selectAll('#label_DTuxpeñonorteño').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla').style('font-size', '16px');
        })
    d3.selectAll('#label_DVerdeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(129)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(129)').style('stroke-width','1.5px')
            d3.selectAll('#label_DVerdeño, #label_DHarina').style('opacity', '1');
            d3.selectAll('#label_DVerdeño, #label_DHarina').style('font-weight', 'normal');
            d3.selectAll('#label_DVerdeño').style('font-size', '12.5px');
            d3.selectAll('#label_DHarina').style('font-size', '16px');
        })
    d3.selectAll('#label_DZapalotegrande')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(17),.link_D:nth-child(70),.link_D:nth-child(102),.link_D:nth-child(115)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(17),.link_D:nth-child(70),.link_D:nth-child(102),.link_D:nth-child(115)').style('stroke-width','1.5px')
            d3.selectAll('#label_DZapalotegrande, #label_DElotes, #label_DAtole, #label_DFrituras, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DZapalotegrande, #label_DElotes, #label_DAtole, #label_DFrituras, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DZapalotegrande').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DAtole, #label_DFrituras, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DDzit-Bacal')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DDzit-Bacal').style('opacity', '1');
            d3.selectAll('#label_DDzit-Bacal').style('font-weight', 'normal');
            d3.selectAll('#label_DDzit-Bacal').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DComiteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(18),.link_D:nth-child(36),.link_D:nth-child(71),.link_D:nth-child(116),.link_D:nth-child(135)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(18),.link_D:nth-child(36),.link_D:nth-child(71),.link_D:nth-child(116),.link_D:nth-child(135)').style('stroke-width','1.5px')
            d3.selectAll('#label_DComiteco, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DBebidas, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DComiteco, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DBebidas, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DComiteco').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DBebidas, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DCoscompatepec')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(19),.link_D:nth-child(37),.link_D:nth-child(72),.link_D:nth-child(85)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(19),.link_D:nth-child(37),.link_D:nth-child(72),.link_D:nth-child(85)').style('stroke-width','1.5px')
            d3.selectAll('#label_DCoscompatepec, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('opacity', '1');
            d3.selectAll('#label_DCoscompatepec, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('font-weight', 'normal');
            d3.selectAll('#label_DCoscompatepec').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales').style('font-size', '16px');
        })
    d3.selectAll('#label_DMixteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DMixteño').style('opacity', '1');
            d3.selectAll('#label_DMixteño').style('font-weight', 'normal');
            d3.selectAll('#label_DMixteño').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DMotozinteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DMotozinteco').style('opacity', '1');
            d3.selectAll('#label_DMotozinteco').style('font-weight', 'normal');
            d3.selectAll('#label_DMotozinteco').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DNegroChimaltenango')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DNegroChimaltenango').style('opacity', '1');
            d3.selectAll('#label_DNegroChimaltenango').style('font-weight', 'normal');
            d3.selectAll('#label_DNegroChimaltenango').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DOlotillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(38)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(38)').style('stroke-width','1.5px')
            d3.selectAll('#label_DOlotillo, #label_DTortilla').style('opacity', '1');
            d3.selectAll('#label_DOlotillo, #label_DTortilla').style('font-weight', 'normal');
            d3.selectAll('#label_DOlotillo').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla').style('font-size', '16px');
        })
    d3.selectAll('#label_DOlotón')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(20),.link_D:nth-child(39),.link_D:nth-child(73),.link_D:nth-child(86),.link_D:nth-child(117),.link_D:nth-child(131),.link_D:nth-child(136)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(20),.link_D:nth-child(39),.link_D:nth-child(73),.link_D:nth-child(86),.link_D:nth-child(117),.link_D:nth-child(131),.link_D:nth-child(136)').style('stroke-width','1.5px')
            d3.selectAll('#label_DOlotón, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales, #label_DBebidas, #label_DCombustible, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DOlotón, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales, #label_DBebidas, #label_DCombustible, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DOlotón, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales, #label_DBebidas, #label_DCombustible, #label_DForraje').style('font-size', '12.5px');
            d3.selectAll('#label_DOlotón, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DTamales, #label_DBebidas, #label_DCombustible, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DQuicheño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DQuicheño').style('opacity', '1');
            d3.selectAll('#label_DQuicheño').style('font-weight', 'normal');
            d3.selectAll('#label_DQuicheño').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DSerrano')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DSerrano').style('opacity', '1');
            d3.selectAll('#label_DSerrano').style('font-weight', 'normal');
            d3.selectAll('#label_DSerrano').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DSerranoMixe')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DSerranoMixe').style('opacity', '1');
            d3.selectAll('#label_DSerranoMixe').style('font-weight', 'normal');
            d3.selectAll('#label_DSerranoMixe').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DTehua')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DTehua').style('opacity', '1');
            d3.selectAll('#label_DTehua').style('font-weight', 'normal');
            d3.selectAll('#label_DTehua').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DAncho')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(2)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(2)').style('stroke-width','1.5px')
            d3.selectAll('#label_DAncho, #label_DPozole').style('opacity', '1');
            d3.selectAll('#label_DAncho, #label_DPozole').style('font-weight', 'normal');
            d3.selectAll('#label_DAncho').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole').style('font-size', '16px');
        })
    d3.selectAll('#label_DBlando')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(74)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(74)').style('stroke-width','1.5px')
            d3.selectAll('#label_DBlando, #label_DAtole').style('opacity', '1');
            d3.selectAll('#label_DBlando, #label_DAtole').style('font-weight', 'normal');
            d3.selectAll('#label_DBlando').style('font-size', '12.5px');
            d3.selectAll('#label_DAtole').style('font-size', '16px');
        })
    d3.selectAll('#label_DBofo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(3),.link_D:nth-child(75),.link_D:nth-child(109),.link_D:nth-child(118)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(3),.link_D:nth-child(75),.link_D:nth-child(109),.link_D:nth-child(118)').style('stroke-width','1.5px')
            d3.selectAll('#label_DBofo, #label_DPozole, #label_DAtole, #label_DGalletas, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DBofo, #label_DPozole, #label_DAtole, #label_DGalletas, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DBofo').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DAtole, #label_DGalletas, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DBolita')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(40),.link_D:nth-child(119)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(40),.link_D:nth-child(119)').style('stroke-width','1.5px')
            d3.selectAll('#label_DBolita, #label_DTortilla, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DBolita, #label_DTortilla, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DBolita').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DElotesOccidentales')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(4),.link_D:nth-child(21),.link_D:nth-child(60),.link_D:nth-child(76)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(4),.link_D:nth-child(21),.link_D:nth-child(60),.link_D:nth-child(76)').style('stroke-width','1.5px')
            d3.selectAll('#label_DElotesOccidentales, #label_DPozole, #label_DElotes, #label_DPinole, #label_DAtole').style('opacity', '1');
            d3.selectAll('#label_DElotesOccidentales, #label_DPozole, #label_DElotes, #label_DPinole, #label_DAtole').style('font-weight', 'normal');
            d3.selectAll('#label_DPozole, #label_DElotes, #label_DPinole, #label_DAtole').style('font-size', '16px');
            d3.selectAll('#label_DElotesOccidentales').style('font-size', '12px');

        })
    d3.selectAll('#label_DHarinosoDeOcho')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(5),.link_D:nth-child(6),.link_D:nth-child(41),.link_D:nth-child(77),.link_D:nth-child(110)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(5),.link_D:nth-child(6),.link_D:nth-child(41),.link_D:nth-child(77),.link_D:nth-child(110)').style('stroke-width','1.5px')
            d3.selectAll('#label_DHarinosoDeOcho, #label_DPozole, #label_DTortilla, #label_DAtole, #label_DGalletas').style('opacity', '1');
            d3.selectAll('#label_DHarinosoDeOcho, #label_DPozole, #label_DTortilla, #label_DAtole, #label_DGalletas').style('font-weight', 'normal');
            d3.selectAll('#label_DHarinosoDeOcho').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DTortilla, #label_DAtole, #label_DGalletas').style('font-size', '16px');
        })
    d3.selectAll('#label_DJala')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(7),.link_D:nth-child(22),.link_D:nth-child(42),.link_D:nth-child(111),.link_D:nth-child(137)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(7),.link_D:nth-child(22),.link_D:nth-child(42),.link_D:nth-child(111),.link_D:nth-child(137)').style('stroke-width','1.5px')
            d3.selectAll('#label_DJala, #label_DPozole, #label_DElotes, #label_DTortilla, #label_DGalletas, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DJala, #label_DPozole, #label_DElotes, #label_DTortilla, #label_DGalletas, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DJala').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DElotes, #label_DTortilla, #label_DGalletas, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DOnaveño')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(8),.link_D:nth-child(138),.link_D:nth-child(43)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(8),.link_D:nth-child(138),.link_D:nth-child(43)').style('stroke-width','1.5px')
            d3.selectAll('#label_DOnaveño, #label_DPozole, #label_DTortilla, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DOnaveño, #label_DPozole, #label_DTortilla, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DOnaveño').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DTortilla, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DTablillaDeOcho')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(61),.link_D:nth-child(23),.link_D:nth-child(44),.link_D:nth-child(120)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(61),.link_D:nth-child(23),.link_D:nth-child(44),.link_D:nth-child(120)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTablillaDeOcho, #label_DElotes, #label_DTortilla, #label_DPinole, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DTablillaDeOcho, #label_DElotes, #label_DTortilla, #label_DPinole, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DTablillaDeOcho').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DPinole, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DTabloncillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(9),.link_D:nth-child(24),.link_D:nth-child(45),.link_D:nth-child(121)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(9),.link_D:nth-child(24),.link_D:nth-child(45),.link_D:nth-child(121)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTabloncillo, #label_DPozole, #label_DElotes, #label_DTortilla, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DTabloncillo, #label_DPozole, #label_DElotes, #label_DTortilla, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DTabloncillo').style('font-size', '12.5px');
            d3.selectAll('#label_DPozole, #label_DElotes, #label_DTortilla, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DTabloncilloPerla')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(46),.link_D:nth-child(62),.link_D:nth-child(103)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(46),.link_D:nth-child(62),.link_D:nth-child(103)').style('stroke-width','1.5px')
            d3.selectAll('#label_DTabloncilloPerla, #label_DTortilla, #label_DPinole, #label_DFrituras').style('opacity', '1');
            d3.selectAll('#label_DTabloncilloPerla, #label_DTortilla, #label_DPinole, #label_DFrituras').style('font-weight', 'normal');
            d3.selectAll('#label_DTabloncilloPerla').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DPinole, #label_DFrituras').style('font-size', '16px');
        })
    d3.selectAll('#label_DZamoranoAmarillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(47),.link_D:nth-child(63),.link_D:nth-child(139)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(47),.link_D:nth-child(63),.link_D:nth-child(139)').style('stroke-width','1.5px')
            d3.selectAll('#label_DZamoranoAmarillo, #label_DTortilla, #label_DPinole, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DZamoranoAmarillo, #label_DTortilla, #label_DPinole, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DZamoranoAmarillo').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DPinole, #label_DForraje').style('font-size', '16px');
        })
    d3.selectAll('#label_DApachito')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(48),.link_D:nth-child(25),.link_D:nth-child(64),.link_D:nth-child(78),.link_D:nth-child(122),.link_D:nth-child(125)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(48),.link_D:nth-child(25),.link_D:nth-child(64),.link_D:nth-child(78),.link_D:nth-child(122),.link_D:nth-child(125)').style('stroke-width','1.5px')
            d3.selectAll('#label_DApachito,#label_DElotes, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DApachito,#label_DElotes, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DApachito').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes,#label_DTortilla, #label_DPinole, #label_DAtole, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DAzul')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(49),.link_D:nth-child(65),.link_D:nth-child(79),.link_D:nth-child(104),.link_D:nth-child(123),.link_D:nth-child(126),.link_D:nth-child(142)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(49),.link_D:nth-child(65),.link_D:nth-child(79),.link_D:nth-child(104),.link_D:nth-child(123),.link_D:nth-child(126),.link_D:nth-child(142)').attr('stroke-width','1.5px')
            d3.selectAll('#label_DAzul, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DFrituras, #label_DBebidas, #label_DPigmentos').style('opacity', '1');
            d3.selectAll('#label_DAzul, #label_DTortilla, #label_DPinole, #label_DAtole, #label_DFrituras, #label_DBebidas, #label_DPigmentos').style('font-weight', 'normal');
            d3.selectAll('#label_DAzul').style('font-size', '12.5px');
            d3.selectAll('#label_DTortilla, #label_DPinole, #label_DAtole, #label_DFrituras, #label_DBebidas, #label_DPigmentos').style('font-size', '16px');
        })
    d3.selectAll('#label_DComplejoSerrano')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(50),.link_D:nth-child(105)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(50),.link_D:nth-child(105)').style('stroke-width','1.5px')
            d3.selectAll('#label_DComplejoSerrano, #label_DFrituras, #label_DTortilla').style('opacity', '1');
            d3.selectAll('#label_DComplejoSerrano, #label_DFrituras, #label_DTortilla').style('font-weight', 'normal');
            d3.selectAll('#label_DComplejoSerrano').style('font-size', '12.5px');
            d3.selectAll('#label_DFrituras, #label_DTortilla').style('font-size', '16px');
        })
    d3.selectAll('#label_DCristalinoChihuahua')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(10)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(10)').style('stroke-width','1.5px')
            d3.selectAll('#label_DCristalinoChihuahua, #label_DPozole').style('opacity', '1');
            d3.selectAll('#label_DCristalinoChihuahua, #label_DPozole').style('font-weight', 'normal');
            d3.selectAll('#label_DCristalinoChihuahua').style('font-size', '12px');
            d3.selectAll('#label_DPozole').style('font-size', '16px');
        })
    d3.selectAll('#label_DGordo')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(112),.link_D:nth-child(130)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(112),.link_D:nth-child(130)').style('stroke-width','1.5px')
            d3.selectAll('#label_DGordo, #label_DGalletas, #label_DHarina').style('opacity', '1');
            d3.selectAll('#label_DGordo, #label_DGalletas, #label_DHarina').style('font-weight', 'normal');
            d3.selectAll('#label_DGordo').style('font-size', '12.5px');
            d3.selectAll('#label_DGalletas, #label_DHarina').style('font-size', '16px');
        })
    d3.selectAll('#label_DAmarilloDeMontana')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DAmarilloDeMontana').style('opacity', '1');
            d3.selectAll('#label_DAmarilloDeMontana').style('font-weight', 'normal');
            d3.selectAll('#label_DAmarilloDeMontana').style('font-size', '12px');
        })
    d3.selectAll('#label_DConejo')
        .on('mouseover', function (l) {
           d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DConejo').style('opacity', '1');
            d3.selectAll('#label_DConejo').style('font-weight', 'normal');
            d3.selectAll('#label_DConejo').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DNal-Tel')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(51),.link_D:nth-child(26),.link_D:nth-child(80),.link_D:nth-child(101),.link_D:nth-child(124)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(51),.link_D:nth-child(26),.link_D:nth-child(80),.link_D:nth-child(101),.link_D:nth-child(124)').style('stroke-width','1.5px')
            d3.selectAll('#label_DNal-Tel, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DBebidas').style('opacity', '1');
            d3.selectAll('#label_DNal-Tel, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DBebidas').style('font-weight', 'normal');
            d3.selectAll('#label_DNal-Tel').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DPalomitas, #label_DBebidas').style('font-size', '16px');
        })
    d3.selectAll('#label_DRatón')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('#label_DRatón').style('opacity', '1');
            d3.selectAll('#label_DRatón').style('font-weight', 'normal');
            d3.selectAll('#label_DRatón').style('font-size', '12.5px');
        })
    d3.selectAll('#label_DZapalotechico')
        .on('mouseover', function (l) {
            d3.selectAll('.link_D, .label_D').style('opacity','0.2')
            d3.selectAll('.link_D:nth-child(52),.link_D:nth-child(27),.link_D:nth-child(81),.link_D:nth-child(106),.link_D:nth-child(140)').style('opacity','1')
            d3.selectAll('.link_D:nth-child(52),.link_D:nth-child(27),.link_D:nth-child(81),.link_D:nth-child(106),.link_D:nth-child(140)').style('stroke-width','1.5px')
            d3.selectAll('#label_DZapalotechico, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DFrituras, #label_DForraje').style('opacity', '1');
            d3.selectAll('#label_DZapalotechico, #label_DElotes, #label_DTortilla, #label_DAtole, #label_DFrituras, #label_DForraje').style('font-weight', 'normal');
            d3.selectAll('#label_DZapalotechico').style('font-size', '12.5px');
            d3.selectAll('#label_DElotes, #label_DTortilla, #label_DAtole, #label_DFrituras, #label_DForraje').style('font-size', '16px');
        })
})

// Lazily construct the package hierarchy from class names.
function packageHierarchy_D(classes) {
    var map_D = {};

    function find(name, data) {
        var node = map_D[name], i;
        if (!node) {
            node = map_D[name] = data || { name: name, children: [] };
            if (name.length) {
                node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                node.parent.children.push(node);
                node.key = name.substring(i + 1);
            }
        }
        return node;
    }

    classes.forEach(function (d) {
        find(d.name, d);
    });

    return d3.hierarchy(map_D[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports_D(nodes) {
    var map_D = {},
        imports = [];

    // Compute a map_D from name to node.
    nodes.forEach(function (d) {
        map_D[d.data.name] = d;
    });

    // For each import, construct a link_D from the source to target node.
    nodes.forEach(function (d) {
        if (d.data.imports) d.data.imports.forEach(function (i) {
            imports.push(map_D[d.data.name].path(map_D[i]));
        });
    });

    return imports;
}
