//used get JSON Jquery to fetch the data from an API
// testing out some stufffff
// more stufffff
// stufff

$(document).ready(function(){

var getQuote = function() {
$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json){
    var $quoteText = '"'+json.quoteText+'"';
    var $quoteAuthero ='- ' + json.quoteAuthor;
    console.log(json);

    $('#quotegenerator').html('<br>' + $quoteText + '<br/><br/><br/><br/><br/>');
    $('#quotegenerator').append($quoteAuthero);
  })
}

$('#quoteButton').on('click', getQuote);


});

