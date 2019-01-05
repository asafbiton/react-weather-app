import axios from "axios";

const OWM_API_KEY = process.env.REACT_APP_OWM_API_KEY;
const OWM_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${OWM_API_KEY}`;

const GOOGLE_GEOCODE_API = process.env.REACT_APP_GOOGLE_GEOCODE_API;
const GOOGLE_GEOCODE_API_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_GEOCODE_API}`;

/**
 * A class that handles all API calls to get current weather data
 * @class DarkSkyAPIWrapper
 */
export default class WeatherAPIWrapper {
  /**
   * Get latitude and longitude for location using Google Geocoding API
   * @param {string} location - A string representing a location (e.g "London, UK")
   */
  geocodeLocation = async (location: string) => {
    let lat, lng;
    const response = await axios.get(
      GOOGLE_GEOCODE_API_BASE_URL + `&address=${location}`
    );
    ({ lat, lng } = response.data.results[0].geometry.location);
    return { lat, lng };
  };

  /**
   * Get weather data for country using Open Weather App API
   * @param {string} location - A string representing a location (e.g "London, UK")
   */
  getForecast = async (location: string) => {
    let lat, lng;

    const geocodeResponse = await this.geocodeLocation(location);
    ({ lat, lng } = geocodeResponse);

    return await axios.get(
      OWM_BASE_URL + `&lat=${lat}&lon=${lng}&units=metric`
    );
  };
}
