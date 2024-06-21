import { WeatherForm } from '@/components/WeatherForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-image-background">
      <WeatherForm />
    </main>
  )
}
