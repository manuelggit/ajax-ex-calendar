$(document).ready(function() {

  chiamaAjax();

  //FUNZIONE DI CHIAMATA DELL'AJAX

  function chiamaAjax(){

    $.ajax ({
      url:"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method:'GET',
      success: function (festeapi) {
        var festivita = festeapi.response; // mi ricavo le festivita dall'api
        console.log(festivita); // è un array di festivita

        giorniDelMese();
        festeDelMese();

        // FUNZIONI ALL'INTERNO DELLA FUNZIONE DI CHIAMATA DELL'AJAX

        // funzione per trovare i giorni in un mese
        function giorniDelMese(){

          var giorniGen2018 = moment("2018-01").daysInMonth(); // quanti giorni ci sono a gennaio 2018?

          for (var i = 1; i <= giorniGen2018; i++) { //ciclo il mese di gennaio

            var mese = 1;
            var giorno = moment().date(i).month(1).format('DD MMMM')
            var dataGiorno = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD'); // lo formatto com'è nell'api
            console.log(giorno, dataGiorno); // mi stampo il giorno sia in lettere che in cifre
            $('#gennaio').append("<div data-giorno='"+dataGiorno+"'>" + giorno + "</div>"); // stampo in pagina il calendario con gli attribuiti corrispondenti (cioè dataGiorno)
          }
        }

        // funzione per trovare le festivita in un mese
        function festeDelMese(){

          for (var j = 0; j < festivita.length; j++) { // attraverso l'array di festivita
            var festaNome = festivita[j].name // mi ricavo il nome delle festivita
            var festaData = festivita[j].date // mi ricavo le date delle festivita
            console.log('è festa: ' + festaNome, festaData); // stampo in console nomi e date delle feste

            var festaSelezionata = $('div[data-giorno="'+ festaData +'"]');
            festaSelezionata.addClass('festa'); //aggiungo la classe festa ai div con attributo festaData

            if(festaSelezionata){
              festaSelezionata.append(" - " + festaNome); //aggiungo il nome della festa accanto alla festa
            }
          }
        }

      }

    });

  }




});
