// Cache selectors
var topMenu = $(".menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(window).on("load", function () {



    $('.hojas div').css('opacity','1');
    $('#Chiles_secos').css('display','none');
    $('#Chiles_frescos').css('display','flex');
    
     $('.cotas-desk-list').css('flex-direction','column');
    $('.hoja-sinonimos').attr('src','https://x-data.mx/sabordeladata/img/hoja-azul-50w.png');
    $('.hoja-sinonimos').css('width','20px');
    $('.hoja-sinonimos').css('right','0');
    $('.hoja-sinonimos').css('margin-right','6px');
    $('.checkbox-chileswitch').attr('checked','checked');
     $("input:checkbox:checked").attr("checked", "checked");


  
  

  // $('.welcome').css('background-color', 'transparent');
  $('#welcome-ir-abajo').click(function(){
    window.scrollBy(0, 1000);
  })
  $( ".boton-arreglo" ).mouseover(function() {
    // $('.boton-arreglo').removeClass('boton-arreglo-d');
    $('.boton-arreglo').removeClass('boton-arreglo-c');
    $('.boton-arreglo').css('opacity','.4');
    $(this).css('opacity','1');
  });
  $( ".boton-arreglo" ).mouseout(function() {
    $('.boton-arreglo').addClass('boton-arreglo-d');
    $('.boton-arreglo').css('opacity','1');
  });

  $('.hoja-fondo').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
    setTimeout(() => {
      $('.box').css('display', 'block');
      $('.hojas').css('display', 'block');
    }, 200); 
  });
  $('texto-puntos').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      setTimeout(() => {
        $('.texto-puntos').css('animation-name','null')
      }, 200); 
    });

  // platillos
    $('#close-platillos-desk').on('click',()=> {
      $('.detalle-desk-platillos').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-platillos-desk').on('click',()=>{
      $('.detalle-desk-platillos').toggle("slide");
       $('body').addClass('no-scroll');
    });

    $('#close-platillos-mob').on('click',()=> {
      $('.detalle-mob-platillos').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-platillos-mob').on('click',()=>{
      $('.detalle-mob-platillos').toggle("slide");
       $('body').addClass('no-scroll');
    });

  // bebidas
    $('#close-bebidas-desk').on('click',()=> {
      $('.detalle-desk-bebidas').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-bebidas-desk').on('click',()=>{
      $('.detalle-desk-bebidas').toggle("slide");
       $('body').addClass('no-scroll');
    });

    $('#close-bebidas-mob').on('click',()=> {
      $('.detalle-mob-bebidas').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-bebidas-mob').on('click',()=>{
      $('.detalle-mob-bebidas').toggle("slide");
       $('body').addClass('no-scroll');
    });

  // postres
    $('#close-postres-desk').on('click',()=> {
      $('.detalle-desk-postres').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-postres-desk').on('click',()=>{
      $('.detalle-desk-postres').toggle("slide");
       $('body').addClass('no-scroll');
    });

    $('#close-postres-mob').on('click',()=> {
      $('.detalle-mob-postres').toggle("slide");
      $('body').removeClass('no-scroll');
    });

    $('#open-postres-mob').on('click',()=>{
      $('.detalle-mob-postres').toggle("slide");
       $('body').addClass('no-scroll');
    });
  $(window).scrollTop(0);

    
    
});


$(window).on('scroll', function (e) {

  var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;

   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");



  var top = $(window).scrollTop() + $(window).height(),
  hojaVisible = top < $('#maiz').offset().top;
  
  if (hojaVisible) {
    $('.hojas div').css('opacity','1');
  }
  else{
    $('.hojas div').css('opacity','0.6');
  }

  var cuadroBebidas = top > $('.cuadro-bebidas').offset().top;
  var cuadroBebidasNo = top < $('.cuadro-bebidas').offset().top;
  var cuadroPostres = top > $('.cuadro-postres').offset().top;
  
  if(cuadroPostres){
    // $('.s-puntos-desk').css('background-color','transparent');
    $('.container-beb').css('display','none');
    $('.container-pl').css('display','none');
    $('.container-pos').css('display','block');


    $('.texto-puntos').removeClass('textoBebidas');
       $('.texto-puntos').removeClass('textoPlatillos');
       $('.texto-puntos').addClass('textoPostres');

       $('.container-pos').addClass('graficaPostres');


      $('#puntos-prep-titulo').html('Postres');

      $('#puntos-prep-p').html('¿Qué tienen en común los buñuelos y los muéganos? Averígualo en esta selección de postres tradicionales mexicanos donde podrás visualizar la cantidad de ingredientes que se utiliza en cada uno de ellos.');

    
    $('#ins-desktop').attr('src','img/ins-postre.png');
    $('#open-platillos-desk').removeClass('btn-platillos');
    $('#open-platillos-desk').removeClass('btn-bebidas');
    $('#open-platillos-desk').addClass('btn-postres');
    $('#detalles-desk').attr('src','img/postres-desk-detalle.png');
    $('#detalles-desk').css('width','55%');
    $('.my-modal-content').css('text-align','left');
    $('#detalles-desk').css('margin','0');

    
  }
  else if (cuadroBebidas) {
    // $('.s-puntos-desk').css('background-color','transparent');
    $('.container-pos').css('display','none');
    $('.container-pl').css('display','none');
    $('.container-beb').css('display','block');

       $('.container-beb').addClass('graficaBebidas');

      $('.texto-puntos').removeClass('textoPlatillos');
      $('.texto-puntos').removeClass('textoPostres');
      $('.texto-puntos').addClass('textoBebidas');


    

    $('#puntos-prep-titulo').html('Bebidas');

    $('#puntos-prep-p').html('Hay bebidas representativas de la gastronomía mexicana que se preparan con más de 5 ingredientes diferentes, conoce aquí cuáles son y cómo esos mismos ingredientes se utilizan en diferentes recetas.');

    
      $('#ins-desktop').attr('src','img/ins-bebidas.png');
      $('#open-platillos-desk').removeClass('btn-platillos');
      $('#open-platillos-desk').removeClass('btn-postres');
      $('#open-platillos-desk').addClass('btn-bebidas');
       $('#detalles-desk').attr('src','img/detalle-desktop-bebidas.png');
      $('#detalles-desk').css('width','80%');
      $('#detalles-desk').css('margin-left','2rem');
      $('.my-modal-content').css('text-align','left');
    
  }
  else{
    // $('.s-puntos-desk').css('background-color','lavender');
    $('.container-pos').css('display','none');
      $('.container-beb').css('display','none');
      $('.container-pl').css('display','block');
   $('.container-pl').addClass('graficaPlatillos');


    $('.texto-puntos').removeClass('textoBebidas');
    $('.texto-puntos').removeClass('textoPostres');
    $('.texto-puntos').addClass('textoPlatillos');

    
    
    $('#puntos-prep-titulo').html('Platillos');

    $('#puntos-prep-p').html('Desde los deliciosos chilaquiles hasta el tradicional pozole, descubre una selección de ingredientes con los cuales se preparan más de 70 platillos típicos de México.');

    $('#ins-desktop').attr('src','img/platillo-ins-mob-330w.png');
    $('#open-platillos-desk').removeClass('btn-postres');
    $('#open-platillos-desk').removeClass('btn-bebidas');
    $('#open-platillos-desk').addClass('btn-platillos');
    $('#cazuela-mob-desk').attr('src','img/cazuela-220w.png');

     $('#detalles-desk').attr('src','img/detalle-desktop.png');
    $('#detalles-desk').css('width','150%');



    
    // var cuadroBebidasNo = top < $('.cuadro-bebidas').offset().top;
    // var cuadroPostres = top > $('.cuadro-postres').offset().top && top < $('.cuadro-bebidas').offset().top;

    // if (cuadroPostres) {
    //   $('.s-puntos-desk').css('background-color','pink');
    //   console.log(cuadroPostres)
    //   // alert('visibleBebidas');
    // }
    // else{
    //   // alert('No visibleBebidas');
    //   // $('.hojas div').css('opacity','0');
    //   $('.s-puntos-desk').css('background-color','lavender');
    //   console.log(cuadroPostres)
    // }
  }

    
  
  
 

  // Para que vean la animación completa :)
  if(pageYOffset==0){
      $('.box').css('display', 'none');
      $('.hojas').css('display', 'none');
  }
  // Aparece Welcome (lo azul)
  else if(pageYOffset<200){
    $('.hoja-fondo').css('animation-name','null')
    $('.hoja-arreglo').css('animation-name','null')
    $('.welcome').css('opacity',1);
    $('.welcome-div').css('width','100%');
    $('.mov').css('animation-name','null');
    $('.boton-arreglo').removeClass('boton-arreglo-c');
  }
  // Empieza animación y aparece el home (arena)
  else if(pageYOffset>200 && pageYOffset < 5400){
    $('.hoja-fondo').css('animation-name','fondo')
    $('.hoja-arreglo').css('animation-name','banderaAnim')
    $('.welcome').css('opacity',0)
    $('.welcome-div').css('width','20%');
    $('.boton-arreglo').addClass('boton-arreglo-c');
    $('.boton-arreglo').addClass('boton-arreglo-c');
    for(i=0;i<179;i++){
       $('#a'+i).css('animation-name','a'+i);
    }


    // $('.texto-puntos').removeClass('textoBebidas');
    // $('.texto-puntos').removeClass('textoPostres');
    // $('.texto-puntos').addClass('textoPlatillos');

    // $('.prep-col2-graf').removeClass('graficaBebidas');
    // $('.prep-col2-graf').removeClass('graficaPostres');
    // $('.prep-col2-graf').addClass('graficaPlatillos');
    // setTimeout(() => {
    //         $('.prep-col2-graf').attr('src','img/grafica-platillos.png');
    // }, 1000)
    // $('#ins-desktop').attr('src','img/platillo-ins-mob-330w.png');
    // $('#open-platillos-desk').removeClass('btn-postres');
    // $('#open-platillos-desk').removeClass('btn-bebidas');
    // $('#open-platillos-desk').addClass('btn-platillos');
    // $('#cazuela-mob-desk').attr('src','img/cazuela-220w.png');

    //  $('#detalles-desk').attr('src','img/detalle-desktop.png');
    // $('#detalles-desk').css('width','150%');


    // setTimeout(() => {
    //     $('#puntos-prep-titulo').html('Platillos');
    //     $('#puntos-prep-p').html('Desde los deliciosos chilaquiles hasta el tradicional pozole, descubre una selección de ingredientes con los cuales se preparan más de 70 platillos típicos de México.');
    // }, 500);
    
  }
  // else if (pageYOffset >= 5400 && pageYOffset < 6400){
  //   // alert(pageYOffset)
  //   $('.texto-puntos').removeClass('textoPlatillos');
  //   $('.texto-puntos').removeClass('textoPostres');
  //   $('.texto-puntos').addClass('textoBebidas');

  //   $('.prep-col2-graf').removeClass('graficaPostres');
  //   $('.prep-col2-graf').removeClass('graficaPlatillos');
  //   $('.prep-col2-graf').addClass('graficaBebidas');
  //   setTimeout(() => {
  //           $('.prep-col2-graf').attr('src','img/grafica-bebidas.png');
  //   }, 1000)
  //   $('#ins-desktop').attr('src','img/ins-bebidas.png');
  //   $('#open-platillos-desk').removeClass('btn-platillos');
  //   $('#open-platillos-desk').removeClass('btn-postres');
  //   $('#open-platillos-desk').addClass('btn-bebidas');

  //   $('#cazuela-mob-desk').attr('src','img/jarron-220w.png');

  //    $('#detalles-desk').attr('src','img/detalle-desktop-bebidas.png');
  //   $('#detalles-desk').css('width','80%');
  //   $('#detalles-desk').css('margin-left','2rem');
  //   $('.my-modal-content').css('text-align','left');



  //   setTimeout(() => {
  //           $('#puntos-prep-titulo').html('Bebidas');
  //           $('#puntos-prep-p').html('Hay bebidas representativas de la gastronomía mexicana que se preparan con más de 5 ingredientes diferentes, conoce aquí cuáles son y cómo esos mismos ingredientes se utilizan en diferentes recetas.');
  //   }, 500); 
  // }
  //  else if (pageYOffset >= 6400){
  //   // alert(pageYOffset)
  //   $('.texto-puntos').removeClass('textoBebidas');
  //   $('.texto-puntos').removeClass('textoPlatillos');
  //   $('.texto-puntos').addClass('textoPostres');

  //   $('.prep-col2-graf').removeClass('graficaBebidas');
  //   $('.prep-col2-graf').removeClass('graficaPlatillos');
  //   $('.prep-col2-graf').addClass('graficaPostres');

  //   setTimeout(() => {
  //           $('.prep-col2-graf').attr('src','img/grafica-postres.png');
  //   }, 1000)
  //   $('#ins-desktop').attr('src','img/ins-postre.png');
  //   $('#open-platillos-desk').removeClass('btn-platillos');
  //   $('#open-platillos-desk').removeClass('btn-bebidas');
  //   $('#open-platillos-desk').addClass('btn-postres');
  //   $('#cazuela-mob-desk').attr('src','img/pepitoria-220w.png');
  //   $('#detalles-desk').attr('src','img/postres-desk-detalle.png');
  //   $('#detalles-desk').css('width','55%');
  //   $('.my-modal-content').css('text-align','left');
  //   $('#detalles-desk').css('margin','0');



  //   setTimeout(() => {
  //       $('#puntos-prep-titulo').html('Postres');
  //       $('#puntos-prep-p').html('¿Qué tienen en común los buñuelos y los muéganos? Averígualo en esta selección de postres tradicionales mexicanos donde podrás visualizar la cantidad de ingredientes que se utiliza en cada uno de ellos.');
  //   }, 500); 
    
  // }

  // var top = $(window).scrollTop() + $(window).height();
  // // console.log(isVisible);
  // if(top < $('#bandera-bebidas-texto').offset().top){
  //   $('#puntos-prep-titulo').html('PLATILLOS');
  //   $('#puntos-prep-p').html('Platillo Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  // }
  // else if (top > $('#bandera-bebidas-texto').offset().top && top < $('#bandera-postres-texto').offset().top){
  //   $('#puntos-prep-titulo').html('BEBIDAS');
  //   $('#puntos-prep-p').html('Bebidas Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  // }
  // else if (top > $('#bandera-postres-texto').offset().top){
  //   $('#puntos-prep-titulo').html('POSTRES');
  //   $('#puntos-prep-p').html('Postres Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  // }

 
  // else if(top > $('#bandera-bebidas-texto').offset().top && top < $('#bandera-postres-texto').offset().top){
  //   $('#puntos-prep-titulo').html('BEBIDAS');
  //   $('#puntos-prep-p').html('Bebidas Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  //   $('.texto-puntos').css('animation-name','textoPuntos');
  //   console.log('bebidas');
  // }

  // if(top < $('#bandera-bebidas-texto').offset().top &&  top >= $('#bandera-postres-texto').offset().top){
  //   $('#puntos-prep-titulo').html('PLATILLOS');
  //   $('#puntos-prep-p').html('Platillos Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  //   $('.texto-puntos').css('animation-name','null')
  //   console.log('platillos 2');
  // }
  // else if(top > $('#bandera-postres-texto').offset().top){
  //   $('#puntos-prep-titulo').html('POSTRES');
  //   $('#puntos-prep-p').html('Postres Desde los deliciosos chilaquiles hasta el tradicional pozole, <b>descubre una selección de 70 platillos típicos de México.</b> Conoce');
  //   $('.texto-puntos').css('animation-name','textoPuntos');
  // }

});

function tabsChile(tabChileName) {
  if($('#Chiles_frescos').is(':visible')){
    $('#Chiles_frescos').css('display','none');
    $('#Chiles_secos').css('display','flex');
    $('.cotas-desk-list').css('flex-direction','column-reverse');
    $('.hoja-sinonimos').attr('src','https://x-data.mx/sabordeladata/img/hoja-rosa-50w.png');
    $('.hoja-sinonimos').css('width','30px');
    $('.hoja-sinonimos').css('right','6px');
    $('.hoja-sinonimos').css('margin-right','0');
    $('#chile-cotas-img').attr('src','https://x-data.mx/sabordeladata/img/cotas-seco-700w.png');
  }
  else if($('#Chiles_secos').is(':visible')){
    $('#Chiles_secos').css('display','none');
    $('#Chiles_frescos').css('display','flex');
    
     $('.cotas-desk-list').css('flex-direction','column');
    $('.hoja-sinonimos').attr('src','https://x-data.mx/sabordeladata/img/hoja-azul-50w.png');
    $('.hoja-sinonimos').css('width','20px');
    $('.hoja-sinonimos').css('right','0');
    $('.hoja-sinonimos').css('margin-right','6px');
    $('#chile-cotas-img').attr('src','https://x-data.mx/sabordeladata/img/cotas-fresco-700w.png');
  }
}

function english() {
  window.open("https://x-data.mx/sabordeladata/en","_self")
}

// function tabsChileD(tabChileName) {
//   if($('#Chiles_frescosD').is(':visible')){
//     $('#Chiles_frescosD').css('display','none');
//     $('#Chiles_secosD').css('display','block');
//     $('.button-frescosD').removeClass('active');
//     $('.button-secosD').addClass('active');
//     $('.hoja').attr('src','img/hoja-rosa-50w.png');
//     $('.cotas-desk-list').css('flex-direction','column-reverse');
//   }
//   else if($('#Chiles_secosD').is(':visible')){
//     console.log('secos');
//     $('#Chiles_secosD').css('display','none');
//     $('#Chiles_frescosD').css('display','block');
//     $('.button-secosD').removeClass('active');
//     $('.button-frescosD').addClass('active');
//     $('.hoja').attr('src','img/hoja-azul-50w.png');
//     $('.cotas-desk-list').css('flex-direction','column');
//   }
// }

// Modal de preparaciones en mobile
/* This script supports IE9+ */
(function() {
  /* Opening modal window function */
  function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName('jsModalTrigger');

      /* Set onclick event handler for all trigger elements */
      for(var i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            var target = this.getAttribute('href').substr(1);
            var modalWindow = document.getElementById(target);

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
      $('body').addClass('no-scroll');

  }

  function closeModal(){
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   

    /* Set onclick event handler for modal overlay */
      for(var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          var modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  
      $('body').removeClass('no-scroll');

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
}());
