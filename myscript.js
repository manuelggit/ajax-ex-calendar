$(document).ready(function() {

  var dataOggi = moment().format('DD MMMM');
  console.log('oggi è il:', dataOggi);

  var giorniGen2018 = moment("2018-01").daysInMonth();
  console.log('Gennaio ha ' + giorniGen2018 + ' giorni');

  for (var i = 1; i <= giorniGen2018; i++) {
    var date = moment('2018-01' + '-' + i, 'YYYY-MM-DD').format('DD-MM-YYYY');
    console.log(date);
  }


});
