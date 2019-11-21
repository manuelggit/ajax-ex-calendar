$(document).ready(function() {

  // var dataOggi = moment().format('DD MMMM');
  // console.log('oggi è il:', dataOggi);



  $.ajax ({
    url:"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
    method:'GET',
    success: function (festeapi) {
      var festivita = festeapi.response;
      console.log(festa); // è un array di festivita

      var giorniGen2018 = moment("2018-01").daysInMonth();
      console.log('Gennaio ha ' + giorniGen2018 + ' giorni');

      for (var i = 1; i <= giorniGen2018; i++) {

        var giorno = moment().date(i).month(0).format('DD MMMM')
        console.log(giorno);
        $('#gennaio').append("<div>" + giorno + "</div>");

      }

      for (var j = 0; j < festivita.length; j++) { // attraverso l'array di festivita
        var festa = festivita[j].name
        console.log(festa);

      }

    }

  });


});
