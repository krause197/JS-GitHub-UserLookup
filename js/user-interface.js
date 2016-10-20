var Search = require('./../js/user.js').searchModule;

var showDetails = function(name) {
  $('#userDetails').html('<h3>'+name+'</h3>');
};

$(document).ready(function() {
  var newSearch = new Search();
  $('#searchButton').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    newSearch.getDetails(username, showDetails);
    newSearch.getRepos(username);
  });
});
