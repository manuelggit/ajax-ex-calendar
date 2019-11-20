$(document).ready(function() {

  var dataOggi = moment().format('DD MMMM');
  console.log('oggi è il:', dataOggi);

  var giorniGen2018 = moment("2018-01").daysInMonth();
  console.log('Gennaio ha ' + giorniGen2018 + ' giorni');

});
