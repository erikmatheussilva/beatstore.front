import axios from 'axios';
import { Cidade } from '../models/cidade';
import { WeatherData } from '../models/weatherData';

const proxyUrl = 'http://localhost:4000/weather'; // Nova URL do proxy

class Weather {
  async getWeather(city: string): Promise<Cidade> {
    return axios.get<Cidade>(proxyUrl, { params: { cidade: city } })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        const forecastInfo: WeatherData[] = [
          {
            day: null as any,
            temperature: null as any,
            wind: null as any,
          },
        ];
        const infoError: Cidade = {
          temperature: null as any,
          wind: null as any,
          description: null as any,
          forecast: forecastInfo,
        };

        return infoError;
      });
  }
}

export const weather = new Weather();
