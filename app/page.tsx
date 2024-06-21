import { WeatherForm } from '@/components/WeatherForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="bg-image-background blur-sm absolute z-0 inset-0"></div>
      <div className="z-10">
        <WeatherForm />
      </div>
    </main>
  )
}
