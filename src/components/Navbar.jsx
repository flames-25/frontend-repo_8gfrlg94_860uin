import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navLink = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-emerald-500" />
          <span className="font-semibold tracking-tight">A Plus Charge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/about" className={navLink}>About</NavLink>
          <NavLink to="/roi" className={navLink}>ROI Calculator</NavLink>
          <NavLink to="/contact" className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700">Contact</NavLink>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLink}>Home</NavLink>
            <div />
            <NavLink onClick={() => setOpen(false)} to="/about" className={navLink}>About</NavLink>
            <div />
            <NavLink onClick={() => setOpen(false)} to="/roi" className={navLink}>ROI Calculator</NavLink>
            <div />
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLink}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
