// Some constants controlling the graph appearance
const PADDING_BUBBLE = 10 // distance between edge end and bubble
const PADDING_LABEL = 30 // distance between edge end and engineer name
const PADDING_LABEL_CERO = 6 // distance between edge end and engineer name
const BUBBLE_SIZE_MIN = 4
const BUBBLE_SIZE_MAX = 20

var diameter = 800,
    radiusN = diameter / 2,
    innerRadiusN = radiusN - 200; // between center and edge end

// The 'cluster' function takes 1 argument as input. It also has methods (??) like cluster.separation(), cluster.size() and cluster.nodeSize()
var cluster = d3.cluster()
    .size([360, innerRadiusN])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : a.parent.parent == b.parent.parent ? 2 : 7); });
    // .separation(function(){
    //     return 5;
    // });


var line = d3.radialLine()
    .curve(d3.curveBundle.beta(.15))
    .radius(function (d) { return d.y; })
    .angle(function (d) { return d.x / 180 * Math.PI; });

var svg = d3.select("#graficaMaiz").append("svg")
    // .attr("width", diameter)
    // .attr("height", diameter)
    // .call(responsivefy)
    
    .attr("viewBox", '0 0 1000 1000')
    .append("g")
    .attr("transform", "translate(" + radiusN + "," + radiusN + ")");
svg.append("image")
          .attr('xlink:href', 'img/razasMaiz.png')
          .attr('class','margenMob')
          .attr('width', diameter-20)
          .attr('height', diameter-20)
          .attr("x", -100)
          .attr("y", -100);




// function responsivefyD(svg) {
//   // container will be the DOM element
//   // that the svg is appended to
//   // we then measure the container
//   // and find its aspect ratio
//   const container = d3.select(svg.node().parentNode),
//       width = parseInt(svg.style('width'), 10),
//       height = parseInt(svg.style('height'), 10),
//       aspect = width / height;
 
//   // set viewBox attribute to the initial size
//   // control scaling with preserveAspectRatio
//   // resize svg on inital page load
//   svg.attr('viewBox', `0 0 ${width} ${height}`)
//       .attr('preserveAspectRatio', 'xMinYMid')
//       .call(resize);
 
//   // add a listener so the chart will be resized
//   // when the window resizes
//   // multiple listeners for the same event type
//   // requires a namespace, i.e., 'click.foo'
//   // api docs: https://goo.gl/F3ZCFr
//   d3.select(window).on(
//       'resize.' + container.attr('id'), 
//       resize
//   );
 
//   // this is the code that resizes the chart
//   // it will be called on load
//   // and in response to window resizes
//   // gets the width of the container
//   // and resizes the svg to fill it
//   // while maintaining a consistent aspect ratio
//   function resize() {
//       const w = parseInt(container.style('width'));
//       svg.attr('width', w);
//       svg.attr('height', Math.round(w / aspect));
//   }
// }

// Arcos
    
const arcMGenerator1 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(.45)
    .endAngle(.32);
const arcMGenerator12 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(.70)
    .endAngle(.45);
const arcMGenerator2 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(.70)
    .endAngle(.55);
const arcMGenerator21 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(.87)
    .endAngle(.70);
const arcMGenerator3 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(1)
    .endAngle(.87);
const arcMGenerator31 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(1.2)
    .endAngle(1);
const arcMGenerator32 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(1.57)
    .endAngle(1.2);
const arcMGenerator4 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(1.8)
    .endAngle(1.57);
const arcMGenerator41 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(2)
    .endAngle(1.8);
const arcMGenerator42 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(2.23)
    .endAngle(2);
const arcMGenerator5 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(2.6)
    .endAngle(2.23);
const arcMGenerator51 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(2.7)
    .endAngle(2.6);
const arcMGenerator52 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(2.84)
    .endAngle(2.7);
const arcMGenerator6 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(3.2)
    .endAngle(2.84);
const arcMGenerator61 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(3.45)
    .endAngle(3.2);
const arcMGenerator62 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(3.69)
    .endAngle(3.45);
const arcMGenerator7 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(3.72)
    .endAngle(3.69);
const arcMGenerator71 = d3.arc()
    .outerRadius(340)
    .innerRadius(320)
    .startAngle(3.88)
    .endAngle(3.72);

     svg.append("path")
        .attr('d', arcMGenerator1())
        .attr('class','arcM arcMTropicales')
        .attr("fill", "url(#verde1)");
     svg.append("path")
        .attr('d', arcMGenerator12())
        .attr('class','arcM arcMTropicales2')
        .attr("fill", "url(#verde1)");

     svg.append("path")
        .attr('d', arcMGenerator2())
        .attr('class','arcM arcMSierra')
        .attr("fill", "url(#verdeazul1)");
     svg.append("path")
        .attr('d', arcMGenerator21())
        .attr('class','arcM arcMSierra1')
        .attr("fill", "url(#verdeazul1)");
     svg.append("path")
        .attr('d', arcMGenerator3())
        .attr('class','arcM arcMOcho')
        .attr("fill", "url(#azul1)");
     svg.append("path")
        .attr('d', arcMGenerator31())
        .attr('class','arcM arcMOcho1')
        .attr("fill", "url(#azul1)");
     svg.append("path")
        .attr('d', arcMGenerator32())
        .attr('class','arcM arcMOcho2')
        .attr("fill", "url(#azul1)");
     svg.append("path")
        .attr('d', arcMGenerator4())
        .attr('class','arcM arcMTardia')
        .attr("fill", "url(#morado1)");
     svg.append("path")
        .attr('d', arcMGenerator41())
        .attr('class','arcM arcMTardia1')
        .attr("fill", "url(#morado1)");
     svg.append("path")
        .attr('d', arcMGenerator42())
        .attr('class','arcM arcMTardia2')
        .attr("fill", "url(#morado1)");
     svg.append("path")
        .attr('d', arcMGenerator5())
        .attr('class','arcM arcMDentados')
        .attr("fill", "url(#rosa1)");
     svg.append("path")
        .attr('d', arcMGenerator51())
        .attr('class','arcM arcMDentados1')
        .attr("fill", "url(#rosa1)");
     svg.append("path")
        .attr('d', arcMGenerator52())
        .attr('class','arcM arcMDentados2')
        .attr("fill", "url(#rosa1)");
     svg.append("path")
        .attr('d', arcMGenerator6())
        .attr('class','arcM arcMConico')
        .attr("fill", "url(#naranja1)");
     svg.append("path")
        .attr('d', arcMGenerator61())
        .attr('class','arcM arcMConico1')
        .attr("fill", "url(#naranja1)");
     svg.append("path")
        .attr('d', arcMGenerator62())
        .attr('class','arcM arcMConico2')
        .attr("fill", "url(#naranja1)");
     svg.append("path")
        .attr('d', arcMGenerator7())
        .attr('class','arcM arcMChapalote')
        .attr("fill", "url(#amarillo1)");

     svg.append("path")
        .attr('d', arcMGenerator71())
        .attr('class','arcM arcMChapalote1')
        .attr("fill", "url(#amarillo1)");

    // fondos para arcMs
         svg.append('pattern')
            .attr('id', 'verde1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 350)
            .attr('height', 50)
          .append('svg:image')
            .attr('.link:href', './img/fondo-verde.png')
            .attr("width", 320)
            .attr("height", 50)

         svg.append('pattern')
             .attr('id', 'verdeazul1')
             .attr('patternUnits', 'userSpaceOnUse')
             .attr('width', 650)
             .attr('height', 100)



           .append('svg:image')
             .attr('xlink:href', './img/fondo-verdeazul.png')
             .attr("width", 600)
             .attr("height", 100)

         svg.append('pattern')
            .attr('id', 'azul1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 480)
            .attr('height', 70)
          .append('svg:image')
            .attr('.link:href', './img/fondo-azul.png')
            .attr("width", 480)
            .attr("height", 80)

         svg.append('pattern')
            .attr('id', 'morado1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 600)
            .attr('height', 200)
          .append('svg:image')
            .attr('.link:href', './img/fondo-morado.png')
            .attr("width", 600)
            .attr("height", 200)

         svg.append('pattern')
            .attr('id', 'rosa1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 300)
            .attr('height', 80)
          .append('svg:image')
            .attr('.link:href', './img/fondo-rosa.png')
            .attr("width", 360)
            .attr("height", 80)

         svg.append('pattern')
            .attr('id', 'naranja1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 320)
            .attr('height', 250)
          .append('svg:image')
            .attr('.link:href', './img/fondo-naranja.png')
            .attr("width", 335)
            .attr("height", 200)

         svg.append('pattern')
            .attr('id', 'amarillo1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 200)
            .attr('height', 200)
          .append('svg:image')
            .attr('.link:href', './img/fondo-amarillo.png')
            .attr("width", 340)
            .attr("height", 200)

    // mouseover para arcs
        d3.selectAll('.arcMTropicales, .arcMTropicales2')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(52),.link:nth-child(27),.link:nth-child(81),.link:nth-child(106),.link:nth-child(140)').style('opacity','1')
                    d3.selectAll('.link:nth-child(52),.link:nth-child(27),.link:nth-child(81),.link:nth-child(106),.link:nth-child(140)').style('stroke-width','1.5px')
                    d3.selectAll('.link:nth-child(51),.link:nth-child(26),.link:nth-child(80),.link:nth-child(101),.link:nth-child(124)').style('opacity','1')
                    d3.selectAll('.link:nth-child(51),.link:nth-child(26),.link:nth-child(80),.link:nth-child(101),.link:nth-child(124)').style('stroke-width','1.5px')
                    d3.selectAll('#labelConejo, #labelNal-Tel, #labelRatón, #labelZapalotechico, #labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelFrituras, #labelGalletas, #labelBebidas, #labelForraje').style('opacity','1')
                    d3.selectAll('#labelConejo, #labelNal-Tel, #labelRatón, #labelZapalotechico').style('font-size','11px')
                    d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelFrituras, #labelGalletas, #labelBebidas, #labelForraje').style('font-size','12.5px')
                })

            d3.selectAll('.arcMSierra, .arcMSierra1')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(112),.link:nth-child(130),.link:nth-child(10),.link:nth-child(49),.link:nth-child(65),.link:nth-child(79),.link:nth-child(104),.link:nth-child(123),.link:nth-child(126),.link:nth-child(142),.link:nth-child(50),.link:nth-child(105),.link:nth-child(48),.link:nth-child(25),.link:nth-child(64),.link:nth-child(78),.link:nth-child(122),.link:nth-child(125)').style('opacity','1')
                    d3.selectAll('.link:nth-child(112),.link:nth-child(130),.link:nth-child(10),.link:nth-child(50),.link:nth-child(105),.link:nth-child(49),.link:nth-child(65),.link:nth-child(79),.link:nth-child(104),.link:nth-child(123),.link:nth-child(126),.link:nth-child(142),.link:nth-child(48),.link:nth-child(25),.link:nth-child(64),.link:nth-child(78),.link:nth-child(122),.link:nth-child(125)').style('stroke-width','1.5px')

                    d3.selectAll('#labelAmarilloDeMontana, #labelCristalinoChihuahua, #labelGordo, #labelGalletas, #labelHarina,#labelCristalinoChihuahua, #labelPozole,#labelComplejoSerrano,#labelApachito,#labelAzul,#labelElotes, #labelTortilla, #labelPinole, #labelAtole, #labelBebidas').style('opacity', '1');
                    d3.selectAll('#labelAmarilloDeMontana, #labelCristalinoChihuahua, #labelGordo,#labelCristalinoChihuahua,#labelComplejoSerrano,#labelApachito,#labelAzul').style('font-size','11px')
                    d3.selectAll('#labelGalletas, #labelHarina,#labelPozole,#labelElotes, #labelTortilla, #labelPinole, #labelAtole, #labelFrituras, #labelBebidas, #labelPigmentos').style('font-size','12.5px')
                })

            d3.selectAll('.arcMOcho, .arcMOcho1, .arcMOcho2')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(2),.link:nth-child(74),.link:nth-child(3),.link:nth-child(75),.link:nth-child(109),.link:nth-child(118),.link:nth-child(40),.link:nth-child(119),.link:nth-child(4),.link:nth-child(21),.link:nth-child(60),.link:nth-child(76),.link:nth-child(5),.link:nth-child(6),.link:nth-child(41),.link:nth-child(77),.link:nth-child(110),.link:nth-child(7),.link:nth-child(22),.link:nth-child(42),.link:nth-child(111),.link:nth-child(137),.link:nth-child(8),.link:nth-child(138),.link:nth-child(43),.link:nth-child(61),.link:nth-child(23),.link:nth-child(44),.link:nth-child(120),.link:nth-child(9),.link:nth-child(24),.link:nth-child(45),.link:nth-child(121),.link:nth-child(46),.link:nth-child(62),.link:nth-child(103),.link:nth-child(47),.link:nth-child(63),.link:nth-child(139)').style('opacity','1')
                    d3.selectAll('.link:nth-child(2),.link:nth-child(74),.link:nth-child(3),.link:nth-child(75),.link:nth-child(109),.link:nth-child(118),.link:nth-child(40),.link:nth-child(119),.link:nth-child(4),.link:nth-child(21),.link:nth-child(60),.link:nth-child(76),.link:nth-child(5),.link:nth-child(6),.link:nth-child(41),.link:nth-child(77),.link:nth-child(110),.link:nth-child(7),.link:nth-child(22),.link:nth-child(42),.link:nth-child(111),.link:nth-child(137),.link:nth-child(8),.link:nth-child(138),.link:nth-child(43),.link:nth-child(61),.link:nth-child(23),.link:nth-child(44),.link:nth-child(120),.link:nth-child(9),.link:nth-child(24),.link:nth-child(45),.link:nth-child(121),.link:nth-child(46),.link:nth-child(62),.link:nth-child(103),.link:nth-child(47),.link:nth-child(63),.link:nth-child(139)').style('stroke-width','1.5px')

                    d3.selectAll('#labelPozole, #labelAtole, #labelGalletas, #labelElotes, #labelTortilla, #labelBebidas, #labelPinole, #labelForraje, #labelFrituras ,#labelAncho,#labelBlando,#labelBofo,#labelBolita,#labelElotesOccidentales,#labelHarinosoDeOcho,#labelJala,#labelOnaveño,#labelTablillaDeOcho,#labelTabloncillo,#labelTabloncilloPerla,#labelZamoranoAmarillo').style('opacity', '1');
                    d3.selectAll('#labelAncho,#labelBlando,#labelBofo,#labelBolita,#labelElotesOccidentales,#labelHarinosoDeOcho,#labelJala,#labelOnaveño,#labelTablillaDeOcho,#labelTabloncillo,#labelTabloncilloPerla,#labelZamoranoAmarillo').style('font-size','11px')
                    d3.selectAll('#labelPozole, #labelAtole, #labelGalletas, #labelElotes, #labelTortilla, #labelBebidas, #labelPinole, #labelForraje, #labelFrituras').style('font-size','12.5px')
                })
            d3.selectAll('.arcMTardia, .arcMTardia1, .arcMTardia2')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(18),.link:nth-child(36),.link:nth-child(71),.link:nth-child(116),.link:nth-child(135),.link:nth-child(19),.link:nth-child(37),.link:nth-child(72),.link:nth-child(85),.link:nth-child(38),.link:nth-child(20),.link:nth-child(39),.link:nth-child(73),.link:nth-child(86),.link:nth-child(117),.link:nth-child(131),.link:nth-child(136)').style('opacity','1')
                    d3.selectAll('.link:nth-child(18),.link:nth-child(36),.link:nth-child(71),.link:nth-child(116),.link:nth-child(135),.link:nth-child(19),.link:nth-child(37),.link:nth-child(72),.link:nth-child(85),.link:nth-child(38),.link:nth-child(20),.link:nth-child(39),.link:nth-child(73),.link:nth-child(86),.link:nth-child(117),.link:nth-child(131),.link:nth-child(136)').style('stroke-width','1.5px')

                    d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelBebidas,#labelCombustible, #labelForraje,#labelTamales,#labelDzit-Bacal,#labelComiteco,#labelCoscompatepec,#labelMixteño,#labelMotozinteco,#labelNegroChimaltenango,#labelOlotillo,#labelOlotón,#labelQuicheño,#labelSerrano,#labelSerranoMixe,#labelTehua').style('opacity', '1');
                    d3.selectAll('#labelDzit-Bacal,#labelComiteco,#labelCoscompatepec,#labelMixteño,#labelMotozinteco,#labelNegroChimaltenango,#labelOlotillo,#labelOlotón,#labelQuicheño,#labelSerrano,#labelSerranoMixe,#labelTehua').style('font-size','11px')
                    d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelBebidas,#labelCombustible, #labelForraje,#labelTamales').style('font-size','12.5px')
                })
            d3.selectAll('.arcMDentados, .arcMDentados1, .arcMDentados2')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(15),.link:nth-child(32),.link:nth-child(69),.link:nth-child(83),.link:nth-child(113),.link:nth-child(33),.link:nth-child(16),.link:nth-child(34),.link:nth-child(84),.link:nth-child(114),.link:nth-child(35),.link:nth-child(129),.link:nth-child(17),.link:nth-child(70),.link:nth-child(102),.link:nth-child(115)').style('opacity','1')
                    d3.selectAll('.link:nth-child(15),.link:nth-child(32),.link:nth-child(69),.link:nth-child(83),.link:nth-child(113),.link:nth-child(33),.link:nth-child(16),.link:nth-child(34),.link:nth-child(84),.link:nth-child(114),.link:nth-child(35),.link:nth-child(129),.link:nth-child(17),.link:nth-child(70),.link:nth-child(102),.link:nth-child(115)').style('stroke-width','1.5px')

                    d3.selectAll('#labelCelaya,#labelChiquito,#labelChiopaneco,#labelCubanoAmarillo,#labelNal-TelAltura,#labelPepitilla,#labelTepecintle,#labelTuxpeño,#labelTuxpeñonorteño,#labelVerdeño,#labelZapalotegrande,#labelElotes, #labelTortilla, #labelAtole, #labelTepecintle,#labelBebidas, #labelForraje,#labelTamales, #labelHarina, #labelFrituras').style('opacity', '1');
                    d3.selectAll('#labelCelaya,#labelChiquito,#labelChiopaneco,#labelCubanoAmarillo,#labelNal-TelAltura,#labelPepitilla,#labelTepecintle,#labelTuxpeño,#labelTuxpeñonorteño,#labelVerdeño,#labelZapalotegrande').style('font-size','11px')
                    d3.selectAll('#labelElotes, #labelTortilla, #labelAtole,#labelBebidas, #labelForraje,#labelTamales, #labelHarina, #labelFrituras').style('font-size','12.5px')
                })

            d3.selectAll('.arcMConico, .arcMConico1, .arcMConico2')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(28),.link:nth-child(90),.link:nth-child(97),.link:nth-child(1),.link:nth-child(12),.link:nth-child(56),.link:nth-child(67).link:nth-child(108),.link:nth-child(127),.link:nth-child(29),.link:nth-child(57),.link:nth-child(82),.link:nth-child(91),.link:nth-child(133),.link:nth-child(13),.link:nth-child(30),.link:nth-child(92),.link:nth-child(134),.link:nth-child(14),.link:nth-child(58),.link:nth-child(89),.link:nth-child(59),.link:nth-child(68),.link:nth-child(93),.link:nth-child(141),.link:nth-child(31),.link:nth-child(94),.link:nth-child(98),.link:nth-child(99),.link:nth-child(100),.link:nth-child(128)').style('opacity','1')
                    d3.selectAll('.link:nth-child(28),.link:nth-child(90),.link:nth-child(97),.link:nth-child(1),.link:nth-child(12),.link:nth-child(56),.link:nth-child(67).link:nth-child(108),.link:nth-child(127),.link:nth-child(29),.link:nth-child(57),.link:nth-child(82),.link:nth-child(91),.link:nth-child(133),.link:nth-child(13),.link:nth-child(30),.link:nth-child(92),.link:nth-child(134),.link:nth-child(14),.link:nth-child(58),.link:nth-child(89),.link:nth-child(59),.link:nth-child(68),.link:nth-child(93),.link:nth-child(141),.link:nth-child(31),.link:nth-child(94),.link:nth-child(98),.link:nth-child(99),.link:nth-child(100),.link:nth-child(128)').style('stroke-width','1.5px')

                    d3.selectAll('#labelAntojitos, #labelPalomitas,#labelPozole, #labelElotes, #labelPinole, #labelHarina,#labelTortilla,#labelTamales,#labelForraje,#labelEsquites,#labelPigmentos, #labelAtole, #labelPalomitas,#labelHarina,#labelArrocillo,#labelCacahuacintle,#labelChalqueño,#labelConico,#labelmaiznorteño,#labelDulce,#labelElotesconicos,#labelMixteco,#labelMushito,#labelMushitoMichoacan,#labelNegrito,#labelPalomeroChihuahua,#labelPalomeroJalisco,#labelPalomeñoToluqueño,#labelUruapeño').style('opacity', '1');
                    d3.selectAll('#labelArrocillo,#labelCacahuacintle,#labelChalqueño,#labelConico,#labelmaiznorteño,#labelDulce,#labelElotesconicos,#labelMixteco,#labelMushito,#labelNegrito,#labelPalomeroJalisco,#labelPalomeñoToluqueño,#labelUruapeño').style('font-size','11px')
                    d3.selectAll('#labelAntojitos, #labelPalomitas,#labelPozole, #labelElotes, #labelPinole, #labelHarina,#labelTortilla,#labelTamales,#labelForraje,#labelEsquites,#labelPigmentos, #labelAtole, #labelPalomitas,#labelHarina').style('font-size','12.5px')
                })

            d3.selectAll('.arcMChapalote, .arcMChapalote1')
                .on('mouseover', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.link:nth-child(11),.link:nth-child(53),.link:nth-child(87),.link:nth-child(132),.link:nth-child(54),.link:nth-child(66),.link:nth-child(88),.link:nth-child(95),.link:nth-child(107),.link:nth-child(55),.link:nth-child(96)').style('opacity','1')
                    d3.selectAll('.link:nth-child(11),.link:nth-child(53),.link:nth-child(87),.link:nth-child(132),.link:nth-child(54),.link:nth-child(66),.link:nth-child(88),.link:nth-child(95),.link:nth-child(107),.link:nth-child(55),.link:nth-child(96)').style('stroke-width','1.5px')

                    d3.selectAll('#labelElotes,#labelPinole,#labelEsquites,#labelForraje,#labelAtole,#labelEsquites,#labelPalomitas,#labelGalletas,#labelDulcilloNoroeste,#labelEloteroSinaloa,#labelReventador').style('opacity', '1');
                    d3.selectAll('#labelDulcilloNoroeste,#labelEloteroSinaloa,#labelReventador').style('font-size','11px')
                    d3.selectAll('#labelElotes,#labelPinole,#labelEsquites,#labelForraje,#labelAtole,#labelEsquites,#labelPalomitas,#labelGalletas').style('font-size','12.5px')
                })

            d3.selectAll('.arcM')
                .on('mouseout', function (l) {
                    d3.selectAll('.link, .label').style('opacity','0.2')
                    d3.selectAll('.label').style('opacity','1')
                    d3.selectAll('.link').style('stroke-width','0.5px')
                    d3.selectAll('.label').style('font-size','10px')
                    d3.selectAll('#labelPozole, #labelPinole, #labelTamales, #labelEsquites,#labelAntojitos, #labelCombustible, #labelPigmentos, #labelHarina,#labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelFrituras, #labelGalletas, #labelBebidas, #labelForraje').style('font-size','12.5px')
                })


var link = svg.append("g").selectAll(".link"),
    label = svg.append("g").selectAll(".label"),
    bubble = svg.append("g").selectAll(".bubble");

// Add a scale for bubble size
var bubbleSizeScale = d3.scaleLinear()
    .domain([0, 100])
    .range([BUBBLE_SIZE_MIN, BUBBLE_SIZE_MAX]);

// Scale for the bubble size
d3.json("cluster.json", function (error, hierarchicalData) {

    // If wanna see your data

    // Reformat the data
    var root = packageHierarchy(hierarchicalData)
        //debugger;
        .sum(function (d) { return d.size; });

    // Build an object that gives feature of each leaves
    cluster(root);
    leaves = root.leaves()

    // Leaves is an array of Objects. 1 item = one leaf. Provides x and y for leaf position in the svg. Also gives details about its parent.
    link = link
        .data(packageImports(leaves))
        .enter().append("path")
        .each(function (d) { d.source = d[0], d.target = d[d.length - 1]; })
        .attr("class", "link")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke-width", "0.45px")

    label = label
        .data(leaves)
        .enter().append("text")
        .attr("class", "label")
        .attr('id',function (d) { return "label"+d.data.key; })
        .attr("dy", "0.31em")
        // .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
        .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
        .text(function (d) { return d.data.visible; });

    // Aqui poner el scale -1
    d3.selectAll('.label')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL) + ",0)" + ("rotate(180)"); });
    d3.selectAll('.label:nth-child(n+50)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO) + ",0)" + ("rotate(0)"); })
        .attr("text-anchor","start");
    d3.selectAll('.label:nth-child(n+69)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO) + ",0)" + ("rotate(0)"); })
        .attr("text-anchor","end");
    d3.selectAll('.label:nth-child(n+88)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO + 22) + ",0)" + ("rotate(0)"); })
        .attr("text-anchor","start");

    d3.selectAll('#labelPozole')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+36) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); })
    d3.selectAll('#labelElotes')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+34) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelTortilla')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+38) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelPinole')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+35) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelAtole')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+31) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelTamales')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+45) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelEsquites')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+48) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelAntojitos')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+115) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
    d3.selectAll('#labelPalomitas')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL+55) + ",0)" + (d.x < 180 ? "" : "rotate(0)"); });
        

    d3.selectAll('.label:nth-child(-n+69)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO ) + ",0)" + ("rotate(0)"); })

    d3.selectAll('.label:nth-child(-n+37)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO) + ",0)" + ("rotate(180)"); })
        .attr("text-anchor","end");

    d3.selectAll('.label:nth-child(n+88)')
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO + 22) + ",0)" + ("rotate(180)"); })
        .attr("text-anchor","end");

    // d3.selectAll('.label:nth-child(n+51)')
    //     .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_LABEL_CERO) + ",0)" + ("rotate(0)"); })
    //     .attr("text-anchor","start");



    


    bubble = bubble
        .data(leaves)
        .enter().append("circle")
        .attr("class", "bubble")
        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + PADDING_BUBBLE) + ",0)" })
        .attr('r', d => bubbleSizeScale(d.value))
        .attr('id',function (d) { return "bubble"+d.data.key; })
        // .attr('stroke', 'teal')
        // .attr('fill', 'cyan')
        // .style('opacity', .2)
    d3.selectAll('.bubble, .label')
         .on('mouseout', function (d) {
            link.style('opacity','1')
            d3.selectAll('.bubble').style('opacity','1')
            link.style('stroke-width','.7px')
            d3.selectAll('.label').style('opacity','1')
            d3.selectAll('.label').style('font-weight','normal')
            d3.selectAll('.label:nth-of-type(n+1)').style('font-size','10px')
            d3.selectAll('.label:nth-of-type(n+70)').style('font-size','12.5px')
            d3.selectAll('.label').style('letter-spacing', '.5px')
        });

    d3.selectAll('#bubblePozole, #labelPozole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubblePozole').style('opacity','1')
            d3.selectAll('.link:nth-child(n+11)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+10)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelPozole, #labelCacahuacintle, #labelAncho, #labelBofo, #labelElotesOccidentales, #labelHarinosoDeOcho, #labelJala, #labelOnaveño, #labelTabloncillo, #labelCristalinoChihuahua').style('opacity','1')
            // d3.selectAll('#labelCacahuacintle, #labelAncho, #labelBofo, #labelElotesOccidentales, #labelHarinosoDeOcho, #labelJala, #labelOnaveño, #labelTabloncillo, #labelCristalinoChihuahua').style('font-weight','normal')
            d3.selectAll('#labelCacahuacintle, #labelAncho, #labelBofo, #labelElotesOccidentales, #labelHarinosoDeOcho, #labelJala, #labelOnaveño, #labelTabloncillo, #labelCristalinoChihuahua').style('font-size','11px')
            // d3.selectAll('#labelPozole').style('letter-spacing','1.5px')
            d3.selectAll('#labelPozole').style('font-size','14px')
        })
        
    d3.selectAll('#bubbleElotes, #labelElotes')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleElotes').style('opacity','1')
            d3.selectAll('.link:nth-child(n+28)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+10)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+28)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelElotes, #labelDulcilloNoroeste, #labelCacahuacintle, #labelConico, #labelDulce, #labelPepitilla, #labelZapalotegrande, #labelComiteco, #labelCoscompatepec, #labelOlotón, #labelElotesOccidentales, #labelJala, #labelTablillaDeOcho, #labelTabloncillo, #labelApachito, #labelNal-Tel, #labelZapalotechico').style('opacity','1')
            // d3.selectAll('#labelElotes, #labelDulcilloNoroeste, #labelCacahuacintle, #labelConico, #labelDulce, #labelPepitilla, #labelZapalotegrande, #labelComiteco, #labelCoscompatepec, #labelOlotón, #labelElotesOccidentales, #labelJala, #labelTablillaDeOcho, #labelTabloncillo, #labelApachito, #labelNal-Tel, #labelZapalotechico').style('font-weight','normal')
            d3.selectAll('#labelElotes, #labelDulcilloNoroeste, #labelCacahuacintle, #labelConico, #labelDulce, #labelPepitilla, #labelZapalotegrande, #labelComiteco, #labelCoscompatepec, #labelOlotón, #labelElotesOccidentales, #labelJala, #labelTablillaDeOcho, #labelTabloncillo, #labelApachito, #labelNal-Tel, #labelZapalotechico').style('font-size','11px')
            // d3.selectAll('#labelElotes').style('letter-spacing','1.5px')
            d3.selectAll('#labelElotes').style('font-size','14px')
        })
        
    d3.selectAll('#bubbleTortilla, #labelTortilla')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleTortilla').style('opacity','1')
            d3.selectAll('.link:nth-child(n+52)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+28)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+52)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelTortilla, #labelChalqueño, #labelConico, #labelMushito,#labelPepitilla, #labelPepitilla, #labelTuxpeño, #labelTuxpeñonorteño,#labelComiteco, #labelCoscompatepec,#labelOlotillo,#labelOlotón,#labelBolita,#labelHarinosoDeOcho,#labelJala,#labelOnaveño,#labelTablillaDeOcho,#labelTabloncillo,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelComplejoSerrano,#labelNal-Tel').style('opacity','1')
            // d3.selectAll('#labelTortilla, #labelChalqueño, #labelConico, #labelMushito,#labelPepitilla, #labelPepitilla, #labelTuxpeño, #labelTuxpeñonorteño,#labelComiteco, #labelCoscompatepec,#labelOlotillo,#labelOlotón,#labelBolita,#labelHarinosoDeOcho,#labelJala,#labelOnaveño,#labelTablillaDeOcho,#labelTabloncillo,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelComplejoSerrano,#labelNal-Tel').style('font-weight','normal')
            d3.selectAll('#labelTortilla, #labelChalqueño, #labelConico, #labelMushito,#labelPepitilla, #labelPepitilla, #labelTuxpeño, #labelTuxpeñonorteño,#labelComiteco, #labelCoscompatepec,#labelOlotillo,#labelOlotón,#labelBolita,#labelHarinosoDeOcho,#labelJala,#labelOnaveño,#labelTablillaDeOcho,#labelTabloncillo,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelComplejoSerrano,#labelNal-Tel').style('font-size','11px')
            // d3.selectAll('#labelTortilla').style('letter-spacing','1.5px')
            d3.selectAll('#labelTortilla').style('font-size','14px')
        })
    d3.selectAll('#bubblePinole, #labelPinole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubblePinole').style('opacity','1')
            d3.selectAll('.link:nth-child(n+66)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+52)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+66)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelPinole,#labelDulcilloNoroeste,#labelEloteroSinaloa,#labelReventador,#labelCacahuacintle,#labelChalqueño,#labelDulce,#labelElotesconicos,#labelElotesOccidentales,#labelTablillaDeOcho,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul').style('opacity','1')
            d3.selectAll('#labelPinole,#labelDulcilloNoroeste,#labelEloteroSinaloa,#labelReventador,#labelCacahuacintle,#labelChalqueño,#labelDulce,#labelElotesconicos,#labelElotesOccidentales,#labelTablillaDeOcho,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul').style('font-size','11px')
            // d3.selectAll('#labelPinole,#labelDulcilloNoroeste,#labelEloteroSinaloa,#labelReventador,#labelCacahuacintle,#labelChalqueño,#labelDulce,#labelElotesconicos,#labelElotesOccidentales,#labelTablillaDeOcho,#labelTabloncilloPerla,#labelZamoranoAmarillo,#labelApachito,#labelAzul').style('font-weight','normal')
            // d3.selectAll('#labelPinole').style('letter-spacing','1.5px')
            d3.selectAll('#labelPinole').style('font-size','14px')
        })
    d3.selectAll('#bubbleAtole, #labelAtole')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleAtole').style('opacity','1')
            d3.selectAll('.link:nth-child(n+81)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+66)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+81)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelAtole,#labelCacahuacintle,#labelElotesconicos,#labelPepitilla,#labelZapalotegrande,#labelComiteco,#labelCoscompatepec,#labelOlotón,#labelBlando,#labelBofo,#labelElotesOccidentales,#labelHarinosoDeOcho,#labelApachito,#labelAzul,#labelNal-Tel').style('opacity','1')
            d3.selectAll('#labelAtole,#labelCacahuacintle,#labelElotesconicos,#labelPepitilla,#labelZapalotegrande,#labelComiteco,#labelCoscompatepec,#labelOlotón,#labelBlando,#labelBofo,#labelElotesOccidentales,#labelHarinosoDeOcho,#labelApachito,#labelAzul,#labelNal-Tel').style('font-size','11px')
            // d3.selectAll('#labelAtole,#labelCacahuacintle,#labelElotesconicos,#labelPepitilla,#labelZapalotegrande,#labelComiteco,#labelCoscompatepec,#labelOlotón,#labelBlando,#labelBofo,#labelElotesOccidentales,#labelHarinosoDeOcho,#labelApachito,#labelAzul,#labelNal-Tel').style('font-weight','normal')
            // d3.selectAll('#labelAtole').style('letter-spacing','1.5px')
            d3.selectAll('#labelAtole').style('font-size','14px')
        })
    d3.selectAll('#bubbleTamales, #labelTamales')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleTamales').style('opacity','1')
            d3.selectAll('.link:nth-child(n+87)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+81)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+87)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelTamales,#labelChalqueño,#labelPepitilla,#labelTuxpeño,#labelCoscompatepec,#labelOlotón').style('opacity','1')
            // d3.selectAll('#labelTamales,#labelChalqueño,#labelPepitilla,#labelTuxpeño,#labelCoscompatepec,#labelOlotón').style('font-weight','normal')
            d3.selectAll('#labelTamales,#labelChalqueño,#labelPepitilla,#labelTuxpeño,#labelCoscompatepec,#labelOlotón').style('font-size','11px')
            // d3.selectAll('#labelTamales').style('letter-spacing','1.5px')
            d3.selectAll('#labelTamales').style('font-size','14px')
        })
    d3.selectAll('#bubbleEsquites, #labelEsquites')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleEsquites').style('opacity','1')
            d3.selectAll('.link:nth-child(n+90)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+87)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+90)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelEsquites,#labelEloteroSinaloa,#labelDulce').style('opacity','1')
            // d3.selectAll('#labelEsquites,#labelEloteroSinaloa,#labelDulce').style('font-weight','normal')
            d3.selectAll('#labelEsquites,#labelEloteroSinaloa,#labelDulce').style('font-size','11px')
            // d3.selectAll('#labelEsquites').style('letter-spacing','1.5px')
            d3.selectAll('#labelEsquites').style('font-size','14px')
        })
    d3.selectAll('#bubbleAntojitos, #labelAntojitos')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleAntojitos').style('opacity','1')
            d3.selectAll('.link:nth-child(n+95)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+90)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+95)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelAntojitos,#labelChalqueño,#labelConico,#labelElotesconicos,#labelMushito').style('opacity','1')
            d3.selectAll('#labelAntojitos,#labelChalqueño,#labelConico,#labelElotesconicos,#labelMushito').style('font-weight','normal')
            d3.selectAll('#labelAntojitos,#labelChalqueño,#labelConico,#labelElotesconicos,#labelMushito').style('font-size','11px')
            // d3.selectAll('#labelAntojitos').style('letter-spacing','1.5px')
            d3.selectAll('#labelAntojitos').style('font-size','14px')
        })
    d3.selectAll('#bubblePalomitas, #labelPalomitas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubblePalomitas').style('opacity','1')
            d3.selectAll('.link:nth-child(n+102)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+95)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+102)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelPalomitas,#labelReventador,#labelArrocillo,#labelPalomeroChihuahua,#labelPalomeroJalisco,#labelPalomeñoToluqueño,#labelNal-Tel').style('opacity','1')
            d3.selectAll('#labelPalomitas,#labelReventador,#labelArrocillo,#labelPalomeroChihuahua,#labelPalomeroJalisco,#labelPalomeñoToluqueño,#labelNal-Tel').style('font-weight','normal')
            d3.selectAll('#labelPalomitas,#labelReventador,#labelArrocillo,#labelPalomeroChihuahua,#labelPalomeroJalisco,#labelPalomeñoToluqueño,#labelNal-Tel').style('font-size','11px')
            // d3.selectAll('#labelPalomitas').style('letter-spacing','1.5px')
            d3.selectAll('#labelPalomitas').style('font-size','14px')
        })
    d3.selectAll('#bubbleFrituras, #labelFrituras')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleFrituras').style('opacity','1')
            d3.selectAll('.link:nth-child(n+107)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+101)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+107)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelFrituras,#labelZapalotegrande,#labelTabloncilloPerla,#labelAzul,#labelComplejoSerrano,#labelZapalotechico').style('opacity','1')
            d3.selectAll('#labelFrituras,#labelZapalotegrande,#labelTabloncilloPerla,#labelAzul,#labelComplejoSerrano,#labelZapalotechico').style('font-weight','normal')
            d3.selectAll('#labelFrituras,#labelZapalotegrande,#labelTabloncilloPerla,#labelAzul,#labelComplejoSerrano,#labelZapalotechico').style('font-size','11px')
            // d3.selectAll('#labelFrituras').style('letter-spacing','1.5px')
            d3.selectAll('#labelFrituras').style('font-size','14px')
        })
    d3.selectAll('#bubbleGalletas, #labelGalletas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleGalletas').style('opacity','1')
            d3.selectAll('.link:nth-child(n+113)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+106)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+113)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelGalletas,#labelEloteroSinaloa,#labelCacahuacintle,#labelBofo,#labelHarinosoDeOcho,#labelJala,#labelGordo').style('opacity','1')
            d3.selectAll('#labelGalletas,#labelEloteroSinaloa,#labelCacahuacintle,#labelBofo,#labelHarinosoDeOcho,#labelJala,#labelGordo').style('font-weight','normal')
            d3.selectAll('#labelGalletas,#labelEloteroSinaloa,#labelCacahuacintle,#labelBofo,#labelHarinosoDeOcho,#labelJala,#labelGordo').style('font-size','11px')
            // d3.selectAll('#labelGalletas').style('letter-spacing','1.5px')
            d3.selectAll('#labelGalletas').style('font-size','14px')
        })
    d3.selectAll('#bubbleBebidas, #labelBebidas')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleBebidas').style('opacity','1')
            d3.selectAll('.link:nth-child(n+127)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+112)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+127)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelBebidas,#labelTepecintle,#labelTuxpeño,#labelZapalotegrande,#labelComiteco,#labelOlotón,#labelBofo,#labelBolita,#labelTablillaDeOcho,#labelTabloncillo,#labelApachito,#labelAzul,#labelNal-Tel').style('opacity','1')
            d3.selectAll('#labelBebidas,#labelTepecintle,#labelTuxpeño,#labelZapalotegrande,#labelComiteco,#labelOlotón,#labelBofo,#labelBolita,#labelTablillaDeOcho,#labelTabloncillo,#labelApachito,#labelAzul,#labelNal-Tel').style('font-weight','normal')
            d3.selectAll('#labelBebidas,#labelTepecintle,#labelTuxpeño,#labelZapalotegrande,#labelComiteco,#labelOlotón,#labelBofo,#labelBolita,#labelTablillaDeOcho,#labelTabloncillo,#labelApachito,#labelAzul,#labelNal-Tel').style('font-size','11px')
            // d3.selectAll('#labelBebidas').style('letter-spacing','1.5px')
            d3.selectAll('#labelBebidas').style('font-size','14px')

        })
    d3.selectAll('#bubbleHarina, #labelHarina')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleHarina').style('opacity','1')
            d3.selectAll('.link:nth-child(n+131)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+126)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+131)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelHarina,#labelCacahuacintle,#labelUruapeño,#labelVerdeño,#labelGordo, #labelVerdeño').style('opacity','1')
            d3.selectAll('#labelHarina,#labelCacahuacintle,#labelUruapeño,#labelVerdeño,#labelGordo, #labelVerdeño').style('font-weight','normal')
            d3.selectAll('#labelHarina,#labelCacahuacintle,#labelUruapeño,#labelVerdeño,#labelGordo, #labelVerdeño').style('font-size','11px')
            // d3.selectAll('#labelHarina').style('letter-spacing','1.5px')
            d3.selectAll('#labelHarina').style('font-size','14px')
        })
    d3.selectAll('#bubbleCombustible, #labelCombustible')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleCombustible').style('opacity','1')
            d3.selectAll('.link:nth-child(n+132)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+130)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+132)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelCombustible,#labelOlotón').style('opacity','1')
            d3.selectAll('#labelCombustible,#labelOlotón').style('font-weight','normal')
            d3.selectAll('#labelCombustible,#labelOlotón').style('font-size','11px')
            // d3.selectAll('#labelCombustible').style('letter-spacing','1.5px')
            d3.selectAll('#labelCombustible').style('font-size','14px')
        })
    d3.selectAll('#bubbleForraje, #labelForraje')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubbleForraje').style('opacity','1')
            d3.selectAll('.link:nth-child(n+141)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+131)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+141)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelForraje,#labelDulcilloNoroeste,#labelChalqueño,#labelConico,#labelComiteco,#labelOlotón,#labelJala,#labelOnaveño,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelZapalotechico').style('opacity','1')
            d3.selectAll('#labelForraje,#labelDulcilloNoroeste,#labelChalqueño,#labelConico,#labelComiteco,#labelOlotón,#labelJala,#labelOnaveño,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelZapalotechico').style('font-weight','normal')
            d3.selectAll('#labelForraje,#labelDulcilloNoroeste,#labelChalqueño,#labelConico,#labelComiteco,#labelOlotón,#labelJala,#labelOnaveño,#labelZamoranoAmarillo,#labelApachito,#labelAzul,#labelZapalotechico').style('font-size','11px')
            // d3.selectAll('#labelForraje').style('letter-spacing','1.5px')
            d3.selectAll('#labelForraje').style('font-size','14px')
        })
    d3.selectAll('#bubblePigmentos, #labelPigmentos')
        .on('mouseover', function (l) {
            d3.selectAll('.bubble').style('opacity','0.2')
            d3.selectAll('#bubblePigmentos').style('opacity','1')
            d3.selectAll('.link:nth-child(n+143)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+140)').style('opacity','0.2')
            d3.selectAll('.link:nth-child(-n+143)').style('stroke-width','1.5px')
            d3.selectAll('.label').style('opacity','0.2')
            d3.selectAll('#labelPigmentos,#labelElotesconicos,#labelAzul').style('opacity','1')
            d3.selectAll('#labelPigmentos,#labelElotesconicos,#labelAzul').style('font-weight','normal')
            d3.selectAll('#labelPigmentos,#labelElotesconicos,#labelAzul').style('font-size','11px')
            // d3.selectAll('#labelPigmentos').style('letter-spacing','1.5px')
            d3.selectAll('#labelPigmentos').style('font-size','14px')
        })

    // Hover en nombres de maiz
    d3.selectAll('#labelDulcilloNoroeste')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(11),.link:nth-child(53),.link:nth-child(87),.link:nth-child(132)').style('opacity','1')
            d3.selectAll('.link:nth-child(11),.link:nth-child(53),.link:nth-child(87),.link:nth-child(132)').style('stroke-width','1.5px')
             d3.selectAll('#labelDulcilloNoroeste,#labelElotes,#labelPinole,#labelEsquites,#labelForraje').style('opacity','1');
            // d3.selectAll('#labelDulcilloNoroeste,#labelElotes,#labelPinole,#labelEsquites,#labelForraje').style('font-weight','normal');
            d3.selectAll('#labelDulcilloNoroeste').style('font-size','11.5px');
            d3.selectAll('#labelElotes,#labelPinole,#labelEsquites,#labelForraje').style('font-size','12.5px');
            // d3.selectAll('#labelElotes,#labelPinole,#labelEsquites,#labelForraje').style('letter-spacing','1.5px');
        })
    d3.selectAll('#labelEloteroSinaloa')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(54),.link:nth-child(66),.link:nth-child(88),.link:nth-child(95),.link:nth-child(107)').style('opacity','1')
            d3.selectAll('.link:nth-child(54),.link:nth-child(66),.link:nth-child(88),.link:nth-child(95),.link:nth-child(107)').style('stroke-width','1.5px')
            d3.selectAll('#labelEloteroSinaloa,#labelPinole,#labelAtole,#labelEsquites,#labelPalomitas,#labelGalletas').style('opacity','1');

            // d3.selectAll('#labelEloteroSinaloa,#labelPinole,#labelAtole,#labelEsquites,#labelPalomitas,#labelGalletas').style('font-weight','normal');

            d3.selectAll('#labelEloteroSinaloa').style('font-size','11.5px');

            d3.selectAll('#labelPinole,#labelAtole,#labelEsquites,#labelPalomitas,#labelGalletas').style('font-size','12.5px');
            
        })
    d3.selectAll('#labelReventador')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(55),.link:nth-child(96)').style('opacity','1')
            d3.selectAll('.link:nth-child(55),.link:nth-child(96)').style('stroke-width','1.5px')
             d3.selectAll('#labelReventador, #labelPinole, #labelPalomitas').style('opacity', '1');
            d3.selectAll('#labelReventador, #labelPinole, #labelPalomitas').style('font-weight', 'normal');
            d3.selectAll('#labelReventador').style('font-size', '11.5px');
            d3.selectAll('#labelPinole, #labelPalomitas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelArrocillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(28),.link:nth-child(90),.link:nth-child(97)').style('opacity','1')
            d3.selectAll('.link:nth-child(28),.link:nth-child(90),.link:nth-child(97)').style('stroke-width','1.5px')
            d3.selectAll('#labelArrocillo, #labelAntojitos, #labelPalomitas').style('opacity', '1');
            d3.selectAll('#labelArrocillo, #labelAntojitos, #labelPalomitas').style('font-weight', 'normal');
            d3.selectAll('#labelArrocillo').style('font-size', '11.5px');
            d3.selectAll('#labelAntojitos, #labelPalomitas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelCacahuacintle')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(1),.link:nth-child(12),.link:nth-child(56),.link:nth-child(67).link:nth-child(108),.link:nth-child(127)').style('opacity','1')
            d3.selectAll('.link:nth-child(1),.link:nth-child(12),.link:nth-child(56),.link:nth-child(67).link:nth-child(108),.link:nth-child(127)').style('stroke-width','1.5px')
            d3.selectAll('#labelCacahuacintle, #labelPozole, #labelElotes, #labelPinole, #labelHarina').style('opacity', '1');
            d3.selectAll('#labelCacahuacintle, #labelPozole, #labelElotes, #labelPinole, #labelHarina').style('font-weight', 'normal');
            d3.selectAll('#labelCacahuacintle').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelElotes, #labelPinole, #labelHarina').style('font-size', '12.5px');
        })
    d3.selectAll('#labelChalqueño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(29),.link:nth-child(57),.link:nth-child(82),.link:nth-child(91),.link:nth-child(133)').style('opacity','1')
            d3.selectAll('.link:nth-child(29),.link:nth-child(57),.link:nth-child(82),.link:nth-child(91),.link:nth-child(133)').style('stroke-width','1.5px')
            d3.selectAll('#labelChalqueño, #labelTortilla, #labelPinole, #labelTamales, #labelAntojitos, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelChalqueño, #labelTortilla, #labelPinole, #labelTamales, #labelAntojitos, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelChalqueño').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelPinole, #labelTamales, #labelAntojitos, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelConico')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(13),.link:nth-child(30),.link:nth-child(92),.link:nth-child(134)').style('opacity','1')
            d3.selectAll('.link:nth-child(13),.link:nth-child(30),.link:nth-child(92),.link:nth-child(134)').style('stroke-width','1.5px')
            d3.selectAll('#labelConico, #labelElotes, #labelTortilla, #labelAntojitos, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelConico, #labelElotes, #labelTortilla, #labelAntojitos, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelConico').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAntojitos, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelmaiznorteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelmaiznorteño').style('opacity', '1');
            d3.selectAll('#labelmaiznorteño').style('font-weight', 'normal');
            d3.selectAll('#labelmaiznorteño').style('font-size', '11.5px');

        })
    d3.selectAll('#labelDulce')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(14),.link:nth-child(58),.link:nth-child(89)').style('opacity','1')
            d3.selectAll('.link:nth-child(14),.link:nth-child(58),.link:nth-child(89)').style('stroke-width','1.5px')
            d3.selectAll('#labelDulce, #labelElotes, #labelPinole, #labelEsquites').style('opacity', '1');
            d3.selectAll('#labelDulce, #labelElotes, #labelPinole, #labelEsquites').style('font-weight', 'normal');
            d3.selectAll('#labelDulce').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelPinole, #labelEsquites').style('font-size', '12.5px');
        })
    d3.selectAll('#labelElotesconicos')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(59),.link:nth-child(68),.link:nth-child(93),.link:nth-child(141)').style('opacity','1')
            d3.selectAll('.link:nth-child(59),.link:nth-child(68),.link:nth-child(93),.link:nth-child(141)').style('stroke-width','1.5px')
            d3.selectAll('#labelElotesconicos, #labelPinole, #labelAtole, #labelAntojitos, #labelPigmentos').style('opacity', '1');
            d3.selectAll('#labelElotesconicos, #labelPinole, #labelAtole, #labelAntojitos, #labelPigmentos').style('font-weight', 'normal');
            d3.selectAll('#labelElotesconicos').style('font-size', '11.5px');
            d3.selectAll('#labelPinole, #labelAtole, #labelAntojitos, #labelPigmentos').style('font-size', '12.5px');
        })
        d3.selectAll('#labelMixteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelMixteco').style('opacity', '1');
            d3.selectAll('#labelMixteco').style('font-weight', 'normal');
            d3.selectAll('#labelMixteco').style('font-size', '11.5px');
        })
    d3.selectAll('#labelMushito')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(31),.link:nth-child(94)').style('opacity','1')
            d3.selectAll('.link:nth-child(31),.link:nth-child(94)').style('stroke-width','1.5px')
            d3.selectAll('#labelMushito, #labelTortilla, #labelAntojitos').style('opacity', '1');
            d3.selectAll('#labelMushito, #labelTortilla, #labelAntojitos').style('font-weight', 'normal');
            d3.selectAll('#labelMushito').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelAntojitos').style('font-size', '12.5px');
        })
    d3.selectAll('#labelMushitoMichoacan')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelMushitoMichoacan').style('opacity', '1');
            d3.selectAll('#labelMushitoMichoacan').style('font-weight', 'normal');
        })
    d3.selectAll('#labelNegrito')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelNegrito').style('opacity', '1');
            d3.selectAll('#labelNegrito').style('font-weight', 'normal');
            d3.selectAll('#labelNegrito').style('font-size', '11.5px');
        })
    d3.selectAll('#labelPalomeroChihuahua')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(98)').style('opacity','1')
            d3.selectAll('.link:nth-child(98)').style('stroke-width','1.5px')
            d3.selectAll('#labelPalomeroChihuahua, #labelPalomitas').style('opacity', '1');
            d3.selectAll('#labelPalomeroChihuahua, #labelPalomitas').style('font-weight', 'normal');
            d3.selectAll('#labelPalomitas').style('font-size', '12.5px');
        })
     d3.selectAll('#labelPalomeroJalisco')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(99)').style('opacity','1')
            d3.selectAll('.link:nth-child(99)').style('stroke-width','1.5px')
            d3.selectAll('#labelPalomeroJalisco,#labelPalomitas').style('opacity', '1');
            d3.selectAll('#labelPalomeroJalisco').style('font-size', '11.5px');
            d3.selectAll('#labelPalomeroJalisco,#labelPalomitas').style('font-weight', 'normal');
            d3.selectAll('#labelPalomitas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelPalomeñoToluqueño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(100)').style('opacity','1')
            d3.selectAll('.link:nth-child(100)').style('stroke-width','1.5px')
            d3.selectAll('#labelPalomeñoToluqueño, #labelPalomitas').style('opacity', '1');
            d3.selectAll('#labelPalomeñoToluqueño').style('font-size', '12px');
            d3.selectAll('#labelPalomeñoToluqueño, #labelPalomitas').style('font-weight', 'normal');
            d3.selectAll('#labelPalomitas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelUruapeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(128)').style('opacity','1')
            d3.selectAll('.link:nth-child(128)').style('stroke-width','1.5px')
            d3.selectAll('#labelUruapeño, #labelHarina').style('opacity', '1');
            d3.selectAll('#labelUruapeño, #labelHarina').style('font-weight', 'normal');
            d3.selectAll('#labelUruapeño').style('font-size', '11.5px');
            d3.selectAll('#labelHarina').style('font-size', '12.5px');
        })
     d3.selectAll('#labelCelaya')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelCelaya').style('opacity', '1');
            d3.selectAll('#labelCelaya').style('font-weight', 'normal');
            d3.selectAll('#labelCelaya').style('font-size', '11.5px');
        })
    d3.selectAll('#labelChiquito')
        .on('mouseover', function (l) {
           d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelChiquito').style('opacity', '1');
            d3.selectAll('#labelChiquito').style('font-weight', 'normal');
            d3.selectAll('#labelChiquito').style('font-size', '11.5px');
        })
    d3.selectAll('#labelChiopaneco')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelChiopaneco').style('opacity', '1');
            d3.selectAll('#labelChiopaneco').style('font-weight', 'normal');
            d3.selectAll('#labelChiopaneco').style('font-size', '11.5px');
        })
    d3.selectAll('#labelCubanoAmarillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelCubanoAmarillo').style('opacity', '1');
            d3.selectAll('#labelCubanoAmarillo').style('font-weight', 'normal');
            d3.selectAll('#labelCubanoAmarillo').style('font-size', '11.5px');
        })
    d3.selectAll('#labelNal-TelAltura')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelNal-TelAltura').style('opacity', '1');
            d3.selectAll('#labelNal-TelAltura').style('font-weight', 'normal');
            d3.selectAll('#labelNal-TelAltura').style('font-size', '11.5px');
        })
    d3.selectAll('#labelPepitilla')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(15),.link:nth-child(32),.link:nth-child(69),.link:nth-child(83)').style('opacity','1')
            d3.selectAll('.link:nth-child(15),.link:nth-child(32),.link:nth-child(69),.link:nth-child(83)').style('stroke-width','1.5px')
            d3.selectAll('#labelPepitilla, #labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('opacity', '1');
            d3.selectAll('#labelPepitilla, #labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('font-weight', 'normal');
            d3.selectAll('#labelPepitilla').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTepecintle')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(113),.link:nth-child(33)').style('opacity','1')
            d3.selectAll('.link:nth-child(113),.link:nth-child(33)').style('stroke-width','1.5px')
            d3.selectAll('#labelTepecintle, #labelTortilla, #labelTepecintle').style('opacity', '1');
            d3.selectAll('#labelTepecintle, #labelTortilla, #labelTepecintle').style('font-weight', 'normal');
            d3.selectAll('#labelTepecintle').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelTepecintle').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTuxpeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(16),.link:nth-child(34),.link:nth-child(84),.link:nth-child(114)').style('opacity','1')
            d3.selectAll('.link:nth-child(16),.link:nth-child(34),.link:nth-child(84),.link:nth-child(114)').style('stroke-width','1.5px')
            d3.selectAll('#labelTuxpeño, #labelElotes, #labelTortilla, #labelTamales, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelTuxpeño, #labelElotes, #labelTortilla, #labelTamales, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelTuxpeño').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelTamales, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTuxpeñonorteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(35)').style('opacity','1')
            d3.selectAll('.link:nth-child(35)').style('stroke-width','1.5px')
            d3.selectAll('#labelTuxpeñonorteño, #labelTortilla').style('opacity', '1');
            d3.selectAll('#labelTuxpeñonorteño, #labelTortilla').style('font-weight', 'normal');
            d3.selectAll('#labelTuxpeñonorteño').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla').style('font-size', '12.5px');
        })
    d3.selectAll('#labelVerdeño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(129)').style('opacity','1')
            d3.selectAll('.link:nth-child(129)').style('stroke-width','1.5px')
            d3.selectAll('#labelVerdeño, #labelHarina').style('opacity', '1');
            d3.selectAll('#labelVerdeño, #labelHarina').style('font-weight', 'normal');
            d3.selectAll('#labelVerdeño').style('font-size', '11.5px');
            d3.selectAll('#labelHarina').style('font-size', '12.5px');
        })
    d3.selectAll('#labelZapalotegrande')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(17),.link:nth-child(70),.link:nth-child(102),.link:nth-child(115)').style('opacity','1')
            d3.selectAll('.link:nth-child(17),.link:nth-child(70),.link:nth-child(102),.link:nth-child(115)').style('stroke-width','1.5px')
            d3.selectAll('#labelZapalotegrande, #labelElotes, #labelAtole, #labelFrituras, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelZapalotegrande, #labelElotes, #labelAtole, #labelFrituras, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelZapalotegrande').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelAtole, #labelFrituras, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelDzit-Bacal')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelDzit-Bacal').style('opacity', '1');
            d3.selectAll('#labelDzit-Bacal').style('font-weight', 'normal');
            d3.selectAll('#labelDzit-Bacal').style('font-size', '11.5px');
        })
    d3.selectAll('#labelComiteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(18),.link:nth-child(36),.link:nth-child(71),.link:nth-child(116),.link:nth-child(135)').style('opacity','1')
            d3.selectAll('.link:nth-child(18),.link:nth-child(36),.link:nth-child(71),.link:nth-child(116),.link:nth-child(135)').style('stroke-width','1.5px')
            d3.selectAll('#labelComiteco, #labelElotes, #labelTortilla, #labelAtole, #labelBebidas, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelComiteco, #labelElotes, #labelTortilla, #labelAtole, #labelBebidas, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelComiteco').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelBebidas, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelCoscompatepec')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(19),.link:nth-child(37),.link:nth-child(72),.link:nth-child(85)').style('opacity','1')
            d3.selectAll('.link:nth-child(19),.link:nth-child(37),.link:nth-child(72),.link:nth-child(85)').style('stroke-width','1.5px')
            d3.selectAll('#labelCoscompatepec, #labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('opacity', '1');
            d3.selectAll('#labelCoscompatepec, #labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('font-weight', 'normal');
            d3.selectAll('#labelCoscompatepec').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelTamales').style('font-size', '12.5px');
        })
    d3.selectAll('#labelMixteño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelMixteño').style('opacity', '1');
            d3.selectAll('#labelMixteño').style('font-weight', 'normal');
            d3.selectAll('#labelMixteño').style('font-size', '11.5px');
        })
    d3.selectAll('#labelMotozinteco')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelMotozinteco').style('opacity', '1');
            d3.selectAll('#labelMotozinteco').style('font-weight', 'normal');
            d3.selectAll('#labelMotozinteco').style('font-size', '11.5px');
        })
    d3.selectAll('#labelNegroChimaltenango')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelNegroChimaltenango').style('opacity', '1');
            d3.selectAll('#labelNegroChimaltenango').style('font-weight', 'normal');
            d3.selectAll('#labelNegroChimaltenango').style('font-size', '11.5px');
        })
    d3.selectAll('#labelOlotillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(38)').style('opacity','1')
            d3.selectAll('.link:nth-child(38)').style('stroke-width','1.5px')
            d3.selectAll('#labelOlotillo, #labelTortilla').style('opacity', '1');
            d3.selectAll('#labelOlotillo, #labelTortilla').style('font-weight', 'normal');
            d3.selectAll('#labelOlotillo').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla').style('font-size', '12.5px');
        })
    d3.selectAll('#labelOlotón')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(20),.link:nth-child(39),.link:nth-child(73),.link:nth-child(86),.link:nth-child(117),.link:nth-child(131),.link:nth-child(136)').style('opacity','1')
            d3.selectAll('.link:nth-child(20),.link:nth-child(39),.link:nth-child(73),.link:nth-child(86),.link:nth-child(117),.link:nth-child(131),.link:nth-child(136)').style('stroke-width','1.5px')
            d3.selectAll('#labelOlotón, #labelElotes, #labelTortilla, #labelAtole, #labelTamales, #labelBebidas, #labelCombustible, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelOlotón, #labelElotes, #labelTortilla, #labelAtole, #labelTamales, #labelBebidas, #labelCombustible, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelOlotón, #labelElotes, #labelTortilla, #labelAtole, #labelTamales, #labelBebidas, #labelCombustible, #labelForraje').style('font-size', '11.5px');
            d3.selectAll('#labelOlotón, #labelElotes, #labelTortilla, #labelAtole, #labelTamales, #labelBebidas, #labelCombustible, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelQuicheño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelQuicheño').style('opacity', '1');
            d3.selectAll('#labelQuicheño').style('font-weight', 'normal');
            d3.selectAll('#labelQuicheño').style('font-size', '11.5px');
        })
    d3.selectAll('#labelSerrano')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelSerrano').style('opacity', '1');
            d3.selectAll('#labelSerrano').style('font-weight', 'normal');
            d3.selectAll('#labelSerrano').style('font-size', '11.5px');
        })
    d3.selectAll('#labelSerranoMixe')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelSerranoMixe').style('opacity', '1');
            d3.selectAll('#labelSerranoMixe').style('font-weight', 'normal');
            d3.selectAll('#labelSerranoMixe').style('font-size', '11.5px');
        })
    d3.selectAll('#labelTehua')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelTehua').style('opacity', '1');
            d3.selectAll('#labelTehua').style('font-weight', 'normal');
            d3.selectAll('#labelTehua').style('font-size', '11.5px');
        })
    d3.selectAll('#labelAncho')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(2)').style('opacity','1')
            d3.selectAll('.link:nth-child(2)').style('stroke-width','1.5px')
            d3.selectAll('#labelAncho, #labelPozole').style('opacity', '1');
            d3.selectAll('#labelAncho, #labelPozole').style('font-weight', 'normal');
            d3.selectAll('#labelAncho').style('font-size', '11.5px');
            d3.selectAll('#labelPozole').style('font-size', '12.5px');
        })
    d3.selectAll('#labelBlando')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(74)').style('opacity','1')
            d3.selectAll('.link:nth-child(74)').style('stroke-width','1.5px')
             d3.selectAll('#labelBlando, #labelAtole').style('opacity', '1');
            d3.selectAll('#labelBlando, #labelAtole').style('font-weight', 'normal');
            d3.selectAll('#labelBlando').style('font-size', '11.5px');
            d3.selectAll('#labelAtole').style('font-size', '12.5px');
        })
    d3.selectAll('#labelBofo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(3),.link:nth-child(75),.link:nth-child(109),.link:nth-child(118)').style('opacity','1')
            d3.selectAll('.link:nth-child(3),.link:nth-child(75),.link:nth-child(109),.link:nth-child(118)').style('stroke-width','1.5px')
            d3.selectAll('#labelBofo, #labelPozole, #labelAtole, #labelGalletas, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelBofo, #labelPozole, #labelAtole, #labelGalletas, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelBofo').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelAtole, #labelGalletas, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelBolita')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(40),.link:nth-child(119)').style('opacity','1')
            d3.selectAll('.link:nth-child(40),.link:nth-child(119)').style('stroke-width','1.5px')
            d3.selectAll('#labelBolita, #labelTortilla, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelBolita, #labelTortilla, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelBolita').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelElotesOccidentales')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(4),.link:nth-child(21),.link:nth-child(60),.link:nth-child(76)').style('opacity','1')
            d3.selectAll('.link:nth-child(4),.link:nth-child(21),.link:nth-child(60),.link:nth-child(76)').style('stroke-width','1.5px')
            d3.selectAll('#labelElotesOccidentales, #labelPozole, #labelElotes, #labelPinole, #labelAtole').style('opacity', '1');
            d3.selectAll('#labelElotesOccidentales, #labelPozole, #labelElotes, #labelPinole, #labelAtole').style('font-weight', 'normal');
            d3.selectAll('#labelPozole, #labelElotes, #labelPinole, #labelAtole').style('font-size', '12.5px');
            d3.selectAll('#labelElotesOccidentales').style('font-size', '12px');
        })
    d3.selectAll('#labelHarinosoDeOcho')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(5),.link:nth-child(6),.link:nth-child(41),.link:nth-child(77),.link:nth-child(110)').style('opacity','1')
            d3.selectAll('.link:nth-child(5),.link:nth-child(6),.link:nth-child(41),.link:nth-child(77),.link:nth-child(110)').style('stroke-width','1.5px')
            d3.selectAll('#labelHarinosoDeOcho, #labelPozole, #labelTortilla, #labelAtole, #labelGalletas').style('opacity', '1');
            d3.selectAll('#labelHarinosoDeOcho, #labelPozole, #labelTortilla, #labelAtole, #labelGalletas').style('font-weight', 'normal');
            d3.selectAll('#labelHarinosoDeOcho').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelTortilla, #labelAtole, #labelGalletas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelJala')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(7),.link:nth-child(22),.link:nth-child(42),.link:nth-child(111),.link:nth-child(137)').style('opacity','1')
            d3.selectAll('.link:nth-child(7),.link:nth-child(22),.link:nth-child(42),.link:nth-child(111),.link:nth-child(137)').style('stroke-width','1.5px')
            d3.selectAll('#labelJala, #labelPozole, #labelElotes, #labelTortilla, #labelGalletas, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelJala, #labelPozole, #labelElotes, #labelTortilla, #labelGalletas, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelJala').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelElotes, #labelTortilla, #labelGalletas, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelOnaveño')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(8),.link:nth-child(138),.link:nth-child(43)').style('opacity','1')
            d3.selectAll('.link:nth-child(8),.link:nth-child(138),.link:nth-child(43)').style('stroke-width','1.5px')
            d3.selectAll('#labelOnaveño, #labelPozole, #labelTortilla, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelOnaveño, #labelPozole, #labelTortilla, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelOnaveño').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelTortilla, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTablillaDeOcho')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(61),.link:nth-child(23),.link:nth-child(44),.link:nth-child(120)').style('opacity','1')
            d3.selectAll('.link:nth-child(61),.link:nth-child(23),.link:nth-child(44),.link:nth-child(120)').style('stroke-width','1.5px')
            d3.selectAll('#labelTablillaDeOcho, #labelElotes, #labelTortilla, #labelPinole, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelTablillaDeOcho, #labelElotes, #labelTortilla, #labelPinole, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelTablillaDeOcho').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelPinole, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTabloncillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(9),.link:nth-child(24),.link:nth-child(45),.link:nth-child(121)').style('opacity','1')
            d3.selectAll('.link:nth-child(9),.link:nth-child(24),.link:nth-child(45),.link:nth-child(121)').style('stroke-width','1.5px')
             d3.selectAll('#labelTabloncillo, #labelPozole, #labelElotes, #labelTortilla, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelTabloncillo, #labelPozole, #labelElotes, #labelTortilla, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelTabloncillo').style('font-size', '11.5px');
            d3.selectAll('#labelPozole, #labelElotes, #labelTortilla, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelTabloncilloPerla')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(46),.link:nth-child(62),.link:nth-child(103)').style('opacity','1')
            d3.selectAll('.link:nth-child(46),.link:nth-child(62),.link:nth-child(103)').style('stroke-width','1.5px')
            d3.selectAll('#labelTabloncilloPerla, #labelTortilla, #labelPinole, #labelFrituras').style('opacity', '1');
            d3.selectAll('#labelTabloncilloPerla, #labelTortilla, #labelPinole, #labelFrituras').style('font-weight', 'normal');
            d3.selectAll('#labelTabloncilloPerla').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelPinole, #labelFrituras').style('font-size', '12.5px');
        })
    d3.selectAll('#labelZamoranoAmarillo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(47),.link:nth-child(63),.link:nth-child(139)').style('opacity','1')
            d3.selectAll('.link:nth-child(47),.link:nth-child(63),.link:nth-child(139)').style('stroke-width','1.5px')
            d3.selectAll('#labelZamoranoAmarillo, #labelTortilla, #labelPinole, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelZamoranoAmarillo, #labelTortilla, #labelPinole, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelZamoranoAmarillo').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelPinole, #labelForraje').style('font-size', '12.5px');
        })
    d3.selectAll('#labelApachito')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(48),.link:nth-child(25),.link:nth-child(64),.link:nth-child(78),.link:nth-child(122),.link:nth-child(125)').style('opacity','1')
            d3.selectAll('.link:nth-child(48),.link:nth-child(25),.link:nth-child(64),.link:nth-child(78),.link:nth-child(122),.link:nth-child(125)').style('stroke-width','1.5px')
            d3.selectAll('#labelApachito,#labelElotes, #labelTortilla, #labelPinole, #labelAtole, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelApachito,#labelElotes, #labelTortilla, #labelPinole, #labelAtole, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelApachito').style('font-size', '11.5px');
            d3.selectAll('#labelElotes,#labelTortilla, #labelPinole, #labelAtole, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelAzul')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(49),.link:nth-child(65),.link:nth-child(79),.link:nth-child(104),.link:nth-child(123),.link:nth-child(126),.link:nth-child(142)').style('opacity','1')
            d3.selectAll('.link:nth-child(49),.link:nth-child(65),.link:nth-child(79),.link:nth-child(104),.link:nth-child(123),.link:nth-child(126),.link:nth-child(142)').style('stroke-width','1.5px')
             d3.selectAll('#labelAzul, #labelTortilla, #labelPinole, #labelAtole, #labelFrituras, #labelBebidas, #labelPigmentos').style('opacity', '1');
            d3.selectAll('#labelAzul, #labelTortilla, #labelPinole, #labelAtole, #labelFrituras, #labelBebidas, #labelPigmentos').style('font-weight', 'normal');
            d3.selectAll('#labelAzul').style('font-size', '11.5px');
            d3.selectAll('#labelTortilla, #labelPinole, #labelAtole, #labelFrituras, #labelBebidas, #labelPigmentos').style('font-size', '12.5px');
        })
    d3.selectAll('#labelComplejoSerrano')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(50),.link:nth-child(105)').style('opacity','1')
            d3.selectAll('.link:nth-child(50),.link:nth-child(105)').style('stroke-width','1.5px')
            d3.selectAll('#labelComplejoSerrano, #labelFrituras, #labelTortilla').style('opacity', '1');
            d3.selectAll('#labelComplejoSerrano, #labelFrituras, #labelTortilla').style('font-weight', 'normal');
            d3.selectAll('#labelComplejoSerrano').style('font-size', '11.5px');
            d3.selectAll('#labelFrituras, #labelTortilla').style('font-size', '12.5px');
        })
    d3.selectAll('#labelCristalinoChihuahua')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(10)').style('opacity','1')
            d3.selectAll('.link:nth-child(10)').style('stroke-width','1.5px')
            d3.selectAll('#labelCristalinoChihuahua, #labelPozole').style('opacity', '1');
            d3.selectAll('#labelCristalinoChihuahua, #labelPozole').style('font-weight', 'normal');
            d3.selectAll('#labelCristalinoChihuahua').style('font-size', '11px');
            d3.selectAll('#labelPozole').style('font-size', '12.5px');
        })
    d3.selectAll('#labelGordo')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(112),.link:nth-child(130)').style('opacity','1')
            d3.selectAll('.link:nth-child(112),.link:nth-child(130)').style('stroke-width','1.5px')
            d3.selectAll('#labelGordo, #labelGalletas, #labelHarina').style('opacity', '1');
            d3.selectAll('#labelGordo, #labelGalletas, #labelHarina').style('font-weight', 'normal');
            d3.selectAll('#labelGordo').style('font-size', '11.5px');
            d3.selectAll('#labelGalletas, #labelHarina').style('font-size', '12.5px');
        })
   d3.selectAll('#labelAmarilloDeMontana')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelAmarilloDeMontana').style('opacity', '1');
            d3.selectAll('#labelAmarilloDeMontana').style('font-weight', 'normal');
            d3.selectAll('#labelAmarilloDeMontana').style('font-size', '11px');
        })
    d3.selectAll('#labelConejo')
        .on('mouseover', function (l) {
           d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelConejo').style('opacity', '1');
            d3.selectAll('#labelConejo').style('font-weight', 'normal');
            d3.selectAll('#labelConejo').style('font-size', '11.5px');
        })
    d3.selectAll('#labelNal-Tel')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(51),.link:nth-child(26),.link:nth-child(80),.link:nth-child(101),.link:nth-child(124)').style('opacity','1')
            d3.selectAll('.link:nth-child(51),.link:nth-child(26),.link:nth-child(80),.link:nth-child(101),.link:nth-child(124)').style('stroke-width','1.5px')
            d3.selectAll('#labelNal-Tel, #labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelBebidas').style('opacity', '1');
            d3.selectAll('#labelNal-Tel, #labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelBebidas').style('font-weight', 'normal');
            d3.selectAll('#labelNal-Tel').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelPalomitas, #labelBebidas').style('font-size', '12.5px');
        })
    d3.selectAll('#labelRatón')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('#labelRatón').style('opacity', '1');
            d3.selectAll('#labelRatón').style('font-weight', 'normal');
            d3.selectAll('#labelRatón').style('font-size', '11.5px');
        })
    d3.selectAll('#labelZapalotechico')
        .on('mouseover', function (l) {
            d3.selectAll('.link, .label').style('opacity','0.2')
            d3.selectAll('.link:nth-child(52),.link:nth-child(27),.link:nth-child(81),.link:nth-child(106),.link:nth-child(140)').style('opacity','1')
            d3.selectAll('.link:nth-child(52),.link:nth-child(27),.link:nth-child(81),.link:nth-child(106),.link:nth-child(140)').style('stroke-width','1.5px')
            d3.selectAll('#labelZapalotechico, #labelElotes, #labelTortilla, #labelAtole, #labelFrituras, #labelForraje').style('opacity', '1');
            d3.selectAll('#labelZapalotechico, #labelElotes, #labelTortilla, #labelAtole, #labelFrituras, #labelForraje').style('font-weight', 'normal');
            d3.selectAll('#labelZapalotechico').style('font-size', '11.5px');
            d3.selectAll('#labelElotes, #labelTortilla, #labelAtole, #labelFrituras, #labelForraje').style('font-size', '12.5px');
        })
})

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
    var map = {};

    function find(name, data) {
        var node = map[name], i;
        if (!node) {
            node = map[name] = data || { name: name, children: [] };
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

    return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
    var map = {},
        imports = [];

    // Compute a map from name to node.
    nodes.forEach(function (d) {
        map[d.data.name] = d;
    });

    // For each import, construct a link from the source to target node.
    nodes.forEach(function (d) {
        if (d.data.imports) d.data.imports.forEach(function (i) {
            imports.push(map[d.data.name].path(map[i]));
        });
    });

    return imports;
}
