## Project Title: AlbumSoochee

## Project Description:

This React app is designed to manage albums with various features, including fetching and displaying albums from an API, adding albums, updating album details, and deleting albums. It is built as a single-page application, providing a seamless user experience for managing albums.

## Project Features:

Fetch Albums from API:

The app fetches a list of albums from the provided API (https://jsonplaceholder.typicode.com/albums) and displays them to the user.

* Add an Album:
Users can add new albums by providing a title and related information.
Although this action simulates a POST request to the API, it doesn't modify the server's data. Instead, the new album is stored in the app's state, providing a realistic user experience.

* Update Album Details:
The app allows users to update album details.
This feature simulates a PUT request to the API, updating the album's information in the app's state.

* Delete an Album:
Users can delete albums, which emulates a DELETE request to the API.
The deleted album is removed from the app's state, giving the appearance of successful deletion.


