## Project Name
GitHub UserLookup - Epicodus JavaScript Project 1

### Features
This application allows users to search for a username in GitHub and return the username's details and repositories.  

#### Author
Eric Krause


## Setup/Installation Requirements
 Clone the repository at: [https://github.com/krause197/JS-GitHub-UserLookup](https://github.com/krause197/JS-GitHub-UserLookup).
* In the console enter: $ git clone https://github.com/krause197/JS-GitHub-UserLookup
* Then change to the directory: $ cd JS-GitHub-UserLookup
* Run: $ npm init
* Run: $ bower init
* Run: $ npm install
* Input GitHub API Key in the .env file (see next section)
* Run: $ gulp serve

## API KEY INSTRUCTIONS
* Sign into GitHub
* Go to Settings
* Click Personal Access Tokens
* Click Generate New Token
* Write Token Description
* Click Generate Token
* In Project Folder, create file called .env in top level of directory
* Add line "exports.apiKey = 'YOUR_API_KEY';" and save file




## Specifications

|Behavior|Input|Output|
|---|---|---|
|The application will take the username of a GitHub user.| 'krause197' | 'krause197' |
|The application will return all public repositories of username. | 'krause197' | 'JS-GitHub-UserLookup' |
|The application will return descriptions of repositories. | 'krause197' | 'Epicodus JavaScript Project 1' |


## Support and contact details

Git Username of Author: krause197

## Technologies Used

JavaScript/JQuery, CSS/SASS, Node JS, NPM, Gulp, Bower, GitHub API

### License

This work can be used under the MIT License.
Copyright (c) 2016 Eric Krause
