import { useEffect, useState } from 'react'

export default function Popup() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(t)
  }, [])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="relative z-10 bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold text-slate-900">Limited-time offer</h3>
        <p className="text-slate-600 mt-2">Launch with us and get special pricing for your first site.</p>
        <button onClick={() => setOpen(false)} className="mt-4 px-4 py-2 rounded-md bg-emerald-600 text-white">Close</button>
      </div>
    </div>
  )
}
