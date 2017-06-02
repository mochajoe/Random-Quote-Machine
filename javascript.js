


var quoteArray = [];

$(document).ready(function(){
  
var getQuote = function() {
$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json){
  console.log(json);
  })
}

$('#quoteButton').on('click', function(){
  console.log('shit');
} );

});




