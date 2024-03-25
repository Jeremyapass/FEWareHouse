import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WareHouse",
  description: "Best Storage In the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={` ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

//Ini adalah gabungan dari semua page nya
/* Jadi jika diletak jika navbar diletakkan di sini, maka semua page yang ada di nextjs akan ada navbarnya.

  Misal :
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>   
          <Navigasi/> <========== Jika ini diletak
          {children}
        </Providers>
      </body>
    </html>
  );
}

*/
