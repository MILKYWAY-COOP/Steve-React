# Documentation

The main file of the application is app.js, that is where the application starts.

It allows a user to enter what they want to search and then it will return the results.

Once the results are ready (ap.js line 31) we display the result via the movies and map components

Each of those components is in the components folder, where you can see the code for each of them.

the map.js shows the map and the movies displays the movies in a grid

if you click any of the movies then you get a popout of the movie (from popout.jsx in the components folder)

each component has a styling file and the styling is limited only to those components that need it via modular styling

The app uses 3 api keys...
and all the API keys can be found and updated from the .env file (please note that this file is publically available so if you hosted the site publically then anyone could see the keys)
