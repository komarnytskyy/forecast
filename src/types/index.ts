export type optionType = {
  country: string;
  lat: number;
  local_names: {};
  lon: number;
  name: string;
  state: string;
};

export type forecastType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;

  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
};
