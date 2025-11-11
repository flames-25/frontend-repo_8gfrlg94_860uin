import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <SEO title="About | A Plus Charge" description="About A Plus Charge - EV charge point operator in Northeast India" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">About A Plus Charge</h1>
          <p className="mt-4 text-slate-700">We are a growing EV charge point operator expanding across Northeast India with a focus on speed, reliability and service excellence.</p>
        </div>
      </main>
    </div>
  )
}
