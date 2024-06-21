'use client'

import { fetchWeather } from '@/actions'
import { useState } from 'react'

export const WeatherForm = () => {
  const [city, setCity] = useState('New York City')

  return (
    <form action="" className="">
      <input
        type="text"
        placeholder="City"
        className="text-black"
        defaultValue={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={async () => {
          fetchWeather(city)
        }}
        className="text-white"
      >
        Get the weather
      </button>
    </form>
  )
}
