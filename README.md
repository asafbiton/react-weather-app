## About

This weather app is written using React and React-Redux.
Data is pulled from OpenWeatherMap (for current weather) and Google Maps (for cities auto-completion).
[Demo](https://weather-app-demo.asafbiton.com)

## Requirements

1. Register and retrieve your [OpenWeatherMap API](https://openweathermap.org/api) key.
2. Register and retrieve your [Google Maps API](https://developers.google.com/maps/documentation/) Key.

## Usage

Follow the next steps in order to use this project:<br>

1. Clone the project into a local folder.
2. Move into the project's directory, and install dependencies:

```bash
cd react-weather-app
npm install
```

3. Create a `.env` file and enter the following keys:

```
REACT_APP_GOOGLE_GEOCODE_API=<YOUR GOOGLE API KEY>
REACT_APP_OWM_API_KEY=<YOUR OWM API KEY>
```

4. `npm run`

Happy tinkering :)
