var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getDetails = function (username, showDetails, userError) {
  $.get('https://api.github.com/users/'+username+'?access_token='+apiKey).then(function(response) {
    showDetails(response.name, response.login, response.html_url, response.location, response.public_repos, response.followers);
  }).fail(function(error) {
    userError();
  });
};

Search.prototype.getRepos = function (username, showRepos, repoError) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' +apiKey).then(function(response){
    for (var repo of response) {
      var description = repo.description;
      if (description === null) {
        description = "No Description Provided";
      }
      var language = repo.language;
      if (language === null) {
        language = "No Language Provided";
      }
      showRepos(repo.name, repo.html_url, description, language);
    }
  }).fail(function(error){
    repoError();
  });
};

exports.searchModule = Search;
