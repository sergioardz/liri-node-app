// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

// code to require axios package
var axios = require("axios");

// code to fetch query contents with more than 1 word
var queryContent = process.argv.slice(3).join("+");

// npm node-spotify-api
// Usage with promises
// This package also optionally works with promises. Just omit the callback parameter and the search method returns a promise object containing the response: 
var Spotify = require('node-spotify-api');

// code for function when command is spotify this song
function spotifyThisSong(songName) {
    var spotify = new Spotify(keys.spotify);

    // Making sure that there is a value for the query
    if (songName) {
        spotify
            .search({ type: 'track', query: songName, limit: 1 })
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

// code for function when command is movie this
function fetchMovie(movieName) {

    // Making sure that there is a value for the query
    if (movieName) {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios
            .get(queryUrl)
            .then(
                function (response) {
                    var info = response.data;
                    console.log(
                        "* Title of the movie: " + info.Title +
                        "\n* Year the movie came out: " + info.Year +
                        "\n* IMDB Rating of the movie: " + info.imdbRating +
                        "\n* Country where the movie was produced: " + info.Country +
                        "\n* Language(s) of the movie: " + info.Language +
                        "\n* Plot of the movie: " + info.Plot +
                        "\n* Actors in the movie: " + info.Actors);
                    if (info.Ratings.length > 1) {
                        if (info.Ratings[1].Source === "Rotten Tomatoes") {
                            console.log(
                                "* Rotten Tomatoes Rating of the movie: " + info.Ratings[1].Value);
                        }
                    }
                    else {
                        console.log("--- No Rotten Tomatoes Rating available for " + info.Title + " ---");
                    }
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }
    // If there is no query at all, the default movie to display is Mr. Nobody
    else {
        var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody+&y=&plot=short&apikey=trilogy";
        axios
            .get(queryUrl)
            .then(
                function (response) {
                    var info = response.data;
                    console.log(
                        "* Title of the movie: " + info.Title +
                        "\n* Year the movie came out: " + info.Year +
                        "\n* IMDB Rating of the movie: " + info.imdbRating +
                        "\n* Country where the movie was produced: " + info.Country +
                        "\n* Language(s) of the movie: " + info.Language +
                        "\n* Plot of the movie: " + info.Plot +
                        "\n* Actors in the movie: " + info.Actors);
                    if (info.Ratings.length > 1) {
                        if (info.Ratings[1].Source === "Rotten Tomatoes") {
                            console.log(
                                "* Rotten Tomatoes Rating of the movie: " + info.Ratings[1].Value);
                        }
                    }
                    else {
                        console.log("--- No Rotten Tomatoes Rating available for " + info.Title + " ---");
                    }
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

}

// code for function to choose a specific command when using the app
function options(commandData, functionData) {
    switch (commandData) {
        case 'spotify-this-song':
            spotifyThisSong(functionData);
            break;
        case 'movie-this':
            fetchMovie(functionData);
            break;
    }
}

// code for main function that runs the app
function runApp(argOne, argTwo) {
    options(argOne, argTwo);
}

// calling main function
runApp(process.argv[2], queryContent);