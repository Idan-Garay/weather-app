'use client'

import { fetchWeather } from '@/actions'
import { Weather } from '@/types/weather'
import { FormEvent, useState } from 'react'
import * as z from 'zod'
import { Input } from '../InputText'

export const WeatherFormSchema = z.object({
  city: z.string().min(1),
})

export const WeatherForm = () => {
  const [city, setCity] = useState('New York City')
  const [weather, setWeather] = useState<Weather>()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formState = WeatherFormSchema.safeParse({ city })
    if (formState.success) {
      const weather = await fetchWeather(city)
      setWeather(weather)
    } else {
      alert('City input has at least 1 character')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="city"
        placeholder="City"
        onChange={setCity}
        value={city}
      />
      <button type="submit" className="text-white">
        Get the weather
      </button>
    </form>
  )
}
