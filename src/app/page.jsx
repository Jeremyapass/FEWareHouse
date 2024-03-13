import Navigasi from "../component/(PRINTILAN)/navigasi/page";
import Hero from "../component/hero/page";
import RootLayout from "./layout";

export default function Home() {
  return (
    <div>
      <Navigasi />
      <Hero />
    </div>
  );
}

/* tetap bisa masuk kode nya tanpa dipasangin <RootLayOut> karena dia berapa di folder app. Yang di mana otomatis /
dan penamaan tampilan yang diambil adalah page.jsx

Misal : 
/app
-pages.jsx
-page.jsx

maka yang diambil adalah yang page.jsx
nama file apapun selain page, maka tidak akan diambil menjadi tampilan nextjs
*/