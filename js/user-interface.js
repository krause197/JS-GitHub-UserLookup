var Search = require('./../js/user.js').searchModule;

var showDetails = function(name, login, html_url, location, public_repos, followers) {
  $('#userDetails').html(
    '<h3>'+name+'</h3>' +
    '<h3>'+login+'</h3>' +
    '<h4>'+location+'</h4>' +
    '<h4>'+public_repos+' Repositories</h4>' +
    '<h4>'+followers+' Followers</h4>'
  );
};

var showRepos = function(name, html_url, description, language) {
  $('#userRepos').append(
    'div class="userRepo col-sm-4">'+
      '<a href="'+html_url+'"><h3>'+name+'</h3></a>'+
      '<h3>Description:</h3><p>'+description+'</p>'+
      '<h4>Language:</h4></p>'+language+'</p>'+
    '</div>'
  );
};

var userError = function() {
  $('#userDetails').html(
    '<h3>UserName Not Found</h3>'
  );
};

var repoError = function() {
  $('#userRepos').html(
    '<h3> No Repositories Found for This User</h3>'
  );
};

$(document).ready(function() {
  var newSearch = new Search();
  $('#searchButton').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#userRepos').children().remove();
    newSearch.getDetails(username, showDetails, userError);
    newSearch.getRepos(username, showRepos, repoError);
  });
});
