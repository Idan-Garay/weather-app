'use server'

import { Weather } from './types/weather'

export const fetchWeather = async (city = 'New York City') => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=246e9e4aa5bd8ca3506e9af768b84812&units=imperial`,
      { cache: 'no-store' }
    )

    const data = (await res.json()) as Weather
    return data
  } catch (e) {
    return undefined
  }
}
