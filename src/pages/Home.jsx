import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Popup from '../components/Popup'
import WhatsAppWidget from '../components/WhatsAppWidget'
import Chatbot from '../components/chat/Chatbot'
import LeadForm from '../components/LeadForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {[{t:'Speed',d:'High-power chargers with excellent uptime.'},{t:'Coverage',d:'Expanding across Northeast India.'},{t:'Support',d:'24/7 assistance and proactive monitoring.'}].map((f,i)=> (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{f.t}</h3>
                <p className="mt-2 text-slate-600">{f.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="roi" className="py-16 bg-emerald-50/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-slate-900">EV Charger ROI Calculator</h2>
            <p className="text-slate-600 mt-2">Estimate monthly revenue and payback time.</p>
            <LeadForm mode="roi" />
          </div>
        </section>
        <section id="lead" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-slate-900">Talk to our team</h2>
            <p className="text-slate-600 mt-2">Share your requirement and we’ll reach out.</p>
            <LeadForm />
          </div>
        </section>
      </main>
      <Popup />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  )
}
