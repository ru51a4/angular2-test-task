// tslint:disable-next-line:class-name
export interface currentWeatherInterface {
  coord: {
    lon: number;
    lat: number;
  };
  weather: weatherInterface[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface weatherInterface {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface listWeatherInterface {
  cod: string;
  message: string;
  cnt: number;
  list: Array<listWeatherOneElementInterface>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    },
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface listWeatherOneElementInterface {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: weatherInterface[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}
