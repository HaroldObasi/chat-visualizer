import "@/styles/globals.css";
import { AppProvider } from "../contexts/AppContext";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Analytics />
    </AppProvider>
  );
}
