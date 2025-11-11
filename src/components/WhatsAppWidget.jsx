export default function WhatsAppWidget(){
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '918888888888'
  const msg = encodeURIComponent('Hi A Plus Charge, I would like to know more about your EV charging solutions.')
  return (
    <a href={`https://wa.me/${phone}?text=${msg}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-3 shadow-lg">
      WhatsApp
    </a>
  )
}
