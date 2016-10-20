var Search = require('./../js/user.js').searchModule;

var showDetails = function(name, login, html_url, location, public_repos, repos_url, followers) {
  $('#userDetails').append(
    '<h3>'+name+'</h3>' +
    '<h3>'+login+'</h3>' +
    '<h4>Located in: '+location+'</h4>' +
    '<a href="'+repos_url+'"><h4>Total repos: '+public_repos+'</h4></a>' +
    '<h4>Followers: '+followers+'</h4>'
  );
};

var showRepos = function(name, html_url, description, language) {
  $('#userDetails').append(
    'div class="userRepo">'+
      '<a href="'+html_url+'"><h3>'+name+'</h3></a>'+
      '<h3>Description: '+description+'</h3>'+
      '<h4>Language: '+language+'</h4>'+
    '</div>'
  );
};

$(document).ready(function() {
  var newSearch = new Search();
  $('#searchButton').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    newSearch.getDetails(username, showDetails);
    newSearch.getRepos(username, showRepos);
  });
});
