import { WeatherData } from './weatherData';

export interface Cidade {
  temperature: string
  wind: string
  description: string
  forecast: WeatherData[]
}
