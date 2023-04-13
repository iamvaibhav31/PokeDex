import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const nunito = Nunito({ subsets: ["latin"] });

export { poppins, nunito };
