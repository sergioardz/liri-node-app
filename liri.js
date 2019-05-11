// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

// code to fetch query contents with more than 1 word
var nodeArgs = process.argv;

var queryContent = "";

for (i = 3; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        queryContent = queryContent + "+" + nodeArgs[i];
    }
    else {
        queryContent += nodeArgs[i];
    }
}

// npm node-spotify-api
// Usage with promises
// This package also optionally works with promises. Just omit the callback parameter and the search method returns a promise object containing the response: 
var Spotify = require('node-spotify-api');

// code for function when command is spotify this song
function spotifyThisSong(songName) {
    var spotify = new Spotify(keys.spotify);

    // Making sure that there is a value for the query, and the code is set to show 3 results, while making tests even if the search type is track, is not always fetching the expected results
    if (songName) {
        spotify
            .search({ type: 'track', query: songName, limit: 1 })
            .then(function (response) {
                let song = response.tracks.items;
                console.log("Artist: " + song[0].album.artists[0].name +
                    "\nSong: " + song[0].name +
                    "\nSong Link: " + song[0].external_urls.spotify +
                    "\nAlbum: " + song[0].album.name +
                    "\n-----------------------------------------------------------------");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    // If there is no query at all, the default song to display is The Sign by Ace of Base
    else {
        spotify
            .search({ type: 'track', query: "The Sign Ace of Base", limit: 1 })
            .then(function (response) {
                let song = response.tracks.items;
                console.log("Artist: " + song[0].album.artists[0].name +
                    "\nSong: " + song[0].name +
                    "\nSong Link: " + song[0].external_urls.spotify +
                    "\nAlbum: " + song[0].album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

// code for function to choose a specific command when using the app
function options(commandData, functionData) {
    switch (commandData) {
        case 'spotify-this-song':
            spotifyThisSong(functionData);
            break;
    }
}

// code for main function that runs the app
function runApp(argOne, argTwo) {
    options(argOne, argTwo);
}

// calling main function
runApp(process.argv[2], queryContent);