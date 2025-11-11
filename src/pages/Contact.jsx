import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import LeadForm from '../components/LeadForm'

export default function Contact(){
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Contact | A Plus Charge" description="Contact A Plus Charge for EV charging solutions, partnerships, or support" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">Contact us</h1>
          <p className="mt-2 text-slate-600">We’ll get back within 24 hours.</p>
          <LeadForm />
        </div>
      </main>
    </div>
  )
}
