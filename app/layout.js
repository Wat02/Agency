import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--Open",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--poppins",
});

export const metadata = {
  title: "Online Marketing- Made with love",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${open_Sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
