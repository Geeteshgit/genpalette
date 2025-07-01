import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import { ReduxProvider } from "./provider";
import { Toaster } from "react-hot-toast";
import { Almarai, Anton, Klee_One, Roboto } from "next/font/google";

const almarai = Almarai({
  subsets: ['latin'], 
  variable: '--font-almarai',
  weight: ['300', '400', '700', '800'],
  display: 'swap',
});

const klee = Klee_One({
  subsets: ['latin'], 
  variable: '--font-klee',
  weight: ['400', '600'],
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'], 
  variable: '--font-anton',
  weight: ['400'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'], 
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "GenPalette - Your AI color palette generator!",
  description:
    "Generate beautiful, accessible, and developer-friendly color palettes instantly with GenPalette. Get harmonious themes with contrast-optimized colors for UI design, branding, and web development.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${almarai.variable} ${klee.variable} ${anton.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col font-almarai bg-[#FAFAFA]">
        <Toaster position="bottom-center" reverseOrder={false} />
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
