var Search = require('./../js/user.js').searchModule;

$(document).ready(function() {
  var newSearch = new Search();
  $('#searchButton').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    newSearch.getDetails(username);
    newSearch.getRepos(username);
  });
});
