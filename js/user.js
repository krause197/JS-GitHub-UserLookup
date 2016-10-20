var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getDetails = function (username, showDetails) {
  $.get('https://api.github.com/users/'+username+'?access_token='+apiKey).then(function(response) {
    console.log(response);
    showDetails(response.name);
    console.log(response.name);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

Search.prototype.getRepos = function (username) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' +apiKey).then(function(response){
    console.log(response);
    for (var repo of response) {
      console.log(repo.name);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
