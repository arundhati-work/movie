# Movie.com

The design files for this app can be found [here](https://www.figma.com/file/l9rBOFus45fGp9ROukm9CA/movie.com?type=design&node-id=0%3A1&mode=design&t=NEMhoZo5HCYg79BE-1).

## Introduction

Welcome to Movie.com - a platform for people to discover and book tickets for a wide range of movies. The primary goal of this project is to provide a user-friendly interface for displaying information about various movies including the title, rating, genre, poster, and summary as well as provide means to book tickets for the movie of choice. This application is built using HTML, CSS, JavaScript, React, and Redux, along with libraries such as react-router-dom, redux toolkit and axios.

## Features

### 1. Movie Gallery

* The gallery showcases a list of movies, each of which includes the movie poster, title, rating and genre.
* On click, each item, takes the user to the Movie Description page.

### 2. Movie Description Page

* The Description page contains the movie poster, title, genre, rating, a short summary of the movie as well as the day and time for the show.
* It contains a 'Book Ticket' button that takes the user to a form to enter more information.

### 3. User Details Form

* Within the form, the name of the movie is pre-populated.
* The form asks for details like the number of tickets followed by the choice of seat(s) between Classic, Executive and Premium.
* Based on the entered info, the total amount to be paid is displayed on the screen.
* The 'Continue to Payment' button takes the user to the Booking Confirmed Page.

### 4. Booking Confirmed Page
* This page shows details like the movie poster, title, day, date and time for the show.
* The page also displays the number of tickets booked, the auditorium for the movie and the seats reserved for the user.
* The total amount paid by the user is displayed at the end.

## Advanced Features

* Utilizes the Redux toolkit for effective state management.
* Ensures proper data fetching and display through React axios library.
* Responsive-design.

## Instructions to run the Application

_**TBD**_
