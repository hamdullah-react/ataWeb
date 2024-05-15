import { Inter } from "next/font/google";
import "../../../public/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "@/components/footer/Footer";
import LoadingPage from "@/loading";
import "../../app/globals.css";

import NaveBar from "@/components/naveBar/NaveBar";
import { CategoryProvider } from "@/components/context/CategoryContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGSS - Quality Products for Every Need",
  description:
    "Discover a diverse selection of high-quality products at MGSS. From camera polls to cables, devices, adaptors, and connectors, find everything you need for your business or personal projects. Shop now!",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
      
          <LoadingPage />

          <CategoryProvider>
            <NaveBar />
          </CategoryProvider>

          {children}
          <Footer />
       

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JRQ1NJLJRK"
          strategy="beforeInteractive"
        />

        <Script id="gtag-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRQ1NJLJRK');
          `}
        </Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
