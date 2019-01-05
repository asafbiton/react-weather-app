export interface Main {
  humidity?: number;
  pressure?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;
}

export interface Weather {
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}

export interface ForecastState {
  location: string;
  weatherData: {
    main: Main;
    weather: Weather[];
  };
  dataReceived: boolean;
  hasError: boolean;
}
