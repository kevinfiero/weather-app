# Weather App ☀️🌕❄️💧🌫️☁️

## Purpose
This app was created to explore and practice improving the user experience of my applications. Primarily, this included using Material UI for the various components that are displayed on the screen.

## Key Features
* This application is a JavaScript React application that relies on hooks to store state within containers. Components are used to display this state on the page. React Router was used to navigate between pages.
* Material UI was used for components such as the search bar, toggle, information cards, and grids. This library allows developers to use pre-canned UI elements and customize them using their API. Instead of using a style sheet (.CSS file), Material UI uses JavaScript to pass props into components.
* Animations were used in conjunction with the Material UI library to give an appearance of information cards fading in and out when being added and deleted. Additionally, cards on the Home page will grow and shrink if hovered over for additional user interaction.
* The OpenWeatherMap API was used to pull in weather data to display on the information cards. There is one API call for current weather and another for details every three hours. This data was munged to be used effectively in this application. For example, logic was used so that the time display on the hourly cards is in the local time zone.
* Custom error handling was implemented to prevent the application from exhibiting unexpected behavior when the user types in a desired zip code. Here are the various edge cases:
  * The _Add_ button will remain disabled unless the following conditions occur:
    * Five numeric characters are typed into the box.
    * The typed zip code is not already displayed on the page.
  * If the user tries to type a zip code that is already displayed on the screen then an error message will state "This zip code is already displayed". The _Add_ button will remain disabled so that the user can not submit.
  * If the user tries to type non-numeric characters then the error message "Please only use numbers" will display. The _Add_ button will remain disabled so that the user can not submit.
  * If the user submits a zip code that does not exist in the API (example: 10000) then an error will state "Not a valid zip code". This is validated _after_ the API is called when null is returned.
* Users can choose between metric and imperial units. By using the toggle, the temperature and wind speed units will change depending on the user's preference.
* Local Storage is utilized to keep an array of zip codes that the user has selected. Additionally, their preference for metric or imperial units is stored as well which persists across the home or detail page. This allows the user to refresh or navigate away from the page and still keep their desired zip codes available when they return to the page.
* Tests were created using the React Testing Library to ensure basic functionality is working correctly. This included:
  * Add new city using a zip code
  * Switch from imperial to metric units
  * Remove city by clicking delete button
  * Ensure information on hourly weather page is displayed from API
  * Ensure correct number of hourly weather cards render
* The page is mobile compatible for an iPhone X.
* Contact information is displayed in the top right of the home page to view the developer's GitHub, LinkedIn, and Resume.
