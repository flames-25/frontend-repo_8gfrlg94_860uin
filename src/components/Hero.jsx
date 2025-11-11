import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-auto"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 shadow-sm text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 mb-4">Northeast India's EV CPO</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Fast, reliable EV charging across Northeast India
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                A Plus Charge is building a clean, connected charging network to power the next generation of mobility. Speed, uptime, and great service come standard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#lead" className="px-5 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700">Get Started</a>
                <a href="#roi" className="px-5 py-3 rounded-md bg-white text-emerald-700 font-medium ring-1 ring-emerald-200 hover:ring-emerald-300">Calculate ROI</a>
              </div>
            </motion.div>
            <div className="h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
