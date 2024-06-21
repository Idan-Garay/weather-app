'use client'

import { fetchWeather } from '@/actions'
import { Weather } from '@/types/weather'
import { FormEvent, useState } from 'react'
import * as z from 'zod'
import { Input } from '../InputText'
import Image from 'next/image'

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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    >
      <Input
        type="text"
        name="city"
        placeholder="City"
        className="text-white bg-transparent border-transparent border-b-white border rounded-none outline-none  text-3xl text-center"
        onChange={setCity}
        value={city}
      />
      <button type="submit" className="group">
        <Image
          src="/img/partly-cloudy.png"
          alt="partly cloudy"
          height={64}
          width={64}
          className=" group-hover:-translate-y-1 transition duration-300"
        />
      </button>
    </form>
  )
}
