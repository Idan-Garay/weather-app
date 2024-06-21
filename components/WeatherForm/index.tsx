'use client'

import { fetchWeather } from '@/actions'
import { Weather } from '@/types/weather'
import { useState } from 'react'

export const WeatherForm = () => {
  const [city, setCity] = useState('New York City')
  const [weather, setWeather] = useState<Weather>()
  console.log(weather)
  return (
    <form className="">
      <input
        type="text"
        placeholder="City"
        className="text-black"
        defaultValue={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="button"
        onClick={async () => {
          console.log('weather start')
          const weather = await fetchWeather(city)
          setWeather(weather)
          console.log('weather end')
        }}
        className="text-white"
      >
        Get the weather
      </button>
    </form>
  )
}
