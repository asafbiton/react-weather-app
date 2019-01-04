import axios, { AxiosPromise, AxiosResponse } from "axios";

const DARKSKY_SECRET_KEY = "6ff700c554180865d51e3b435b9a150a";
const DARKSKY_BASE_URL = `https://api.darksky.net/forecast/${DARKSKY_SECRET_KEY}`;

const GOOGLE_GEOCODE_API_KEY = "AIzaSyCpcb0e6bgdZeOdaLKRp5MlD5KrGf14KnE";
const GOOGLE_GEOCODE_API_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_GEOCODE_API_KEY}`;

/**
 * A class that handles all API calls to get current weather data
 * @class DarkSkyAPIWrapper
 */
export default class DarkSkyAPIWrapper {
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

  getForecast = async (location: string) => {
    let lat, lng;

    ({ lat, lng } = await this.geocodeLocation(location));

    const response = await axios.get(DARKSKY_BASE_URL + `/${lat},${lng}`);
    console.log(response);
  };
}
