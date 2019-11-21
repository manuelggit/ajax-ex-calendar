$(document).ready(function() {

  // var dataOggi = moment().format('DD MMMM');
  // console.log('oggi è il:', dataOggi);



  $.ajax ({
    url:"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
    method:'GET',
    success: function (festeapi) {
      var festivita = festeapi.response;
      console.log(festivita); // è un array di festivita

      var giorniGen2018 = moment("2018-01").daysInMonth();
      // console.log('Gennaio ha ' + giorniGen2018 + ' giorni');

      for (var j = 0; j < festivita.length; j++) { // attraverso l'array di festivita
        var festaNome = festivita[j].name
        console.log(festaNome);
        var festaData = festivita[j].date
        console.log(festaData);
      }

      for (var i = 1; i <= giorniGen2018; i++) {

        var giorno = moment().date(i).month(0).format('DD MMMM')
        var dataGiorno = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD'); // lo formatto com'è nell'api
        console.log(giorno, dataGiorno);
        $('#gennaio').append("<div data-giorno='"+dataGiorno+"'>" + giorno + "</div>");


      }




    }

  });


});
