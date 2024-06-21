import { fetchWeather } from '@/actions'
import { WeatherForm } from '@/components/WeatherForm'

export default async function Home() {
  const weather = await fetchWeather('New York City')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="bg-image-background blur-sm absolute z-0 inset-0"></div>
      <div className="z-10">
        <WeatherForm defaultWeather={weather} />
      </div>
    </main>
  )
}
