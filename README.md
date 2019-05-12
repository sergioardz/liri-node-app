# LIRI
CLI App - Language Interpretation and Recognition Interface

### Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.  

    * [Video Demo] (screen-recording.mov)  

### LIRI Specifics - What the project does

1. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

2. To retrieve the data that will power this app, requests are sent using the `axios` package to the Bands in Town, Spotify and OMDB APIs. These Node packages are crucial for LIRI to run properly.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

### LIRI's Purpose - Why the project is useful
From a developer standpoint, LIRI wraps and reinforce the concepts learned during week 10 related to node.js

From a user standpoint, LIRI tells you all about concert information for bands, information on movies and songs (including links). It's fun!

### LIRI for dummies - How users can get started with the project
Feel free to clone the repo and make sure you install the related node packages included in the package.json file.
Once this is done, just start using the CLI app by entering any of the following commands preceded by "node liri" and followed with your search  
    * spotify-this-song  
    * movie-this  
    * concert-this  

### How does LIRI works? - Where users can get help with your project
Feel free to explore my code and do not forget to read the documentation on the different packages and APIs mentioned on the LIRI Specifics.

### Who is the main artist here - Who maintains and contributes to the project
That would be me: Sergio Rodriguez  
Feel free to contact me through Github!