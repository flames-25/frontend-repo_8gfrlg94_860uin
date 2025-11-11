import { useEffect } from 'react'

export default function Chatbot(){
  // Placeholder for live chat provider (e.g., Tawk.to or Crisp). Uses env for ID.
  useEffect(() => {
    const provider = import.meta.env.VITE_CHAT_PROVIDER || 'tawk'
    if (provider === 'tawk' && import.meta.env.VITE_TAWK_PROPERTY_ID) {
      const s1 = document.createElement('script')
      s1.async = true
      s1.src = `https://embed.tawk.to/${import.meta.env.VITE_TAWK_PROPERTY_ID}`
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      document.body.appendChild(s1)
      return () => { document.body.removeChild(s1) }
    }
    if (provider === 'crisp' && import.meta.env.VITE_CRISP_WEBSITE_ID) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = import.meta.env.VITE_CRISP_WEBSITE_ID;
      const s = document.createElement('script');
      s.src = 'https://client.crisp.chat/l.js'; s.async = 1;
      document.body.appendChild(s);
      return () => { document.body.removeChild(s) }
    }
  }, [])
  return null
}
