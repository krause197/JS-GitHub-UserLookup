var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getDetails = function (username, showDetails) {
  $.get('https://api.github.com/users/'+username+'?access_token='+apiKey).then(function(response) {
    showDetails(response.name, response.login, response.html_url, response.location, response.public_repos, response.repos_url, response.followers);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

Search.prototype.getRepos = function (username, showRepos) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' +apiKey).then(function(response){
    for (var repo of response) {
      showRepos(repo.name, repo.html_url, repo.description, repo.language);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
