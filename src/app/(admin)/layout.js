import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideBAr from "@/dashboardComponents/SideBAr";
import { DashBoardContext } from "@/dashboardComponents/dashboardContext/DashBoardContext";
import { ToastContainer, toast } from "react-toastify";
import Script from "next/script";
import 'react-loading-skeleton/dist/skeleton.css'
import AuthWrapper from "@/dashboardComponents/AuthWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGSS - Quality Products for Every Need",
};

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <AuthWrapper>
        <DashBoardContext>
          <SideBAr />
          {children}
        </DashBoardContext>
          </AuthWrapper> 
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
      </html>
    </>
  );
}
