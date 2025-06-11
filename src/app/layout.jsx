import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import { ReduxProvider } from "./provider";

export const metadata = {
  title: "GenPalette - Your AI color palette generator!",
  description:
    "Generate beautiful, accessible, and developer-friendly color palettes instantly with GenPalette. Get harmonious themes with contrast-optimized colors for UI design, branding, and web development.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-almarai bg-[#FAFAFA]">
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
