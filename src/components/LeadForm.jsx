import { useState } from 'react'

const backend = (import.meta.env.VITE_BACKEND_URL && import.meta.env.VITE_BACKEND_URL.trim() !== '')
  ? import.meta.env.VITE_BACKEND_URL
  : (typeof window !== 'undefined' ? window.location.origin.replace('3000','8000') : '')

export default function LeadForm({ mode }){
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', message: '', city: '', state: ''
  })

  const [roi, setRoi] = useState({
    daily_sessions: 20,
    avg_kwh_per_session: 15,
    tariff_per_kwh: 18,
    cost_per_kwh: 8,
    station_cost: 1000000,
    opex_per_month: 25000,
  })

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function submitLead(e){
    e.preventDefault(); setLoading(true); setResult(null)
    try{
      const res = await fetch(`${backend}/api/leads`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...form, source: 'website' }) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Failed')
      setResult({ type:'success', message:'Thanks! We will reach you shortly.' })
      setForm({ name:'', email:'', phone:'', company:'', message:'', city:'', state:'' })
    }catch(err){ setResult({ type:'error', message: err.message }) }
    finally{ setLoading(false) }
  }

  async function calcRoi(e){
    e.preventDefault(); setLoading(true); setResult(null)
    try{
      const res = await fetch(`${backend}/api/roi`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(roi) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Failed')
      setResult({ type:'roi', data })
    }catch(err){ setResult({ type:'error', message: err.message }) }
    finally{ setLoading(false) }
  }

  return (
    <div className="mt-6 grid md:grid-cols-2 gap-8">
      <form onSubmit={mode==='roi'?calcRoi:submitLead} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        {mode==='roi' ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['daily_sessions','Daily sessions'],
                ['avg_kwh_per_session','kWh per session'],
                ['tariff_per_kwh','Tariff per kWh (₹)'],
                ['cost_per_kwh','Cost per kWh (₹)'],
                ['station_cost','Station cost (₹)'],
                ['opex_per_month','Monthly OPEX (₹)'],
              ].map(([k,l]) => (
                <label key={k} className="text-sm">
                  <span className="text-slate-600">{l}</span>
                  <input type="number" step="any" value={roi[k]} onChange={e=>setRoi({...roi,[k]: Number(e.target.value)})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                </label>
              ))}
            </div>
            <button disabled={loading} className="mt-4 px-4 py-2 rounded-md bg-emerald-600 text-white">{loading?'Calculating...':'Calculate'}</button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['name','Name','text'],['email','Email','email'],['phone','Phone','tel'],['company','Company','text'],['city','City','text'],['state','State','text']
              ].map(([k,l,t]) => (
                <label key={k} className="text-sm">
                  <span className="text-slate-600">{l}</span>
                  <input name={k} type={t} value={form[k]} onChange={onChange} required={k==='name'||k==='email'} className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                </label>
              ))}
            </div>
            <label className="block text-sm mt-4">
              <span className="text-slate-600">Message</span>
              <textarea name="message" value={form.message} onChange={onChange} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </label>
            <button disabled={loading} className="mt-4 px-4 py-2 rounded-md bg-emerald-600 text-white">{loading?'Submitting...':'Submit'}</button>
          </>
        )}
      </form>
      <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Why A Plus Charge?</h3>
        <ul className="mt-3 space-y-2 text-slate-600 text-sm list-disc pl-5">
          <li>High uptime with proactive maintenance</li>
          <li>Smart software and easy-pay integrations</li>
          <li>Flexible business models for partners</li>
        </ul>
        {result?.type==='roi' && (
          <div className="mt-4 p-4 rounded-lg bg-emerald-50 text-emerald-900">
            <p><strong>Monthly Revenue:</strong> ₹{result.data.monthly_revenue}</p>
            <p><strong>Monthly Cost:</strong> ₹{result.data.monthly_cost}</p>
            <p><strong>Monthly Profit:</strong> ₹{result.data.monthly_profit}</p>
            <p><strong>Payback Period:</strong> {result.data.payback_months ? `${result.data.payback_months} months` : 'Not profitable with current inputs'}</p>
          </div>
        )}
        {result && result.type!== 'roi' && (
          <div className={`mt-4 p-3 rounded ${result.type==='success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`}>{result.message}</div>
        )}
      </div>
    </div>
  )
}
