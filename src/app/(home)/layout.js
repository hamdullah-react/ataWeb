// src/app/layout.js
import { Inter } from "next/font/google";
import "../../../public/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "@/components/footer/Footer";
import LoadingPage from "@/loading";
import "../../app/globals.css";
import NaveBar from "@/components/naveBar/NaveBar";
import { CategoryProvider } from "@/components/context/CategoryContext";
import Script from "next/script";
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGSS UAE - Quality Security Products, CCTV Cameras, Network Cables, and Advanced Surveillance Solutions",
  description:
    "Discover a diverse range of quality products at MGSS UAE. Our collection spans from camera poles and cables to innovative devices and adapters, ensuring all your business and personal project needs are met. Find superior connectors, CCTV cameras, and advanced surveillance equipment in our inventory. Safeguard your property with state-of-the-art network cables and sophisticated alarm systems. Utilize our effective access control solutions and comprehensive security management tools. Embrace cutting-edge security innovations and stay ahead with the latest advancements.. Rely on our dependable products for optimal protection. Start shopping today for top-tier security systems. Count on MGSS for all your security essentials.",
    keywords: "quality products, camera polls, cables, devices, adaptors, connectors, MGSS UAE, business, personal projects, shop, security solutions, CCTV cameras, surveillance equipment, video recording, network cables, home security, commercial security, security installations, alarm systems, access control, security management, security products, security systems, security monitoring, security equipment, security technology, security industry, security services, security innovations, security trends",
  verification: {
    google: "google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.mgssuae.com",
    title: "MGSS UAE - Quality Security Products, CCTV Cameras, Network Cables, and Advanced Surveillance Solutions",
    description:
      "Discover a diverse range of quality products at MGSS UAE. Our collection spans from camera poles and cables to innovative devices and adapters, ensuring all your business and personal project needs are met. Find superior connectors, CCTV cameras, and advanced surveillance equipment in our inventory. Safeguard your property with state-of-the-art network cables and sophisticated alarm systems. Utilize our effective access control solutions and comprehensive security management tools. Embrace cutting-edge security innovations and stay ahead with the latest advancements.. Rely on our dependable products for optimal protection. Start shopping today for top-tier security systems. Count on MGSS for all your security essentials.",
    images: [
      {
        url: "/public/img/banner.png",
        width: 800,
        height: 600,
        alt: "MGSS UAE Logo",
      },
    ],
 
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.mgssuae.com",
    title: "MGSS UAE - Quality Security Products, CCTV Cameras, Network Cables, and Advanced Surveillance Solutions",
    description:
      "Discover a diverse range of quality products at MGSS UAE. Our collection spans from camera poles and cables to innovative devices and adapters, ensuring all your business and personal project needs are met. Find superior connectors, CCTV cameras, and advanced surveillance equipment in our inventory. Safeguard your property with state-of-the-art network cables and sophisticated alarm systems. Utilize our effective access control solutions and comprehensive security management tools. Embrace cutting-edge security innovations and stay ahead with the latest advancements.. Rely on our dependable products for optimal protection. Start shopping today for top-tier security systems. Count on MGSS for all your security essentials.",
    image: "https://www.mgssuae.com/logo.png",
  },
  additionalMetaTags: [
    {
      name: "application-name",
      content: "MGSS UAE",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  robots: "index, follow",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MGSS UAE",
    url: "https://www.mgssuae.com",
    logo: "favicon.ico",
    sameAs: [
      "https://www.facebook.com/yourprofile",
      "https://www.instagram.com/yourprofile",
      "https://www.linkedin.com/yourprofile",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingPage />
          <CategoryProvider>
            <NaveBar />
            {children}
          </CategoryProvider>
      
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
