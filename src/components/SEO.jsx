import { Helmet } from 'react-helmet-async'

export default function SEO({ title = 'A Plus Charge | EV Charging Northeast India', description = 'Fast, reliable EV charging network across Northeast India. Public and captive charging for fleets, real estate, and destinations.', canonical, keywords = 'EV charging, Northeast India, charge point operator, fast charger, NE India EV', geoRegion = 'IN-AS', geoPlacename = 'Guwahati', geoPosition = '26.1445;91.7362' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#059669" />
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={geoPosition} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="A Plus Charge" />
      {import.meta.env.VITE_GA_ID && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`}></script>
      )}
      {import.meta.env.VITE_GA_ID && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${import.meta.env.VITE_GA_ID}');
          `}
        </script>
      )}
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
      )}
    </Helmet>
  )
}
