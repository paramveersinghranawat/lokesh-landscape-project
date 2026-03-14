import "./globals.css";
import Navbar from "../components/common-compo/Navbar"
import Footer from "../components/common-compo/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
