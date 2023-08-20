import '@/styles/globals.css'
import { AppProvider } from "@/contexts/AppContext";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Analytics />
    </AppProvider>
  );
}
