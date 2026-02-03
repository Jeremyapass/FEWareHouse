import HomeClient from "./home-client";

export const dynamic = "force-dynamic";

export default function Home() {
  return <HomeClient />;
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
