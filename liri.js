// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

// npm node-spotify-api
// Usage with promises
// This package also optionally works with promises. Just omit the callback parameter and the search method returns a promise object containing the response: 
var Spotify = require('node-spotify-api');

// code to access keys information

function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: 'All the Small Things', limit: 1 })
        .then(function (response) {
            console.log("Artist: " + response.tracks.items[0].album.artists[0].name +
                "\nSong: " + response.tracks.items[0].name +
                "\nSong Link: " + response.tracks.items[0].external_urls.spotify +
                "\nAlbum: " + response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function options(commandData, functionData) {
    switch(commandData) {
        case 'spotify-this-song' :
        spotifyThisSong();
        break;
        // need to add default case later
    }
}

function runApp(argOne, argTwo) {
    options(argOne, argTwo);
}

runApp(process.argv[2], process.argv[3]);