import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Provider from "@/provider/Provider";
import { poppins } from "@/fonts";
import ToastMessage from "@/lib/Toastify/ToastMessages";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <ToastMessage />
    </div>
  );
}
