$(document).ready(function(){
  $("buttton").click(function(){
    $("p1").fadeToggle(1000);
    $("p2").fadeToggle(2000);
    $("p3").fadeToggle(3000);
    $("p4").fadeToggle(4000);
    $("p5").fadeToggle(5000);
    $("p6").fadeToggle(5900);
    $("p7").fadeToggle(6800);
    $("p8").fadeToggle(7600);


  });
});

$(document).ready(function(){
    $("h4").click(function(){
      $("p9").fadeToggle(1100);
      $("p10").fadeToggle(1200);
      $("p11").fadeToggle(1300);
      $("p12").fadeToggle(1400);
      $("p13").fadeToggle(1500);
      $("p14").fadeToggle(1600);
      $("p15").fadeToggle(1700);
      $("p16").fadeToggle(1800);
      $("p17").fadeToggle(1900);
      $("p18").fadeToggle(2000);
      $("p19").fadeToggle(2100);
      $("p20").fadeToggle(2200);
      $("p21").fadeToggle(2300);
      $("p22").fadeToggle(2400);
      $("p23").fadeToggle(2500);
      $("p24").fadeToggle(2600);
      $("p25").fadeToggle(2700);
      $("p26").fadeToggle(2800);
      $("p27").fadeToggle(2900);
      $("p28").fadeToggle(3000);
      $("p29").fadeToggle(3100);
      $("p30").fadeToggle(3200);
      $("p31").fadeToggle(3300);
      $("p32").fadeToggle(3400);
      $("p33").fadeToggle(3500);
      $("p34").fadeToggle(3600);
      $("p35").fadeToggle(3700);
      $("p36").fadeToggle(3800);

    });
  });
  $(document).ready(function() {
     $('#meuFormulario').on('submit', function(e) {
       e.preventDefault();
       var len1 = $('#usuario').val();
       var len2 = $('#senha').val();
       if (len1 == 'Rogerio' && len2 == '123') {
         localStorage.setItem("usuario", $('#usuario').val());
         localStorage.setItem("senha", $('#senha').val());

         this.submit();
       } else {
         alert("Acesso NEGADO!!!")
       }
     });
   });
   $(document).ready(function() {



     $('#form1').on('submit', function(e) {

       e.preventDefault();



       var api_url = 'https://api.linkpreview.net'

       var key = '5ccb9525ad6e74755159c3ffa27fa10e40287ac64f332' // real

       $.ajax({

         url: api_url + "?key=" + key + "&q=" + $("#endereco").val(),

         contentType: "application/json",

         dataType: 'json',

         success: function(result) {

           $("#p1").text(result.title);

           $("#p2").text(result.description);

           $('#p3').attr('src', result.image);

           $("#p4").text(result.url);

         }

       });



     });



   });
